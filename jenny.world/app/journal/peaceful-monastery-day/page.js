import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Peaceful Monastery Day</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/peaceful-monastery-day.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>Peaceful Monastery Day</h1>
        <h6>August 2021</h6>
        <h6>1 min read</h6>
        <p>We walked across the bridge to Villeneuve-lés-Avignon through some swanky skinny roads with gated homes and black Mini Coopers. When we entered town in the late afternoon, the streets were hot and nearly empty. The gelato place was just opening and people began to peek out to get in line.</p>

        <p>I was told I would like the architecture in Villeneuve much better since I’m not as attracted to the medieval style. This was correct, and I liked how the buildings were shorter, even though it meant less shade. I like being able to always see the sky!</p>

        <p>We stumbled into a preserved monastery, paid our entry, and sat in the main pavilion under a large tree. Nick painted with his watercolors and I drew observational sketches with ink pen. A Flemish couple approached us to admire our work, commenting that Nick’s painting was better than Zao Wou-Ki’s and that I should caption my drawings with my personal impression of the moment. The man showed us his own work—wooden sculpture—in a video on his phone before sitting down with his companion to sip their afternoon cappuccinos. Before they left, the man returned to say one last thing: Nick should write a letter to his kid, to open when they’re 20. He said he had three children and before they were born, he had written letters for them. Nick replied by pointing to me, saying “That’s great because she loves to write letters,” and the man quickly intervened, “No, not her. A mother has many other things to worry about. The father should write the letter.” I laughed very hard.</p>

        <p>We biked back across the Rhône toward Avignon, but not before we saw a glimpse of a pretty park with steps down to the river. By evening the breeze had returned. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}