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
        const foundEntry = data.find(item => item.writingSlug === "hoover-house");
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
        src="/journal-graphics/hoover-house.jpg"
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

        <p>For the last six months, I lived in a bustling, crazy artist collective in the Silver Lake neighborhood of Los Angeles. Day in and day out, people were singing, including me. We chased exciting things, for the art of our lives, between giggles, casting calls, retail shifts, bus rides, and service jobs downtown. I had not patiently sipped on a soup in months. In fact, I hadn’t been patient at all in months. I got a rash on my face one week, probably because I was so impatient, manic, completely careless. When my roommates noticed, one gave me calendula cream and another gave me blueberries. There was one morning where a bunch of us all shared a chocolate banana smoothie batch while we vacuumed our old couches and played the Lizzie McGuire movie in the background for the third time that week.</p>

        <p>Every day, they dealt with my sarcastic, sing-song, up-tempo workaholic soapbox. I lived here because I long to start my own companies. The first company I wanted to start was called Plot Twisters, an education technology studio that helps young people reflect on their life journeys. I had a dream—I still do—to make books and software and travel across the country in my car, visiting classrooms, launching a summer camp. But at the beginning, in those months immediately after college, I had no idea what I was doing. I felt unconfident and unconvinced by every effort to make something useful, so I thought it’d be good to be around people who were confident, or at least had honest conviction in their creativity. I was half-right about the people. When I moved into the artist collective, I met people who had conviction, in their appearance and voice, their artwork and their metamorphosis. I soon learned, though, their confidence in a receptive, accepting world often flickered, like mine.</p>

        <p>What we all had in common was that we all had a vision we longed for, separately, in the private moments, sitting in the backyard, between glances in the mirror. We listened to each other’s processes. I watched them take care of their skin and practice the piano. They heard my disdain for the world, my gratitude for it, every good comeback and all the bad ones too. I had a tendency to wake up at 5am and write ideas for my company in a hoodie while I boiled water. Anyone else accidentally up at that hour shared quiet space with me while we both silently acknowledged how very odd it was that we were both awake, shuffling around. Time moved so fast on those weekdays, even when I would wake up early, because suddenly it was bright out and time to start my part-time strategist job and pay the bills. I would clock in remotely from home, then the mailmen would come knocking, and then everyone would be up all at once, dressing, eating, calling, running. I would click around on my laptop for a few hours for some clients at our common table, then drive to meet my team in the Arts District in the afternoons, then come home at sunset to a warm, noisy house.</p>

        <p>On one of my last nights, two artists who came to LA from opposite sides of the planet debated about the reality show on TV while the rest of us sat on the couch, nibbling on snacks, scrolling through our phones. The actor who rode a motorcycle played the piano. We had yellow walls and cheap colorful lanterns strung across the ceiling. Everyone else was running up and down the stairs, in and out the doors, shouting their dreams, laughing on the phone, complaining about their day, talking funny business. We had to open all the windows because the actress from Nigeria was cooking with palm oil again, and that always made us cough.</p>

        <p>Each night, some scene just like this would end when my head hit the pillow of my bunk bed. I slept in the six-person room, and we endured each other’s voices and snoring. The air conditioning was always too loud and too cold. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}