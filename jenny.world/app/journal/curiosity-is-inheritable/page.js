import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Curiosity Is Inheritable, and I Wonder What's After Pluto</span></h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/curiosity.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>Curiosity Is Inheritable, and I Wonder What’s After Pluto</h1>
        <h6>October 2017</h6>
        <h6>2 min read</h6>
        <p>I’m seven years-old and sitting with Mom and RJ, my little brother, at our dinner table. We’re not talking, just eating quietly. Well, they’re eating. I’m picking at the rice in my bowl with chopsticks. The Chinese calendar on the wall behind Mom says 2004. Her eyes droop a little. She toggles between full-time receptionist and full-time mom, barely sleeping, barely keeping up. I’m the smuggest, moodiest kid in the second grade. RJ’s a two year-old who won’t stop kicking the leg of the dinner table.</p>

        <p><em>Thud. Thud. Thud.</em></p>

        <p>Mom fussed with him to stop a while ago, but she’s since given up. We eat to the rhythm of RJ’s kicking. <em>Thud.</em> Well, they’re eating. I’m picking at my rice. Thud. I’m seven, an odd age and at odds with the world. Thud. I stare at one lone grain of rice on the side of my bowl. It looks just like all the other ones in my bowl&mdash;none of which I want. <em>Thud</em>. I’m not hungry. <em>Thud</em>. Then Mom asks me a question.</p>

        <p>I don’t know why she brought it up. In hindsight, I can guess. The older I get, the more I think, “what am I doing here?” That night, Mom must have been thinking about purpose. She’s a Chinese woman who never really wanted to leave China, but followed her husband to America. She raised her kids here and they didn’t know Chinese well, so she had to talk in English. Which was good practice, but she felt empty. She missed her friends. Her husband worked and went to school, so she barely saw him. She must have felt very lonely.</p>

        <p>“Jenny,” she asks, “do you believe aliens are real?”</p>

        <p>Immediately I picture E.T. Then, those dorky, fake UFO videos on TV.</p>

        <p>“No way, of course not,” I blurt out. Real? Those videos were so fake.<em>Thud</em>.</p>

        <p>Mom shrugs.</p>

        <p>“I think I do. We just haven’t met real aliens yet. I’m not sure, but I feel like we are not alone,” she muses.</p>

        <p><em>Mom believes in aliens?</em> I’m still picturing E.T. <em>From outer space?</em> I don’t know enough about space, but I can’t picture <em>a real alien</em>. What would they even look like? How?</p>

        <p>“Aliens are silly. There’s no way.”</p>

        <p>I stare at the lone grain of rice. RJ kicks. <em>Thud</em>. I won’t admit it, because I’m seven and I have to be right, but now I’m thinking. What could be <em>a real alien</em>?</p>

        <p>Mom looks at me curiously. I see brief optimism.</p>

        <p>“I’m not sure, but I think it’s possible. Something might be out there, just like humans. We don’t know yet.”</p>

        <p>We look down and keep eating. <em>Thud</em>. Well, she’s eating. I’m picking at my rice. <em>Thud</em>. I won’t admit it, but now I’m thinking about real aliens and how they could be just like humans. <em>Thud</em>. I’m thinking about Bill Nye talking about Solar System, and the Universe. <em>Thud</em>. Mrs. Thornton did say that space exploration was never done. <em>Thud</em>. We’ve never even been to Pluto. <em>Thud</em>.</p>

        <p>I swallow and roll my eyes for effect, like a full stop to the conversation. I won’t admit it, but now I’m thinking about what’s after Pluto. <em>Thud</em>. I mix my rice around in my bowl.</p>

        <p>“Stop playing with your food. Eat it.”</p>

        <p>“I’m not hungry.”</p>

        <p>Mom looks at me, then at RJ.</p>

        <p><em>Thud.</em></p>

        <p>She sighs. Her eyes droop with resignation.</p>

        <p>“I’m going to take RJ to bed now. Put your bowl in the sink when you’re done,” Mom collects her dishes, picks up RJ, and they leave.</p>

        <p>I sit alone with my rice, silent.</p>

        <p>I stare at the one lone grain on the side of my bowl. I won’t admit it, but now I’m thinking about Earth… What if there are other Earths? Another one after Pluto, just like this one?</p>

        <p>I stare at the grain. By itself it looks so small and alone… but there’s so many just like it… It looks just like all the other ones in my bowl…</p>

        <p>I put my chopsticks down. I’m silent. I won’t admit it, but Mom’s right, we’re not sure what’s out there. I won’t admit it… but I guess there’s a lot I don’t know yet.</p>

        <p>And now… I’m hungry. &nbsp;&#x273d;</p>
      </div>      

    </main>
  );
}