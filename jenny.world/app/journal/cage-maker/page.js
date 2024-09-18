import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Brief Scotland Update</span></h2>
      </div>
      
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
        <h1>Amsterdam Jotting</h1>
        <h6>June 2020</h6>
        <h6>2 min read</h6>
        <p>Today I woke up furious and tired. I remembered why. When I was born, my parents ran out of money so I was sent away to stay with my grandparents in China. I learned to draw maps before I could read and no one cared. Then, back to the U.S., my brother and I were babies during my parents' silent meals, late shifts, and night school. I was bullied for being Chinese or coming off as shy or quiet or wearing clothes that didn’t fit me right. My parents worked so hard for us. Still, no bedtime stories. Sometimes, “No snacks this week. We’re low on money this month.” On Sundays, we didn’t go to church. We cleaned offices as a family to make extra money. Psychology labels these early years as a type of resilience called "sustained competence under stress." I would rather punch you than cite this. This is still my life. I carry all of these memories with me, and when I look in the mirror every day, I feel shocked and embarrassed that they're still here. I learned that a friend from elementary and middle school was shot in a parking lot in my city earlier this year. While I fixate on purpose, my mom has been exhausted for as long as I've known her. I too have always felt busy. They expect us both to sprint. I remember wondering as a kid, what does "stress" even mean? I tell you this slew of statements because they're patches of unaddressed fury in my memory.

Whose burden is whose? I'm faraway now, in a new and cold summer in San Francisco. But this burden is still mine. I was radicalized at a young age for no other reason than my lived experience. I'm aware that there is better and there is much, much worse. I'm okay. I feel like I sprint through my life and often run head-on into the bars of a cage, but I'm okay as long as I keep sprinting. I remember that I exist exclusively in the hyphens between my identity labels. "What is a Chinese-American?" "What is a woman of color?" Then, "What is hard work?" "What is poor?" "What is deserving of respect?" You don't need to be anyone in particular to be able and willing to ask these questions. But I whisper my story and no one can hear it. Do they know how sensitive and scared it's all made me? This burden is mine. But I will look the cage makers in the eye one day soon. There is a cage maker inside all of us. Do you know what "stress" even means? I don't care about resilience. I don't care about any of these constructs because they're cages. Who cares about cages?

I have fantasies of open fields, stretchy clouds, and wide, wide skies. I dream of celebration. Back in the U.S., I can still get away in novels, drawings, and maps of a different world. These memories are okay. I can sprint freely here. These memories are built from anger, as a practice exercise for change. I don't love the word "paradigm shift." I'm working on a transformation. Everyone deserves safety, respect, connection, community, meaning, trust, healing, play, clarity, honesty, freedom, growth, expression, and beauty. If your cage maker wants people to sprint so badly, give them the space and freedom to run. I will never accept this as debatable. No, not just "dignity," because you don't even know what that really means, and your commitment to this flawed concept gets people killed. No one has the time for your dumb cages. You don't need to be anyone in particular to be able and willing to understand this. At 24, I know the world will only change through a thousand small actions. Today I woke up furious and tired because I remembered that I have only this one life. But I will share what I have observed when I learn how to say it. Then I will defend everyone else to do the same.



&nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}