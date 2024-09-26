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
  const [formerEntry, setformerEntry] = useState(null);

  useEffect(() => {
    fetch('/data/journal.json')
      .then((response) => response.json())
      .then((data) => {
        // Find the index of the current entry
        const currentIndex = data.findIndex(item => item.writingSlug === "cardamom-lattes");
        
        // Get the current entry
        const foundEntry = data[currentIndex];
        setEntry(foundEntry);

        // Get the previous entry, if it exists
        if (currentIndex > 0) {
          setnextEntry(data[currentIndex - 1]);
        }

        // Get the next entry, if it exists
        if (currentIndex < data.length - 1) {
          setformerEntry(data[currentIndex + 1]);
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
        src="/journal-graphics/cardamom-lattes-full.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Hibiscus cold brew at Writer's Room on a Saturday night.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        <p>Cardamom lattes, Takis for meals, sliced mozzarella, liquid eyeshadow. Skateboarding again, ballet again, cry-laughing to Seth Rogan’s memoir in the coffee shop. Value World in Middleburg Heights, bachata, chess, overspending in Coventry, living off leftovers. Tiny little leaves everywhere and getting the fleeces out. Sarah asking how many things are you a member of in Cleveland???</p>

        <p>4am bedtime means 11pm first dinner of soup and hot sauce and midnight second dinner of Emmental cheese and an apple. Or first dinner of raw radishes with butter and second dinner of midnight rice and sardines. Nightcap of oat milk and ovaltine while Lila judges me from her bed. Cleaning the house in the red slip with the last two episodes of Queen’s Gambit on in the background. Fighting over hair ties with Cali. Long-distance friends on the phone about rich boys, guitar boys, compost boys, film and photo boys, daily workout boys. But not boys but actually men who put the toilet seat down and hold open the car door and have emotional literacy and courage. And men being knowable but women being unknowable.</p>

        <p>Everyone my age has their job or their city as their Instagram bio. Everyone wants their identity to lead with their job or their city. I have a volcanic impulse to put a list of hierarchically curated emojis or something specific yet abstract like "paisley personality" or "bejeweled digital debris." I want my identity to lead with something about my perspective and aura. But I also want to be common and simple and to fit in and not be totally unapproachable. But I'm not very good at knowing how to do that. I wish someone could tutor me in this. This is a significant battle in my life.</p>

        <p>Enjoying my couch, cranberry crisps, The Pattern, Letterboxd, Pinterest. A really kind and easy breakup. Some other mediocre ones. Wearing bracelets again, and silk, and hair in a claw clip. Hair is long enough for a claw clip. Realizing that it takes me a while to understand and metabolize my emotions, but if I really stay present and focus on it, I can pass a challenging one like wanting to cry due to shame or panicked fluster due to anger within one day, give or take. Writing and writing. Thinking about writing. Writing instead of everything else. Waiting for my writing phase to end so I can get back to my visual art phase, then my career building phase.</p>
        
        <p>Reconnecting after a long time. Rings too small and too big. Midday dates, kombucha for fun, cough drops for fun, three different perfumes based on mood, picking out dresses for friends. Normal nail polish, not gel, Mediterranean bowls, having a cough last longer than a talking stage, sculpture gardens, cat hair everywhere. Accepting the unnamed and yet-to-be-fathomed universe within another person as a side quest, especially because my own is probably more than I can chew for now anyway. Finding my own twinkling eyes in the mirror. Sending peace to all the "wrong" people. Asking ChatGPT how to overcome self-consciousness about being both an ENFP and an ENFJ and which career path to embark on next and whether I’m dorky and strange in a sweet way or off-putting, obnoxious way. Listening to Laura Marling and pretending I’m back in Doha. Noticing when I am complaining or negging or being a hater and giving that teenager inside me a hug. Disavowing my inner personality cop. Dismantling my inner authoritarian judge. Remembering I am nothing more than a big vessel of cosmic love moving toward a common goal, but one that gets the pleasure of wearing blush and dribbling a soccer ball and lighting a candle. Leaving earnest multi-part comments on TikToks, sharing stories on the internet. Learning the significance of the Japanese concept of one thousand paper cranes.</p>

        <p>Feeding Lila earlier in the evening because she reminds me of an older grandma who needs a lot of time for digestion and lounging before bed, and feeding Cali later in the night because I imagine her rhythms to be like an early-20s city girl living it up in London or Madrid or Berlin. Lila's successful elimination diet, creepy man at the alpaca farm, talking about family dynamics on Cassidy's deck, spicy pickle beer, venting over buns. Getting back from a Bumble BFF date around when school gets off and feeling really proud when the high school kids shout and wave me down from across the street to tell me they love my outfit and make hearts with their hands. Mild tummy aches, staring at sequins, YouTubing "jazz dance choreo." iMessage sessions with Monique around 11am most weekdays, awkward and unsuccessful Facebook Marketplace exchange with Larry. Ending up inside Dodd Camera with my dog on a random Wednesday. Pocket Pitbull Patio Party, new favorite tattoo, joyrides. Stopping by the club for 30 minutes and getting mocktails. Belting Remi Wolf on the highway, toe spacers for the bunions, everyone sharing recent design projects in the sibling group chat.</p>

        <p>What else? Daily orange juice, cold brew tea, journaling all night. No Doubt and Fleetwood Mac. Windows down in the car even during the tornado warning. $6 wings, panic at the Spirit Halloween, Doing Things With Gusto: The Playlist. Driving 40 minutes to Chardon for another pair of boots, He’s Just Not That Into You, hot soy milk, cold soy milk, retro City Dogs gear, handwriting letters, overbaking the salmon, Beetlejuice, Beetlejuice, Beetlejuice. &nbsp;&#x273d;</p>

      </div>  

      <div className={entryStyles.otherEntries}>        
        {nextEntry && (
          <Link href={`/journal/${nextEntry.writingSlug}`} className={entryStyles.nextEntry}>
            <span className={entryStyles.direction}>Next Entry →</span>
            <span className={entryStyles.writingName}>{nextEntry.writingName}</span>
            <span className={entryStyles.date}>{nextEntry.date}</span>
          </Link>
        )}

        {formerEntry && (
          <Link href={`/journal/${formerEntry.writingSlug}`} className={entryStyles.formerEntry}>
            <span className={entryStyles.direction}>← Previous Entry </span>
            <span className={entryStyles.writingName}>{formerEntry.writingName}</span>
            <span className={entryStyles.date}>{formerEntry.date}</span>
          </Link>
        )}
      </div>  

    </main>
  );
}