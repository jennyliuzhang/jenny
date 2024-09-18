import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Common Ground</span></h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/common-ground.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        Every week when we visited the Garcias, we brought and made tea for each of us.
      </div>

      <div className={entryStyles.body}>
        <h1>Common Ground</h1>
        <h6>June 2020</h6>
        <h6>2 min read</h6>

        <p>Growing up, I was easily intimidated by meeting unfamiliar people. Self-awareness and painstaking shyness made me a mute background character in middle school. After class, I stayed home on the computer to discover music on YouTube and browse my favorite digital art forums. When I met someone new, I never knew what to talk about. What could we have in common?</p>
        <p>We visit the Garcias about every other week. Carolina, Jonathan, and Kevin Garcia are American-born teenagers who live with their mom, Alma, in a one-room apartment in central Los Angeles. Their dad was arrested and jailed when Carolina was two years-old. She’s 17 now. Her younger brothers only knew him briefly when they were little — after his sentence, he was deported to Mexico, and the family has been separated since. The kids very much feel the financial and emotional pressures of growing up without a father. Alma, who only speaks Spanish, cleans apartments and takes care of babies for long hours while her kids go to school. Her income is minimal. When we first visited their home, I insisted on bringing tea to share. I thought it’d be cozy. I didn’t expect their apartment to not have a stove. Alma had to leave to borrow gas for their portable stovetop to boil the water.</p>

        <p>We — five college students assigned by our college class to make a college-level documentary about their family — are positively intimidating.</p>

        <p>I remember when I’d meet the older siblings of my friends. They’d come back from university, newly-fledged adults with views that touched so much more than my own. They spoke with confident voices from a world I didn’t know. At the time, my world was Saghalie Middle School. My world was Lindbergh High School. What could we have in common?</p>

        <p>That first time we visited the Garcias, we sat awkwardly with the unfamiliar concepts of each other. In between asking questions about their day and week — to which their responses were shy and short — we shared some long pauses. The college student’s college tea steamed in mugs waiting to cool, waiting to relax. We searched for something in common to talk about in the home that felt like a bedroom. I was hyper-aware of the chair I was sharing with Carolina. Everyone else was looking down.</p>

        <p>Waiting, Kevin pulled out his phone and went on Instagram. We all noticed the familiar app. One of us asked: “Kevin, do you like Instagram?”</p>

        <p>“Yeah.”</p>

        <p>“Who do you follow?”</p>

        <p>“Oh, like meme accounts. Like Daquan.”</p>

        <p>“Haha, Daquan! Yeah. What’s your favorite meme right now?”</p>

        <p>Kevin smiled, and then he laughed. He began describing a funny video in depth with a bubbly voice I never heard from him, but recognized instantly. He showed us the video, and soon we were all sipping our tea, giggling and chatting about what accounts to follow for the best memes.</p>

        <p>Each time we visit now, we tease Kevin to copy the trendy new dance on Instagram, or gossip about rising Soundcloud rappers. We share jokes, and even Alma joins in on the funny videos. We’re all more or less digitally fluent, even if our English vocabulary doesn’t always translate, even if some words are better said in Spanish.</p>

        <p>With time, we learned that Carolina had to switch schools in order to graduate on time, Jonathan is more of a lone wolf, and Kevin was bullied. We ventured into their unfamiliar worlds of hard times, Mexican-Americanness, and growing up without a dad. However, in between these trips into tougher topics, we shared common ground too. We learned that through the internet, Carolina followed makeup gurus, Jonathan kept up with fitness, and Kevin played video games.</p>

        <p>I recognized the way they talked about Snapchat streaks with their friends and their favorite shows on Youtube. My after school online playground was there for me, too, when my parents shuttled between full-time jobs and night classes, after arguments, during the divorce. Instant messages to my friends let me articulate deep ruminations. The internet showed me how to dream about the world through photos and blogs, more often than stressed parents and uninterested teachers. I started to have more to say, piecing together the world beyond my young, teenage scaffolding. Is it so bad to build a second home out of pixels?</p>        

        <p>Headlines that regularly proclaim how the “internet is destroying kids” sound obtusely pessimistic to me. Hard times hit — and when you’re young, they can hit hard. If your world is middle school, if your world is high school, if your world is a one-room apartment for four, the claustrophobia of the immediate environment can feel inescapable. The digital world is not an escape from the real world. It can be a window into it. New hobbies, specific communities, common interests, and even jokes make their way across boundaries of place. Sherry Turkle and other critics argue that the state of being ever-connected is a cop-out. “We slip into thinking that always being connected is going to make us feel less alone.” Loneliness can only be defined in context, though: in reality, loneliness means something different than loneliness in a digital age. Online community is another community to be a part of: you can be an independent individual connected to others by shared culture. The extent by which you participate in a community is a choice, and you can still be lonely and separate your experience if you choose. In the face of hardships or unfamiliarity, digital culture can be shared like warm tea. Tea is most commonly served in separate mugs anyway.</p>

        <p>I wish there was a world where everyone had something in common, beyond basic facts. I remember the most popular people in my schools were always the most involved. They joined communities and cultures that somehow touched everyone; their charisma came from the ability to chat with every clique, teacher, and visiting college student in the building. The internet is the beginning of this common ground, and this sort of cultural participation should be encouraged. Diverse voices are slowly learning the same language. We’re all learning to talk — and listen.</p>

        <p>We have a video in our footage of Kevin describing enthusiastically his current favorite video game, detailing every rule and role. We had asked him what he does for fun. In this clip, he’s not looking at the camera, or the person who asked the question. His eyes are unfocused, darting around the room, but I recognized what he was really seeing. He was looking at his game, smiling at a clever team strategy he planned, eagerly sharing with us a familiar world and the friends he made in it. I knew because I grew up doing the same. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}