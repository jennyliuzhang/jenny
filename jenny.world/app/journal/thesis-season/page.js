import EntryLayout from '../entry-layout';
import Image from 'next/image';
import entryStyles from "../../styles/entry.module.css";

export default function JournalEntryPage() {
      
  const heroImage = (
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/thesis-season.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />
  );

  const heroCaption = "Two pages (of many) in my notebook dedicated to ironing out thesis statements and key arguments. These scrawlings in particular were revelatory for me because they helped me achieve clarity about my premises and sequiturs.";

  return (
    <EntryLayout slug="thesis-season" heroImage={heroImage} heroCaption={heroCaption}>

        <p>I'm entering my final year of my Masters degree at the University of Edinburgh. My program, in "Narrative Futures: Art, Data, Society", </p>
          
        <p>Vampire Weekend again. Exactly 10 years ago. That's insane.</p>

        <p>It's just a license.</p>

        <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/thesis-season/discord-exchange.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <p>&nbsp;&#x273d;</p>

        </EntryLayout>
  );
}