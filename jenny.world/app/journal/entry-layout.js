"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import entryStyles from "../styles/entry.module.css";
import Breadcrumbs from '../components/Breadcrumbs';

export default function EntryLayout({ children, slug, heroImage, heroCaption }) {
  const [entry, setEntry] = useState(null);
  const [nextEntry, setNextEntry] = useState(null);
  const [prevEntry, setPrevEntry] = useState(null);

  // Debugging: Log the folder name received from `page.js`
  console.log('Folder name received in EntryLayout:', slug);

  useEffect(() => {
    if (!slug) {
      console.error('Folder name is missing:', slug);
      return;
    }

    // Fetch journal data based on folder name
    fetch('/data/journal.json')
      .then(response => response.json())
      .then(data => {
        const currentIndex = data.findIndex(item => item.writingSlug === slug);

        if (currentIndex !== -1) {
          setEntry(data[currentIndex]);
          setPrevEntry(data[currentIndex + 1] || null);
          setNextEntry(data[currentIndex - 1] || null);
        } else {
          console.error('No entry found for folder name:', slug);
        }
      })
      .catch(error => console.error('Error fetching journal entry:', error));
  }, [slug]);

  if (!entry) return <p>Loading...</p>;

  return (
    <main className={entryStyles.entryStyles}>
      {/* Breadcrumbs */}
      <Breadcrumbs>
        <Link href="/journal">Jenny’s Journal</Link>
        <span>{entry.writingName}</span>
      </Breadcrumbs>

      {/* Hero Image and Caption */}
      <div className={entryStyles.hero}>
        {heroImage}
        <div className={entryStyles.heroCaption}>
          {heroCaption}
        </div>
      </div>

      {/* Content */}
      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        {children}
      </div>

      {/* Navigation */}
      <div className={entryStyles.otherEntries}>
        {/* Previous Entry */}
        {prevEntry && (
          <Link href={`/journal/${prevEntry.writingSlug}`} className={entryStyles.prevEntry}>
            <span className={entryStyles.direction}>← Previous Entry</span>
            <div className={entryStyles.entryInfo}>
              <Image
                className={entryStyles.entryThumb}
                src={prevEntry.writingThumbnailImageURL}
                alt={prevEntry.writingName}
                width={400}
                height={300}
                style={{ width: '100%', maxWidth: '100px', height: 'auto', maxHeight: '75px' }}
                quality={100} 
                priority
              />
              <div className={entryStyles.entryText}>
                <span className={entryStyles.writingName}>{prevEntry.writingName}</span>
                <span className={entryStyles.date}>{prevEntry.date}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Next Entry */}
        {nextEntry && (
          <Link href={`/journal/${nextEntry.writingSlug}`} className={entryStyles.nextEntry}>
            <span className={entryStyles.direction}>Next Entry →</span>
            <div className={entryStyles.entryInfo}>
              <div className={entryStyles.entryText}>
                <span className={entryStyles.writingName}>{nextEntry.writingName}</span>
                <span className={entryStyles.date}>{nextEntry.date}</span>
              </div>
              <Image
                className={entryStyles.entryThumb}
                src={nextEntry.writingThumbnailImageURL}
                alt={nextEntry.writingName}
                width={400}
                height={300}
                style={{ width: '100%', maxWidth: '100px', height: 'auto', maxHeight: '75px' }}
                quality={100} 
                priority
              />
            </div>
          </Link>
        )}
      </div>
    </main>
  );
}