import EntryLayout from '../entry-layout';
import Image from 'next/image';
import entryStyles from "../../styles/entry.module.css";
import CollageCarousel from "../../components/CollageCarousel";

export default function JournalEntryPage() {

  const heroImage = (
      <CollageCarousel>
        <Image
          src="/journal-graphics/nomad-life-recap/1.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/2.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/3.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/4.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/5.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/6.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/7.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/8.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/9.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
        <Image
          src="/journal-graphics/nomad-life-recap/10.png"
          alt="Project"
          width={1500}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          quality={100} 
          priority
        />
      </CollageCarousel>
  );  

  const heroCaption = "Scroll to the left to see the full collage of photos, captions, and other tidbits from 2021–23.";

  return (
    <EntryLayout slug="nomad-life-recap" heroImage={heroImage} heroCaption={heroCaption}>
      
    <p><em>Originall posted on <a href="https://www.instagram.com/p/C1zqq6MpV8d/" target="_blank">my Instagram</a>.</em></p>

    <p>Hi! I’m back after deactivating (my Instagram) for 3 years. Here’s a little art project of updates 🐙</p>

    <p>I spent 2021-23 as a digital nomad, traveling to 10 countries & 27 cities. While in the UK, I started a part-time Masters degree in narrative studies at the University of Edinburgh. I’m now half done; my thesis is on how technologists are authors, artistically and culturally. I also took on a full-time remote design role at Dorsia, a hospitality tech startup. Learning like crazy. I also still work on Plot Twisters, the game design studio I started in 2019. Last year we won a grant from IDEO & Riot Games for our self-reflection video game, Twisterland. In progress.</p>

    <p>Traveling led me to amazing long-distance friends. I still talk to some daily. It also matured my abundance mindset. I endured growing pains from figuring out my relationships, career, and values. Growing up doesn’t stop, but I’m more comfortable with myself than I was at 23.</p>

    <p>Nomad life made me crave a homebase — I’m now settling into the artist loft of my dreams in Cleveland, Ohio 🐣 More soon. In the meantime, highlights:</p>

    <ul>
    <li>Mushroom foraging in Scotland.</li>
    <li>Observational drawing in France.</li>
    <li>Bed bugs in Manchester. Had to freeze my belongings for 3 days.</li>
    <li>Making my best wonton soup yet for the Christmas party in Blackpool.</li>
    <li>Buying silks in Doha.</li>
    <li>A vegetarian feast for Tamil New Year with my family in Kuala Lumpur.</li>
    <li>Mixing Mandarin and Spanish at the Chinese market in Barcelona.</li>
    <li>Making friends at the gym like a real local.</li>
    <li>Saturday in Monnickendam, walking with my mom, nibbling pecans.</li>
    <li>Loitering in London hotel lobbies.</li>
    <li>Walking by Florence Pugh in Hyde Park.</li>
    <li>Getting fish & chips after any minor inconvenience.</li>
    <li>Writing two book lists for a Scottish magazine (<a href="https://www.boomsaloon.com/" target="_blank">boom saloon</a>).</li>
    <li>Fringe Festival cabaret shows.</li>
    <li>Sweating at the ceilidh. Late-night whiskey jam sessions.</li>
    <li>Discovering swans in Holyrood Park. Visiting them weekly.</li>
    <li>Qatar’s chaotic metro during the World Cup.</li>
    <li>Homemade meatball night in Chicago.</li>
    <li>Birthday drugs.</li>
    <li>Bossa Nova Civic Club on Thursday.</li>
    <li>Driving on the left side in the Isle of Man.</li>
    <li>11pm sunset in Oslo.</li>
    <li>2am laughing/crying with my brother in the U-Haul to Cleveland.</li>
    </ul>

    <p>Missed ya :) &nbsp;&#x273d;</p>

        </EntryLayout>
  );
}