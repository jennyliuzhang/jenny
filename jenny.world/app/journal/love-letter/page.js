import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Love Letter</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/love-letter.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />
      
      <div className={entryStyles.heroCaption}>
        A weekday dinner I cooked in Brianna’s apartment in Brookyln.
      </div>

      <div className={entryStyles.body}>
        <h1>Love Letter</h1>
        <h6>November 2020</h6>
        <h6>4 min read</h6>
        <p>Of all the spritely people we know, I notice that you have the most energy. An example: you might get tired early in the evening, but somehow you always seem to forget that first wind of sleepiness. You know how to rally. You are reliable to stay awake—to talk through the heartbreak, listen to their panic, and drive the last stretch of highway before the motel.</p>

        <p>You show up for the people you care about. All phone calls, texts, questions, unaccounted-for bursts of emotion: you are willing to answer, if not totally prepared for it. You don’t care. You know how humans are. You too. You expect mercy from the people you love because you are so full of it.</p>

        <p>I really like your style. In spite of the mild hoarding, you do have taste. You tow the line between the genres and boxes you like. I wouldn’t want anyone else’s closet. You are colorful, interested in small-grain patterns, love textures, and appreciate shape. Most of all, you know how to navigate these tendencies well, especially in an overwhelming consignment shop, which is the most stylish quality about you.</p>

        <p>There was a time when you tried to hold onto people who were indifferent to your presence in their life. You acknowledged the lack of care and moved away. You are quick to take action, especially against people who choose not to listen to you. This translates to impatience sometimes, but in matters of the honest heart, there’s no such thing as acting too quickly.</p>

        <p>You want to add value to the lives of others. And it’s not for some shallow nobility. It comes from a need to create value for yourself, too, and you actively remind yourself every day how interdependent your life is, and how to accept belonging.</p>

        <p>You are quite attentive to detail. You rarely make typos when it matters. You will roll up your sleeves to learn and do anything. I don’t forget about your high school GPA, all your self-taught endeavors, and the fact you enrolled in an expensive college for free. You’re quite impressive, actually, despite those insecurities you feel.</p>
        
        <p>You are wholesome. People believe you—and believe in you. That’s an incredible honor, so you shouldn’t forget that.</p>

        <p>You unabashedly love what you love. You have these obsessions with homographs and staircases and fruit and seamless patterns and the life cycle of stars. Good for you, for knowing what you like, and keeping it all in a list.</p>

        <p>You are an effective writer. You are an effective thinker.</p>

        <p>Your memory… you have a first-rate memory. It’s ridiculously comprehensive, albeit a bit selective. You must remember a lot of details because you care about a lot of details. Random childhood memories of other people that you don’t speak to anymore, the favorite colors many exes ago. There are songs you haven’t heard in years that you can belt immediately if they played. You remember everything, especially for someone who can detach emotionally from memories so effectively. You’re definitely a “forgive but never forget” person, and that’s really cool.</p>

        <p>Despite what you believe about your socialized appearance, you are pretty. I think you’re pretty. Continue caring for yourself. Eat well, but don’t over-discipline. You don’t need that.</p>

        <p>Of all the ages you’ve lived, you identify most with being age 14, which is funny but keen. You remain mindful, impulsive, shy, curious, and idealistic all at once.</p>

        <p>I love that you are so interested in pop music. You are invested in the feelings that rush, burst, and resound below the currents of the memes and top 40 lyrics. It’s important for you to assess these artifacts, like barometers, omens, and portents for the future.</p>

        <p>You remember the letters you write to people. Even the superficial postcards. And you know how authentic—or cringefully inauthentic—you were in your writing, which you articulate well to yourself in hindsight. I know that you have regrets about what you’ve shared in the past, because you were more self-defensive than you needed to be, but also the fact that you know better now means that you are more prudent with your voice. I’m proud of you.</p>

        <p>You are okay with dying next Wednesday, if that’s what’s supposed to happen. Obviously you don’t want to, but you live life feeling okay with it. I love that you resign to fate, destiny, the occult, and the signs. Brave of you.</p>

        <p>Your favorite form of art is the short story, which is a perfect representation of how you perform in the diverse axes of your life, from career to relationships. You are a vignette person, and you know it.</p>

        <p>I love that you used the word “burst” twice in this love letter to yourself.</p>

        <p>Lastly, I love—admire, appreciate, personally indulge in the fact—that you are willing to stay vigilant. It takes so much energy to do that, but you have very much of it. I guess I’m just impressed that you continue to stay alive. You do your chores, accept all of the past, and maintain a reasonable and optimistic spirit as you discern upcoming problems to solve. Especially in the most humorless circumstances, you’ve learned to remain hospitable.</p>
        
        <p>Jenny &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}