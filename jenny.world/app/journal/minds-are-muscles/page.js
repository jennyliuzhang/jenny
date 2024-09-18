import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>Brief Scotland Update</span></h2>
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
        <h1>Amsterdam Jotting</h1>
        <h6>June 2020</h6>
        <h6>2 min read</h6>
        <p>Today is April 9 2023

Sarah helped me move all my
Bookshelves and plan my home last night until midnight
Good convo w Earl last night
Rhys is my favorite
I picked up a lamp from Wendy in Brooklyn at 7:30am 
Swung over to cleveland bagel to get an egg and cheese and Oj
got in my car, ride wit me started playing with 4:44 left
Said my thank you to my angels
Then saw
44 min walk from my house
Time was 4:01 in my car (8:01 actually)
I was on 45th st
Temperature is 44F
Bagel so good
Sitting and thanking universe for being rigged in my favor
Miracles ❤️
 &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}