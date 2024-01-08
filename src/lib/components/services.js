export const services = [
  {
    name: "lobid",
    category: "metadata",
    logoPath: "logos/lobid.png",
    quote: "Von der Durchsuchbarkeit, Verfügbarkeit und Nachnutzbarkeit hat kein GND-Service im	bibliothekarischen Alltag jenes Standing, welches lobid geniesst.",
    quoteAuthor: "Mfchris84, Wikipedia",
    description: `lobid umfasst drei Dienste, die Zugriff auf zentrale bibliothekarische Datensets bieten. Die Gemeinsame Normdatei (lobid-gnd), die NRW-Verbunddaten (lobid-resources) und die	Organisationsdaten aus dem Sigelverzeichnis sowie der Deutschen Bibliotheksstatistik (DBS) (lobid-organisations). Sie werden als leicht nutzbare, strukturierte Daten über offene	Webschnittstellen angeboten. Insbesondere für die GND-Normdaten ermöglicht die Bereitstellung einer Reconciliation-Schnittstelle auch den Datenabgleich in Datenanwendungen wie OpenRefine oder Cocoda.
`,
    links: [
      "#lobid.praxisbeispiele",
      "https://lobid.org",
      "https://blog.lobid.org",
      "",
      "https://metadaten.community/c/software-und-tools/lobid/10",
    ],
    exampleButtons: [
      { id: "lobid-gnd", text: "lobid-gnd" },
      { id: "lobid-resources", text: "lobid-resources" },
      { id: "lobid-organisations", text: "lobid-organisations" }
    ],
    exampleBoxes: [
      {
        title: "Auffindbarkeit in Recherchediensten verbessern mit der GND",
        ids: ["lobid-gnd"],
        examples: [
          { text: "Erweiterte GND-Informationen im OPAC der UB Paderborn", href: "https://blogs.uni-paderborn.de/ub-katalog/2023/06/20/gnd-daten-im-katalog/" },
          { text: "Hamburg-Bibliographie: Datenanreicherung mit Hilfe von lobid", href: "https://blog.sub.uni-hamburg.de/?p=35640" },
          { text: "Infoboxes für GND-Entitäten beim Fachinformationsdienst für Darstellende Kunst", href: "https://www.performing-arts.eu/agent/gnd_119328674?" },

        ]
      },
      {
        title: "Die GND in OpenRefine nutzen",
        ids: ["lobid-gnd"],
        examples: [
          { text: "Reconciling mit OpenRefine und der GND", href: "https://fdmlab.landesarchiv-bw.de/workshop/openrefine-einsteiger/06-reconciling-mit-gnd/" },
          { text: "Verknüpfungen zwischen Korpora erstellen durch GND-Verschlagwortung", href: "https://www.fachportal-paedagogik.de/graph/index.html" },
          { text: "Named-entity Recognition und Gemeinsame Normdatei zur Verbesserung der Erschließung", href: "https://fdmlab.landesarchiv-bw.de/post/2023-02-ner-und-gnd-zur-verbesserung-der-erschliessung/" },
          { text: "Datenabgleich mit Geburtsdaten, Todesdaten, Beruf oder Anstellung (eng)", href: "https://blog.lobid.org/2019/09/30/openrefine-examples.html" },
          { text: "Experimente mit Visualisierungen für Sachbegriffe in der GND", href: "https://fdmlab.landesarchiv-bw.de/post/2022-05-experiment-mit-gnd-visualisierungen/" },
          { text: "Erweiterter GND Abgleich mit lobid", href: "https://fdmlab.landesarchiv-bw.de/workshop/openrefine-fortgeschrittene/15-erweiterter-gnd-abgleich-mit-lobid/" },
          { text: "Extraktion und Abgleich von Prokuratoren mit OpenRefine", href: "https://fdmlab.landesarchiv-bw.de/post/2021-09-erfahrungsbericht-extraktion-und-abgleich-von-prokuratoren-mit-openrefine/" },
          { text: "Findbuchdaten mit OpenRefine wiederverwenden", href: "https://fdmlab.landesarchiv-bw.de/post/2021-08-findbuch-daten-mit-openrefine-wiederverwenden/" },
          { text: "Findbuch Index mit OpenRefine aufbereiten", href: "https://fdmlab.landesarchiv-bw.de/post/2021-07-findbuch-index-mit-openrefine-aufbereiten/" },
          { text: "Abgleich 'unsauberer' Ortsnamen mit der GND in OpenRefine (Videotutorial)", href: "https://www.youtube.com/watch?v=tCdluPq5GkA" },
          { text: "Weitere Datenservices zur Nutzung in OpenRefine", href: "https://reconciliation-api.github.io/testbench/#/" },
          { text: "lobid-gnd – Eine Schnittstelle zur Gemeinsamen Normdatei für Mensch und Maschine", href: "https://journals.ub.uni-heidelberg.de/index.php/ip/article/view/52673/51904" },
          { text: "Ein Protokoll für den Datenabgleich im Web am Beispiel von OpenRefine und der Gemeinsamen Normdatei (GND)", href: "https://www.degruyter.com/document/doi/10.1515/9783110691597-013/html" }
        ]
      },
      {
        title: "Einfache und komplexe Abfrage der GND",
        ids: ["lobid-gnd"],
        examples: [
          { text: "- [Suche und Navigation", href: "https://blog.lobid.org/2018/07/04/lobid-gnd-suche.html" },
          { text: "Komplexe Suchabfragen", href: "https://blog.lobid.org/2018/07/06/lobid-gnd-queries.html" }
        ]
      },
      {
        title: "lobid-gnd per Web API abfragen",
        ids: ["lobid-gnd"],
        examples: [
          { text: "Lookup für GND-Entitäten in DSpace auf Basis von lobid", href: "https://www.slideshare.net/pascalbecker/integration-der-gemeinsamen-normdatei-in-dspace-auf-basis-von-lobid" },
          { text: "Katalogisieren mit Alma-Plugin", href: "https://developers.exlibrisgroup.com/appcenter/alma-refine/" },
          { text: "Katalogisieren mit Firefox-Add-On", href: "https://addons.mozilla.org/de/firefox/addon/tu-lama/" },
          { text: "GND-Autoren- und Schlagwortplugins für OJS und OMP zur Nachnutzung von OA-Publikationen im Verbundkatalog der WLB Stuttgart", href: "https://www.o-bib.de/bib/article/view/5863" },
          { text: "Kulturgüter digitalisieren mit Kitodo", href: "https://www.kitodo.org/" },
          { text: "Digitale Editionen erstellen mit dem TEI Publisher", href: "https://teipublisher.com/exist/apps/tei-publisher/documentation?action=search&root=3.42.10&view=div&odd=docbook.odd" },
          { text: "Normdaten mappen mit Cocoda", href: "https://av.tib.eu/media/36465" }
        ]
      },
      {
        title: "In Webanwendungen gezielt Literatur aus dem hbz-Verbundkatalog anzeigen",
        ids: ["lobid-resources"],
        examples: [
          { text: "Titelsuche in einzelnen e-Book-Paketen", href: "https://blog.lobid.org/2020/04/15/ebook-packages.html" },
          { text: "Anzeige von Titeln von oder über eine Person im Biographischen Portal NRW", href: "https://biographie-nrw.uni-muenster.de" },
          { text: "Nordrhein-Westfälische Bibliographie (NWBib)", href: "https://nwbib.de/" }
        ]
      },
      {
        title: "Teilmengen des hbz-Verbundkatalogs für eigene Recherchedienste nutzen",
        ids: ["lobid-resources"],
        examples: [
          { text: "Indexierung von Daten der eigenen und umliegender Bibliotheken im Katalog Plus der UB Dortmund", href: "https://katalog.ub.tu-dortmund.de/" }
        ]
      },
      {
        title: "Listen von Bibliotheken, Archiven und/oder Museen auf einer Landkarte visualisieren",
        ids: ["lobid-organisations"],
        examples: [
          { title: "Nutzung der Geodaten zur Anzeige der hbz-Verbundbibliothekenkarte auf einer Landkarte", href: "https://www.hbz-nrw.de/produkte/verbunddienstleistungen/verbundbibliotheken" }
        ]
      },
      {
        title: "Matching von Organisationen auf ISILs in OpenRefine",
        ids: ["lobid-organisations"],
        examples: [
          { title: "Matching von Organisationsnamen auf ISILs in OpenRefine", href: "https://github.com/hbz/lobid-organisations/issues/55" }
        ]
      }
    ]
  },
  {
    name: "oersi",
    category: "metadata",
    logoPath: "logos/oersi.png",
    quote: "Die plattformübergreifende Listung unserer Lernressourcen durch OERSI trägt dank erhöhter Auffindbarkeit und Nachnutzung zur Verbesserung der Lehrkräfteaus- und -fortbildung bei.",
    quoteAuthor: "Manuel Oellers, COMEIN",
    description: `OERSI ist ein länderübergreifendes Rechercheportal für offene Bildungsressourcen (Open Educational Resources) im Hochschulbereich, das wir kooperativ mit der Technischen Informationsbibliothek (TIB) entwickeln.

OERSI sammelt die Metadaten von OER-Repositorien ein, wandelt sie nach Linked Open Usable Data um und stellt sie zur freien Nutzung und Recherche zur Verfügung. Umgekehrt kann OERSI in bibliothekarische Recherchedienste zur Erweiterung des Suchangebots integriert werden. 

Wenn auch Sie von mehr Sichtbarkeit für Ihre Bildungsressourcen profitieren oder sich dazu informieren möchten, besuchen Sie gerne das Forum.
`,
    links: [
      "#oersi.praxisbeispiele",
      "https://oersi.org",
      "https://oersi.org/resources/pages/en/blog/",
      "",
      "https://metadaten.community/c/software-und-tools/oersi/11",
    ],
    exampleButtons: [
    ],
    exampleBoxes: [
      {
        title: "Individuelle OER-Rechercheanwendungen auf Basis der OERSI-API",
        ids: ["oersi"],
        examples: [
          { text: "ComeIn: OER-Rechercheportal auf Basis der OERSI-API", href: "https://comein.nrw/portal/ressourcen/" },
        ]
      },
    ]
  },
  {
    name: "gokb",
    category: "metadata",
    logoPath: "logos/gokb.png",
    quote: "Die GOKb ist der zentrale Punkt, um Metadaten von E-Ressourcen mit Identifikatoren (z. B. ZDB-ID, EZB-ID, Titelverlauf) anreichern zu lassen. Daher dient die GOKb als Identitätsvermittler für elektronische Ressourcen über ihren gesamten Lebenszyklus hinweg.",
    quoteAuthor: "Daniel Rupp, hbz",
    description: `Die Global Open Knowledgebase (GOKb) ist eine kooperativ betriebene, offene Datenplattform, in der Metadaten von Paketen elektronischer Ressourcen verwaltet werden, die durch automatische Prozesse normalisiert, validiert und angereichert werden, um sie optimal auf den Austausch mit Drittsystemen über offene Schnittstellen vorzubereiten. Alle GOKB-Daten stehen uneingeschränkt unter der CC0 1.0 Public Domain Dedication zur Verfügung.

Die Metadaten der GOKb umfassen Informationen zu Paketen, Titeln, Verfügbarkeitsdaten, Plattformen und Anbietern von E-Ressourcen. Das Datenmodell hält Änderungen nach und bietet Transparenz hinsichtlich der Datenherkunft und -aktualität.

Nutzende können die Datenqualität der Pakete direkt optimieren, indem sie sich an der Datenerfassung und -pflege beteiligen. Die internationale Community setzt sich aus Bibliotheken, Konsortialstellen und Anbietern zusammen. Die GOKb lebt davon, dass die Nutzenden die Pakete kuratieren, Änderungen bei den Meta- und Titeldaten nachhalten und Datenprobleme beheben, die beim Datenimport durch automatisiert erstellte Prüfanfragen identifiziert und aufbereitet werden.
`,
    links: [
      "",
      "https://gokb.org",
      "",
      "",
      "",
    ],
    exampleButtons: [
    ],
    exampleBoxes: [
    ]
  },
  {
    name: "metafacture",
    category: "tools",
    logoPath: "logos/metafacture.png",
    quote: "Metafacture leistet sehr gute und performante Dienste, vor allem auch bei der Live-Transformation im Rahmen der Ergebnisdarstellung in unserem *Katalog plus*. Zudem lässt es sich auch von Bibliothekar:innen mit wenig Programmierkenntnissen verwenden.",
    quoteAuthor: "Hans-Georg Becker, UB Dortmund",
    description: `Metafacture ist ein auf bibliographische Metadaten spezialisiertes Toolkit für Datenprozesse. Ursprünglich wurde es von der DNB im Rahmen von CultureGraph entwickelt, 2019 hat das hbz die Maintainerschaft übernommen.

metafacture erlaubt das performante Handling von Metadaten auch im großen Stil. Es bietet sich etwa für den automatisierten Bezug und die Aufbereitung von Fremddaten an oder für das Management von Daten während einer Systemmigration. Ziel ist es, der Fachebene ein Tool an die Hand zu geben, Datentransformationen selbstständig umzusetzen und die Bib-IT zu entlasten.

Mit dem eigens entwickelten metafacture-Playground können Datenprozesse im Webbrowser erlernt, konzipiert, getestet und geteilt werden.
`,
    links: [
      "#metafacture.praxisbeispiele",
      "https://metafacture.org",
      "https://blog.metafacture.org",
      "/termine",
      "https://metadaten.community/c/software-und-tools/metafacture/8",
    ],
    exampleButtons: [
      { id: "metafacture", text: "metafacture" },
      { id: "metafacture-playground", text: "metafacture playground" },
    ],
    exampleBoxes: [
      {
        title: "Metafacture Tutorials",
        ids: ["metafacture"],
        examples: [
          { text: "A quick 5 minute introduction to Metafacture", href: "http://metafacture.github.io/metafacture-documentation/MF-in-5-min.html" },
          { text: "Metafacture Tutorial", href: "https://metafacture.github.io/metafacture-tutorial/" },
        ]
      },
      {
        title: "Metafacture als zentrales Werkzeug an der UB Dortmund",
        ids: ["metafacture"],
        examples: [
          { text: "UB Dortmund: Metadatenmanagement ohne Programmierkenntnisse: Ist das möglich?", href: "https://doi.org/10.1515/abitech-2020-2026" },
        ]
      },
    ]
  },
  {
    name: "skohub",
    category: "tools",
    logoPath: "logos/skohub.png",
    quote: "SkoHub bietet eine einfache Möglichkeit, SKOS-Vokabulare aus dem Code-Repositorium in die Web- und LOD-Infrastruktur zu bringen.",
    quoteAuthor: "Andreas Wagner, hbz",
    description: `SkoHub stellt Infrastruktur und Software zum kollaborativen Erstellen und Publizieren von kontrollierten Vokabularen im Web bereit. Vokabulare können gemeinsam auf einer Entwicklungsplattform wie GitHub entwickelt, versioniert, und z.B. mit GitHub Pages auf SkoHub Vocabs veröffentlicht werden. Einmal publizierte Vokabulare können auch in Anwendungen von Drittanbietern — wie OpenRefine oder Cocoda — verwendet werden.

Mit SkoHub publizierte Vokabulare folgen dem W3C-Standard Simple Knowledge Organization System (SKOS). Dies und die webbasierte Veröffentlichung gewährleisten ihre Interoperabilität und somit Nachnutzbarkeit über die lokale Verwendung hinaus. Auch ist ihre Sicht- und Durchsuchbarkeit sichergestellt.
`,
    links: [
      "#skohub.praxisbeispiele",
      "https://skohub.io",
      "https://blog.skohub.io",
      "/termine",
      "https://metadaten.community/c/software-und-tools/skohub/9",
    ],
    exampleButtons: [
    ],
    exampleBoxes: [
      {
        title: "Publikation und Nutzung kontrollierter Vokabulare",
        ids: [],
        examples: [
          { text: "Interdisziplinäre Forschungsfeldklassifikation des Kerndatensatz Forschung", href: "https://w3id.org/kdsf-ffk/" },
          { text: "Hochschulfächersystematik nach Destatis", href: "https://w3id.org/kim/hochschulfaechersystematik/scheme" },
        ]
      },
      {
        title: "Beispielvokabulare",
        ids: [""],
        examples: [
          { text: "How To: skohub-docker-vocabs forken und einrichten", href: "https://www.youtube.com/watch?v=JYVHiCYNl0U" },
          { text: "Building and Deploying a Classification Schema using Open Standards and Technology", href: "https://doi.org/10.21825/dlh.85751" },
        ]
      },
    ]
  },
]
