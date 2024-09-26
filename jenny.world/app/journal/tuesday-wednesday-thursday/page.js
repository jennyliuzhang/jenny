"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import entryStyles from "../../styles/entry.module.css";
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Page() {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    fetch('/data/journal.json')
      .then((response) => response.json())
      .then((data) => {
        const foundEntry = data.find(item => item.writingSlug === "tuesday-wednesday-thursday");
        setEntry(foundEntry);
      })
      .catch((error) => console.error('Error fetching journal entry:', error));
  }, []);

  // If entry is not found or still loading
  if (!entry) return <div>Loading...</div>;

  return (
    <main className={entryStyles.entryStyles}>

      <Breadcrumbs>
        <Link href="/journal">Jenny’s Journal</Link>
        <span>{entry.writingName}</span>
      </Breadcrumbs>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/tuesday-wednesday-thursday.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Estero Bluffs State Park on the California Coast.
      </div>


      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>

        <p>Today is Thursday. I woke up irritated. I’ve been thinking many rude things to myself because of indecision related to food. When I am overwhelmed or lacking sleep, I step back into strange thought processes related to what I eat. Calculating calories and macronutrients and timing the distribution of my consumption throughout the day. It’s the type of obsessive mental behavior that could be better used to tag Plot Twisters research readings or organize my clothes. I’m still learning to divert the energy.</p>

        <p>Anyway, I woke up irritated because last night for dinner I was anxious about my meal choices at a restaurant. I wanted soup but I ordered steamed veggies and a few lettuce sushi rolls instead. I was very confused for the rest of the night. I hadn’t forgiven myself for my behavior when I woke up. Then this morning I felt anxious because I ate 2 apples, a banana, and a granola bar for breakfast.</p>

        <p>The funny part is that none of this sounds abnormal. I mean, maybe that’s a lot of fruit, but it’s all pretty tame. Still, I let myself feel disappointment and shame, then I got mad at myself for letting myself feel those feelings.</p>

        <p>I spent the morning lamenting. Half of my brain was abusive, mean, and critical for not having a plan and being indecisive. The other half of my mind was trying her best to be patient and nurturing. A weird food day is nothing to hate yourself for. These two coexisting feelings caused a general discomfort in my stomach. Sam watched me brood. She had been wanting to leave the farm because she wanted to go back to LA for a personal commitment. She had also been feeling a bit jaded. But we sat in the sun for a while as she played Dolly Parton from her speaker. Then she put on the necklace I gave her for her birthday. Then I rubbed sunscreen on my face. Then our workday on the farm started.</p>

        <p>Rob asked us to put soil into pots this morning. The work got our minds off of ourselves. His bamboo farm happened very organically. I noticed he just picks different places to work every day, slowly building out his vision with a patchwork whim. I work that way too, though I’m trying to be more organized. In any case, I understand his behavior and I’m open to it. I asked Sam if she’d run her farm like Rob runs the Jungle (Rob’s name for the farm). Sam wants to run her own communal farm for artists. She laughed and said no, which I knew she would say. For context, Sam worked as a personal assistant for 1.5 years and loves to clean and organize. She helped me write and structure components of Plot Twisters in the past. When I gave her my car to borrow when I went out of town, she returned it washed, cleaned, and with a new phone holder stand.</p>

        <p>Rob let us take the last two days off for our &ldquo;weekend.&rdquo; A Tuesday and Wednesday. Tuesday was great. We drove to see elephant seals, wandered through the quaint yet well-off town of Cambria, and lounged on the rocks by the beach. We read books while we did our laundry at a local laundromat. We ate at a beautiful restaurant called Robin’s.</p>

        <p>Tuesday was great. But Wednesday was weird. I will describe a play-by-play.</p>

        <p>We had decided the night before to just stay in and relax at the farm for the day. Sam woke up and was triggered by a health condition she’s been navigating. I woke up from a weird dream about traumatic emotions. We talked for a few hours. I gave her as much attention as I could. We talked through the negative emotional spirals until we smiled. We had an exchange about psychic dreams. She said she had never seen a psychic before. The one at Pismo was open according to Google Maps, so we decided to go into town for fortunetelling and lunch.</p>

        <p>The day went uphill. The psychic said nice things to us one at a time from behind a glass screen (still a pandemic after all). We talked about these nice things over a salad and croissant sandwich. After lunch, we walked around and followed our noses to a sweets shop and shared a brownie.</p>

        <p>It was a nice day. Then I remembered I had a phone call scheduled, but we were out, and I didn’t feel right to take it without my laptop. I wanted to be accommodating and not end our trip early for a 30-minute phone call, so I canceled the call. But then Sam wanted to swing by a butterfly garden and then go home so I could still make the phone call, but I had already canceled it. So I suggested we keep walking around Pismo Beach for a bit since it was a gorgeous day and we were already there. Chaotic decision making.</p>

        <p>The day went downhill again. We walked around Pismo until we realized no one was wearing masks, and full families were out and not social distancing. We felt claustrophobic and intimidated, so we left. We sat in her car, anxious. Then I started to feel food guilt about the brownie. She suggested we go directly to the butterfly garden. We drove there, but when we arrived, it was closed. She felt disappointed. Then I admitted I felt tired because I hadn’t slept well the night before because of those dreams.</p>

        <p>We got back home and Sam ended up calling a lot of friends about her health to support her emotions. I was tired, but restless. Instead of napping, I ran 5 miles around the farm. I skateboarded on Rob’s mega vert ramp for a while, too, trying to distract my mind from food guilt, the chaotic decision making from earlier, the pandemic. Then it was dinner time. I was hungry, but she was sad. She had been on the phone all afternoon, fixated. She wasn’t hungry. But I had just ran 5 miles. We agreed we’d get soup.</p>

        <p>We drove to 2 different Chinese restaurants looking for soup. First wasn’t open. Second was pho, but then Sam realized she didn’t want to eat that in her car because it was messy, and I didn’t want to eat pho in bed in our trailer for the same reason, so we left. Honestly, we should have just gotten the pho and ate it on the ground, but neither of us were really in our right minds. So we went to a sushi restaurant next door where I didn’t know what to order. I felt overwhelmed and was experiencing accumulated food guilt. Sam was distracted about her own situation, too. We were a mess.</p>

        <p>Sam knows my idiosyncrasies well. She says my triggers are generally food-specific and tells me the negative self-talk gets annoying.</p>

        <p>Today is Thursday night. We potted some plants this evening and I got to water some of the bigger bamboo. Sam read her book while I practiced skateboarding. Then we ate a cauliflower pizza for dinner. I’m in bed writing this and she’s reading. It’s been foggy and colder than usual. I like it. I still feel anxiety in my stomach, but writing is helping. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}