import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Presently</h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/presently.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>Presently</h1>
        <h6>October 2019</h6>
        <h6>4 min read</h6>
        <p>Presently,</p>

        <ol>
          <li>I live in Los Angeles in an artist collective with 28 people. It’s crowded, but I kind of love it. I watch movies and cook family dinners with actors, musicians, dancers, screenwriters, models, designers, and stylists. Everyone is from everywhere else. My own life is full of uncertainty, so it’s good for me to be with friends who are also living for their dreams. We support each other through long days, bad health, insecurity, and the demands of our work.</li>

          <li>The main inconvenience in the house is that we have an ants problem. This morning I took a shower. I watched two ants on the showerhead climb around the hot water and circle the spout. Nature… very impressive, I aspire to be as resilient.</li>

          <li>I pursue my dream of being a creator of education technology. I spend all my free time building Plot Twisters, a digital world of personal journey building tools for young people to reflect on their values, curiosities, and goals. The reality is that I’m taking an ambitious risk. I am also very slow, because of some indecision and perfectionism, and my head can be messy.</li>

          <li>One day, when the platform is online, my plan is drive across the country and bring Plot Twisters to schools around America through playful classroom workshops. I’ve always wanted to travel and work with kids, so this is my “two birds, one stone.” Traveling school counselor. Through Plot Twisters, I dream of opening mental health centers in cities, plus a summer camp and apprenticeship program too.</li>

          <li>I started boxing this summer. I go every morning at 6am, or 9am if I’m feeling a slower morning. I want to get better. It’s very difficult but I like it. I’m inspired by the numbered drill combinations. I number the Plot Twister minigames just like boxing drills, so that young people can practice combinations of reflection exercises, with the goal of reflecting on work becoming muscle memory. This will make sense when I release the product.</li>

          <li>I take Dutch lessons. They’re weekly in Pasadena, which means I let myself spend one full day per week in beautiful Pasadena. I joke that my Dutch lessons are a “forever Jenny” move: living in a crowded artist collective is a “Jenny’s Twenties” move, as is working retail, but spending time to patiently learn a new activity is a “forever Jenny” thing, a habit I want to make a staple in my life. Anyway, my favorite coffee shop to stop by before my lesson is called Copa Vida. I take the lessons with Helen, a girl I met on a Facebook Free &amp; For Sale page. She is an awesome honest joy, and so is our teacher Margaret. We often play board games, like Jip and Janneke and Ganzenbord, which provide a lot of visual inspiration for Plot Twisters. I’m not yet good at the language, and pronunciation especially is difficult, but it helps that I know some Spanish. Practice makes perfect. One day I will live in Amsterdam.</li>

          <li>I visited New York last fall and again this fall. I don’t think I could ever live there permanently, but I plan to visit every year until I die. Autumn is beautiful there. The city is an adult playground. This time, I stayed with my friend Brianna. While she went to work during the day, I played housewife in her apartment and walked the city, ate in coffee shops, and went to museums.</li>

          <li>There is a boy that I sometimes play soccer with. We also make music together. I am writing a collection of songs. He plays guitar and keyboard and I sing. I don’t sound great, but we practice.</li>

          <li>I currently eat vegetarian.</li>

          <li>I work at verynice, a creative problem solving studio for businesses, social impact initiatives, and non-profits. I am a Creative Strategist directly with the Founder and Managing Director, Matthew Manos, who is my former professor. We’re going to Mexico and Colombia to do workshops this fall. He’s a really inspiring mentor. Also, I’m inspired to structure my business model for Plot Twisters like verynice. verynice makes public strategy toolkits for businesses for free, but generates revenue through workshops and custom consulting services. Similarly, Plot Twisters will make a platform and resources for students, but generate revenue by providing classroom workshops and digital platform integration services to schools.</li>

          <li>My “garden arm” of flower tattoos is growing. I will share about my relationship with my tattoos one day.</li>

          <li>I plan to stay in Los Angeles into 2020. There are several lessons for me here to learn before I leave. I don’t know where I will go next, but when I know, that’s when I will leave!</li>

          <li>My mom is traveling the world. Currently, she’s in Monaco. My grandma travels now, too. She just got back from Vietnam. I wonder if this global curiosity is the legacy of the women in my family. Back home in Seattle, my little brother is finishing his last year of high school. He has blonde hair now.</li>

          <li>My go-to songs right now are:
            <ol>
            <li>Crying by Julian Lage</li>
            <li>Mice by Billie Marten</li>
            <li>Monster by Kanye West ft. Jay-Z, Rick Ross, Nicki Minaj &amp; Bon Iver</li>
            <li>Go To Town by Doja Cat</li>
            <li>4pm in Calabasas by Drake</li>
            <li>Two Cups by Rich The Kid ft. Offset &amp; Big Sean (but mostly Big Sean’s verse)</li>
            <li>Bad Things by Milky Chance ft. Izzy Bizu</li>
            <li>Harvest Moon by Poolside</li>
            <li>This Life by Vampire Weekend</li>
            <li>Sacrifices by Drake ft. 2 Chainz &amp; Young Thug</li>
            <li>Rose-Colored Boy by Paramore</li>
            <li>Maps by Yeah Yeah Yeahs</li>
            <li>We Are Young by fun. ft. Janelle Monae</li>
            <li>Phone Numbers by Dominic Fike &amp; Kenny Beats</li>
            </ol>

            Overall, though, my favorite artist right now is Billie Marten. Her songs are sad, but also light and easy. I lie in bed and listen. They help me recenter when I am overworked, anxious, and insecure.
          </li>

          <li>I still want to move back to Washington, when all is said and done. It’s where my family is. Give me a decade or two, though. Much to do first.</li>

          <li>And though most days I’m a bit tired, I’m quite content to keep going. I know I’m a pretty strong person. &nbsp;&#x273d;</li>
        </ol>

      </div>      

    </main>
  );
}