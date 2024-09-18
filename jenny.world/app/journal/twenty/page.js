import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Twenty</span></h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/twenty.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>Twenty</h1>
        <h6>February 2017</h6>
        <h6>3 min read</h6>

        <blockquote>
        “What they don’t understand about birthdays and what they never tell you is that when you’re eleven, you’re also ten, and nine, and eight, and seven, and six, and five, and four, and three, and two, and one. And when you wake up on your eleventh birthday you expect to feel eleven, but you don’t. You open your eyes and everything’s just like yesterday, only it’s today. And you don’t feel eleven at all. You feel like you’re still ten. And you are — underneath the year that makes you eleven.” Sandra Cisneros
        </blockquote>

        <p>I turned 20 on Monday. I’d like to thank God for keeping my dumbass alive for this long, as well as these tidbits of insight I’ve picked up over two decades…</p>

        <ol>
          <li>The food doesn’t have to look great to taste great. Also, just try it. The worst that can happen is that you don’t like it (or that you’re allergic, but that’s what EpiPens or whatever are for).</li>
          <li>If you hate Mondays, you probably just hate what you’re doing.</li>
          <li>Don’t self-sabotage your relationships. Make a good effort for others, at least initially. When you look back on a lot of your experiences, the quality of the time is probably based on how the people in the situation made you feel. People are important, invest in your relationships.</li>
          <li>At some point, though, realize that some others will just not care as much as you. Make your good effort but feel free to withdraw if it strains you to continue. Not every single person needs to like you, invest in the people that value you just as much as you value them. Four quarters are better than 100 pennies.</li>
          <li>You can’t tell people how to feel or react to something.</li>
          <li>Don’t walk on people’s lawns.</li>
          <li>I saw this one somewhere: “people who make fun of pop music are just widely insecure.”</li>
          <li>If your problem won’t matter in 24 hours, don’t worry about it so much.</li>
          <li>Maximize your day. And focus on having a good one.</li>
          <li>“Color which, like music, is a matter of vibrations, reaches what is most general and therefore most indefinable in nature: its inner power.” Love the color in this world. People’s blush when they get hot or embarrassed, the yellow of the dandelions in the sidewalk cracks. The orange juice in your fridge. Love music too. Think of all the cool sounds we hear today because of instruments and technology. Thousands of years ago, humans were not hearing these sounds.</li>
          <li>It’s okay to cry. It’s good to release. It’s also good to clear up your sinuses real good once in a while.</li>
          <li>Comparison is not conclusive.</li>
          <li>How much of your insecurity and unhappiness comes from just wanting to be close to another person?</li>
          <li>Exercise really teaches you about time. When you’re panting through high-intensity cardio, you really think hard about how long a minute is. Days are really long, and more than enough time.</li>
          <li>You don’t know where you will be in a year. In two. In five. In retrospect, did you ever imagine yourself today where you are? Probably not. Everything is unpredictable, no matter how hard you try to extrapolate. Plan, but don’t predict.</li>
          <li>The best things in life are the little things you never grew out of. Mine include colorful shoes and floral paisley patterns. The smell of turpentine and paint. The taste of noodles in soy sauce and sesame oil. Having my hair played with.</li>
          <li>Humble people don’t call themselves humble.</li>
          <li>Worship your alone time because, in the end, you are your own best friend. Cook for yourself, take care of your body. Look out for yourself.</li>
          <li>Things are just things, we can always buy more.</li>
          <li>We exist for a fraction of a millisecond in the universe. Also, we don’t even know what 80% of the universe is. Dark matter? Dark energy? Life is vast, vast, vast! Who knows? No one. That is the most comforting part. The world collectively understands that we all don’t understand what the hell is happening. Somehow, in much nothingness, an orb — our pale, measly planet — spawns a fleeting life, like mold.</li>
          <li>What they don’t understand about birthdays and what they never tell you is that when you’re twenty, you’re also nineteen, eighteen, seventeen, sixteen, fifteen, fourteen, thirteen, twelve, eleven, ten, nine, eight, seven, six, five, four, three, two, and one. And when you wake up on your twentieth birthday you expect to feel twenty, but you don’t. You open your eyes and everything’s just like yesterday, only it’s today. And you don’t feel twenty at all. You feel like you’re still ten. And you are — underneath all the years that makes you twenty.</li>
        </ol>
        
        <p>Happy birthday to me, and to you, too, because it is never too late or too early to celebrate being born and alive. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}