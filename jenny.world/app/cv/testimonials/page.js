import Image from "next/image";
import Link from "next/link";
import cvStyles from "../../styles/cv.module.css";
import cvTestimonialsStyles from "../../styles/cv-testimonials.module.css";
import Tooltip from "../../components/Tooltip";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function Page() {
  return (
    <main>
      <Breadcrumbs>
        <Link href="/cv">Curriculum Vitae</Link>
        <span>Testimonials</span>
      </Breadcrumbs>

      <div className={cvTestimonialsStyles.testimonials}>
        <div className={cvTestimonialsStyles.testimonial}>
          <blockquote className={cvTestimonialsStyles.testimonialContent}>Jenny possesses the very rare combination of having an incredibly strong aesthetic, a deep understanding of how product design influences business strategy, and a way of intuiting how the design of a product can change the behavior of those who interact with it. You want her on your founding team!”</blockquote>
          <div className={cvTestimonialsStyles.testimonialAuthor}>
            Jared Morgenstern, former COO of Raya and 3rd Designer at Facebook
          </div>
        </div>

        <div className={cvTestimonialsStyles.testimonial}>
          <blockquote className={cvTestimonialsStyles.testimonialContent}>It was important for us to work with someone that was flexible, agile and diligent. Jenny blew us away with her ability to create curated, clear webflows — her talents go beyond that of web development. She has a knack for conveying language in an extremely effective and engaging way. Jenny was brilliant to work alongside.”</blockquote>
          <div className={cvTestimonialsStyles.testimonialAuthor}>
            Sahar Rohani, Co-Founder of SOSHE Beauty
          </div>
        </div>

        <div className={cvTestimonialsStyles.testimonial}>
          <blockquote className={cvTestimonialsStyles.testimonialContent}>Aside from the fact that Jenny is truly singlehandedly the best designer I’ve ever worked with, she was an incredible boss and project manager. As a student jumping into a fast paced, iterative work environment, Jenny taught me essential skills that take years to learn, within just a few days. She was organized in her approach - conscientiously organizing a schedule for us to connect, managing projects to work on, the channels I needed to navigate, the work flow I should follow, and even making time for me off the books when I was curious about something, or wanted personal feedback from her. While working with Jenny, she quickly became one of my greatest inspirations in design.”</blockquote>
          <div className={cvTestimonialsStyles.testimonialAuthor}>
            Isabella Koopman, Artist and Design Intern at Dorsia
          </div>
        </div>

        <div className={cvTestimonialsStyles.testimonial}>
          <blockquote className={cvTestimonialsStyles.testimonialContent}>Jenny is my go-to person for creative and consumer. She has the unique ability to bring her own direction to the table while iterating on feedback with intention and speed.”</blockquote>
          <div className={cvTestimonialsStyles.testimonialAuthor}>
            Suraya Shivji, Designer at Snap and former Founder of HAGS
          </div>
        </div>

        <div className={cvTestimonialsStyles.testimonial}>
          <blockquote className={cvTestimonialsStyles.testimonialContent}>I can't think of anyone else that embodies the word 'curiosity' more than Jenny. She has a natural ability to ask the right questions at the right time, and brings a perfect balance of research and intuition to every project she is involved in.”</blockquote>
          <div className={cvTestimonialsStyles.testimonialAuthor}>
            Matthew Manos, Founder of verynice
          </div>
        </div>
      </div>
      

    </main>
  );
}