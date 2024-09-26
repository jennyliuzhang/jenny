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
        const foundEntry = data.find(item => item.writingSlug === "concerns-of-spiritual-beingness");
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
        src="/journal-graphics/concerns-of-spiritual-beingness.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        My framework for conducting oneself as a spiritual vessel on Earth.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>
        I’ve always appreciated the quote, “We are not human beings having a spiritual experience. We are spiritual beings having a human experience.” I first saw it when I was in New Orleans nearly 4 years ago, and I still meditate on it often. This is a recent jotting-of-thoughts about spiritual beingness.</p>


        <p>While listening to Art Garfunkel croon on "Waters of March" as I gather my laundry on Sunday, I remember the work I read by Dr. Emily Holmes about how the visuospatial demand of playing tetris immediately after a traumatizing situation can disrupt the development of PTSD longer term. I bite into a steamed bun as I load my sheets into the washing machine and think about my favorite movies, the ones that left a real imprint on me, and how they might also have been cognitive structuring devices to help me move through emotional stimulus that I don't even remember now. I find it hard to believe looking back, and can feel the strings in my throat preferring to believe I was a smart and self-aware being that sought out distractions intentionally, but the wisest me knows I'm a sheep to my body's intuitions. The strings in my throat are dried out by the steamed bun, which wasn't newly steamed but hours ago, so it was a bit chalky and tough to chew down.

        I'm busy. Projects and freelance and meetings and Maybe I have too few hours to do too many different things. But I also like this feeling. I feel like I'm making bets with myself, and it's a fun game.

I've come up against a wall. I've sensed it for a few months, but now I've arrived. Two years of being completely free to roam have passed. Part of me looks forward to even more adventure, but another is tired and would like to find her community now. This finding part is not easy. I even told Jeff yesterday that I feel like I'm too action-oriented for academia, but too slow-moving and conceptual for the world of business. I guess there will be adventure in the finding.

I'm going to apply to grad schools later this year. I need to find programs that might be a good fit, then try my best. I need to remember that dressing myself up can be fun. Many portfolios and essays to write. I'm scared of preparing a writing sample. But, also, I have several months to look forward to it.

I hope to travel as I do that. I'm going to Malaysia in two weeks.

insignificant poetries
poem 1

outspoken bandana hair orchid mother essential oils loving shower therapy traumacore escapist mildly addictive personality with divorced parents and cultural dysphoria grocery shopping every other day text wall prone vagabond practicing nonviolent communication long walks in the morning "i don't fast because i used to have an eating disorder" internal family systems training with friends on the phone following over a thousand people on tiktok disorganized attachment malbec spritzer whiskey ginger multilingual for aesthetic medium length nails for utility long audio message irritable bowel syndrome lactose intolerant except for paneer and pizza heavily tattooed under the turtleneck doc marten blister scars tarot for emotional regulation reusable produce bags words of affirmation love language go to song radio dehydrated can't sleep without a sleep mask type femme

poem 2

what i mean by prayer is deliberation. "like, god, give me space," i said earnestly. selva and i snuck away for 2-riyal chai teas with the real condensed milk. little saccharine sips helped me fall forward with my day, for better or for worse. on my to-do list organized by date, deadline, and soul intention, i include all the major and minor obligations for my livelihood as well as the task "take nothing personally." you know, i don't know if i will ever get to cross that out! for now i carry the burn out in my shoulders and indecision in my stomach. though i wish i could throw it all into the gulf, it's going to be fine because even if i don't recognize my limits, my body does and she regulates well. the "crossfade" feature on spotify blends the ends and beginnings of songs when they change from one to another. my inner sentimental teenager tries to map the comfort it gives me into a metaphor about seeking easy and clean transitions in my life. it's because my time on earth feels a bit crowded these days, and i am mildly addicted to shirking patience and compassion for myself. i keep in mind, though, that just by drinking water consistently and doing a few mobility stretches for 30 seconds i am practicing being a healthier human. in this last sentence i almost used the word "better" instead of "healthier," which already says something so intrinsic about my values. i am considering taking probiotics and writing more again with the hope i cure myself of any self-victimization and fear left in my body. hope is one of the only useful tendrils in my narrative, and like prayer, is also what i mean by deliberation. on the days i forget that humans are fallible by design is when i need to pray and deliberate and hope the most. i seek to the availability for compassion so i can forgive myself for my winding writing style, for overindulging in sugar and other drugs, and for believing that sometimes i deserve the shame i grip to with white knuckles.

poem 3

sidequests: stop being addicted to coffee dance 



&nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}