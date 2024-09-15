import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Last Week, I Bought A Ripe Pink Rose</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/vaccuuming.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>Last Week, I Bought A Ripe Pink Rose</h1>
        <h6>May 2019</h6>
        <h6>30 sec read</h6>
        <p>Last week, I bought a ripe pink rose at the Los Angeles Flower Market. I’ve seen it before on the lips my mom wears while doing exchanges at the mall. Baby pink, but not baby in a fragile lace crib, but baby on the Pacific Coast Highway with one arm around the wheel and the top down in my dream convertible flirting, “I love you, baby!” Foolish pink like glowing fingers over a flashlight, reckless pink like flip flops and graham crackers in the dark by the bonfire. Unapologetic pink, maybe young and embarrassing, blushing like a salmon egg, the supple gift of life, makes me remember I’m only 22 and the world’s still a playground. Today, as I lay under a tree, I imagined her wearing it too, life in a necklace of apples. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}