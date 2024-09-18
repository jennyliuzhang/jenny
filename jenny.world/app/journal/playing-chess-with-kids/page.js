import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Playing Chess With Kids</span></h2>
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
        <h1>Playing Chess With Kids</h1>
        <h6>August 2021</h6>
        <h6>1 min read</h6>
        <p>When I first got my Honda when I was 22, I bought a set of fuzzy dice to hang from the rearview mirror. I drove all around and up and down California and Washington and in between with </p>
        <p>I learned how to play chess from my ex-boyfriend, two ex-boyfriends ago. &nbsp;&#x273d;</p>
      </div>      

    </main>
  );
}