import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Slow Moving</span></h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/slow-moving.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>Slow Moving</h1>
        <h6>January 2023</h6>
        <h6>3 min read</h6>
        <p>I’ve inaugurated the last three years of my life by moving to a new city each January, but this time I hope it will be more long-term. Cleveland has been nice so far. My belongings are slowly making their way across continents and countries to my front door here. I’m lucky to have hauled in some things of my parents, including mattresses, tables, lamps, and useful housewares to start off my place. A lot of it is lying around on my first floor right now, some pieces even upside down, so I’ve been gently prancing around in my fuzzy house slippers through the legs of sideways chairs and between the beams of bed frames. My second and third floors are still mostly empty, though I’ve been sneaking up a stool or a lamp when I feel like taking them. I don’t have my internet set up yet, so I have to go to my local cafe to take my morning calls. I emptied my mailbox for the first time yesterday. I’m still getting to know the light switches.</p>

        <p>Overall, I’m in love with my unit and very happy with the building and neighborhood. It’s nice to be super enthusiastic about my choices. The community manager told me a story about how the building used to be a saloon and social hall in the 1920s, then a cultural community center for most of the 20th century after that, then finally a housing development in the 1990s. He said the flooring on my first floor is the original wood from the 1920s, just refinished, and I assume the exposed brick in my unit too is also all original. I gave Plot Twisters a tour of my place on our Sunday call. It’s been a longtime dream to host all of us in person, and I suggested they all come to Cleveland one day so we could work together from here. Jesse, who is a Peaky Blinders fan like me, made me laugh with a joke about hosting “Plotty Twisters” meetings at the “Plot Twisters Saloon.”</p>

        <p>It feels really good to be somewhere walkable again. Not that Cleveland compares to Edinburgh exactly, but I really like when walking around outside is a core habit in my life, so I’m lucky to just have a pretty place to stroll around again. The street I live on has a very poetic name. I wish I could share it, but I’m afraid it’d give too much away. Anyway, when I walk down it, I enjoy staring at the tops of the trees that line it. I spend so much of my day closely scrutinizing symbolic things on a screen, so it’s nice to appreciate the real details of faraway branches. I think many of them are sycamores, because their trunks are peeling white in the winter. I like seeing the trees feather out into barely visible strokes against the pale sky. I feel like it’s good for my eyes.</p>

        <p>I walk more slowly than the average person. When I was in college, it was more effective for me to skateboard next to my friends as they walked because I was so slow in comparison. But I always prefer to move at my own pace when I can, which is why I’m glad to be where I am now. After a back-to-back season of finals, World Cup festivities, and vibrant family time during the holidays, I’m now adjusting back to my quiet, solo routines. Over this last year, my mind, feelings, and health have endured many inner and outer changes, so this feels like a good time to be kind and patient with myself again. There is a lot to accomplish this year, and I even sense some short trips coming my way.</p>

        <p>I’ve been spending my evenings listening to music and placing light furniture around my house. The other day I put a nightstand down on one side of my empty guest room while trying to picture how I might lay out the rest of the imaginary furniture. But of course the room was a blank canvas, and I could barely anticipate all the possibilities. I lifted the nightstand to the other wall and considered it there for a moment. I thought, “Maybe it’s good here for now, because I guess I can figure it out later.” And this moment of acceptance, this patience about my little decision, made me remember that I haven’t even lived a third of my long life yet, and my future, too, is a somewhat empty room and still full of possibilities.</p>

        <p>Tonight, as I got ready for bed, I imagined my older self. I though a bit about what she might look like, but mostly, I imagined I was listening to her tell me a bedtime story about her adventures, how she ended up furnishing her life. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}