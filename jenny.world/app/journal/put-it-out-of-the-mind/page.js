import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Put It Out of the Mind</span></h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/put-it-out-of-the-mind.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Taken at Majestic Meadows Alpaca Farm in Medina, Ohio.
      </div>

      <div className={entryStyles.body}>
        <h1>Put It Out of the Mind</h1>
        <h6>October 2024</h6>
        <h6>1 min read</h6>

        <p>My phone has been dead for 5 days. Barktober fest at Taps and Tails. Wiener dog race.</p>

        <p>Back in LA, wonton party no phone. 1.5 months without phone</p>

        <p>Applying for a fellowship, app due October. I put it out of mind because I realized realistically it would take me 20–25 hours to complete an application for, and I don't need to worry about that right now.</p>
        
        <p>Managing anxiety. My new spiritual-guide-energy-reader-friend-advisor Hala. Pause, breathe, be present. Clock.</p>

        <p>Making new friends. Dave. Taylor. Bumble BFF. No dating apps. But friends? Yes. Always can use more friends. How does this person fit into your life? No questions. Helps. Taylor is an ambivert. I'm an extrovert.</p>

        <p>Opposite of emdr. Focusing my eyesight and letting the world pass along.</p>

        <p>What else? Lila's successful elimination diet. Creepy man at the alpaca farm. Talking about family dynamics on Cassidy's deck. Volunteering at the Pickle Festival. Going to Abundance as a yearly tradition. Pink beer. Haggling with Larry on Facebook Marketplace. Cry-laughing in the cafe while reading Seth Rogen’s memoir. Pocket Pitbull Patio Party. Taking the Olympus to Euclid Creek. Being spendthrift in Coventry. Beetlejuice, beetlejuice, beetlejuice.</p>

        <p>Mostly, I'm collating all my past writings. Lots of really exciting stuff. Emotional stuff. Feelings of precipice.</p>

        <p>I'd like to channel the precipice. That summer when I was 21, I saw several psychics because I was direly overwhelmed by the paths ahead of me. A professor told me that I should have it all sorted by the end of my junior year. One of them told me I think I'm confused but I'm not. "you think you’re confused but you know what you want to do, and you’re all over the place." &nbsp;&#x273d;</p>
        

      </div>      

    </main>
  );
}