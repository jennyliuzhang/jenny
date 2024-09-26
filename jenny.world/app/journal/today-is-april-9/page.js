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
        const foundEntry = data.find(item => item.writingSlug === "today-is-april-9");
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
        src="/journal-graphics/today-is-april-9.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      {/* <div className={entryStyles.heroCaption}>
        A fun little temporary scene.
      </div> */}

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        
        <p>Today is April 9 2023

Sarah helped me move all my
Bookshelves and plan my home last night until midnight
Good convo w Earl last night
Rhys is my favorite
I picked up a lamp from Wendy in Brooklyn at 7:30am 
Swung over to cleveland bagel to get an egg and cheese and Oj
got in my car, ride wit me started playing with 4:44 left
Said my thank you to my angels
Then saw
44 min walk from my house
Time was 4:01 in my car (8:01 actually)
I was on 45th st
Temperature is 44F
Bagel so good
Sitting and thanking universe for being rigged in my favor
Miracles ❤️
 &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}