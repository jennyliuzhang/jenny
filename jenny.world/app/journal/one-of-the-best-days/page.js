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
        const foundEntry = data.find(item => item.writingSlug === "one-of-the-best-days");
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
        src="/journal-graphics/one-of-the-best-days.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Strolling through the campus of Imperial College London.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>Today was easily one of the best days of my year. Recounting everything so I don’t forget when I’m 80: Woke up around 9am, got packed up in Mariam’s place. Cynthia came to help me transport my luggage and brought me a coffee from Pret. I had a vision in the morning that I needed to buy her a book, so I told her no matter what we did this morning we had to go to a bookstore. We walked to the Bayswater station and hopped on a bus to Marylebone where we got lunch at Joe and the Juice, my favorite cafe/juice bar of all time, and I showed her my work-in-progress Jenny.world website and walked her through the Twisterland map on my laptop. Then we played with the Storytelling Cards a bit and then browsed around the neighborhood and ended up at Daunt Books, where I bought her a book and I read a Wendell Berry essay. We walked to the Landmark Hotel where we, in our sneakers and hoodies and t-shirts, waltzed in and plopped our laptops down to work at the cafe amongst all the formally dressed businesspeople who seemed to be there for a conference. We got salmon lox and I took my first Dorsia calls of the day with a beautiful backdrop of the Landmark’s interior terraces and a vibrant grand piano. Cynthia read. Then, when the hotel cafe was about to close, we decided to march across town to Imperial College where Cynthia went to school in search of strong wifi for the rest of my day’s calls. On the 40-minute trek through Hyde Park, we walked past Florence Pugh who was walking her bike out of the park. It truly made a great day even better, and I sent voice notes to many friends immediately that I saw one of my favorite actresses in the flesh. We finally made it to Imperial and we intruded on the Tea Society (TSoc for short) and I used their meeting room to take my calls in the corner (they were totally fine with it). My battery was about to die and during the day’s events I lost my power adapter, so Cynthia stopped by 4 different electronics shops around the college until she found an adapter for me (I was on my last leg at 8% charge left and still 3 calls to go). I roared when she successfully delivered the adapter to me — an Olympic-level feat because apparently many stores were on strike for the day and were closed — and I finished my calls for the day. I could tell on camera that I looked quite tired (sunkissed, but tired).</p>

        <p>I packed up my stuff and began walking out with the rest of the Tea Society when the leader asked if we would like to go to the catacombs, knowing that it was my first time at Imperial. Of course I said yes, and a few minutes later we were in the basement of the maths department and stepping into hidden hallways and dark corridors, some of which had holes in the ground that led to even deeper levels. There was a lot of funny, cryptic messages on the walls from past students leaving their marks, and strange directions and hints etched into the bricks. We left the catacombs and took a lovely walk home across Kensington Gardens toward Bayswater, and I felt very safe as I talked passionately to the Tea Society about Plot Twisters. We parted our ways and Cynthia and I returned to her apartment to get my luggage, then I called a taxi to take me to my next place across the river. I beamed to Taha, my driver, about my wonderful day in London so far, and he proceeded to tell me a beautiful story about how an Ottoman sultan sent two merchants once to the same city to tell him what that city was like, and while one came back to him saying it was the worst city, the other came back saying it was the best. He said that the merchant who saw it as the worst city held a lot of negativity in his heart, so he could only see the negative things. It is very important to be positive, Taha said. “You have to.” He showed me what gave him joy in his new life as a driver (he was previously a software engineer in France): a photo of his family and specifically a video of his newborn daughter. He told me I would have my own kids one day—Inshallah—and I would feel what he feels today. He dropped me off at my new place and I was met on the street by Sandra, my host. She walked me through her whole place graciously and my room is incredibly roomy, well-stocked, and charming. I called Ben on the phone for 3 hours to catch up, I learned that Becky and I were going to ovelap in Lisbon this Saturday night, and I said my prayers and counted my blessings and went to bed. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}