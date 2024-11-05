"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import projectPage from "../styles/projectPage.module.css";

export default function ProjectLayout({ slug, heroImage, projectExplain, introPara, projectDetails, children }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project data based on the slug
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProject = data.find((item) => item.projectSlug === slug);
        if (foundProject) {
          setProject(foundProject);
        } else {
          console.error(`Project with slug "${slug}" not found.`);
        }
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  return (
    <main className={projectPage.projectPage}>
      {/* Breadcrumbs */}
      <Breadcrumbs>
        <Link href="/projects">Projects</Link>
        {project.parentProject && (
          <Link href={`/projects/${project.parentProject}`}>{project.parentProjectName}</Link>
        )}
        <span>{project.projectName}</span>
      </Breadcrumbs>

      {/* Hero Image */}
      <Image
        className={projectPage.projectHero}
        src={heroImage}
        alt={project.projectName}
        width={2500}
        height={1500}
        style={{ width: "100%", height: "auto" }}
        quality={100}
        priority
      />

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
          <h1>{project.projectName}</h1>

          <h2>{projectExplain}</h2>
          
          <div className={projectPage.introPara}>
            <p>{introPara}</p>
          </div>

          {/* Tags / Deliverables */}
          <div className="tags">
            {project.projectDeliverables.map((deliverable, index) => (
              <span key={index} className="tag">
                {deliverable}
              </span>
            ))}
          </div>

          {projectDetails}

        </div>
      </div>

      {/* Additional content from children */}
      {children}
    </main>
  );
}