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
        const foundEntry = data.find(item => item.writingSlug === "lockdown-in-san-francisco");
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
        src="/journal-graphics/lockdown-in-san-francisco.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        The train tracks we would always walk through during our daily walks. Sometimes fennel grew between the tracks.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        
        <p>I walked my lap around Dolores Park early enough this morning that the dogs outnumbered people. It was great to see owners with one dog, two dogs, or more than four. All shapes and sizes running and sniffing on the short green grass.</p>

        <p>Nick and I are committed to a morning routine now after a few weeks of waking up too late and eating chili for breakfast. We brush our teeth together, then I go on a walk while he does push-ups and then sits down to write his “morning pages,” a stream-of-consciousness journaling exercise. When I return home, I make breakfast, and he talks to me about his ideas while I write them down. We’re compatible this way: he prefers talking to writing because he’s a perfectionist writer. But he’s full of bright ideas. I like to take notes even though I’m sometimes wrong. I write a transcript and give him ways to structure his ideas for him to look over later.</p>

        <p>I know that dogs should be walked every single day, but I wondered about how often exactly the owners at the park walked their dogs. How precise are their schedules? 8:00am sharp? How long are their excursions? Do they ever miss a morning?</p>

        <p>One year ago I never could have imagined loving and appreciating so wholly a person I hadn’t met yet. I never could have imagined living in San Francisco again, a city I’ve only previously lived so briefly and awkwardly. My body holds scenes of new and lost friends, odd first dates, sunny urban adventures, and heart struggles. I was so obsessed with figuring out what I wanted for myself without knowing what I needed.</p>

        <p>I had an open and hopeful conversation yesterday with Cat. The last few days I’ve been preparing taxes for myself and Plot Twisters, and I was shaken by how much we had been through in the last year. In my reflection, many emotions flooded my nights and days, including exhaustion, anger, loneliness, and anxiety. I invested so much of my time as well as some money for mixed results. We’re very close to where we started output-wise, but I guess we know a lot more. I feel more confidence in myself and others, and I’m more comfortable now than ever expressing my feelings through words. Plus, I made friends and met so many interesting humans, even during a pandemic. I’m in awe of the adventure so far.</p>

        <p>Forgiveness is the biggest gift I can give myself, and it’s one I’ve been studying and crafting for a while. I relate forgiveness to self-nurture. Recovering from an eating disorder was a giant milestone, and every hurdle in my stability and interpersonal life this past year has also shaped my understanding of this gift. And now, every day I can offer myself a small dose of it in earnest. I forgive myself for little things, like eating an entire loaf of bread for dinner, and I forgive myself for the big mishaps too, like being a pushover when my health was on the line.</p>

        <p>Big wellspring of happiness.</p>
        
        <p>Usually, when I wake up before the sun, I jump immediately on my to-do list. My work begins peppered by anxiety and a fear for how short the days are. Recently, these days only come once a week. Now, I’m typically still in bed long after the neighborhood birds have started singing. I just breathe in the dark and then slowly collect my intentions like I left them out scattered the night before. Sometimes, I gently carry myself down the block to walk around the park.</p>

        <p>I’m at another point of confusion with Plot Twisters. This time, I’m stuck on decisions for the game interface, and it’s simply because I don’t know what is possible and maintainable. This standstill affects the game imagination, workshop, and the rest of the work. If the medium is the message, and the experience is the form, then I should start building.</p>

        <p>Leaping into construction with no clear view feels overwhelming, but I remind myself that I don’t have to see anything yet. I’ve spent the last year talking, trying, describing, and erasing. The picture is as hazy as ever, but I know its ethics now. I know what it means. What it will feel like when it enters certain rooms and meets different people. And a big part of a creation is its implication. So I feel better. I can leap into construction with a clear voice, and that’s new.</p>

        <p>At Dolores Park this morning, a jogger, a walker, and a sidewalk painter were all standing on the southeast corner gazing up at the big white oak by the sidewalk. A woodpecker was pecking loudly from the tree. The group of three shielded their eyes from the sun as they tried to peer into the tree. Then they tried adjusting their stances, and then moved around in the shade to check if they could catch a glimpse of the loud bird. Meanwhile, the woodpecker’s pecks resounded like a deep bell. It was like this fast and full sound was being born from the sky, and the passersby tried different approaches to witness its source. This is sometimes what I feels like I’m doing for my creations. It’s like I’m just a random person looking for source of a unique sound. I’m just standing around trying things. I don’t know. Sometimes I’m close and sometimes I’m not, and both are okay. I read about something similar the other night in Julia Galef’s book, The Scout Mindset. A core point is that we should practice the accuracy of our confidence. It’s more important to know when you are right and wrong than to be more right than wrong.</p>

        <p>I’m excited to leap into three.js. I’ve tried at least two times previously to study it, but now I have Nick to mentor me on better habits and learning practices for code. I also have more confidence this time around. I’m now wrapping up a couple of freelance projects—under NDA, so I won’t speak too much—and I experimented with some new technologies. It has been fun to be in the weeds. I feel more comfortable navigating unfamiliar domains with patient curiosity. In this detailed technical work, I now give up less easily and I’m okay with killing my darlings, even the ones that required the most frustrating labor. As a result, I feel better prepared to study three.js. I want to say to myself, “finally.” Like I am finally I am doing this. But this word feels uncharitable to my journey getting here and all the cool things I’ve learned and people I’ve met.</p>

        <p>Exploring new tools is such a pure experience, when external pressures for output are removed or at least ignored for the present few hours. Emergent play. And the best thing about where I am now is that I’m not just aimlessly emerging anything and whatever. This play is now also precise, aware, and intentional. As a player, I have a voice. As I play, my voice will be crystallized into a medium. I’m more accurate and speedy than before. I don’t even have to think too hard about it!</p>

        <p>Instead of “finally,” which isn’t appreciative of all the much needed talking, trying, describing, and erasing of this past year, I will use the word “next.” Next, I’m going to try building something, even though I’m not entirely certain what I see yet. Before this year, I was quite firm that time came in lines and that wise communication looked a certain way. But now I’m not sure about any of these things, and I’m also thrilled that I know I’m unsure, because at least I can detect my own inaccuracy. Perhaps honesty is the value here. In any case, now I’m confident that at a point of confusion, whether its source is in the weeds or hidden in the trees, I can always just try something. I’m going to explore a new software and see what happens, and I’m going to continue being nice to myself even when I don’t wake up early. My days don’t have to be a line because they can be any shape they wants to be, something like a gentle week-long morning, or fast and invisible and deep like a bell. Finally, but not finally. What I mean is next, as in, for my next trick. For my next trick, I’m going to sustain my patience for myself. What could be a more important first step for anything? &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}