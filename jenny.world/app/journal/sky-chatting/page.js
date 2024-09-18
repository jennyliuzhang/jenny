import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Sky Chatting</span></h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/sky-chatting.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>Sky Chatting</h1>
        <h6>November 2017</h6>
        <h6>2 min read</h6>
        <p>Back when I was afraid of falling asleep by myself, shadows of trees would rock against my bedroom ceiling. I did not want to close my eyes, so I would concentrate on its drywall texture. It was a map of unexplored geography. In the shadows, I imagined the stencils of kingdoms until I was dizzy from concentrating on the ceiling. I would turn away from the dark shapes and try to sleep, but restless nausea met the fear of closing my eyes.</p>

        <p>We lived in Federal Way, Washington, back when “federal” was not in my vocabulary. There was a two-bedroom townhouse for you, me, and Robert. Every night, you and Robert went to sleep in the master bedroom. I went alone to my dark, drywall sky. I was afraid to close my eyes. I would go to your room to escape shadowy kingdoms. I could finally fall asleep next to you.</p>

        <p>On weekend mornings, we stirred into the fresh scent of our pillows. With a big yawn, you teased me for not sleeping by myself. You smiled at me wide, so I smiled back. You concentrated on my chin and scanned up to my eyes. When I smiled, you said, my upper lip folded under itself too, just like yours. Mirror images, only one of us was a quarter of a century younger.</p>

        <p>Robert would go pick up <em>mantou</em>, Chinese steamed buns, from the 99 Ranch Market. The bed was an endless, timeless sanctuary as we waited for breakfast. It was king-sized and wider than I could ever outstretch my hands, arms, and legs, almost as wide as the ceiling above us. We snuggled in a conscious doze under clean covers. Back when phones did not live bedside, morning could have lasted forever.</p>

        <p>Mantou looked like fluffy white pillows, I thought aloud. Next week we will bake some ourselves, you replied. Just not this weekend, because this weekend we were going to Alki Beach. In the summer, Robert taught me to ride my bike without training wheels. I imagined big stretches of unexplored beach. You and Robert would walk while I pedaled along in the bike lane. I would not be afraid to fall anymore.</p>

        <p>I remember asking why it was called Alki. What did Alki mean? You did not know. What is Alki in Chinese? It was just Alki, you said, because some words did not have Chinese versions. Does beach have a Chinese version? Yes, haitan. Hai means ocean, tan means shore.</p>

        <p>I searched ceiling shapes, the covers, and your face for more of my reality to translate. Our mouths stenciled out every shape as we talked in both English and Chinese. Happy could have lasted forever. We smiled at the drywall ceiling, and you said we were liaotian, which meant “chatting about the sky.” Liao means chat, tian means sky. We were sky chatting, you told me, and because the sky was really big, we did not have to concentrate on anything in particular. I could look for new and faraway kingdoms up above, but I did not have to. We were here and we could chat about anything at all. We could explore all morning long. &nbsp;&#x273d;</p>
      </div>      

    </main>
  );
}