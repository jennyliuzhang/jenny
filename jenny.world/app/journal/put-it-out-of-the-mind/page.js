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
        const foundEntry = data.find(item => item.writingSlug === "put-it-out-of-the-mind");
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
        src="/journal-graphics/put-it-out-of-the-mind.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Taken at Majestic Meadows Alpaca Farm in Medina, Ohio.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>Last week, my phone was dead for 3 days. Barktober fest at Taps and Tails. Wiener dog race.</p>

        <p>Back in LA, wonton party no phone. 1.5 months without phone</p>

        <p>Applying for a fellowship, app due October. I put it out of mind because I realized realistically it would take me 20–25 hours to complete an application for, and I don't need to worry about that right now.</p>
        
        <p>Managing anxiety. My new spiritual-guide-energy-reader-friend-advisor Hala. Pause, breathe, be present. Clock.</p>

        <p>Making new friends. Dave. Taylor. Bumble BFF. No dating apps. But friends? Yes. Always can use more friends. How does this person fit into your life? No questions. Helps. Taylor is an ambivert. I'm an extrovert.</p>

        <p>Anxiety attack today. Existential dread, fear of vulnerability, people seeming to come and leave in my life easily. Open mic at CODA. Jake. Convo about doing things. Jake's really good at chess. Match soon. Sit down with the guitar. Describing learning an instrument: you break it down into small parts and you examine every part and learn it individually. Then you look at the bigger project all together and learn it all together. And it takes fucking time. And you just do it. And I thought about coding my website this morning. And how anxious I was about doing it. Then I went to Rising Star and pumped a coffee and laid it out and coded it in 35 minutes. Being yourself is also a way to just shed the people around you that aren't meant to be in your support system. They aren't meant to love you.</p>

        <p>Issue when coding personal website. The subnavigation breadcrumbs situation is really a mess. It's like 5 different nested divs with different CSS styles if it's a 2-level nav vs. 3 level, and some divs only have margin adjustments and no other styling. And I didn't use components. Blah blah blah. It's a mess. It makes me feel gross and tense and itchy. Like when you're cleaning but you have one table or corner that's just like where all your crap goes and you're reluctant to clean it. I take Lila for a walk.</p>

        <p>Opposite of emdr. Focusing my eyesight and letting the world pass along.</p>

        <p></p>

        <p>Mostly, I'm collating all my past writings. Lots of really exciting stuff. Emotional stuff. Feelings of precipice.</p>

        <p>I'd like to channel the precipice. That summer when I was 21, I saw several psychics because I was direly overwhelmed by the paths ahead of me. A professor told me that I should have it all sorted by the end of my junior year. One of them told me I think I'm confused but I'm not. "you think you’re confused but you know what you want to do, and you’re all over the place." &nbsp;&#x273d;</p>

        <p>And I feel love and I feel love and I feel love and I feel love. And I ran up and down the stairs at home and I danced with Lila and Cali and I shook with excitement. I wish my friends knew how much love I felt, that I could offer it them to them by post in a few weeks again to remind them, to receive on a Tuesday and open. In the package something would blossom and glisten and they would feel commemorated and tall and full.</p>
        

      </div>      

    </main>
  );
}