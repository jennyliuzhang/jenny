import Image from "next/image";
import Link from "next/link";
import parentProjects from "../../styles/featuredProject.module.css";

export default function Page() {
  return (
    <main className={parentProjects.projectPage}>
      <h2><Link href="/projects" className="breadcrumb">Projects</Link>Plot Twisters</h2>

      <div className={parentProjects.hero}>
        <div className={parentProjects.module1} style={{background: '#EAE5DD'}}>

        </div>


        <div className={parentProjects.sideModules}>
          <div className={parentProjects.module2} style={{background: '#efc335'}}>

          </div>

          <div className={parentProjects.module3} style={{background: '#194482'}}>

          </div>
        </div>

      </div>

    </main>
  );
}