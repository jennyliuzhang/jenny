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
        const foundEntry = data.find(item => item.writingSlug === "personality-cop");
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

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        
        <p>When people take their personalities too seriously—I'm talking their tastes, personal brand, or how they show up in a scene—I feel like they project... cop energy. Like, rigid self-policing, and rigid policing of others. And that sucks. People like this bum me out and make me feel unsafe. This is totally a thing.</p>

        <p>I refer to this trait as "personality cop," and it's something that some people have. I say that it's something people have because I think it's something people can get rid of, too. People aren't born haters, they learn to be a hater.</p>

        <p>I think bigotry is a bit black and white. I think people with personality cop judge people based on things that have no face. Like, invisible structures. Whereas I'm judging people by their behavior and how they go about their lives and make decisions that actively exclude people. Their behavior has a face: it's their face.</p>
        
        <p>If there's anything I'd like to achieve in this life, it's to be totally comfortable with myself. To love myself. I found my cache of Regina Spektor ukulele covers from pandemic times recently and I just have to say that I love myself. I don't find them cringey. Even people who even have a tiny little ounce of this. I have been reflecting on former friends who sometimes get like when a little inebriated. I just have to say. When I'm inebriated, I'm kind as hell. Maybe too kind and accepting. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}