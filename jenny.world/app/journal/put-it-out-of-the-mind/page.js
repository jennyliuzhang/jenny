import EntryLayout from '../entry-layout';
import Image from 'next/image';
import entryStyles from "../../styles/entry.module.css";

export default function JournalEntryPage() {
      
  const heroImage = (
      
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

  );

  const heroCaption = "I love an intricate shadow :)";

        return (
          <EntryLayout slug="put-it-out-of-the-mind" heroImage={heroImage} heroCaption={heroCaption}>

        <p>Last week, my phone was dead for 3 days. Barktober fest at Taps and Tails. Wiener dog race.</p>

        <p>Back in LA, wonton party no phone. 1.5 months without phone</p>

        <p>Applying for a fellowship, app due October. I put it out of mind because I realized realistically it would take me 20–25 hours to complete an application for, and I don't need to worry about that right now.</p>

        <p>Do the things that give you anxiety. See the anxiety. Look it in the eye. Do it anyway.</p>

        <p>Overcoming social media anxiety. Deleted Twitter account back in the day. Sad. Look at old photos and really wish I posted even more.</p>
        
        <p>Managing anxiety. My new spiritual-guide-energy-reader-friend-advisor Hala. Pause, breathe, be present. Clock.</p>

        <p>Making new friends. Dave. Taylor. Bumble BFF. No dating apps. But friends? Yes. Always can use more friends. How does this person fit into your life? No questions. Helps. Taylor is an ambivert. I'm an extrovert.</p>

        <p>Issue when coding personal website. The subnavigation breadcrumbs situation is really a mess. It's like 5 different nested divs with different CSS styles if it's a 2-level nav vs. 3 level, and some divs only have margin adjustments and no other styling. And I didn't use components. Blah blah blah. It's a mess. It makes me feel gross and tense and itchy. Like when you're cleaning but you have one table or corner that's just like where all your crap goes and you're reluctant to clean it. I take Lila for a walk.</p>

        <p>Opposite of emdr. Focusing my eyesight and letting the world pass along.</p>

        <p>Posting on instagram: personal photo journal. Exercise in releasing my self-concept to the public forum. Something of me to float around the nodal imagination of the commons. Lose value as soon as its driven off the lot—the process of sharing changes me and the moment it goes out, I'm now different. It's no longer an accurate image as soon as it leaves my drafts. And I think that is terrifically cool.</p>

        <p>Tonight I began my painting for Rachel. Rachel is so kind. We've been co-authoring a paper together throughout the last year, and through all the kinks in the process with the journal curators, my submission snafus, and the confusing editor feedback, she's been so easy and straightforward to work with. She visited Cleveland this summer and we spent a pleasant afternoon walking Lila and getting lunch. She gave me a thank-you gift of a handmade cloth cyanotype bookmark which contained the sun-printed image of a leaf from the Future Library in Oslo, which we visited together in 2023 and is the subject of our paper. This gift—delicate, well-made, and extremely thoughtful—captures so well the creative essence of Rachel Cranmer. It makes me extremely happy that we got to collaborate on a project together and mutually learn some of our tendencies as thinkers and writers; the emotional nourishment that our working relationship gave me, despite taking up a good chunk of energy and some of my sleeping hours during some busy weeks of 2023 and 2024, is one of those relationship essences I'd be willing to sacrifice for time and time again. I'd do it over and over again and I hope we get to work on more things together in this life.</p>
          
        <p>Anyway, tonight I'm making my thank-you painting for her. Post on instagram then resume painting. I listen to taylor swift. And I know now when I'm feeling bad, I can always come back to myself. I trust myself more to take care of me. And I love that.</p>

        <p>Mostly, I'm collating all my past writings. Lots of really exciting stuff. Emotional stuff. Feelings of precipice.</p>

        <p>I'd like to channel the precipice. That summer when I was 21, I saw several psychics because I was direly overwhelmed by the paths ahead of me. A professor told me that I should have it all sorted by the end of my junior year. One of them told me I think I'm confused but I'm not. "you think you’re confused but you know what you want to do, and you’re all over the place." &nbsp;&#x273d;</p>

        <p>Full of peace and energy for bringing the dreams to life. Maya Man. Maggie Applieton. Lindsay Nelson.</p>

        <p>And I feel love and I feel love and I feel love and I feel love. And I ran up and down the stairs at home and I danced with Lila and Cali and I shook with excitement. I wish my friends knew how much love I felt, that I could offer it them to them by post in a few weeks again to remind them, to receive on a Tuesday and open. In the package something would blossom and glisten and they would feel commemorated and tall and full.</p>
        

        </EntryLayout>
  );
}