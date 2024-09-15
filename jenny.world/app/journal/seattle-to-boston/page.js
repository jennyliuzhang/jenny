import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Seattle to Boston</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/seattle-to-boston.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        A sign in the Badlands National Park in South Dakota.
      </div>

      <div className={entryStyles.body}>
        <h1>Seattle to Boston</h1>
        <h6>October 2020</h6>
        <h6>1 min read</h6>
        <p>The roads are pink roads and the rocks are purple! Becky, Jordan, and I made it to the Wyoming part of Yellowstone. The trip started off hilariously because as soon as we backed out of my driveway in Renton, Selva noticed that the left tail light of Becky's car wasn't working. So our first stop on this coast-to-coast trip was the Mercedes-Benz service center in Bellevue. But within a couple hours we were back on track. In Coeur d'Alene we walked around a park with lots of families and their kids and touched sticky sap on a tree. Then we grazed the corner of Montana and arrived into Wyoming that night. In the car, I talked about my struggle with setting premeditated intentions. I like to just do things and see what happens. Today we drove by maybe six bison, massive and only a few feet from the side of the road.</p>

        <p>I am watching the elk graze on the grass outside of our motel. The stars are out. The elk eat the grass on this manufactured lawn, confined by gray curbs and buildings on both sides. I'm thinking of my studio apartment in LA, where I showered right up along spiders in their webs. We're like the spiders, but our webs are weird gray curbs and motels.</p>

        <p style={{textAlign: 'center'}}>...</p>

        <p>Poop, dongle, canyon, billionaires, Inspiration Point, disposable camera. Staring at the clouds closely because they are always moving. We made it to the Badlands in South Dakota. My first snow of the year. I'm in a bizarre outfit of multiple windbreakers. Watching animals from the car. Rocks with lines, little canyons, bighorn sheep. Eating Chinese homemade jerky and cashews for breakfast, lunch, and dinner. Never hungry, but not quite full.</p>

        <p>We are sharing a motel room in South Dakota. It has one king bed that cost $11 per person. For $15 per person we could have gotten two queens, but we're really trying to keep costs as low as possible. The water from the faucet here tastes sweet. I had hot food for the first time in four days. The skin on my hands is very dry. We have watched <em>The Holiday</em>, <em>The Proposal</em>, and <em>The Devil Wears Prada</em>.</p>
        
        <p style={{textAlign: 'center'}}>...</p>

        <p>I can't remember where we were, but somewhere between Wyoming and South Dakota I really had to pee. Last spring, my mom learned she had a health condition that required her to hydrate double the amount of the average person. I'm talking like at least a gallon of water per day. Anyway, I've also been struggling with some health issues, so earlier this month I thought I'd give this copious water diet a try. I brought two 48 oz bottles from REI with me and have kept them filled, much to the dismay of my fellow roadtrippers. Becky and Jordan have had to deal with me needing to pee nearly every hour. They've been very nice about it. Except this time I desperately needed to pee and we were miles away from the nearest rest stop. They kept me distracted. We played loud pop music and I ate some nuts. We finally pulled into a small info center. No one was there. I ran to the bathroom. Locked. I could have cried. I ran back to the car. On my last straw, I crouched down next to the passenger side of the car. Before Becky and Jordan could say anything, my pants were down and I was peeing on the ground of this parking lot in broad daylight.</p>
        
        <p style={{textAlign: 'center'}}>...</p>

        <p>We drove through Kansas at like 2am, or what felt like 2am.  nsane Ghost deer</p>

        <p>In Northfield, Minnesota, Becky's college town, I found myself in a bookstore on their main street opening a collection of short stories by Shirley Jackson. Of all the books on that shelf, I'm not sure what made me grab that one. I didn't love "The Lottery," the only Shirley Jackson I've ever read, when it was required for school years ago. And though I can appreciate southern gothic writing, it's not my first affinity.</p>

        <p>The first story was called "The Possibility of Evil." It's about the daily errands of an older woman who lives alone, including buying groceries, stopping by the library, and anonymously mailing horrific and scandalous letters of gossip to her neighbors, to keep them on their toes and cause chaos in her small town.</p>
        
        <p>I'm in Cambridge, Boston now, staying at Becky's new apartment for a couple nights before I drive down with her friend Chelsea to New York. I mailed some postcards this morning. On my walk to the post office, I remembered the woman from "The Possibility of Evil" mailing her grating notes. I viscerally felt the feeling of a mildewy old town. Jackson also wrote some haunting food scenes in there that came to mind and I couldn't abandon. For the rest of the walk home, I felt repulsed and itchy, like my capillaries also found the story despicable.</p>

        <p style={{textAlign: 'center'}}>...</p>

<p>
Shybones in the car

Driving to new york with Chelsea. Taco bell for dinner. Rollaids for dinner. Harry Potter and the Deathly Hallows audio book in the car.

Meeting up with Chelsea and Chae in Yspilanti.

&nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}