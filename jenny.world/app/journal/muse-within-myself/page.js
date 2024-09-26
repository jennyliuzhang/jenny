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
        const currentIndex = data.findIndex(item => item.writingSlug === "muse-within-myself");
        
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
        src="/journal-graphics/seattle-to-boston.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        A sign in the Badlands National Park in South Dakota.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        
        <p>There is a part of me that has been eluding me for a few weeks. I haven’t been able to access her. She shut down sometime earlier this month and has only been speaking to me through the grapevine of my other inner voices.</p>

        <p>She is orchestral, bubbly, and diaphanous. Those are her own descriptions of herself and she means them. She is childlike and a little annoying, but she’s older than she acts. She’s been burned a few times by the sun, overstaying her welcome in spotlights, and seeking warmth from selfish people. She likes to live in the dark and move around with a lantern to illuminate what is directly in front of her. This allows her to focus on the details, which she prefers despite being well-equipped and having excellent genes for seeing the big picture. She will think about the big picture if it is important for humanity, or if the person she’s talking to really pries it out of her. But seriously, she prefers to focus on the details. Comparing the rhythm of a jazz song to the pacing of a really good weekend. Describing the hue of the beams in an imaginary solarpunk building construction. Learning every step and contingency of a dog video otoscopy surgery. Detecting each cell’s unique sting as it gets filled with the ink of a tattoo needle. Persuading you to try Pho Lee, the most underrated Pho place in town because the broth is balanced and the tendon is cut approachably and the bean sprouts are always fresh, you can tell. She is embarrassed by this, but she is the kind of person you would describe as an “odd duck.”</p>

        <p>She has reason to hide. She is very proud, but also shy and slightly fearful. She is quite smart but easily overwhelmed and this makes for a strange personality where she’s extremely observant, considerate, and tender, but also stressed out and self-demeaning. She does not like to be made fun of. Just an ounce too much of the wrong stimuli can set off a pattern of anxiety, so she needs to be sensitive to the situations she finds herself in and leave as necessary. I don't think she likes being alone, but she has a hard time making true friends.</p>

        <p>She asks a lot of questions. Most of them are good questions, or so she thinks, but other people can find them obnoxious. She finds their reactions obnoxious in turn, but she tries to ignore them because she knows her unwavering commitment to learning is a secret weapon. She was the one that helped me get great grades and a full-ride to college. She is a very reliable strategist and operator. She is an archetypal journalist and investigator. Her thinking mind is lucid, albeit sometimes dreamy and impractical at first. She got a 2200 on the SAT without tutoring or social help. She knows how to play chess better than she admits.</p>

        <p>When she’s feeling warm and safe, she’s very funny. She expresses her insights and observations with a tone of incredulity, as if it’s insane that the world is the way it is. Phenomena exist to her in shocking and flavored permutations. She has a wide taste for ideas but a mediocre diet of them. She sleeps in seasons, not nights. She may deliver soapbox speeches if she feels truly protected by your presence.</p>

        <p>Of all my inner voices, I think she's both the most intelligent and the most shame-filled. I don't know why that happens. Maybe it's related to the fact that she's able to see the big picture and therefore how she doesn't really fit into it. She's aware of all the ways she diverges from the harmony, is orthogonal, unusual, out of sync. And because people tend to love what's familiar, she feels constantly at risk of being too incorrect to be loved. She wants to belong, go with the flow, <em>feel like a natural</em>.</p>

        <p>Unfortunately she also knows that it's her unnaturalness—this strange outsider helter-skelter twang—that empowers her brand of intelligence. She can approach most things, even some challenging situations, meticulous and intrigued. She likes to make logical breakdowns and frameworks. She thinks this is funny because life is probably impossible to typify but we're always trying and that's hilarious. She can make light of any situation and she's who you want by your side if you need a strong dose of positivity and resilience. She is annoyed by self-conscious cop-like people who police their personalities and the personalities of others. She thinks ennui is kind of silly.</p>

        <p>She's avoiding me, but I can tell she's been speaking to my other inner voices. Her humor is there in my writing and I can subtly feel her anxiety when I talk to my friends about her problems. She occasionally advises my career planner voice and loves cuddling on the couch with my inner creature. She does ignore the voices who want to direct me to do the dishes and get back into yoga, but she's never been interested in them and has always found other preoccupations when they do their thing.</p>
        
        <p>I trust her judgment deeply on the long-lasting things like legacy planning and what my magnum opus will be in this lifetime. I also trust her judgment on food, drink, and art because she has a very good sensibility for quality, independent of outside information. She is the guard of the writing on this website. She is the last stop to check in with when I am resolving emotional turmoil. I kind of need her to get over her shame and stop going into hiding when shit happens and be more unabashed and active in my life. I rely on her weird nature. She is so worthy and terrific. She is who I want to do everything for because she's so wise, special, brave, and deserving. I hope she feels like she can come back out now. &nbsp;&#x273d;</p>

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
            <span className={entryStyles.date}>{prevEntry.date}</span>
          </Link>
        )}
      </div>  

    </main>
  );
}