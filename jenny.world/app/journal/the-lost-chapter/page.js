"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from "../../components/Tooltip";
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
        const currentIndex = data.findIndex(item => item.writingSlug === "the-lost-chapter");
        
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
        src="/journal-graphics/the-lost-chapter.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        The “Every Wall is a Door” exhibit at Superblue Miami. By Es Devlin, teamLab, and James Turrell.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>Something I’ve learned about myself in the last 1.5 years: I don’t really do traditional first drafts, of anything. Most everything I make, I make relatively linearly and on the first try, for better or worse. Writing, design projects, art projects, whatever. It’s not always perfect and it can take a lot of time, but I do always try my best and it ends up working out most of the time. I’m just not a bullet-summary-pre-sketch-wireframe person. Each paper I’ve written for my Masters was done basically in one sitting, right through. Last December I wrote one that took me 12 hours straight. I sat down around 6pm after work and researched and penned one sentence after another through the entire night, only getting up to get water and relieve myself, and finally submitted the full ~2,000 words at 6:50am the next morning. Then I still worked a full work day after <em>and</em> played a soccer game that next night. No one knew that I was practically on a bender. But I got a <Tooltip text="The UK version of an A">1st</Tooltip> on the paper, and though I may not be proud of everything I make, I was pretty proud of that.</p>

        <p>Anyway, I write this to account for my lack of personal writing and artmaking over the last half year. Since moving to Cleveland, I’ve found it hard to make time for regular journaling, Plot Twisters, and other creative hobbies like working on my website and ideating on my thesis. Balancing my Masters courses while figuring out my home and generally keeping myself spirited as a human have been a major time suck on top of full-time work. It’s May now and the weather is beginning to perk up. I resent the days when it’s terrific out but I am so busy. I hate having to look outside and convince myself that it’s a beautiful day to do data analysis or make a slide deck or whatever the hell. I want to lie in the grass and listen to Norah Jones with my new dog.</p>

        <p>I did get a new dog. First, let’s back track. So last fall and this spring, I completed my last two semesters of courses for my Masters. Honestly, it was demanding and intense. I took an ethics class, two narrative and computational analysis classes, an AI storytelling class, a class on trauma and resilience, and an economics class. For some classes, I had to wake up at 4am to catch lectures since everything is on UK time. I always had readings to squeeze into my days. And of course, as I mentioned, the paper-writing benders. I managed it all okay, but the pressure did make me want to go out every spare night of my weekends and shenanigan and party and dance and play lots of soccer and do basically equally demanding and intense things as a sort of vengeful recuperation. So that was a lot.</p>
        
        <p>Consequently, this made for a very extroverted period, despite having so much to do. This winter and early spring particularly involved a lot of dating, traveling, and traveling for dates. I got to see some of Pennsylvania and flew out to Miami, Florida not once but twice, and not for anything work-mandated. I also played a lot of soccer, including single-handedly organizing several pickup games ad hoc and forming and managing my own 12-person co-ed adult team, the Late Bloomers, for two full sessions. This was on top of transitioning into a new role at work as the design point of the marketing organization.</p>

        <p>Alas, my constitution was not built for this lifestyle. I got sick at some point, and it got so bad that it became bronchitis. I was increasingly less centered as a person, and my sensibilities and standards around love, care, and personal peace became blurrier. Several of my relationships were challenged, including a difficult heartbreak. I became unrecognizably detached from my goals, struggled to reset to my ideal routines, and took an indefinite hiatus from Plot Twisters, which I had never done before, even when I was traveling. This period definitely instilled me with more self-confidence, social memories, and life experience in other ways, but with so many core values on the backburner, including self-care and a project and team I have taken great strides to nurture for over 5 years, I realized I had to reorient myself again. As I write this, I hear a voice inside trying to make sense of these feelings of failure, consigning that maybe this is simply a learning journey that many 20-somethings have to go through. However, I know that glazes over some other emotions I’m still frankly reluctant to touch. I won’t write any more about this phase now, but I will say that it is a sobering thing to reflect upon.</p>

        <p>So, yes, I had a disorienting half year, and changes needed to be made. Two things became apparent to me in early April. First, as certain relationships changed or exited my life, I was surprised by the needs I was left holding on my own. Connection, closeness, consistency, quality time. Second, I confronted a longstanding desire to bring a dog into my life. I had wanted a dog since December 2021, when I was applying to Masters programs and getting ready to leave Blackpool. I told myself, “If you get into grad school, you’re going to settle down and get a dog.” I indeed did into grad school, and moved into my own home, but after almost 1.5 years, still no dog. I caught up with Monique about my plans and she relayed to me advice once told to her partner: “You take care of your pet, and she’ll take care of you.”</p>
        
        <p>It happened quite quickly. I visited two local shelters over a week, and she was the first dog I met at the second shelter I visited. Her shelter name was “Zinnia,” but when I saw her, I immediately thought, “Oh, that’s Lila,” as if by precognition. I walked her around the playspace. She took a few steps then threw her back onto the grass and rolled around, a signature move I know very well now. She was chipper and ate all my treats. I told Julia at the shelter that I really liked her but needed a few days to think about it. I didn’t, though, because that night, I went home and bought her collar online, a pink nylon one custom embroidered with “Lila” and my phone number. That was a Sunday, and I brought her home the following Thursday.</p>
        
        <p>Lila is a 6 year-old stout little pitbull mix. 45 pounds and has a history of being abused and overbred. She was found as a stray but was microchipped, so the shelter got in touch with her original owners. They said they had her for her first two years of life, which explains why she’s housebroken, but then they rehomed her in 2020—and whatever happened in the next four years is a mystery. Clearly she fell into the hands of people who mistreated her and only used her for breeding. In March, she was found as a stray and seemed to have just given birth, so whoever had her must have taken her babies and then dumped her. Her belly and nipples are really saggy. She has some old wounds on her tail and bottom. She’s missing most of her front teeth, probably from being caged up all the time and anxiously gnawing on the bars. But her temperament is so sweet, despite the trauma. She is incredibly trusting, against all odds.</p>

        <p>Last year I started a running iPhone note to track tidbits of my life in lieu of making time to sit down and journal:</p>

        <ul>
          <li>Cottage cheese addiction</li>
          <li>Searching for memes about climate change for group project</li>
          <li>Running red lights</li>
          <li>Making homemade chocolate and having it take 4 hours longer than anticipated</li>
          <li>Driving horizontally through parking lots</li>
          <li>Flossing vigorously</li>
          <li>Calling IKEA about missing shelf pegs to learn all along the shelf was not an IKEA shelf</li>
          <li>Switching doctors and dentists for the 4th time in 2 years</li>
          <li>Gunning 90 mph in my Honda Fit along the lake on the way to soccer at 10pm</li>
          <li>Moving heavy wood furniture up my oblong stairs by myself</li>
          <li>Texting my boyfriend regular updates about my stomach cramps</li>
          <li>Resisting buying a $452 glass sculpture</li>
          <li>Laughing at my own jokes in my own house alone</li>
        </ul>

        <p>Lila has brought a lot of joy and silliness to my life. She has also reminded me that my life is unique and hilarious in general, because now I don’t have to bear witness to it alone. </p>

        <p>It occurs to me often that I am most definitely not an old soul. I like being friends with people who are or believe they are old souls, but I’ve concluded that I am a total baby soul. Like, still finding my footing, not tall enough to ride most rides, naive and gawky and terribly foolish soul. I will die this life with a slightly more mature soul God willing, but man, this is not going to be my last rodeo. I may achieve presence and love and compassion in this lifetime, but I have too many other lessons before those capstones of total unity with the universe and transcendent surrender. I feel this about myself deeply.</p>

        <p>Something tough about never doing quick and strategic first drafts is that when I go too far down a certain creative direction, like defending a certain argument in a paper or committing to a specific vision for a design project, I tend to fall into the sunk-cost fallacy if I discover it’s not working. That, or I get so close to running out of time entirely so I need to make the best of the work I’ve already produced, even if I know it’s not great. When I have boundless time to work on something, like my personal website, I find myself creating with seemingly no end: minorly adjusting paragraphs and webpages along what feels like an infinite recursion, in final-polish, high-fidelity iterations.</p>
        
        <p>What I am hoping for, though, is that the recursion is not infinite and I do arrive at the base case: a perfect end product that wows my soul and makes me feel ecstatic levels of revelation, the thing that proves that every nudge, edit, and transformation was the right decision. As far as treating my life as a creative project goes, I think I’m living it like a final draft too, making moment-to-moment choices and fully committing to paths without much premeditation. I write a paper, I stress, I play soccer, I burn out, I sleep, I turn inward, I seek kinship, I get a dog. I commit to my decisions, even when they’re potentially bad, sunk costs, and I make the next one based on where I’m at. No grand plans, just trusting my small intuitive refinements to figure out how all the themes fit into a positive, consistent, and cohesive body of work. &nbsp;&#x273d;</p>

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
            <span className={entryStyles.date}>{nextEntry.date}</span>
          </Link>
        )}
      </div> 

    </main>
  );
}