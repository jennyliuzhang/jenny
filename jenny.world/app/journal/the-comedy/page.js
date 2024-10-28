import EntryLayout from '../entry-layout';
import Image from 'next/image';
import entryStyles from "../../styles/entry.module.css";

export default function JournalEntryPage() {

  const heroImage = (
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/the-comedy.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />
  )

  const heroCaption = "My dog Lila wearing a plastic bag on her head at 7am because she gets chronic ear infections when it rains and the raincoat I bought her was a size too small.";

  return (
    <EntryLayout slug="the-comedy" heroImage={heroImage} heroCaption={heroCaption}>

        <blockquote>
          Just when I thought it wouldn't get no sicker
          <br></br>
          Woke up one morning and heard this weird ass mothafucka talkin' out the side of his neck
          <br></br>
          — YG on "FDT"
        </blockquote>

        <p>The last few weeks of my life have been a riot. It's frankly hilarious how many Slack messages and emails I've had to send being like, "Hey, so sorry. Catastrophe!" I can't even go into detail right now because honestly it has been a bit traumatizing, so I resist reliving it. But I will recount the basics.</p>

        <p>mice. eating lila's dog food. i spotted them middle of the night downstairs. 
my blinds stopped working. they are a perpetual diagonal, a violent angle in my massive window
in the middle of my burnout recovery and new mice panic, i discover a dripping that flowed from my attic to my first floor, causing two floors to be filled by water. hvac at fault, ultimately due to mishap by the roofers. within 24 hours, had to emergency relocate lila and me for 2 weeks, drop and demolition two floors partially, and wrestle with legal and financial and contractor bullshit. felt so little trust in the processes as a non-specialist. shuttling back and forth between the airbnb and home while still working.
lila was found to have stage 2 cancer. got tumor surgery. expensive. poor girl.
lila had IBD and debilitating diarrhea simultaneously to all of this. we were up every few hours every night for a few weeks. 11pm. 2am. 4am. 6am. sharting on the grass. distended belly. howling at night. whining.
my job is relocating my role to miami. either i go by end of summer or i vacate my position. money flow for home remodel, lila's cancer treatments, not to mention basic living and mortgage — all of it will go.
we moved back home. everything is functional again except i'm missing floor still in two rooms. blinds are still fucked.
mice are back.
i've tried everything. poison bait. no-kill traps. snap traps. 24 snap traps at first, then 48 snap traps. all kinds of bait. dog food. peanut butter. they're smart. they took the dog food out of the trap. they get away each time. i bought 4 ring cameras. i moved the couch out of the way because i'm afraid they're nesting in it. i don't have a couch to sit on during the day. i bought a UV light to scan for urine.
my nighttime routine is to prepare for the mice. gloves on. shoes on. set and check the traps. big flashlight to scan. UV light on. vacuum every corner possible. put away all food. dishes.
mousetrapping is my hobby. lila has a new lump. i'm so tired you guys &nbsp;&#x273d;</p>

</EntryLayout>
  );
}