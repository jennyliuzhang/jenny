import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>What Goes On?</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/what-goes-on.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>What Goes On?</h1>
        <h6>November 2021</h6>
        <h6>3 min read</h6>

        <p>
        I arrived on Monday but am just now getting to unpack today, on Friday. I regret not doing it sooner. My mom and I sat opposite each other this morning over breakfast. She pointed out my flaws: grumpiness, disorganization, emotional sensitivity, the fact I don’t hydrate enough, how I don’t have a deliberate morning skincare routine, how I don’t act beautiful or delicate. I expressed that I’m trying on all these fronts and to be more patient. It was a literal replay of things I’ve said before in the past, to myself and others. I think of what I had said to the plants on Rob’s farm: “This is dehydrated. This is cut too short. This hasn’t gotten enough sun. The leaves are yellow.”

I told her that I already have this internal criticism going at full speed in my own head at 100% volume and I don’t also want to wake up to it aloud. We bickered. I felt upset. She said she’s just pointing out what she notices, and she’ll stop when she sees a change. I told her I’m practicing. It took me forever to establish this “go on a daily jog” lifestyle I have now. I told her about how wilted plants can’t turn green overnight from one dose of water and a sunny day. It can take a full season of consistent love and attention. She said, “but I need to know that you’re growing. You act the same as you did six years ago when you lived here. Like a boy.”

The reason I didn’t unpack my clothes earlier is because I let myself think two things: first, I thought, “oh, I’ll be here for a month, so I can take my time to unpack.” Second, I thought, “oh, I’m leaving again in a month. Why should I unpack at all?” It wasn’t for lack of care. It was because I never finished the conversation by coming to an internal decision, so I was harboring both thoughts and giving them both energy. Classic overthinking. If I had committed to the first, I simply would have unpacked and hung my clothes up. If I committed to the second, I would have taken the clothes I needed out, then closed my suitcase again and put it away neatly in my room. Instead, because I didn’t commit to either, I left the suitcase wide open in the middle of my room, guts revealed, undecided, shirts spilling onto the carpet until this morning.

If I were truly upholding my values of elegance and intention, I could have ensured, in the first place, that the thoughts I paid attention to led to a decision and a specific action for my to-do list. If I were truly living in the present, I would have replied to the first voice, “the amount of time you plan to be somewhere shouldn’t matter. Each day is the same 24 hours, and unpacking now is the same as unpacking in a week. You only have right now.” If I were truly taking care of myself, I could have replied to the second voice, “if you were to leave all your clothes tucked away in a suitcase for an entire month, the inconvenience of sorting through your belongings each time you wanted to get dressed might impact your stress levels negatively.” If I had simply continued to talk it through with myself when I got my clothes out—if I had listened to and supported myself like a separate person—I could have come to a plan: “Unpack and hang up clothes.”

These were all thoughts I felt this morning when I woke up. A few days late, but I looked at my spilled suitcase and thought, “Yes, I will unpack and hang up all these clothes. But first I will drink some water and eat.” Then I went downstairs and felt berated by my mom. Her intention is always love, but she can be very abrasive. Me too.

She points this out as a difference between Westernized, American culture and Eastern, Chinese culture. Every time I ask her for more encouragement and patience, she rolls her eyes and says, “that’s so American.” Another framework she clings to is masculinity and femininity. This is not the first time she tells me that I behave like a boy. I’m more active and messy and reckless than the willowy women she admires. She tells me she loves the women in her life that always look good when they leave the house. “They put on their makeup and always look so classy every time they go out. I can’t say I’m even like that, but I do look up to them.”

I get the feeling on mornings like this that I should, too, look up to this archetype. There is elegance and intention in the daily craft of themselves. I wonder why I never felt inclined to admire beauty as a delicate practice like this. I wonder if it’s a form of self-othering. I did ballet for 10 years and never felt as beautiful as the girls I danced with. My hair never stayed perfectly in a bun. It wasn’t my story.

When I came back to Renton, I felt like I shifted into a raw form of who I was as a teenager. I was so tired when I arrived. I was around her and my brother and all the familiar furniture. Physically it was easy to revert back to old habits, so behaviorally it takes some deliberate intention. When she pointed out my grumpiness a few days ago, I reacted with denial. Then I noticed that I had been complaining. Small things about how the backyard could have been weeded more thoroughly, and how the kitchen faucet was difficult to use. She was right. I was grumpy.

When I left this morning for my run, I took a second to picture myself much more chipper. I put on a catchy song and began a light pace. I waved at neighbors and smiled from across the street. When I came back home, I cooked lunch for myself. Then I noticed, when I was washing the vegetables, that my eyebrows were furrowed again. Was I just concentrating so hard on cleaning the stems of the chrysanthemum greens? Is this what I become when I’m intently focused? But why does intent Jenny look so... grumpy?

When I pick at the details, when I complain about the weeds in the yard or the sensitivity of the faucet, I don’t mean it with ill intention, or like I always expect some action plan to come from it. It’s simply the detail that I want to point out. This habit, though, tends to slant toward the frustrated details. I voice more criticisms and slightly-offs than I do celebrations and encouragements. It’s this cynical habit that makes my eyebrows stay furrowed for most of the day.

I remind myself that grumpy is okay for now, especially if my previous state was despair. I also don’t think it’s reasonable to be chipper all the time. Also, the expectation of positivity is senseless because most of our conversations go: I do something that slightly makes her notice things aren’t perfect, she is bothered and barks criticisms, I explain myself in frustration, she condemns the whole process and talks about her own triumphs.

I’ve learned to not let our interactions unsettle me so much. She talks mostly about herself. I recount my eating disorder. She replies, “I’ve always known how to take care of my body, why don’t you? You’ve made so many mistakes.” I describe my insecurity. She replies, “I don’t know why, but I’ve always been such a positive person. It’s natural to me. Why are you so negative?” She is unaware of how that question is just asking for an angry retort. If you don’t know why you tend toward positivity, how the hell should I know why I tend toward despair? I try my best to remain calm. It’s so hard! &nbsp;&#x273d;

</p>

      </div>      

    </main>
  );
}