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
        const foundEntry = data.find(item => item.writingSlug === "rare-woman");
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
        src="/journal-graphics/rare-woman.jpg"
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
        
        <p>You are very kind and strong and smart, she tells me. But I think you should wear makeup more often so other people might take the time to notice these good qualities too. She brushes bronze dust onto my eyelid as I sit at her vanity. I know what she means. Who we seem is who we are to the impatient people of two-second handshakes. So my mother is honest about her femininity as an advantage. She powders my cheek gently.</p>

        <p>Yet our relationship is actually quite untender and ungendered. When we talk, I send her my overoptimistic energy for the future, which she nods to and recognizes, but trades for advice colder than compassion and older than the rations of some sadder hindsight about her youth. I tell her my dreams. I want to learn recipes, the constellations, more degrees. I want my own business. I want my kids well-traveled. I want to write—I want to write about everything—and I want to be an artist. She says I need a supportive, stable, and rich husband. She says this as fact. Being a woman is simply being human but in a biased, suspicious society. It is hard to be alone. No one wants an educated woman where I’m from, she says. But I’m a driven person, which is very different from what most people want out of me. I have had two failed marriages as proof.</p>

        <p>A lot of people are selfish. She says this as fact. Most love is not unconditional, so test people and look hard for it. You might not always find it. But don’t give up looking for the people who want for you what you want for you. Hold onto these best friends with everything you have. Care for them in their loneliness, and in your sacrifice.</p>

        <blockquote>“When I gave birth to you, I had problems breastfeeding. My best friend would visit me every day for a week with hot towels she warmed up to massage my chest. I could not produce milk. One day, as she massaged me, she quietly lowered her head and sucked my nipple. Milk finally came out. I cry thinking about it now. Who does that? That’s true love.”</blockquote>

        <p>At six months, she sent me on a plane alone to live with my grandma in China for the first four years of my life. She didn’t have the money or time to care for me because she waited tables all day and needed to study at night. When I came back, I was raised part-time by the show The Nanny. Funny, right? Fran Drescher lullabies every night after dinner were never the most peaceful thing. But neither was she, stressed out with her textbooks after two jobs and washing the dishes, just before falling asleep pages too early. And I was surly. She made a silly girl with bad teeth try everything and she didn’t even have time to talk to me about it all. I learned piano and dance and drama and art and soccer and the Montessori method. I learned how to look at life through false eyelashes under big lights, hear it in pianissimo and the beat of a metronome, feel it through the springs of a turpentine brush cleaner, and follow it on mornings through the forested creeks of the salmon hatchery.</p>

        <p>Yet she never made it to any of my ballet recitals. When I tried to quit, she said no. When I sought answers to her aggressive parenting, frustrated by the relentless forces to better my childhood, the easy conclusion, based off all the obsessive dance moms and soccer dads I’d observed, was that she was trying to live selfishly through me. But that always felt false—she never made it to any of my ballet recitals! If her love had that sort of vicarious intention, she would have wished for a play a day. But her love was not selfish, because it was unconditional, and educational. She created a course for her daughter, to make a life she could force to be better. No one wants an educated woman where you’re from, but I’m not from where you’re from. You knew that. So thank God, thank Miss Sarah, thank Kal, thank Coach Charley. Thank Grandma for the gap years, thank your first and second husbands (dad and stepdad), and thank Fran Drescher and George Lopez and Danny Tanner too. Thank you for every teacher. Your methods are forceful and sometimes poorly communicated, but what you have accomplished, both for me and not, will always blow my mind. You are a very rare woman.</p>

        <p>I am 21 and on my own way to becoming an educated, driven person too. I am more aware every day of my advantages, and also my faults. She tells me I’m unrealistic. I say you’re a bit unrealistic too. Not as much as you, and in a different way, she replies, but you’re right, I am. I am an immigrant, a woman, I have a successful career, own four properties, and raised two talented kids with bright futures as proof. And I sleep well nowadays. My skin doesn’t show age. People always try to guess how old I am, and they’re shocked to know I have kids, she teases. You’re vain, I say. I love you. I love you too.</p>

        <p>Every time she hugs me goodbye, I know what she is telling me. Be admired, she says, and find the people you tolerate who can tolerate you. The world is heavy alone, especially under 5’4” and biased, suspicious expectations, but now we have phones. You know my number. In fact, you know all of my numbers. All the ones—and twos and threes—I’ve been performing for your sake since the day you were born. There was a day when you were a baby and you almost died on me. I was 26 and still learning how to take care of myself, and I was holding you, you purple, choking baby. I was crying. I shook and pat and squeezed you until you breathed again. It was a miracle. Ever since, the most important thing I wish for you is to be safe, Jenny. Take care of yourself.</p>

        <p>We watch an old woman cross the street with a cane. Someday I’m going to be like that, she says. Someday we’re all going to be like that, I reply. The day you are like that, I won’t be able to see anymore, she says. She laughs. Remember to visit me at least once a year until I die. You come to me, or I come to you, it doesn’t matter. When I die, stay close to your brother. You both will go far in this life with each other.</p>

        <p>I named you after Jennie Garth, my favorite actress, she tells me. You spelled Jenny wrong, I say. I spelled it my own way, she responds. My name is so common, I tell her. I realized that, she replies. And your last name is very common too. She is smiling. Yes, it’s all common, but don’t worry, she says. You are not.</p>

        <p>Happy 47th birthday to my mom, whose strength is an anomaly. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}