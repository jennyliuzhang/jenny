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
        const foundEntry = data.find(item => item.writingSlug === "no-more-baby-books");
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
        src="/journal-graphics/no-more-baby-books.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        The benches in Park Güell, Barcelona, where I sat for an hour and jotted this writing.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>In <em>Free At Last</em>, Daniel Greenberg makes a point about how they don’t keep baby books in their Sudbury School. No extremely dumbed-down, vapid, reading-practice books. This is because at Sudbury Valley, they don’t teach reading. There is no required reading time or expectation that anyone has to be literate by a certain age. Any student who learns how to read decides when to take the first step on their own.</p>

        <p>Of course, all the students eventually learn to read. They learn it because they realize that a big part of human knowledge is locked away in words, and literacy is the key to access it. The difference is that when a student chooses to learn reading, they are self-motivated to do it, because they realize how valuable it can be for learning about the world. When the students choose to begin reading, it takes them a year or less to be completely and efficiently literate.</p>
        
        <p>There are no baby books in Sudbury Valley because no one who wants to learn about the world—how it works, what people think about it—is going to waste their time reading books created for the sake of “practice.” They will read things because they want to connect with people who have vast ideas, and many people share ideas through writing. Learning to read is a byproduct of seeking connection and wanting to unlock the world.</p>

        <p>I think about my favorite “children’s fiction.” These are lovely works that reveal something unique about the world. These books are not practice reading material. They’re “meant for kids,” but in reality they’re just passionate stories about values that were meaningful to their creators, told through playful and imaginary landscapes. Simply, they’re just capsules of human knowledge and wonder. When people hear of capsules like these, they will become literate to unlock them. Literacy is just a tool we learn to use.</p>

        <p>I look forward to existing and future scenarios where all kinds of reading habits are normalized. Reading is not a chore, but rather just something we do to satisfy a need. Like how we eat food when we’re hungry, we read when we want to satisfy our hunger to engage with the world, when we are curious to expand the boundaries of our personal knowledge and memory. No more baby books, please: just wonderful capsules about the world and the people in it, made for all ages. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}