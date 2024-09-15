import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Fast Sentimental Love Note to the First Edinburgh Chapter</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/fast-sentimental-love-note.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Gently muddied shoes from a walk on Dean Bridge.
      </div>

      <div className={entryStyles.body}>
        <h1>Fast Sentimental Love Note to the First Edinburgh Chapter</h1>
        <h6>November 2022</h6>
        <h6>2 min read</h6>

        <p>Tonight — quick — before I forget: I worked all day on Dorsia and ate leftovers from Rice Box, my preferred Chinese takeout place. I love their egg foo young and pak choi with scallops. On the days I’m too tired to cook, I will walk across the street to order my meal around 5pm. Easter Road twinkles in the evening with homecoming traffic and funky hipsters in shiny headphones. I am so lucky I landed Danny’s place this fall. This is the best flat, a great location, a perfect fit for my needs. At 7pm I break from my meetings to walk to make my 7:10pm pilates class. I love to wear my headphones and hear James Blake and feel the breeze on my face, even for just a few moments. Then pilates is always so wonderful. I like to feel the tendrils of my core fold, expand, shake. We have a wonderful, intimate pod that has met every week this fall. The classes are capped at 5 people, and usually it’s just 4 of us plus Amanda, our excellent instructor. We love-hate inner thigh exercises and rollers and the magic circle. We laugh about the weather and their kids and back pain and all the silly little life things, the important things. I always leave so full of love. Perfect Thursdays. Tonight especially. At the end of class Amanda brought out a bag of chocolates for me as a goodbye gift, since it’s my last class and I won’t be back in Scotland until the spring, maybe perhaps. If I ever come back, my KBC Pilates classes will be a first destination, then a recurring one.</p>

        <p>Other notable destinations: the Dean Bridge, Bell’s Brae Bridge. Dune Walk, specifically the lake with the swans. New Town. I like Pho, the only pho place in all of Edinburgh, in St. James Quarter. Advocate’s Close, my favorite close. Stockbridge in general. I like the trinkets at the Independent Zebra, a gift shop in the neighborhood. And I love Soderberg. Can’t get enough of those cardamom buns.</p>

        <p>What else? Soup for breakfast, Taylor Swift in the drizzle, tea with a tarot reader, Water of Leith, muddy paths, pastries with black tea, buying tofu at Co-op, journaling in the warm cafe, the mycelium documentary, six things on my to-do list, getting the time zones wrong, vegan Singaporean recipes, positive people in a studio apartment, “What is American food?”, cult movies and movies about cults, shivering in solidarity.</p>

        <p>I fell in big huge fat rainy love with this city. I can’t believe I was lucky enough to choose it, for it to be here, so full of activities and cool people, waiting for me to make a home in. There are so many experiences I’m not accounting for in this. I can’t even gather all the memories. I can only recognize their impact on me, this warm fuzzy feeling, a smile on my face and a little happy sting in my eyes and nose.</p>
        
        <p>Love you Edinburgh, looking forward!!!! &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}