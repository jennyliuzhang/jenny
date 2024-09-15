import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Put It Out of the Mind</h2>
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
        <p>Managing anxiety</p>
        <p>My phone has been dead for 5 days. Barktober fest at Taps and Tails. Wiener dog race.</p>
        <p>Applying for a fellowship, app due October. I put it out of mind because I realized realistically it would take me 20–25 hours to complete an application for, and I don't need to worry about that right now. &nbsp;&#x273d;</p>
        <p></p>

      </div>      

    </main>
  );
}