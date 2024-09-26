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
        const foundEntry = data.find(item => item.writingSlug === "last-week-i-bought");
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
        src="/journal-graphics/last-week-i-bought.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        An illustration I created of pink spray roses. See my <Link href="/projects/plants-by-jenny">Plants By Jenny project</Link> for more.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        
        <p>Last week, I bought a ripe pink rose at the Los Angeles Flower Market. I’ve seen it before on the lips my mom wears while doing exchanges at the mall. Baby pink, but not baby in a fragile lace crib, but baby on the Pacific Coast Highway with one arm around the wheel and the top down in my dream convertible flirting, “I love you, baby!” Foolish pink like glowing fingers over a flashlight, reckless pink like flip flops and graham crackers in the dark by the bonfire. Unapologetic pink, maybe young and embarrassing, blushing like a salmon egg, the supple gift of life, makes me remember I’m only 22 and the world’s still a playground. Today, as I lay under a tree, I imagined her wearing it too, life in a necklace of apples. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}