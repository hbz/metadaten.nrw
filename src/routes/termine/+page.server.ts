import type { PageServerLoad } from './$types';

const domain = "https://metadaten.community"

const community_slugs = [
  "/c/arbeitsgruppen/kim-oer",
  "/c/arbeitsgruppen/kim-curricula",
  "/c/software-und-tools/lobid",
  "/c/software-und-tools/metafacture",
  "/c/software-und-tools/skohub",
  "/c/software-und-tools/oersi"
]

const isPastEvent = (eventStartTime: string) => {
  if (!eventStartTime) return true;
  const startTime = new Date(eventStartTime);
  const currentDate = new Date();
  if (startTime < currentDate) return true
  else return false;
}

export const load: PageServerLoad = async () => {
  const event_topics = await Promise.all(
    community_slugs.map(async (slug) => {
      try {
        const data = await (await fetch(domain + slug + ".json")).json()
        return data.topic_list.topics.filter(t => t?.event_starts_at && t?.closed === false)

      } catch (error) {
        console.log(error)
      }
    })
  )
  const events = await Promise.all(
    event_topics.flat().map(async (et) => {
      try {
        const url = domain + "/t/" + et.slug + "/" + et.id + ".json"
        const data = await fetch(url)
          .then(d => {
            console.log("status code: ", d.status)
            return d.json()
          })
          .catch(error => {
            console.log("error reading url", url, error)
            return {}
          })
        if (!isPastEvent(data.event_starts_at)) {
          return {
            logo: 'https://via.placeholder.com/120x40',
            date: data.event_starts_at,
            address: 'hbz Köln',
            tags: data.tags,
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Das ist ein toller Workshop',
            headline: data.title,
            image: 'https://via.placeholder.com/284x94',
            website: '',
            registrationLink: ''
          }
        }
      } catch (error) {
        console.log("error fetching event topic", et)
        console.log(error)
      }
    })
  )
  return { events: events.filter(Boolean) } // filter out undefined
};
