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
        const foundEntry = data.find(item => item.writingSlug === "postcards");
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
        src="/journal-graphics/postcards.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        The cover of my creative ethnography project of Los Angeles. <Link href="/projects/postcards">See the full project case study</Link>.
      </div>

      <div className={entryStyles.body}>
      <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        <p>During my freshman year at USC, I didn’t venture out into the city much. My off-campus adventures in Los Angeles involved closing my eyes and taking the metro to 7th Street and Figueroa to shop at Target. I went to L.A. Live twice, I think, and <em>who actually lived east of Little Tokyo?</em></p>

        <p>This summer, though, I’ve realized that East LA is a real place, as well as a lot of other things about Los Angeles. I took classes this summer on campus, and in between that and work, I’ve learned that this city is vast, beautiful, and not only its first impression. To document and illustrate my experiences, I created a brief chapbook that I want to share with you called <Link href="/journal-graphics/postcards/postcards.pdf" target="_blank">Postcards</Link>.</p>


        <Link href="/journal-graphics/postcards/postcards.pdf" target="_blank">
        <Image
          className=""
          src="/journal-graphics/postcards.jpg"
          alt="Project"
          width={2000}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/postcards/always-changing.jpg"
          alt="Project"
          width={2475}
          height={1913}
          style={{ width: '49.5%', height: 'auto', marginRight: '1%'}}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/postcards/keita.jpg"
          alt="Project"
          width={2475}
          height={1913}
          style={{ width: '49.5%', height: 'auto' }}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/postcards/good-spot.jpg"
          alt="Project"
          width={2475}
          height={1913}
          style={{ width: '49.5%', height: 'auto', marginRight: '1%'}}
          quality={100} 
          priority
        />

      <Image
          className=""
          src="/journal-graphics/postcards/victor.jpg"
          alt="Project"
          width={2475}
          height={1913}
          style={{ width: '49.5%', height: 'auto' }}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/postcards/clean.jpg"
          alt="Project"
          width={2475}
          height={1913}
          style={{ width: '49.5%', height: 'auto', marginRight: '1%'}}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/postcards/mafalda.jpg"
          alt="Project"
          width={2475}
          height={1913}
          style={{ width: '49.5%', height: 'auto' }}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/postcards/conclusion.jpg"
          alt="Project"
          width={2475}
          height={1913}
          style={{ width: '49.5%', height: 'auto', marginRight: '1%'}}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/postcards/end.jpg"
          alt="Project"
          width={2475}
          height={1913}
          style={{ width: '49.5%', height: 'auto' }}
          quality={100} 
          priority
        />

        </Link>

        <Button title="See the full Postcards case study" type="blue-centered" desc="" link="/about/journey"></Button>

        <p>This summer, I talked to more people, read more things, and explored different places in this city. The book is a story of my Los Angeles homecoming and home-becoming. How LA is not one picturesque skyline postcard but many postcards, neighborhoods, voices, tastes, smells. A city of its first impressions, but also every impression thereafter. Where the stained gutters of South Central rest on the same horizon as the golden Santa Monica Pier. From my introduction of Postcards:</p>

        <blockquote>“When I arrived at LAX, I noticed three things about my new city immediately. First, it was too big for even my peripherals. Second, there was no characteristic skyline, no emblem of automatic recognition. Third, the sun was very bright on this bustling plot of never-ending quadrants. It was all coated in yellow. In place of a city I knew, that carefully compact Washington home, I found a golden cast of Day-Glo, sparkling street light fixtures, swarms of yellow cabs, and shiny, shocking building reflections all running—speeding—all the way out to a hot horizon.”</blockquote>

        <p>This book is an anthology of interviews I had with people I met here this summer. I recorded the audio of our conversations, transcribed and edited them, and added my own commentary. My first adventure living it up and alone takes place in Los Angeles. I got the chance to make this big, big city a little bit smaller.</p>
        
        <p>I lived alone for the summer, so in between work and downtown explorations, I needed to stay alive. Figuring out how to live and cook and clean all by myself (formally “adulting”) became a full-time commitment. My next meal was a mission each day, and my Metro TAP card a staple accessory. No one ever really teaches you how many groceries you should buy or how to properly read these things:</p>

        <Image
          className=""
          src="/journal-graphics/postcards/map-la.jpg"
          alt="Project"
          width={2220}
          height={957}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>These maps are actually pretty beautiful if you blur your eyes a bit and focus on the colors. But anyway, I spent much of the summer getting lost or going hungry or both at the same time. A talented multi-tasker I am. My Twitter briefly became a journal of the boons and misfortunes of adulthood in a new city.</p>

        <Image
          className=""
          src="/journal-graphics/postcards/tweets.jpg"
          alt="Project"
          width={1208}
          height={1580}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>Mostly misfortunes.</p>

        <Image
          className=""
          src="/journal-graphics/postcards/tweets.jpg"
          alt="Project"
          width={889}
          height={303}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>But thankfully, by the end of summer, my diet was no longer exclusively culinary disasters. I learned to make wontons and other Chinese dishes through my efforts to combat homesickness. I’m more comfortable being alone, exploring, and dealing with inconveniences. And I can now truly take the metro with my eyes closed to any destination from the westside to Long Beach (for the most part). As I move into my downtown apartment for the semester, I see a Los Angeles beyond its stereotypes—a city full of voices, histories, neighborhoods, memories and things to do every single day. A city where I am independent and welcome. &nbsp;&#x273d;</p>

        <Image
          className=""
          src="/journal-graphics/postcards/los-angeles.jpg"
          alt="Project"
          width={1125}
          height={750}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

      </div>      

    </main>
  );
}