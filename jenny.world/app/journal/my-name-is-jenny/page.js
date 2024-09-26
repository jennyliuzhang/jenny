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
        const foundEntry = data.find(item => item.writingSlug === "my-name-is-jenny");
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
        src="/journal-graphics/brief-scotland-update.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
      <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        
        <p>my name is jenny liu zhang, i am a chinese-american, i am a woman, i am only 5’3 but i think my ego makes me seem taller. i am arizona-born, shenzhen-potty-trained, washington-raised. i am heavier than i look. i am an aquarius, to which most people respond “of course you’re an aquarius,” to which i ask “how so,” to which they say “because you’re so in your own head.” i am the oldest child. i can speak passable spanish but struggle with listening. i have the opposite relationship with chinese. i can’t play piano even though i learned for three years, but i have most photoshop keyboard shortcuts, menus, and filters memorized and know the program better than most people and should really be making movie posters and working in special effects for money instead of whatever it is i am trying to do. but i have vivid dreams about business ideas that i write about when i wake up so we’ll see. i struggle with eating too much, too little, and throwing up. in high school, i got a B- in calculus, i tutored 3rd graders, i played rugby briefly, i had two boyfriends i wish i were better to, because i did not deserve them. i am working on being consistent, my core strength, my mental strength, and my sleep schedule. i am reluctant to see a therapist because i am scared of a committed label for my mental state, and commitment to things i don’t understand in general. i can’t swim because i am scared of deep water for the same reason, which is similar to the reason i am scared of heights. but what scares me most is fucking up my kids, or anyone’s kids to be honest. there’s some really disgusting content out there targeting youth that we do nothing about. not to mention all the disgusting content we let pass in our day to day, because “that’s just the way things are.” my mom is 47 but when we go anywhere together people think we’re sisters. she looks very young. i aspire to be like my mom, but more understanding, less erratic. sometimes i think it’s too late, but i resent fatalism. i think about death every single day, more than i think about my best friends or drinking water, not in a depressive way, usually, but in a oh, well, this is life, but it’s pretty beautiful, i have a comfy cotton shirt on and my hair is healthy, and there are many good things about this moment, and the next one, like my best friends and drinking water. i am born in the year of the ox. coincidentally, or not, i am stubborn, very stubborn, more stubborn than i come across, which might be a lot. i once made soup with shrooms. i have three tattoos, five piercings, well, actually just four now, and i want to be the kind of person that wears cute heeled boots but i am actually the kind that wears slip-on shoes or flip flops, but only if my nails are painted. the first nail polishes i ever bought were white, because i thought white was the color of pure, new, blank slates, and black, because i believed in the duality of everything. i was ten. i also used to make my own fonts. i hacked a program that allowed me to change the glyphs of existing typefaces. when i was 19 and sad i would skip all my classes and go on runs from my downtown LA apartment into the elysian forest by myself in the middle of the day. when i was 20 i threw my phone at a wall and cracked the entire screen during an emotional tantrum while my best friend watched, which was very un-aquarius of me, but to punish myself, i kept my cracked screen for 9 months to remind myself not to do that again, which was very stubborn-ox of me. the hardest i have ever fallen in love was also when i was 20, after that tantrum, before the next tantrum, which led me to try to fall out of love, but to be very, very honest, i am still in love, and i resent admitting that, like how i resent fatalism, but there is something fatalistic about this feeling, because it won’t go away, it just stays a part of me, hardening like a marshmallow, and shit, i don’t even like marshmallows, but they’re perfect for what they are, white, pure, new, blank slates, and i bought it, i was 20, i bought straight into it, dived even, but i can’t swim, just barely tread, but now i am tired, so i am not sure what to do except what i have been doing all along, which is be a 5’3 chinese-american woman with many fears, shames, thanks, and memories, and perhaps i am in love, spendthrift, erratic, but i am not sure, just tired, so i will ignore what should be left stale and go to sleep and try to dream and bring what i dream into reality, because on a good day i do, but more likely, i will wake up tomorrow to the same. 
        &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}