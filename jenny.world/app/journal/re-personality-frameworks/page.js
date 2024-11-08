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
        const foundEntry = data.find(item => item.writingSlug === "re-personality-frameworks");
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
        src="/journal-graphics/on-personality-frameworks.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Mushrooms gathered in the Tentsmuir Forest by our DISI foraging group.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        
        <p>I see personality typologies as languages for labeling and communicating certain qualities or behaviors in yourself that you might not otherwise have the words for, or you might not have been self-aware of yet. Because they’re essentially boxes, they often come with descriptions or recommendations for navigating those qualities. For example, if you identify introvert tendencies in yourself, a framework that accounts for introversion may offer certain warnings, strategies, or ways of framing your self-concept that may or may not be useful to your life — career, lifestyle, relationships, etc. I think people get really into frameworks that they find useful.</p>

        <p>There are so many frameworks out there, and I see them each as intentionally constrained and serving different purposes: I think MBTI is useful for understanding people’s communication and collaboration styles; Socionics is a way to describe one’s information metabolism; Enneagram is like an expression of people’s default coping tendencies in times of stress… etc, etc.</p>

        <p>I personally don’t like to take the official quizzes that these frameworks offer; I think the tests can be helpful, but I find self-reporting based on somewhat arbitrary, abstract, or even leading question formats don’t consistently give me “diagnoses” I resonate with. I prefer to just read through all the types offered by a framework as if it were fantastical lore (MBTI, for example, is kind of presented this way anyway), get a feel for its underlying logic, and claim the labels that are useful to me.</p>

        <p>MBTI seems to get a lot of attention because it apparently has more scientific support, but at the end of the day, I think they’re all just frameworks. Each one is a limited lens for seeing how you might exist in the world, and it’s important to note that they’re all limited. Still, it can be a really playful joy to meet other people who like to wear a shared lens once in a while and learn about each other through such a specific language. &nbsp;&#x273d;</p>
      </div>      

    </main>
  );
}