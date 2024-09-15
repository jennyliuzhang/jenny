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
        src="/journal-graphics/amsterdam-jotting.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.heroCaption}>
        One side of the Rechtboomssloot canal in Amsterdam, Netherlands.
      </div>

      <div className={entryStyles.body}>
        <h1>Amsterdam Jotting</h1>
        <h6>June 2020</h6>
        <h6>2 min read</h6>
        <p>What perfectly describes my mom

We are sitting at a bus stop in monnickerdam. She is explaining investments to me and why ohio is a good place to invest, and how to use the loan credit from that to help pay of school semester by semester. As she explains to me this she is moving her right wrist vigorously to gesture her thoughts. She notices her red ruby gold bracelet. She stops and laughs and looks at her bracelelt and really vigorously wiggles her wrist abd laughs. I love this she says. I love things like this. Its so pretty. I love it. What was I saying?

Amsterdam happened around this time, and I was glad to visit for a bit of a breather and distraction. I’d never been. I kept thinking all the buildings looked like big chocolates. I did a lot of walking and stayed in a massive hostel. En route back I stopped by London and actually visited the Oxford & Cambridge Club there, courtesy of Ryan. It was swanky as expected, and extremely strict on dress code.

I’m in the process of buying a condo! It’s in Cleveland, Ohio of all places. I must joke a lot about Ohio being a “nowhere” place, but now that’s where I’m trying to set up home base and I couldn’t be more excited. I’ve not seen the condo in person, just had my agent tour it many times and take lots of videos, but it’s really gorgeous. 2 bed 2 bath, 3-story loft (3 stories!!!). Right across from a spacious park, lots of coffee shops, a bookstore, some restaurants. I’m eager to learn more about the history of the neighborhood, and of Cleveland in general. I’m also excited to be a part of a community again. Every where I go I have this big desire to be involved, to volunteer and work at plant nurseries. To have a bicycle. To have my staple spots. I would love to live in London, but this will do.

My Masters has been off to a good start. I’ve enjoyed meeting some of the other people in my program and department. There are a few professors I feel a deep synergy with, and I’m really excited to work with them. They are so nurturing and I feel like we speak similar languages. 

I think if there’s anything I’ve learned

It’s to not be critical - take what is useful to you, make sometjing new

She has abacus earrings because she’s an accountant 

In Amsterdam the man in the shared hostel space is talking about the metaphysical self. “There is something beyond the self. I’m interacting with you and you with me but it’s not just our bodies, it’s something else.”

I’m putting hyaloronic acid on my face. 

The woman next to me pulls out a book with a long Portuguese title. The face is a pretty typeface, I assume it’s a new book.

I’m now sitting pantsless in my pod with the curtain closed. Today was a long day and I’m contemplating whether or not I want to get water before I sleep.

“Christianity is a religion, but Hinduism is a way of life”

&nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}