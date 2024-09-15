import Image from "next/image";
import Link from "next/link";
import parentProjects from "../../styles/featuredProject.module.css";

export default function Page() {
  return (
    <main className={parentProjects.projectPage}>
      <h2><Link href="/projects" className="breadcrumb">Projects</Link>Dorsia</h2>

      <div className={parentProjects.hero}>
        <div className={parentProjects.module1} style={{background: '#fffdf9'}}>

        </div>


        <div className={parentProjects.sideModules}>
          <div className={parentProjects.module2} style={{background: '#FAF2FF'}}>

          </div>

          <div className={parentProjects.module3} style={{background: '#F8F4ED'}}>

          </div>
        </div>

      </div>

    </main>
  );
}