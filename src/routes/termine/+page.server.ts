import type { PageLoad } from './$types';

const domain = "https://metadaten.community"

const community_slugs = [
  "/c/arbeitsgruppen/kim-oer",
  "/c/arbeitsgruppen/kim-curricula",
  "/c/software-und-tools/lobid",
  "/c/software-und-tools/metafacture",
  "/c/software-und-tools/skohub",
  "/c/software-und-tools/oersi"
]

export const load: PageLoad = async () => {
  const event_topics = await Promise.all(
    community_slugs.map(async (slug) => {
      const data = await (await fetch(domain + slug + ".json")).json()
      return data.topic_list.topics.filter(t => t?.event_starts_at && t?.closed === false)
    })
  )
  const events = await Promise.all(
    event_topics.flat().map(async (et) => {
      const url = domain + "/t/" + et.slug + "/" + et.id + ".json"
      const data = await (await fetch(url)).json()
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
    })
  )
  return { events }
};
