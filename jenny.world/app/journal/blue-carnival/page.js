import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Blue Carnival</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/blue-carnival.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        In New Orleans, beads hang from trees.
      </div>

      <div className={entryStyles.body}>
        <h1>Blue Carnival</h1>
        <h6>June 2018</h6>
        <h6>4 min read</h6>
        <p>I’m in Baton Rouge now, and the distance from New Orleans is just enough space to do some thinking uninterrupted by the wailing of a saxophone. Is it disrespectful to say wailing?</p>

        <p>Don’t get me wrong, the wailing is beautiful. I heard some of the most musically wondrous moments of my life in New Orleans. The city’s historical and cultural hodgepodge is very inspiring (apartments with French latticing and hole-in-the-wall po-boy restaurants on the same avenue? What? Is this Vegas’ dream ego? If Vegas were actually real and more well-read?), and my eclectic soul is wowed by just about everything. But I was there long enough to see the same buskers days in a row. The crowds followed the same songs, stopping to reflect on a stranger’s sonic heartache or fleeting harmonica happiness on pretty streets four or five times a day.</p>

        <Image
          className=""
          src="/journal-graphics/blue-carnival/edificios.jpg"
          alt="Project"
          width={1406}
          height={1395}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p className={entryStyles.caption}>Who needs the south of France when you have France in the South?</p>

        <p>This was why I found New Orleans a bit overwhelming at first. There were so many expressions of emotions being evoked, conjured, aroused—and so often. After a while, though, through the carnival-esque noise, I could sense something missing. Some unmet wishes, or yearning for elsewhere, some tough crowds, unfilled tip buckets on the sidewalk. Some returning the next day, and the next, to the same corners on Royal Street, same signs as last time.</p>

        <p>I guess I started to realize that even inspiring momentary splendor for others in the form of a cornet, or masked and beaded dancing, or precious local trinkets at the nightly art market, is a profession. It’s someone’s practice of seeking fulfillment. People do this because this is what they can do to make strangers happy, or part of themselves happy, or at least a living. These are the city’s pretty offerings to its visitors—songs as sweet as powdered sugar—but sweet things so often can make you tired and restless.</p>

        <p>So that’s how a city so happy can wail. Like the rest of us, the city is looking for the best time all the time. The incessant searching—on Frenchman St, on Bourbon St, in every lounge and bar in the evening—has made a festive and fun tradition of the art of finding meaningful delight. Second lines and krewe parades on the weekends are expressions of pride and sweet sugar—New Orleans has been through a lot, but it still knows how to try and be joyful by referencing the past. The medieval influences in the Mardi Gras and parade culture, tied with Catholic antiquity, tied with African spirituality, tied with the graciousness of an old American South all sing and dance together in the humidity. This is what history looks like finding happy hobbies today: their arts confess love, relive histories, and sustain livelihoods. That’s just the way of life in New Orleans. A daily carnival, a medieval fair, seeking the holy grail of elsewhere, somewhere in its history.</p>

        <Image
          className=""
          src="/journal-graphics/blue-carnival/woman.jpg"
          alt="Project"
          width={1205}
          height={860}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p className={entryStyles.caption}>We went to the second line parade of The Divine Ladies, a Social and Pleasure Club in Mid City. It was so much fun. Also, they played Drake’s Nice For What and I wasn’t able to get it out of my head for a week and a half. On Melissa’s blog there’s a fun video of the festivities.</p>

        <p>Even its future-seeking comes from the past. I knew I had to visit at least one psychic in New Orleans. Fortunetellers, who typically use tarot cards that borrow from medieval tropes, line Jackson Square and have offices in every plaza. Though scary or silly for some, psychic readings are fun conversations about intuition, trying to read what we know. Just for fun, here’s a generic reading of my next six months. We talked through the possibilities the cards presented, and my personal reflection and meditation has enjoyed the information. I got a specific love reading and career reading too, but I can’t give all my secrets away on the internet.</p>

        <Image
          className=""
          src="/journal-graphics/blue-carnival/tarot.jpg"
          alt="Project"
          width={1205}
          height={1196}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

        <p className={entryStyles.caption}>Drawn from memory. My psychic told me my spread was very positive—a nice confidence boost!</p>

        <p>From tarot to voodoo, the sheer abundance of fortunetellers in New Orleans is a symptom of restlessness. Knowing—or trying hard to know—what’s next and what’s sweet and how to fill the tip buckets every day seems never-ending. The books we’ve read recently entertain the idea of ennui while seeking meaning in the past, present, and future: from Ignatius’ medieval fetish to his job hunt, John Kennedy Toole paints a perfect picture of a strange man with impossible ideals, settling in Confederacy of Dunces. Ignatius, like Binx in Walker Percy’s The Moviegoer, turns to movies to indulge in some form of temporary fulfillment: only during movies can Ignatius feel superior to life and ridicule its manifestation as film. Binx is quite unlikeable and quite bored, but his internal torment and yearning for elsewhere is contented when he’s in a “neighborhood theater out there in the sticks without a car.”</p>

        <blockquote>“When Fortuna spins you downward, go out to a movie and get more out of life.” Ignatius, <em>Confederacy of Dunces</em></blockquote>

        <p>So that’s how a city so seemingly happy can wail—because in reality, it’s quite blue. On the surface, New Orleans’ eclectic curiosities might seem fleeting. But really, the city knows how to do two things very well: dwell, and distract itself.</p>

        <p>Not that that’s a bad thing at all. Maybe that is just what we’re supposed to do. And though I’m in Baton Rouge now, I still smell like its quirky, nostalgic glamour. I think I will see beads in trees for a long time. &nbsp;&#x273d;</p>

        <Image
          className=""
          src="/journal-graphics/blue-carnival/mardigras-trees.jpg"
          alt="Project"
          width={1205}
          height={766}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />

      </div>      

    </main>
  );
}