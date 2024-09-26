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
        const foundEntry = data.find(item => item.writingSlug === "hello-world");
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
        src="/journal-graphics/hello-world.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        The super slick on-campus homebase for students of the USC Iovine and Young Academy: The Garage.
      </div>

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>Last week, I moved out of my sublease after wrapping up summer classes and freshman year of college for good. Now that I’m away from campus (finally) and able to breathe air untainted by the certain, distinct smells of South Central Los Angeles, I want to give an introspective account of college thus far.</p>

        <p>Last August, I came to the University of Southern California as one of 22 students in the Iovine and Young Academy. ~*The Academy*~, as we have dubbed it (out of both love and mockery), is a new major funded by Jimmy Iovine and Dr. Dre for students talented in the arts, technology, and business of innovation. By that I mean I am literally earning a “Bachelors of Science in The Arts, Technology, and Business of Innovation.”</p>

        <p>All 21 of my classmates and I take classes together in The Garage, our shiny modular makerspace pictured above. Ah, yes. Welcome to the “it” school of the Los Angeles techsphere. The startup academy. My classmates are a diverse bunch of artists, designers, musicians, entrepreneurs, developers, and combinations of all of the above. I consider myself a graphic and web designer, but with an interest in entrepreneurship. I do freelance design and development work on the side, and I’m invested in exploring the future of innovation. Yes, that last line is featured in all my cover letters.</p>

        <p>Anyway, in order to give sufficient backstory to my experiences, and also to indulge my conceit and talk about myself, I must start this story from the beginning. Though I may seem like your typical stoic and mature young professional today (yep, this is where you nod in vehement agreement), I must admit something about my journey prior to ~*The Academy*~.</p>

        <p>When I was nine, I was very, very invested in the online games of Neopets and Toontown. In fact, I was so invested that I started making Microsoft Paint fanart, which led me to celebrity fanart, which led me to AIM icons, which led me to blogging, which led me to participate in every preteen internet graphics trend circa 2007-11.</p>

        <div style={{display: 'block', width: '100%', maxWidth: '250px', margin: '0 auto'}}>

        <Image
          className=""
          src="/journal-graphics/hello-world/aim-1.gif"
          alt="Project"
          width={100}
          height={100}
          style={{ width: '47%', height: 'auto', margin: '0 6% 4% 0'}}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/hello-world/aim-2.gif"
          alt="Project"
          width={100}
          height={100}
          style={{ width: '47%', height: 'auto', margin: '0 0 4%'}}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/hello-world/aim-3.gif"
          alt="Project"
          width={100}
          height={100}
          style={{ width: '47%', height: 'auto', marginRight: '6%'}}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/hello-world/aim-4.gif"
          alt="Project"
          width={100}
          height={100}
          style={{ width: '47%', height: 'auto' }}
          quality={100} 
          priority
        />

        </div>

        <Image
          className=""
          src="/journal-graphics/hello-world/miley.png"
          alt="Project"
          width={572}
          height={427}
          style={{ display: 'block', width: '100%', maxWidth: '600px', height: 'auto', margin: '1em auto' }}
          quality={100} 
          priority
        />

        <Image
          className=""
          src="/journal-graphics/hello-world/kelly.png"
          alt="Project"
          width={607}
          height={573}
          style={{ display: 'block', width: '100%', maxWidth: '600px', height: 'auto', margin: '1em auto' }}
          quality={100} 
          priority
        />

        <p>It was a merciless addiction for a long, long time. When I wasn’t reading Artemis Fowl or doodling pictures of horses, I was on the computer. Do you remember when memes became a thing? Because I blogged about them. Lady Gaga’s mainstream popularity? I perpetuated it.</p>

        <Image
          className=""
          src="/journal-graphics/hello-world/lady-gaga.png"
          alt="Project"
          width={640}
          height={400}
          style={{ display: 'block', width: '100%', maxWidth: '700px', height: 'auto', margin: '1em auto' }}
          quality={100} 
          priority
        />

        <p>I was so proud of all my graphics that I taught myself some scrappy HTML and CSS and made my own websites to showcase my work. I had a portfolio before a boyfriend. I was a liberated individual.</p>
        
        <Image
          className=""
          src="/journal-graphics/hello-world/imajenation.jpg"
          alt="Project"
          width={1828}
          height={1026}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>This is a screenshot of my website in 2011. XHTML 1.0 Transitional. I was making these things way before HTML5 even came out in 2014. I don’t even know, honestly. It was the height of my graphic design and web development career, though. Anyway, I was definitively consumed by the internet at a young age, but this did not define me. I kept my life lived in Photoshop secret and separate from my friends and academic life as a high school student. Lindbergh High School by day, W3Schools by night.</p>

        <p>In real school, I loved history, reading, and writing. English was my favorite subject by a landslide. Though I involved graphic design later in my high school career through clubs and classes, academically, I was always more concerned with the humanities. The humanities were something I consistently enjoyed, turned to, and counted on. I gained experience as a designer and developer outside the classroom, but within it, I enjoyed exploring history and analyzing literature most. Thus, my design hobbies and academic life never directly and wholly intertwined. In fact, they were consistently distinct aspects of who I was. My hobbies never really converged with my academic passions. Until now.</p>

        <Image
          className=""
          src="/journal-graphics/hello-world/jenny-computer.jpg"
          alt="Project"
          width={2000}
          height={1236}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>The nine year-old in me was attracted to this multifaceted program. To be knowledge-hungry, disruptive, and innovative… I guess maybe sometimes on a good day that could be me. I find myself at the doors of The Garage on the first day of classes. I sit in my classroom of beanbag chairs and whiteboard walls, ready to begin “startup school” and disrupt markets, change the world, make Dr. Dre proud, etc. I have some knowledge of web and graphic trends, my naive understanding of the word ~*innovation*~, a little pride and direction, and a decent amount of sleep every night. Ah, how quickly things can change.</p>

        <p>Professor Belz may be a warm woman, but she is a cold professor. By that I mean she cold calls in class. A lot. By that I mean she will start our entrepreneurship class with a “Jenny, what are the four quadrants of the growth-share matrix?” and expect a prompt, fully-formed, eloquent answer. Yet what would I give her every time? “Oh uh… let me get out my notes… uh.” Uh. Yep, that’s me, Jenny. I gave uhs and wrong answers all year. Here’s a real picture of me, probably right before I had a stutter meltdown:</p>

        <Image
          className=""
          src="/journal-graphics/hello-world/jenny-class.jpg"
          alt="Project"
          width={2880}
          height={1558}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>On top of intense business classes and a hard time improvising everything from class quips to presentations, all nighters were abundant through the year. Cardboard prototyping projects, design mockups, websites, pitch decks, and case analyses on top of case analyses… I had a stressful time. Here’s another real picture of me doing what I do best: struggle.</p>

        <Image
          className=""
          src="/journal-graphics/hello-world/jenny-tape.jpg"
          alt="Project"
          width={2000}
          height={1335}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>Keeping up with classes and sleep and all 5847923 activities I decided to take on my very first year left me in a bit of a daze. My grades deteriorated and my eyesight declined after 10+ hours on the computer every day. Nothing, though, fell as fast as my pride and direction. The most difficult thing for me was adjusting to this world of tech and entrepreneurship. I was turning my favorite hobbies in the world into little more than deadlines for projects I barely understood.</p>

        <p>When I chose this small, sleek, 21st century education in “innovation,” I felt like I was giving up a love for art and fiction. I traded in a certain innocence I found in colors and shapes and design for the hell of it—something I had loved for ten years—for a shiny techsphere. I wasn’t designing and coding for fun anymore. There was now a goal for all of this. The goal was to design and code and manage startups for the likes of Silicon Valley. This was business. I abandoned the humanities that grounded my academic experiences until this past year. I missed social studies and writing and Mrs. Wray’s senior literature class. School, without its novels and history classes, didn’t feel like school anymore. My hobbies filled the academic hole those missing classes had left. A ten year-old love for design and tech turned into school work. There was no distinction. I didn’t even doodle anymore, because doodling was replaced by sketching prototypes and presentations. It was weird, and I was stressed.</p>

        <p>I chased the business mindset: I joined incubators and jumped on every development job. By the end of the year, I got better at speaking and thinking on my feet, and I was more versed in industry-grade design tools and tech lingo. But I was also more business. Somehow coded and designed to function as an “outspoken innovator.” More cutthroat, less empathetic. Proud and grateful, but also not completely satisfied.</p>

        <p>The Academy is a fast-paced entrepreneurship program at its heart, and my first semester as a college student and startup junkie… lacked a lot of perspective. I love design, but more often than not I found myself resenting the work I was doing. As soon as the spring semester in The Academy ended, I decided to take some summer classes. One psychology class and one literature class. No business. This summer was good recuperation time as I learned something other than how to fulfill project milestones. I read a textbook. I read real novels. I watched movies. I doodled for fun. As much as I enjoy the company of the 21 other Academaniacs in class, it was wonderful to be in a lecture with 40 strangers. In my Academy classes, everyone loved to speak up and stand out. It’s a great to thing to work like you always have a chip on your shoulder, but there was something peaceful and unifying about the collective silence in my lecture halls. No cold calling. No one was expected to proclaim any answers, own up to any defeats. We simply listened. And amidst this quieter learning, my clouded, iCloud brain began to clear up.</p>

        <Image
          className=""
          src="/journal-graphics/hello-world/notebook.jpg"
          alt="Project"
          width={2000}
          height={1491}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p>In my psychology class, I learned about a concept called “flow.” Flow is the “mental state of operation in which a person performing an activity is fully immersed in a feeling of energized focus, full involvement, and enjoyment in the process of the activity.” To have flow is to be so invested and passionate about a project that you lose track of time. I think flow was something I struggled with this year. As I pick up my own art projects and design activities this summer, I’m slowly getting back into my groove. I find myself staying up into the wee hours of the morning, making digital graphics, willingly. For hobbies-turned-work, I realize it’s about finding the right work to do. A slow restoration, yes, but I remember why I fell in love with what I do and why I would never give it up.</p>

        <p>To say the least, this year was grueling. To say the most, this year was everything I needed it to be because it taught me about myself, my passions, and who I want to be. I leave my freshman year a tougher person. Through The Academy, I have learned the most in the least amount of time. I am more experienced, critical, and detail-oriented. The most important lesson I take away, though, is this: balance is necessary.</p>

        <p>A few days ago, my friend Troy asked me if I had a blog. I told him I was in the process of designing and coding it. He laughed. “That’s just not an answer you hear when you ask someone if they have a blog. ‘Oh, I’m just coding it.'” It’s a little funny, I guess, that I find pleasure in writing, but also designing and coding. Though I will still enter The Garage and my startup classes again in August, this time I will try to fill my life with more flow. I’m going to bring the joy I find in writing, designing, and coding together, here. To be frank and in-line with this graphic I made in 2009, I imagine this coming year to be slightly anti-intellectual and very work-oriented.</p>

        <Image
          className=""
          src="/journal-graphics/hello-world/school-sig.png"
          alt="Project"
          width={400}
          height={200}
          style={{ display: 'block', width: '100%', maxWidth: '500px', height: 'auto', margin: '1em auto' }}
          quality={100} 
          priority
        />

        <p>But when I find myself bogged down by pitch decks and JavaScript libraries during the year, I will use this blog to find my balance. Be ready for more ~*innovation*~, life stories, funny incidents, weird memories, adventures, misadventures, and everything in between from yours truly. Hello world! &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}