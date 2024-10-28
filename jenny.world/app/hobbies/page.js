"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import journalStyles from "../styles/journal.module.css";
import Tooltip from "../components/Tooltip";
import Button from "../components/Button";

export default function Page() {

  const [journalEntries, setJournal] = useState([]);

  useEffect(() => {
    fetch('/data/journal.json')
      .then((response) => response.json())
      .then((data) => setJournal(data))
      .catch((error) => console.error('Error fetching narrative writing:', error));
  }, []);

  return (
    <main>
      <h2>Jenny&rsquo;s Journal</h2>

      <div className={journalStyles.introduction}>
        <div className={journalStyles.introPara}>
          <h1 className={journalStyles.blogHeadline}>Musings, lessons, and updates from my creative journey.</h1>
          <p>I started writing for myself when I was 16 years old and find it essential to my creativity and wellbeing. Putting experiences into words is not only fun and cathartic but also helps hone my sensibility for narrative and meaning, which is key to my design work. Entries marked with a little heart (<span style={{padding: '0 2px'}}>♥️</span>) are personal favorites. Some are password-protected (🔒) for trusted readers only.</p>
          <p>I may post new writing on a delayed schedule—some entries can hold tender, personal ideas, so I give myself time to move through the vulnerability of sharing online. I’m also still gathering past writings to retroactively populate various sections. <a href="#why">Why do I share my writing?</a></p>
        </div>


        <div className={journalStyles.highlights}>


        </div>
        
      </div>
      
      <hr></hr>
      

      <div className={journalStyles.writingList}>

        <div className={journalStyles.timePeriod}>
        <h1>Cocooning</h1>
        <h6>2024–present</h6>
          <p>Maybe it was a hex, maybe it was the natural conclusion of a cosmic cycle: in any case, several things started falling apart in my life halfway through 2024, prompting some changes, including picking writing back up. These tell the story of me getting reorganized in Cleveland. As good stories do, this chapter starts with a bang.</p>
        </div>

        <div className={journalStyles.writings}>
          {journalEntries
            .filter(writing => writing.personalChapter === 'cleveland-2')
            .map((writing, index) => (
              <Link href={`/journal/${writing.writingSlug}`} key={index} className={journalStyles.writingEntry}>
                <Image
                  className={journalStyles.entryThumb}
                  src={writing.writingThumbnailImageURL}
                  alt={writing.writingName}
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                  quality={100}
                  priority
                />

                <div className={journalStyles.entryInfo}>
                  <h3>{writing.writingName}</h3>
                  <p className={journalStyles.dateReadTime}>
                    {writing.isPasswordProtected && <span>🔒&nbsp;</span>}
                    {writing.favorite && <span>♥️&nbsp;</span>}
                    {writing.date} &middot; {writing.readTime}
                  </p>
                  <p>{writing.writingDesc}</p>
                </div>
              </Link>
            ))}
        </div>


      </div>
      
      <div className={journalStyles.writingList}>

        <div className={journalStyles.timePeriod}>
        <h1>Transitioning into Cleveland</h1>
        <h6>2023–2024</h6>
          <p>Moving to Cleveland, Ohio—a city I’d never even visited before—was a significant milestone for me. These writings reminisce on the phase of life I had left and the new beginnings in front of me.</p>
          <p>I didn&rsquo;t write much during the first year I lived in Cleveland, so like catching your breath after a long sprint, some of these are recaps instead of being updates from the time of writing.</p>
        </div>

        <div className={journalStyles.writings}>
          {journalEntries
            .filter(writing => writing.personalChapter === 'cleveland-1')
            .map((writing, index) => (
              <Link href={`/journal/${writing.writingSlug}`} key={index} className={journalStyles.writingEntry}>
                <Image
                  className={journalStyles.entryThumb}
                  src={writing.writingThumbnailImageURL}
                  alt={writing.writingName}
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                  quality={100}
                  priority
                />

                <div className={journalStyles.entryInfo}>
                  <h3>{writing.writingName}</h3>
                  <p className={journalStyles.dateReadTime}>
                    {writing.isPasswordProtected && <span>🔒&nbsp;</span>}
                    {writing.favorite && <span>♥️&nbsp;</span>}
                    {writing.date} &middot; {writing.readTime}
                  </p>
                  <p>{writing.writingDesc}</p>
                </div>
              </Link>
            ))}
        </div>


      </div>

      <div className={journalStyles.writingList}>
        <div className={journalStyles.timePeriod}>
        <h1>The Traveling Years</h1>
        <h6>2021–2023</h6>
          <p>Between 2021–2023, I traveled to 10 different countries and 27 cities. I also grew a lot.</p>
          <p>Reflections from my last leg of travels through Isle of Man, Oxford, and Oslo are missing and will be added eventually.</p>
        </div>

        <div className={journalStyles.writings}>
          {journalEntries
            .filter(writing => writing.personalChapter === 'traveling')
            .map((writing, index) => (
              <Link href={`/journal/${writing.writingSlug}`} key={index} className={journalStyles.writingEntry}>
                <Image
                  className={journalStyles.entryThumb}
                  src={writing.writingThumbnailImageURL}
                  alt={writing.writingName}
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                  quality={100}
                  priority
                />

                <div className={journalStyles.entryInfo}>
                  <h3>{writing.writingName}</h3>
                  <p className={journalStyles.dateReadTime}>
                  {writing.isPasswordProtected && <span>🔒&nbsp;</span>}
                    {writing.favorite && <span>♥️&nbsp;</span>}
                    {writing.date} &middot; {writing.readTime}
                  </p>
                  <p>{writing.writingDesc}</p>
                </div>
              </Link>
            ))}
        </div>

      </div>

      <div className={journalStyles.writingList}>
        <div className={journalStyles.timePeriod}>
          <h1>Pandemic Times</h1>
          <h6>2020–2021</h6>
          <p>Just like everyone else, my life paused during COVID-19. I had also just dissolved my one tie to a physical place: I left my job in Los Angeles. Young and newly free of any obligations, I spent time road-tripping, wandering about, working on Plot Twisters, and confronting my health and some rougher parts of my personality.</p>
          <p>It was an angsty time, for me and probably many people. I’m still looking through writings from this era and figuring out whether they’re worth sharing. For now, these three!</p>
        </div>

        <div className={journalStyles.writings}>
          {journalEntries
            .filter(writing => writing.personalChapter === 'covid')
            .map((writing, index) => (
              <Link href={`/journal/${writing.writingSlug}`} key={index} className={journalStyles.writingEntry}>
                <Image
                  className={journalStyles.entryThumb}
                  src={writing.writingThumbnailImageURL}
                  alt={writing.writingName}
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                  quality={100}
                  priority
                />

                <div className={journalStyles.entryInfo}>
                  <h3>{writing.writingName}</h3>
                  <p className={journalStyles.dateReadTime}>
                    {writing.isPasswordProtected && <span>🔒&nbsp;</span>}
                    {writing.favorite && <span>♥️&nbsp;</span>}
                    {writing.date} &middot; {writing.readTime}
                  </p>
                  <p>{writing.writingDesc}</p>
                </div>
              </Link>
            ))}
        </div>

      </div>

      
      <div className={journalStyles.writingList}>
        <div className={journalStyles.timePeriod}>
          <h1>My Early 20s</h1>
          <h6>College and a little after, roughly 2017–2020</h6>
          <p>Old friends might remember my now-defunct blog, <a href="https://jennytypes.com/" target="_blank">jennytypes.com</a>, my <a href="https://www.bookpackers.com/jennys-blog" target="_blank">Bookpacking</a> blog, and my <a href="https://medium.com/@jennyliuzhang" target="_blank">Medium</a> account. I’ve ported over some entries from those places.</p>
          <p>I wrote about floundering around in Los Angeles mostly, but also other places like New Orleans and Mexico. These entries are kind of shameless. I wanted to be an artist, a designer, a journalist, a founder, a writer. Odd observations and ambitions missing consummation. Disorder, novelty, and general young adulthood panic. But also the beginnings of discovering my voice.</p>
          <p>You can witness the origins of my ornate writing style in these pieces, which I have tried to temper a bit over time.</p>
        </div>

        <div className={journalStyles.writings}>
          {journalEntries
            .filter(writing => writing.personalChapter === 'early-20s')
            .map((writing, index) => (
              <Link href={`/journal/${writing.writingSlug}`} key={index} className={journalStyles.writingEntry}>
                <Image
                  className={journalStyles.entryThumb}
                  src={writing.writingThumbnailImageURL}
                  alt={writing.writingName}
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                  quality={100}
                  priority
                />

                <div className={journalStyles.entryInfo}>
                  <h3>{writing.writingName}</h3>
                  <p className={journalStyles.dateReadTime}>
                    {writing.isPasswordProtected && <span>🔒&nbsp;</span>}
                    {writing.favorite && <span>♥️&nbsp;</span>}
                    {writing.date} &middot; {writing.readTime}
                  </p>
                  <p>{writing.writingDesc}</p>
                </div>
              </Link>
            ))}
        </div>

      </div>

      
      <div className={journalStyles.writingList}>
        <div className={journalStyles.timePeriod}>
        <h1>Girlhood Recollections</h1>
        <h6>Writings from or about life before 2017</h6>
          <p>On growing up as a Chinese-American eldest daughter to immigrant parents and all the goals, departures, and throughlines of that experience. Figuring out what feelings are, funny little moments, homages to important people, and significant memories.</p>
          <p>I’m in the process of scouring through old iPhone notes and former diaries, so this chapter is being populated retroactively over time.</p>
        </div>

        <div className={`${journalStyles.writings} ${journalStyles.lastWritingSection}`}>
          
          {journalEntries
            .filter(writing => writing.personalChapter === 'girlhood')
            .map((writing, index) => (
              <Link href={`/journal/${writing.writingSlug}`} key={index} className={journalStyles.writingEntry}>
                <Image
                  className={journalStyles.entryThumb}
                  src={writing.writingThumbnailImageURL}
                  alt={writing.writingName}
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                  quality={100}
                  priority
                />

                <div className={journalStyles.entryInfo}>
                  <h3>{writing.writingName}</h3>
                  <p className={journalStyles.dateReadTime}>
                    {writing.isPasswordProtected && <span>🔒&nbsp;</span>}
                    {writing.favorite && <span>♥️&nbsp;</span>}
                    {writing.date} &middot; {writing.readTime}
                  </p>
                  <p>{writing.writingDesc}</p>
                </div>
              </Link>
            ))}
        </div>

      </div>

      <div id="why" className={journalStyles.whySection}>
        <h2 className="centeredh2">Why I Share My Writing</h2>

        <Image
          src="/jenny-growth.png"
          alt="Jenny then vs. now"
          width={1151}
          height={383}
          style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '2.5em auto 2.5em', height: 'auto' }}
          quality={100}
          priority
        />

        <div className={journalStyles.whyBody}>
          <p>I believe telling personal stories is crucial for revealing the diversity of perspectives in the human experience. I’m a young Chinese-American woman with a humble upbringing as a daughter of a blended family of Asian immigrants. Simultaneously, I have the privilege today to be independent, have a safe home, pursue career projects I’m passionate about, and travel. As someone who didn’t grow up around narratives of people like me, with my specific backgrounds, cultural straddlings, and mix of idiosyncrasies and interests, I find it important to share my voice as an example of what’s possible.</p>
          <p>My writing can be vulnerable. I explore my emotional states, learnings, and observations about my life. Because I harbor a unique mix of identities—literate and able-bodied, but also a second-generation and neurodivergent woman of color—the way I occupy and perceive spaces is unique. Writing is my medium for making sense of and showing this experience firsthand.</p>
          <p>When others read my writing, I hope they can find what’s kindred between us. In turn, I hope this contributes to a larger project: giving people more tools to be empathetic and patient with one another.</p>
        </div>

        <Button title="Read more about my journey" type="blue-centered" desc="" link="/about/journey"></Button>

      </div>

    </main>
  );
}