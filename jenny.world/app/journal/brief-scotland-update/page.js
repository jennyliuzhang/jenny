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
        const foundEntry = data.find(item => item.writingSlug === "brief-scotland-update");
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
        src="/journal-graphics/brief-scotland-update.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        A rainy shot of the Gilded Balloon during Edinburgh Fringe Festival 2022, taken right before Sarah Sherman’s show.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>Hi! Been a while since I shared a personal update. I just came back from a beer tasting so this writing is entirely stream of consciousness and a bit infused with drink made from “murdered barley babies” as our tasting guide called it. I’m in Edinburgh now after a long 3 weeks at St Andrews for the Diverse Intelligences Summer Institute (DISI). Back to full-time work and balancing Plot Twisters and other projects. The city is wondrous: it’s layered in this weird way, with a volcano sitting in the middle of it and streets that go up and up and around and around. If you’re walking down the street and turn around to look back, the odds of seeing a massive landform are high. It’s beautiful and awe-inspiring and wild to behold how civilization has made itself work around these natural shapes.</p>

        <p>The institute was good for me in the way that vegetables are good for a person. I met some people who I feel immense resonance with, and some others that I really don’t. Among philosophers, social scientists, biologists, psychologists, artists, and other technologists, it’s been weird to see where I fit in—nowhere obvious! But this was also fulfilling. I fit in best as a project orchestrator or idea communicator or something like that. Not sure yet, pending pending pending.</p>

        <p>I start my MSc at the Futures Institute this fall. Part-time because I’m working at Dorsia full-time, but I’m still excited. I’m in the program WhatsApp group and have been socializing with folks in social groups on Discord. I’m looking forward to splitting my time between Edinburgh and the rest of Europe and the east coast of the US where the time zones are ideal for balancing school and work.</p>

        <p>I have to go now because I’m about to see Cat Cohen live! Fringe has been super fun. I saw Sarah Sherman with Jenna a few nights ago. Jenna and Sarah were friends in the Chicago arts and performance scene. Sarah called Fringe “Theater Kid Coachella” during her set and that is exactly what it is. She was super funny. We got falafel with her after and she told us about her job at SNL and about filming a movie with Adam Sandler and playing a rabbi. She is a great human!</p>

        <p>TTYL! &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}