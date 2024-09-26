"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import entryStyles from "../../styles/entry.module.css";
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Page() {
  const [entry, setEntry] = useState(null);
  const [nextEntry, setnextEntry] = useState(null);
  const [prevEntry, setprevEntry] = useState(null);

  useEffect(() => {
    fetch('/data/journal.json')
      .then((response) => response.json())
      .then((data) => {
        // Find the index of the current entry
        const currentIndex = data.findIndex(item => item.writingSlug === "the-comedy");
        
        // Get the current entry
        const foundEntry = data[currentIndex];
        setEntry(foundEntry);

        // Get the previous entry, if it exists
        if (currentIndex > 0) {
          setnextEntry(data[currentIndex - 1]);
        }

        // Get the next entry, if it exists
        if (currentIndex < data.length - 1) {
          setprevEntry(data[currentIndex + 1]);
        }
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
        src="/journal-graphics/the-comedy.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        My dog Lila wearing a plastic bag on her head at 7am because she gets chronic ear infections when it rains and the raincoat I bought her was a size too small.
      </div>

      <div className={entryStyles.body}>
      <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <blockquote>
          Just when I thought it wouldn't get no sicker
          <br></br>
          Woke up one morning and heard this weird ass mothafucka talkin' out the side of his neck
          <br></br>
          — YG on "FDT"
        </blockquote>
        <p>this era of my 20s has been a riot. i can't go into detail right now because honestly it was a bit traumatizing, so i resist reliving it. but i will recount the basics

          number of emails i've had to send being like hey so sorry. catastrophe!

mice. eating lila's dog food. i spotted them middle of the night downstairs. 
my blinds stopped working. they are a perpetual diagonal, a violent angle in my massive window
in the middle of my burnout recovery and new mice panic, i discover a dripping that flowed from my attic to my first floor, causing two floors to be filled by water. hvac at fault, ultimately due to mishap by the roofers. within 24 hours, had to emergency relocate lila and me for 2 weeks, drop and demolition two floors partially, and wrestle with legal and financial and contractor bullshit. felt so little trust in the processes as a non-specialist. shuttling back and forth between the airbnb and home while still working.
lila was found to have stage 2 cancer. got tumor surgery. expensive. poor girl.
lila had IBD and debilitating diarrhea simultaneously to all of this. we were up every few hours every night for a few weeks. 11pm. 2am. 4am. 6am. sharting on the grass. distended belly. howling at night. whining.
my job is relocating my role to miami. either i go by end of summer or i vacate my position. money flow for home remodel, lila's cancer treatments, not to mention basic living and mortgage — all of it will go.
we moved back home. everything is functional again except i'm missing floor still in two rooms. blinds are still fucked.
mice are back.
i've tried everything. poison bait. no-kill traps. snap traps. 24 snap traps at first, then 48 snap traps. all kinds of bait. dog food. peanut butter. they're smart. they took the dog food out of the trap. they get away each time. i bought 4 ring cameras. i moved the couch out of the way because i'm afraid they're nesting in it. i don't have a couch to sit on during the day. i bought a UV light to scan for urine.
my nighttime routine is to prepare for the mice. gloves on. shoes on. set and check the traps. big flashlight to scan. UV light on. vacuum every corner possible. put away all food. dishes.
mousetrapping is my hobby. lila has a new lump. i'm so tired you guys &nbsp;&#x273d;</p>

      </div>      

      <div className={entryStyles.otherEntries}>        
        {prevEntry && (
          <Link href={`/journal/${prevEntry.writingSlug}`} className={entryStyles.prevEntry}>
            <span className={entryStyles.direction}>← Previous Entry</span>
            <span className={entryStyles.writingName}>{prevEntry.writingName}</span>
            <span className={entryStyles.date}>{prevEntry.date}</span>
          </Link>
        )}

        {nextEntry && (
          <Link href={`/journal/${nextEntry.writingSlug}`} className={entryStyles.nextEntry}>
            <span className={entryStyles.direction}>Next Entry →</span>
            <span className={entryStyles.writingName}>{nextEntry.writingName}</span>
            <span className={entryStyles.date}>{nextEntry.date}</span>
          </Link>
        )}
      </div> 

    </main>
  );
}