import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Syncopated City</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/syncopated-city.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Sketches of the players at Preservation Hall.
      </div>

      <div className={entryStyles.body}>
        <h1>Syncopated City</h1>
        <h6>May 2018</h6>
        <h6>3 min read</h6>
        <p>If Paris is the City of Love, then New Orleans is the City of Careless Love.</p>

        <p>It’s currently 1am on a Tuesday and I just got back from the Maple Leaf Bar, where I was caffeinated by live jazz. I’ve been in New Orleans for a week now and have walked a total of 110,397 steps in many different neighborhoods, which is just enough to offset (most of) the beignets and fried food. It’s still not enough to really understand where I am, though. There’s just so much going on in this city.</p>

        <Image
          className=""
          src="/journal-graphics/syncopated-city/marlboro.jpg"
          alt="Project"
          width={1505}
          height={1007}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p className={entryStyles.caption}>I walked around the French Quarter on my first morning in New Orleans. This was the first thing I saw on the ground.</p>

        <p>Careless Love is a staple jazz song played by the famed Buddy Bolden Band of New Orleans, the central subject of our current book, <em>Coming Through Slaugther</em> by Michael Ondaatje. The band doesn’t have a day-to-day fame, though, because when people on the trolley ask me what book I’m reading and I tell them it’s about the Buddy Bolden Band, they don’t recognize the name. Their fame is a secret veneration, kept alive by scattered jazz connoisseurs, those who know the history.</p>

        <p>Honestly, I was expecting the culture here to be more… consistent. By that, I mean I naively expected almost everyone in New Orleans to love gumbo and appreciate jazz and have a fantastically costumed story ready to tell at the slightest mention of Mardi Gras. Obviously, no culture can be truly reduced to its stereotypes, but I’ve realized New Orleans seems to have the quirkiest conjunction of interests and pasts that make it an impossible postcard.</p>

        <p>An artist I met told me that as the city branches out from the French Quarter into different neighborhoods, it becomes distinctly less Creole, less structured. New Orleans unfolds irregularly into fusions of tradition and eccentricity, from genteel Garden District to notorious Central City to artsy Marigny. The histories of the city are scattered along the Mississippi this way, and each of these river bank improvisations tell their part in New Orleans’ offbeat, multicultural biography. If Paris is the City of Light, then New Orleans is the City of Voodoo Candles, too.</p>

        <Image
          className=""
          src="/journal-graphics/syncopated-city/featherman-woman.png"
          alt="Project"
          width={1805}
          height={850}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p className={entryStyles.caption}>The great thing about illustration is that I can capture people discreetly.</p>

        <p>Its belief systems are as syncopated as its jazz. I listened curiously to Careless Love at Preservation Hall the other evening: like the city, it was funky to parse at first too. Uneven movement from bar to bar, each neighborhood is its own melodic venture, self-aware of both its echoes of the aristocracy and the escape of it. Buddy Bolden and his friends improvised new traditions. Less Creole, less structured, in every direction.</p>

        <blockquote>But there was a discipline, it was just that we didn’t understand. We thought he was formless, but I think now he was tormented by order, what was outside it. He tore apart the plot—see his music was immediately on top of his own life. Echoing. As if, when he was playing he was lost and hunting for the right accidental notes… He would be describing something in 27 ways. There a was a pain and gentleness jammed into each number.</blockquote>

        <p>New Orleans’ personalities live a short walk from each other, and contradictions are split by single streets. Secret venerations, connoisseurs, and careless, syncopated loves all rub shoulders. Jazz and blues, voodoo, Creole festivities, and southern grace all claim their own regimes, transgressing a unified tradition and expected rhythm. I don’t think I’ll ever understand—there’s so much going on to know every history.play</p>

        <Image
          className=""
          src="/journal-graphics/syncopated-city/players.jpeg"
          alt="Project"
          width={1706}
          height={940}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p className={entryStyles.caption}>Players at Preservation Hall, where photos weren’t allowed anyway.</p>

        <p>I have absolutely concluded, however, that New Orleans is passionate. Every neighborhood is powerful and hot and artful. If Paris is for the airy, accordion love ballad, then this city is for the romance of sweaty jazz and deep bass. New Orleans loves, but unconventionally, magically. Pass any bar and hear trumpets celebrating improvised love, abridged love, quick love. Offbeat, off-brand love. This city belches its odes to love in vain, a beautiful self-destruction. In humid heat, New Orleans fantasizes about a better romance.</p>

        <blockquote>The photograph moves and becomes a mirror. When I read he stood in front of mirrors and attacked himself, there was the shock of memory. For I had done that. Stood, and with a razor-blade cut into cheeks and forehead, shaved hair. Defiling people we did not wish to be.</blockquote>

        <p>In some way, that is what artists do. The crux of Buddy Bolden’s legacy is decadence. The labor of creating something worthy of secret veneration is a self-aware, even inconsistent or impossible process. Uneven movement from bar to bar, New Orleans is the oddly fused and syncopated art form. New Orleans exists for the scattered, passionate connoisseurs, for those who want to understand just how deep its eccentric histories go. It is not a careful story, but it is about love.</p>

        <p>On Saturday night, I asked a typewriter poet on Frenchman Street to write a poem about me:</p>

        <Image
          className=""
          src="/journal-graphics/syncopated-city/poem.jpeg"
          alt="Project"
          width={1174}
          height={806}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        
        <p>So I’ll keep looking and listening. An uneven movement from bar to bar. Which means you might find me with a drink in hand in Tremé tomorrow night. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}