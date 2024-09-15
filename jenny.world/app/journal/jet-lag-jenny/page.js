import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>June Check-In From Jet Lag Jenny</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/jet-lag-jenny.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        The flower-littered balcony of my flat near Hyde Park in central London.
      </div>

      <div className={entryStyles.body}>
        <h1>June Check-In From Jet Lag Jenny</h1>
        <h6>June 2022</h6>
        <h6>4 min read</h6>
        <p>Good morning from London! The streets of Notting Hill are peppered with people of all ages — plotting, laughing, talking — and the weather remains brisk. I have found a wonderful mix of uncanny accents and languages in the restaurants and cafes here.</p>

        <p>The exhibition at Oxford exhausted my body. For two weeks Avery and I had been pouring our energies into the map to prepare for it, and in the meantime I had also been working full time on Dorsia and interviewing more designers to hire. The jet lag was palpable on arrival, and I grew extremely sensitive to people and environments, more so than normal. I began to get cranky during the conference, so I had to skip lunch and two panels to take a nap under a large magnolia in St Catherine’s. I slowed my breathing for two hours, despite the ants from the grass crawling into my ears, and mustered up enough energy to present the exhibition with Lumi that afternoon.</p>

        <p>My energy has evolved since Friday. My arrival in London signified a return of self-control. I spent yesterday doing what I like doing in my most stripped down, basal form: sleep, draw, and listen to music that resonates with my mood. Last night I picked up takeaway — paneer makhanwala — then listened to Feist, in near tears, while I drew illustrations for my upcoming personal website. I’m really excited to publish it one day soon, by the way; I have found a visual metaphor that I really love and feels true to me.</p>

        <p>Presenting Plot Twisters, creating my personal website, and engaging with my career goals recently has made me succinctly aware of some listlessness hidden in me. In the space between all of the projects — literally the moments before and after this exhibition, which is supposed to be a huge milestone — I’ve had to confront the origins of my motivation.</p>

        <p>The friendship of several old and new folks recently has helped these thoughts and feelings flow out. Avery has talked me through their favorite personality typologies to frame the phenomenon of my willpower: I’m something like a VFEL or VEFL in Attitudinal Psyche (not an LEFV as we previously conjectured), led by my volition; something like a 1w2 in Enneagram, in pursuit of my principles; and something like an ENFJ/ENFP or INFJ/INFP, with a preference for structure and heartful exchanges.</p>

        <p>Lumi listened to my confessions and offered her perspective during the Oxford trip, too. I had some admittedly weak moments — all the insecurities about not being intellectual and measurably rigorous enough in the ways I engage with people bubbled to the surface, especially as I mentally recounted my recent past and physically counted all the ways I was out of place in the present, being at an Oxford conference and all. She said, “I’ve noticed that some people really like to learn what other people discover, and some people just like to discover.” When she said this, I suddenly remembered who I chose to be in this life, and I immediately stopped feeling so bad about not enjoying most podcasts (lol). These days I’m my own favorite craftsperson, artist, and discoverer, and my scientific methods and outward exegeses permeate from my personal ways of being. Earl also made note to me that my goals seem very intrinsically decided upon, with fewer specific external achievements mapped onto them. I’ve begun to wonder, playfully and patiently, about all these frameworks: under what circumstances do I fight impulsion versus invite it? How does my stubbornness interact with my indecision? Anyway, I don’t need answers, just companions to observe me and let me observe them. I appreciate philosophizing about inner worlds, and in my best friendships, this continues to be a thread of magical meetings.</p>

        <p>I’m spending today hydrating at Sociale Cafe and walking around the greater Kensington area. This is my first time actually exploring London, believe it or not, and I carried some tension up until now about spending so much time in the UK and not having seen its most famous metro area. I love its walkability so far, and I like to think that the skies are withholding their rain from me as a gesture of welcome. I’m grateful to be here.</p>

        <p>I recently read an interview of an old friend which ended with the question, “What is a quote you live by?” I pondered this for myself, and my quote continues to be a sentence by Kurt Vonnegut I read when I was 20 in <em>Cat’s Cradle</em>:</p>

        <blockquote>&ldquo;Peculiar travel suggestions are dancing lessons from God.&rdquo;</blockquote>

        <p>It’s not as ubiquitous as “you only live once” or something, but I prefer this for its specificity. I entertain the idea often that the whole planet is my home and each destination within it is a room with its own style and purpose. I’m lucky to be able-bodied and collect memories across landscapes and time zones. This year already I’ve met friends and family in the UK, Qatar, the UAE, Malaysia, and the US, and I’ve encountered all kinds of blessings and spectacles. Travel can also be interpreted broadly as just movement of any kind, and I certainly am driven by a will to make, move, and do. It’s been a while since I’ve written down these truths, so I’m glad to share it here with you if you are reading; my spirit has been finding health in making sound logistical decisions and building social confidence recently, so much so that we’ve forgotten that writing is a good medium for — and liberation of — love and self-trust. Anyway, I’ll be in Lisbon next weekend, Chicago the next, the US west coast again for a few weeks, then back here but in Scotland by autumn (I got into school, by the way).</p>

        <p>Sending my love,</p>

        <p>Jet Lag Jenny &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}