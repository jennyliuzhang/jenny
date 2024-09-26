"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import entryStyles from "../../styles/entry.module.css";
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Page() {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    fetch('/data/journal.json')
      .then((response) => response.json())
      .then((data) => {
        const foundEntry = data.find(item => item.writingSlug === "arriving-in-doha");
        setEntry(foundEntry);
      })
      .catch((error) => console.error('Error fetching journal entry:', error));
  }, []);

  // If entry is not found or still loading
  if (!entry) return <div>Loading...</div>;

  return (
    <main className={entryStyles.entryStyles}>
      
      <Breadcrumbs>
        <Link href="/journal">Jenny’s Journal</Link>
        <span>{entry.writingName}</span>
      </Breadcrumbs>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/arriving-in-doha.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        The view from the family flat in Doha, Qatar.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>I just moved to Qatar for a few months. I wrapped up my grant duration at CEEALAR in the UK. I finished a bunch of research-related writing recently, and pushed updates to Plot Twisters’ website, <a href="https://www.plottwisters.org/" target="_blank">www.plottwisters.org</a>.</p>

        <p>Qatar is tiny. Beautiful in a commercial-lux way. Simultaneously sterile and holy. A ton of high-rises in the middle of the desert. Big focus on geometry. Shiny rectangles with tiered polygons. Sharp diagonals and repeating abstract patterns.</p>

        <Image
          className=""
          src="/journal-graphics/arriving-in-doha/city.png"
          alt="Project"
          width={1280}
          height={941}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/arriving-in-doha/city2.png"
          alt="Project"
          width={1054}
          height={1404}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>I took a train alone to the Qatar National Library yesterday. It was incredible, oversized, and kind of  industrial. Dominantly silver and gray. After reading a bit about how memory works and wandering the long floors, I took the train to the Mall of Qatar. It was weird. Brand new and mostly empty of people. Then at the entrance, for the first time since arriving in the country, I saw a giant wall mural of a human face. Adam Driver advertising some cologne. I stared at it, struck for a moment. I think I was so in awe at the physical grandeur of the buildings in Qatar that seeing a person at such a scale was jarring. I remembered learning how Islam forbids portraits of idols, and that you would never find pictures of humans in a mosque or any holy place. Qatar seems to make humanness invisible by design, appreciating a different kind of beauty. In Barcelona, Gaudi’s work, which reflected natural forms, flavored the city. Most cities generally have some softness or roundness in the architecture, roads, and urban planning. This made me appreciate how intentionally non-human the structures in Doha are. This also made me appreciate even more the large feature of Adam Driver in context.</p>

        <Image
          className=""
          src="/journal-graphics/arriving-in-doha/library1.png"
          alt="Project"
          width={1054}
          height={1404}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/arriving-in-doha/library2.png"
          alt="Project"
          width={1054}
          height={1404}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>I missed cooking every day like I did in San Francisco, so I’m glad to return to that here. Living at CEEALAR, Lumi cooked most of our dinners. Though I desperately miss her chickpea curry, I forgot how grounding it is to craft my own meals. I remember learning that digestion begins with the act of preparing the food—the peeling, chopping, mixing. Something about our senses realizing we are getting ready to eat, so we physiologically ready our saliva and organs to break down any incoming nutriment. Also, going vegan for the last four months has been more impactful than I expected: even as I cook for myself, I am still mostly vegan-vegetarian, and I still eat ridiculous amounts of nutritional yeast.</p>

        <p>When I was trying to find the right train to board at the station yesterday, a railway attendant flirted with me. He was the only attendant that looked sympathetic to me (I looked pretty lost, I guess) and close to my age (vaguely in his mid-20s, I guess). I walked up to him and asked if I could ask him a question. “Are you looking for directions?” he replied. “Yes,” I said. “To my heart?” he smiled. It was good. And funny. We couldn’t stop laughing with each other in the middle of the station. After some chit-chat, we finally got collected and he told me where to go. I walked to the train, smiling under my mask.</p>

        <Image
          className=""
          src="/journal-graphics/arriving-in-doha/metro.png"
          alt="Project"
          width={1054}
          height={1404}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>Besides wandering the city, I spend a lot of time alone and dancing in the family apartment. Mom and Selva arrive next week, so I have the place to myself for a while. Luxurious. The TV in my room plays B- and C-list movies—the kind that get less than 40% on Rotten Tomatoes. I half-watch them while I do other creative shenanigans. There is a gym here in the apartment complex, too. I do my little fast walk and lift my little weights every day or every other day. I wear my mask during cardio which fogs up my glasses. I hang on the bar to decompress my spine. The other day I broke my earbuds. In lieu of making the effort to buy new ones, I wrapped the broken earbud with the rubber bands that came with my green onions at the grocery store. Ta da. I am a sort of engineer, after all.</p>

        <Image
          className=""
          src="/journal-graphics/arriving-in-doha/earbud.png"
          alt="Project"
          width={1054}
          height={1404}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>That’s it for now. I have more thoughts and many more feelings about everything, but in the last few months, I have realized my to-do lists consume more time than I have in a day. I’m resolving to spend less time dwelling on feelings I can’t do anything about. But to speak generally about them, I’ve been weathering breakup sadness and anxiety about my future—career-wise, living situation-wise. Nonetheless, mostly and overwhelmingly, I feel grateful for all my experiences and to have some more time on Earth every day. I’m glad to be in Doha, and glad to see family shortly after more than a year tucked away in San Francisco then some foreign exchange. &nbsp;&#x273d;</p>

        <p>P.S. This made me smile big. When the cleaners came this morning to quickly vacuum and make the beds (my apartment is in a service hotel), they left my hot water bag and my sleeping mask on my bed like this:</p>

        <Image
          className=""
          src="/journal-graphics/arriving-in-doha/cute.png"
          alt="Project"
          width={1054}
          height={1404}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

      </div>      

    </main>
  );
}