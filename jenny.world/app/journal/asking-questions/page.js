import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Brief Scotland Update</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/brief-scotland-update.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>Asking Questions</h1>
        <h6>June 2020</h6>
        <h6>2 min read</h6>
        <p>A core belief is in the inherent goodness of people and nature, and while society and its institutions have corrupted the purity of the individual, people are at their best when truly "self-reliant" and independent. Transcendentalism emphasizes subjective intuition over objective empiricism.

        At the bamboo farm, I asked Rob questions incessantly. Within the first few days, I could identify clumper vs. runner species, I had my favorite leaves and stalks, I understood root division and propagation, and I could trace some bamboo origin stories.

        Sam said, “You’re learning a lot more about the bamboo than I am.”

        I said, “It’s because I’m annoying and I ask a lot of questions. Teacher’s pet.”

        Two weeks in, Sam and I clogged the outdoor toilet. Real bad. We tried three different plungers, a 4-foot snake, and even bought a 25-foot drain snake. No success. We were on our hands and knees scooping poop water out of this plywood bathroom.

        In college, a friend told me I had a lot of “virility.” To this day I cannot contest it.

        When we first arrived, Rob told us we’d be using an outdoor shower. It was exposed without a door. I admitted to Sam later that my first instinct was to check for hidden cameras. She said “me too.”

        Later, I reflected on why I associated asking a lot of questions with being annoying. When I was in school, I was hated by my peers for asking questions. The self-deprecation came from socialization. Shame. I told Sam that I associated asking a lot of questions with being annoying.

        She said she did too, which is why she chose to never ask questions. She has always wanted to keep out of everyone’s way.

        The plumber came at 7:00am on Monday morning to fix the clog. But it didn’t take 30 minutes. It took 4 hours and a lot of “goddammit”s and “shit”s. Sam lied in the fetal position in bed, listening to the cursing and banging. Rob stayed inside his house and sat quietly on his couch. I shoveled dirt and moved weeds to keep the work day moving.

        “The only time I feel confident asking questions and speaking out is when I feel beautiful.”

        “You do have inner peace, actually. You just let outside forces overstimulate your mind. Let things come and go.”

        Feminism, Sam explained to me, is about giving women the voice and representation they missed out on for the whole of history. It’s about returning all of the intentions, discoveries, and movements that had been coopted by men for centuries back into the interest of nurture. Gentle determination and grace. The powers that be

        I don’t cook often or well. I eat very simply. Sam is a terrific chef, though. The whole time on the farm, Sam made the decisions for every meal. I helped by cutting vegetables and cleaning up, but she had the intuition and practice to behold.

        I think everyone’s always taking about their past transcendental experiences. But you know what? I think I’m in the middle of one. It’s made of sunrises and sunsets and clogged toilets. I was at home, and then I was a teacher’s pet. I danced ballet for 10 years, I followed some waterfalls, puberty happened. I learned about calories and girlhood and then I went to California. I ran fast. I fell in love. When my heart broke, I hugged my friends. Then I didn’t know what I wanted to do. I made wontons, I felt confusion, I went to Mexico. I sold perfumes and dresses. I chased soccer balls. Then there was a global pandemic and lots of bamboo. Hundreds of kinds. Then human definitions and long stretches of highway and the nonsense labels on granola boxes. I started a company for kids somewhere in the middle.

        i meet people who are always talking about their past transcendental experiences, but i’m uncertain how to express that i feel like i’m in the middle of one. the texture of the leaves in the backyard is fuzzy parchment, and i am aware of both my fingers and my eyes. i notice how i repeat my choice, every time i see a pretty plant, to reach out and touch it. this adventure is made of many patterns, like choices and needs, that are layered on top of each other and stretched over time. sunrises and sunsets and misplacing my belongings. i was at home, a grumpy daughter, and then i was a teacher’s pet. i danced ballet for 10 years, i followed some waterfalls, puberty happened. i learned about calories and girlhood and then I went to california. i ran fast. i fell in love. when i didn’t want to talk, I hugged my friends. then for a while, i didn’t know what i wanted to do. i made wontons, i felt confusion, i went to new york and denver and mexico city. i sold perfumes and dresses. i chased soccer balls. then there was a global pandemic and lots of bamboo. hundreds of kinds. soon i cried on a mountain, which i wish happened out of the awe of the view but it really happened out of the fear of it. then human definitions and long stretches of highway and the nonsense labels on granola boxes. i started a storybook for kids somewhere in the middle.

i’ve met some fortunetellers along the way. the judgments they have, for the most part, are feelings about the future i had also discerned for myself. it’s like when you know in the morning approximately how you will feel and approach the rest of your day. expand the definition of a day into a lifetime, and the microcosm of patterns, like choices and needs, when people write songs, i am always

This transcendental experience is not over. I think it will last for at least 60 more years. 

        This transcendental experience is not over. I think it will last for at least 60 more years. I have no idea what’s going on, so naturally, I’ve got a lot of questions.

        And you know what? For all the questions I’ve asked so far, not one of the answers have actually been about me. It’s not about me. It’s not about you, either. This is all much bigger than any one human.

        So no, I don’t think I’m annoying. I’m not annoying at all. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}