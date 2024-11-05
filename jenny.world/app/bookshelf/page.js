"use client";

import Link from "next/link";
import bookshelfStyles from "../styles/bookshelf.module.css";
import Masonry from 'react-masonry-css';
import ScrollingTabs from '../components/ScrollingTabs';

const breakpointColumnsObj = {
    default: 3,
    768: 2,
    600: 1,
    480: 1
  };

export default function Page() {

  return (
    <main className={bookshelfStyles.bookshelf}>

        <h2>Bookshelf</h2>

        <div className={bookshelfStyles.introduction}>
        <div className={bookshelfStyles.introPara}>
          <h1 className={bookshelfStyles.bookshelfHeadline}>My favorite books, essays, stories, and written wisdoms.</h1>
          <p>These are my most impactful reads, organized into <Link href="#shelves">six &ldquo;bookshelves&rdquo;</Link> of themes I enjoy meditating on and shape my core values. I think about these texts often for inspiration, knowledge, or their ability to articulate something in my inner world. To make this list, I must have re-read or returned to it a handful of times.</p>
          <p style={{marginBottom: '0'}}>Some works could easily sit on multiple shelves, but I’ve sorted them based on my overall judgement and takeaway, which is a fun little thought exercise for me.</p>
        </div>


        <div className={bookshelfStyles.highlights}>

            <div className={bookshelfStyles.portrait}></div>

        </div>
        
      </div>


      <div id="shelves" className={bookshelfStyles.shelfTabs}>
            <Link href="#love">On Love</Link>
            <Link href="#learning">On Learning</Link>
            <Link href="#play">On Play</Link>
            <Link href="#form">On Form</Link>
            <Link href="#flourishing">On Flourishing</Link>
            <Link href="#meaning">On Meaning</Link>
        </div>

        <h1 id="love">On Love</h1>

        <p>Reads about love, the magical stuff that makes the world bloom.</p>

        <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`my-masonry-grid ${bookshelfStyles.books}`}
                columnClassName="my-masonry-grid_column">

                <div className={bookshelfStyles.book}>
                    <a href="https://www.communio-icr.com/files/berry27-1pdf.pdf" target="_blank"><img src="https://m.media-amazon.com/images/I/815JY5omm2L._AC_UF1000,1000_QL80_.jpg" alt="Life Is A Miracle"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Life Is A Miracle</h5>
                    <p className={bookshelfStyles.bookAuthor}>Wendell Berry</p>
                    <p>Wendell Berry, a farmer and a writer, describes how every person is special just because of their time and place in the phenomenon of life, and how valuing humans by only their labels — a common practice in our modern and empirically-driven world — doesn’t respect this. We exploit what we value, but we <em>defend what we love</em>, he says; he wants each of us to protect each other as creatures deserving of affection and capable of joy, grief, and belonging.</p>
                </div>
                
                
                <div className={bookshelfStyles.book}>
                <a href="https://www.amazon.com/All-About-Love-New-Visions/dp/0060959479" target="_blank"><img src="https://m.media-amazon.com/images/I/71xEY+ZI8kL._AC_UF1000,1000_QL80_.jpg" alt="All About Love"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>All About Love</h5>
                    <p className={bookshelfStyles.bookAuthor}>bell hooks</p>
                    <p>This book gave me words to explore topics from respect and romance to parenting. The most transformative section for me was Chapter 8, “Community: Loving Communion,” but it’s an overall beautiful book that offered me a definition that I always return to in both my personal life and creative practice: love is spiritual and psychological nurture.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Nonviolent-Communication-Language-Life-Changing-Relationships/dp/189200528X" target="_blank"><img src="https://m.media-amazon.com/images/I/6188ojOs2tS._AC_UF1000,1000_QL80_.jpg" alt="Nonviolent Communication"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Nonviolent Communication</h5>
                    <p className={bookshelfStyles.bookAuthor}>Marshall Rosenberg</p>
                    <p>The practice of Nonviolent Communication, or NVC, asserts that negative emotions happen when a person’s needs for wellbeing are not being met, and that conflict resolution should revolve around mutually discovering strategies to fulfill wellbeing needs. I'm still learning it, but I see NVC as a practicum of love because it asks us to suspend judgments from anger and fear, and instead see healthy relationships as things we all co-create and are accountable to.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Little-Weirds-Jenny-Slate/dp/0316485365" target="_blank"><img src="https://m.media-amazon.com/images/I/81MDBFdQ9WL._AC_UF1000,1000_QL80_.jpg" alt="Little Weirds"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Little Weirds</h5>
                    <p className={bookshelfStyles.bookAuthor}>Jenny Slate</p>
                    <p>This book encourages me to embrace my whimsical qualities. I think the line that captures the essence of love, especially self-love, arrives early in the book: &ldquo;My vulnerability is natural and permissible and beautiful to me, and it should remind you of your responsibility to behave like a friend to me and the world.&rdquo; Terrifically hilarious and unabashed. Perfectly meandering yet composed. Strange and magical. My favorite things. </p>
                </div>

            </Masonry>

        <hr></hr>

        <h1 id="learning">On Learning</h1>

        <p>Reads about learning, the social process by which we name our world.</p>

        <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`my-masonry-grid ${bookshelfStyles.books}`}
                columnClassName="my-masonry-grid_column">

                <div className={bookshelfStyles.book}>
                    <a href="https://envs.ucsc.edu/internships/internship-readings/freire-pedagogy-of-the-oppressed.pdf" target="_blank"><img src="https://m.media-amazon.com/images/I/71IUWaYfseL._AC_UF1000,1000_QL80_.jpg" alt="Pedagogy of the Oppressed"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Pedagogy of the Oppressed</h5>
                    <p className={bookshelfStyles.bookAuthor}>Paulo Freire</p>
                    <p>One of the most cited books in the social sciences, this book asserts that learning is a process of “naming the world,” and that teachers should recognize that the world is always in flux and trust students as co-creators of its names, rather than empty receptacles to dump old names into. I owe a lot to Freire; a concept I revisit often in this book is “conscientization,” or the process of a learner coming into awareness of their ever-changing social realities and their role in it.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Gorilla-Love-Toni-Cade-Bambara/dp/0679738983" target="_blank"><img src="https://live-cdn-www.nypl.org/s3fs-public/unnamed_96.jpg" alt="The Lesson"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Gorilla, My Love</h5>
                    <p className={bookshelfStyles.bookAuthor}>Toni Cade Bambara</p>
                    <p>I'm gripped by Bambara's unmistakable style in this collection of coming-of-age short stories. My favorite is called “The Lesson,” told from the perspective of a young Black girl in a fancy toy store. This is a wonderful take on the jarring realization that other people live very differently from you, and how awkward it can be to come to terms with that in the moment.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://bookstore.sudburyvalley.org/product/free-last" target="_blank"><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386924113i/279677.jpg" alt="Free at Last: The Sudbury Valley School"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Free at Last: The Sudbury Valley School</h5>
                    <p className={bookshelfStyles.bookAuthor}>Daniel Greenberg</p>
                    <p>Sudbury Schools are a type of democratic school where students self-organize their own classes, hire and fire their own teachers, and learn everything at their own pace. This is an idyllic book of vignettes about the flagship school founded in 1968 in Massachusetts. Greenberg paints what feels like a utopia to me: an educational society where learning is just synonymous with nourishing our connection to the world around us.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Education-Time-Between-Worlds-Technology/dp/0986282677" target="_blank"><img src="https://m.media-amazon.com/images/I/7154xYnwS6L._AC_UF1000,1000_QL80_.jpg" alt="Education in a Time Between Worlds"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Education in a Time Between Worlds</h5>
                    <p className={bookshelfStyles.bookAuthor}>Zachary Stein</p>
                    <p>Stein presents a collection of essays about the ethics of education, the crisis of measurement, and the relationship between schooling, the economy, and social justice today. This book grounded me in the present reality of our schools. We all know the education system is a bit messed up, but Stein critically examines why, how, and what we need to consider moving forward.</p>
                </div>

            </Masonry>
        
        <hr></hr>

        <h1 id="play">On Play</h1>

        <p>Reads about play, the attitude that sharpens our agency and creativity.</p>

        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`my-masonry-grid ${bookshelfStyles.books}`}
            columnClassName="my-masonry-grid_column">

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Play-Shapes-Brain-Imagination-Invigorates/dp/1583333789" target="_blank"><img src="https://m.media-amazon.com/images/I/61-DbDnHCqL._AC_UF1000,1000_QL80_.jpg" alt="Play"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Play</h5>
                    <p className={bookshelfStyles.bookAuthor}>Stuart Brown</p>
                    <p>This book opens in Alaska with Dr. Stuart Brown and animal biologist Bob Fagen watching two bears roll around and wrestle in a field. When Brown asked why the bears played, Fagen deliberated for a few moments, then finally replied: “In a world continuously presenting unique challenges and ambiguity, play prepares these bears for an evolving planet.” I loved this thought and I felt like it set up the rest of the book well: this is a fun and informative read exploring how play is a way we practice navigating life.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Upright-Citizens-Brigade-Comedy-Improvisation/dp/0989387801" target="_blank"><img src="https://m.media-amazon.com/images/I/81FsqZeAWnL._AC_UF1000,1000_QL80_.jpg" alt="The Upright Citizens Brigade Comedy Improvisation Manual"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>The Upright Citizens Brigade Comedy Improvisation Manual</h5>
                    <p className={bookshelfStyles.bookAuthor}>Matt Besser et al.</p>
                    <p>This cheeky guide lays out the basic games and patterns in improvisational theater, which I think of as an official form of playing pretend. It starts with the number one rule of improv, “Yes, and.” To say “Yes” means to fully accept scene information given to you by your scene partners, and to say “and” means to build on the scene. The rest expands on this art of pattern-matching, asking in each moment, “If this unusual thing is true, then what else is true?” The lessons are practical, humorous, and apply to life beyond theater.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Art-Game-Design-Lenses-Third-dp-1138632058/dp/1138632058" target="_blank"><img src="https://m.media-amazon.com/images/I/41HuScXUcwL._AC_UF1000,1000_QL80_.jpg" alt="The Art of Game Design"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>The Art of Game Design</h5>
                    <p className={bookshelfStyles.bookAuthor}>Jesse Schell</p>
                    <p>When I first started building <Link href="/projects/plot-twisters">Plot Twisters</Link>, a mentor gifted me this book. To this day I still travel with it everywhere because it does such a great job codifying games as a meeting point of emotions, risks, incentives, and storytelling. A sort of bible for game designers, this book is both instructive and philosophical, as good bibles are. It also breaks down concepts into “lenses” to look at your project through, so the reading experience is a playful activity in itself. Jesse Schell, the author, is also one of the creators for my favorite online game growing up, <em>Toontown Online</em>.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.jfki.fu-berlin.de/academics/SummerSchool/Dateien2011/Reading_Assignments/iuli_reader2.pdf" target="_blank"><img src="https://cdn.masto.host/mastodongamedevplace/media_attachments/files/109/466/437/505/247/890/original/8e093fc5e27fcb70.png" alt="Cybernetics and Ghosts"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Cybernetics and Ghosts</h5>
                    <p className={bookshelfStyles.bookAuthor}>Italo Calvino</p>
                    <p>By my favorite writer Italo Calvino, this essay explains the process of storytelling as “combinatorial play:” when you lay out a combination of words into a sentence, that combination can inspire “ghosts” of meaning, memory, intuition, and ideas “half buried or erased from our unconscious,” and they differ from person to person. Though somewhat densely written, this piece describes creative play in a way I connect with and think about every day, whether I’m illustrating a graphic or writing a story: a process of mixing and matching elements until a perfect combination strikes the phantasmal poetry hidden underneath our waking world, inspiring something meaningful for the creator and audience alike.</p>
                </div>

            </Masonry>
            

        <hr></hr>

        <h1 id="form">On Form</h1>

        <p>Reads about form, the manner by which worldly things appear to us.</p>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`my-masonry-grid ${bookshelfStyles.books}`}
                columnClassName="my-masonry-grid_column">

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Reflective-Practitioner-Professionals-Think-Action/dp/0465068782" target="_blank"><img src="https://m.media-amazon.com/images/I/61ai6RE-FPL._AC_UF1000,1000_QL80_.jpg" alt="The Reflective Practitioner"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>The Reflective Practitioner</h5>
                    <p className={bookshelfStyles.bookAuthor}>Donald Schön</p>
                    <p>This book reminds me that my personal intuitions and tacit knowledge are crucial to my creative practice. In vague and complex problem spaces, purely technical solutions can be impossible. Especially in fields like education or social work, any map created rarely matches the territory, and if it does, it doesn’t for long. Schön presents the skill of “reflection-in-action” as the art of self-awareness in decision-making that can only happen impromptu and in context, asking us to exercise our experiential wisdom more often.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Mastery-Movement-Rudolf-Laban/dp/1852731451" target="_blank"><img src="https://m.media-amazon.com/images/I/6136jIsO5aL._AC_UF1000,1000_QL80_.jpg" alt="The Mastery of Movement"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>The Mastery of Movement</h5>
                    <p className={bookshelfStyles.bookAuthor}>Rudolf Laban</p>
                    <p>Rudolf Laban was a dancer and choreographer passionate about how physical movement is a highly personal vocabulary. He describes movement through the categories of body, shape, space, and effort, and characterizes it in continuums between elements like “quick” and “sustained,” “heavy” and “light,” and “bound” and “free.” Tender, nuanced, and extremely unique, I really admire this treatise about movement as creation and the exploration of agency.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Pattern-Language-Buildings-Construction-Environmental/dp/0195019199" target="_blank"><img src="https://m.media-amazon.com/images/I/61DirDeK3tL._AC_UF1000,1000_QL80_.jpg" alt="A Pattern Language"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>A Pattern Language</h5>
                    <p className={bookshelfStyles.bookAuthor}>Christopher Alexander</p>
                    <p>Christopher Alexander, a mathematician-turned-architect, wrote this book of 253 “patterns” of towns and buildings that nourish “aliveness.” He envisioned architects and designers to combine, remix, and interpret these patterns as the formal elements of physical spaces, artistically and infinitely rearrangeable in the same way as words in a poem. The existence of this work continues to amaze me: Alexander not only codified a fascinating collection of urban and architectural forms, but presented them like building blocks to inspire people to create more “poetic” spaces, a feat of form in itself.</p>
                </div>

            </Masonry>
            
        <hr></hr>

        <h1 id="flourishing">On Flourishing</h1>

        <p>Reads about flourishing, the experience of healing and nurturing the collective human spirit.</p>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`my-masonry-grid ${bookshelfStyles.books}`}
                columnClassName="my-masonry-grid_column">

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Dawn-Everything-New-History-Humanity/dp/0374157359" target="_blank"><img src="https://m.media-amazon.com/images/I/819UL7qQa5L._AC_UF1000,1000_QL80_.jpg" alt="The Dawn of Everything"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>The Dawn of Everything</h5>
                    <p className={bookshelfStyles.bookAuthor}>David Graeber and David Wengrow</p>
                    <p>This is an engaging and subversive telling of human history by the late Graeber, an anthropologist and mainstay of Occupy Wall Street, and Wengrow, an accomplished archaeologist. The world as we know it, they argue, emerged much more chaotically and capriciously than we realize. Instead of textbook tropes about nomads, pastoralism, then the inevitable agricultural revolution, the authors share stories about large Eurasian cities without any rulers and the gambling habits of women in indigenous societies. They assert how civilizations have always been born from some tension between control and freedom, and tell us where we fall in comparison today.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.akpress.org/emergentstrategy.html" target="_blank"><img src="https://m.media-amazon.com/images/I/61JNBMA0jlL._AC_UF1000,1000_QL80_.jpg" alt="Emergent Strategy"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Emergent Strategy</h5>
                    <p className={bookshelfStyles.bookAuthor}>adrienne maree brown</p>
                    <p>adrienne maree brown personally invites us to see our own lives, work, and relationships as the first arena for social change. Recombining concepts from complexity science with her observations about collective changemaking as an activist, brown advocates for love as a conduit of possibility, the fractal-like correspondence between healthy projects and their healthy organizations, and nurturing critical relationships over critical mass. A passionate and uplifting resource about practicing justice at scale, I use this book like a tonic for the daily drain of modern labor systems and performativity.</p>
                </div>

                <div className={bookshelfStyles.book}>
                    <a href="https://www.amazon.com/Conflict-Resolution-Holy-Beings-Poems/dp/039335363X" target="_blank"><img src="https://m.media-amazon.com/images/I/61yzFyiRqgL._SL1200_.jpg" alt="Conflict Resolution for Holy Beings"></img></a>
                    <h5 className={bookshelfStyles.bookTitle}>Conflict Resolution for Holy Beings</h5>
                    <p className={bookshelfStyles.bookAuthor}>Joy Harjo</p>
                    <p>Joy Harjo breaks and revitalizes the concept of “conflict resolution” in these poems that take us through her Native American history. A member of the Muscogee (Creek) Nation, a jazz musician, and a U.S. Poet Laureate, Harjo evokes both pain and resilience in lyrical odes about her family, community, and journey of personal reckoning. It’s impossible to define a flourishing world without recognizing the actualities of its deep grief, anger, and numbness. To resolve conflict, Harjo expresses, we must allow our emotions to stomp, sing, and be heard.</p>
                </div>
            </Masonry>

        <hr></hr>

        <h1 id="meaning">On Meaning</h1>

        <p>Reads about meaning, the powerful narratives that emerge in our struggle toward flourishing.</p>

        <Masonry
        breakpointCols={breakpointColumnsObj}
        className={`my-masonry-grid ${bookshelfStyles.books}`}
        columnClassName="my-masonry-grid_column">

        <div className={bookshelfStyles.book}>
            <a href="https://static1.squarespace.com/static/557744ffe4b013bae3b7af63/t/557f2d6ce4b029eb4288a2f8/1434398060958/Tuck+%26+Ree%2C+A+Glossary+of+Haunting.pdf" target="_blank"><img src="https://0.academia-photos.com/attachment_thumbnails/34843859/mini_magick20180817-29169-1j4h1b.png?1534536836" alt="A Glossary of Haunting"></img></a>
                <h5 className={bookshelfStyles.bookTitle}>A Glossary of Haunting</h5>
                <p className={bookshelfStyles.bookAuthor}>Eve Tuck &amp; C. Ree</p>
                <p>Glossaries usually come at the end of a written work, but Tuck and Ree give us a “hostless” glossary. This work of alphabetically organized creative writing is therefore a lost remnant itself, exemplifying the theme of how stories and histories can haunt us, sticking around with nowhere to go. Tuck and Ree talk about the horrors of settler colonialism and the perpetual work of trying to make such violent narratives make sense. They explain how there are no reparations to stop the haunting of these narratives, because the haunting is the reparation itself. An intimate story about justice emerges from their work’s rigid structure; like a phantom spotted between the cracks, the authors’ own meaning-making process seeps through.</p>
            </div>

            <div className={bookshelfStyles.book}>
                <a href="https://www.amazon.com/Phantom-Tollbooth-Norton-Juster/dp/0394820371" target="_blank"><img src="https://m.media-amazon.com/images/I/81jvPhIFD+L._AC_UF1000,1000_QL80_.jpg" alt="The Phantom Tollbooth"></img></a>
                <h5 className={bookshelfStyles.bookTitle}>The Phantom Tollbooth</h5>
                <p className={bookshelfStyles.bookAuthor}>Norton Juster</p>
                <p><em>The Phantom Tollbooth</em> is a timeless illustrated children’s book about Milo, a little boy with a case of ennui. After accidentally transporting himself to a completely new world by way of a plain-looking tollbooth, Milo is joined by a “watchdog” named Tock, who is a dog with the body of a clock, as he travels the Kingdom of Wisdom to release the Princesses of Rhyme and Reason from the Castle of Air. I’ve read The Phantom Tollbooth on several occasions as an adult, and it’s a clever and fantastical adventure each time.</p>
            </div>

            <div className={bookshelfStyles.book}>
                <a href="https://www.amazon.com/Games-Agency-As-Art-Thinking/dp/0190052082" target="_blank"><img src="https://m.media-amazon.com/images/I/71NF7OQqDDL._AC_UF1000,1000_QL80_.jpg" alt="Games: Agency as Art"></img></a>
                <h5 className={bookshelfStyles.bookTitle}>Games: Agency as Art</h5>
                <p className={bookshelfStyles.bookAuthor}>C. Thi Nguyen</p>
                <p>This is a book about games, but in the abstract and reflective way that many things in life can be thought of as games. Nguyen argues that we play games for the aesthetic experience of the “struggle” they provide, delivering an interesting philosophical analysis about why we prefer some games to others: different games, from chess to football, enable us to struggle in different ways, arousing distinct physical, mental, executive, and social agencies. It made me think about the game of my own life: what struggles do I find attractive and fulfilling? What goals, constraints, and environments inspire the most meaning for me?</p>
            </div>

            <div className={bookshelfStyles.book}>
                <a href="https://news.lettersofnote.com/p/make-your-soul-grow" target="_blank"><img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F86a62bfc-8a15-41b0-8c25-7d43ff6991b6_700x935.jpeg" alt="Games: Agency as Art"></img></a>
                <h5 className={bookshelfStyles.bookTitle}>“Dear Xavier High School” letter</h5>
                <p className={bookshelfStyles.bookAuthor}>Kurt Vonnegut</p>
                <p>This is a very short and sweet letter of advice by Kurt Vonnegut, one of my favorite writers. In 2006, he wrote to high school students in New York about learning “what’s inside you.” It’s not an official written work, but you can give it a Google to find it. I love when artists get soulful, and I revisit this letter on occasion for motivation and joy.</p>
            </div>

        </Masonry>

    </main>
  );
}