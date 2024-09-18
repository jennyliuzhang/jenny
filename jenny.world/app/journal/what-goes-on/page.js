import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>What Goes On?</span></h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/what-goes-on.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Chasing beachfront sunsets in Blackpool, England.
      </div>

      <div className={entryStyles.body}>
        <h1>What Goes On?</h1>
        <h6>November 2021</h6>
        <h6>3 min read</h6>

        <p>Nice to be in England. I’ve adjusted to the locale, the weather; I’m still learning about the people I live with. There is a strange division of labor in this community: the only people who do the caregiving chores, like cooking and cleaning, are women. They’re paid to, but I wonder about the extenuating structures that led to them working this job. Cynthia and I are the only women who live in this house who don’t work to stay.</p>

        <p>In the past few months, I’ve gotten much better at communicating my observations. I won’t stand for disrespect in conversation anymore, and will demand clarification if something isn’t clear. I support myself and others to get feelings out in the open. I have accepted way too much bullshit from ridiculous people in my adult life so far. At the end of the day, I don’t think I’m a “chill” person. Chillness easily becomes complacency with bad actors and fallible structures, and I don’t want to tolerate complacency.</p>

        <p>The people I speak most to here are Nick, Cynthia, Avery, and Lumi. All very awesome. I drink coffee each morning, socialize during my breaks from my computer every few hours, and go on walks when the wind and rain aren’t so bad. I eat vegan, except for eggs every few days, and I take vitamin D and collagen supplements when I remember. I use Discord to share links. I play Dungeonworld on Sundays.</p>

        <p>Sometimes I still feel self-conscious when I ask for what I need. I think, “Why do I feel like the only person doing this?” Maybe there are a few kinds of people. First, people who do ask, but in more subtle and polite ways, yet without people-pleasing or flattery; these people know how to flow with their environments to align their values with others’. Then there are people who are worried to ask and suppress or repress their feelings. Then I guess there are people like me, who are just getting used to their limbs, their own agency. Self-awareness has to be practiced, or it’s lost and useless. I realize that in order to grow, I have to be uncomfortable pretty often—consistently, reflectively, and socially.</p>

        <p>What else?:</p>

        <ul>
          <li>Plot Twisters is exhibiting at the United Nations Internet Governance Forum in December!</li>
          <li>Had parsnips for the first time this month. They are awesome. Love them dearly. Really good when they’re baked. Great smell.</li>
          <li>I’m applying to Masters programs in the realm of digital social science, technology &amp; media studies, and futures studies. If I get in, I would enroll next fall 2022.</li>
          <li>Because we live a 2-minute walk from the Irish Sea now, Nick goes for a cold swim each morning. A real Wim Hof champion.</li>
          <li>I sent two thank you notes today. One to an academic advisor, and one to Marina at Alchemist’s Valley for the beautiful now-healed peony tattoo on my upper left arm.</li>
          <li>Cynthia said something the other day like “artists: creating hi-resolution versions of their experiences,” which I liked.</li>
          <li>This month has been stressful. I struggle with written verbal communication, am having a lot of taxing conversations about emotions, and have been struggling with holding tension too long in my back.</li>
          <li>Overall, though, I have a resurgence of confidence.</li>
          <li>I learned some NextJS.</li>
          <li>Before he left Blackpool, Jason and I talked about how the only way to get better at communicating gracefully is to communicate often, and to be unafraid of being awkward. Whatever that cliche is about growth happening outside of comfort zones is accurate. He said something like, “It’s like that saying, ‘if you’ve never missed a flight, you’re probably getting to the airport too early.’ If you never rouse any emotions or conflict in conversations, you’re probably not talking about anything that matters deeply to your values.” He also said it’s okay to be on either side of the target. Too aggressive or too quiet some days is okay. No one is perfect, we move on, and maybe we get better. &nbsp;&#x273d;</li>
        </ul>

      </div>      

    </main>
  );
}