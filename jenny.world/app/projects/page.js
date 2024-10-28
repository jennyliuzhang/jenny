"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Masonry from 'react-masonry-css';
import projectStyles from "../styles/projects.module.css";

const breakpointColumnsObj = {
  default: 3,
  1600: 3,
  1100: 3,
  900: 2,
  600: 1
};

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]); // Track selected deliverables

// Fetch projects on component mount
useEffect(() => {
  fetch('/data/projects.json')
    .then((response) => response.json())
    .then((data) => {
      setProjects(data);
      setFilteredProjects(data); // Initialize with all projects
    })
    .catch((error) => console.error('Error fetching projects:', error));
}, []);

// Handle filter changes (checkbox toggle)
const handleFilterChange = (deliverable) => {
  setSelectedFilters((prevFilters) =>
    prevFilters.includes(deliverable)
      ? prevFilters.filter((f) => f !== deliverable) // Remove if already selected
      : [...prevFilters, deliverable] // Add if not selected
  );
};

// Filter projects whenever selected filters change
useEffect(() => {
  if (selectedFilters.length === 0) {
    setFilteredProjects(projects); // Show all projects if no filters are selected
  } else {
    const filtered = projects.filter((project) =>
      selectedFilters.every((filter) =>
        project.projectDeliverables.includes(filter)
      )
    );
    setFilteredProjects(filtered);
  }
}, [selectedFilters, projects]);

// Count occurrences of each deliverable across all projects
const deliverableCounts = projects.reduce((acc, project) => {
  project.projectDeliverables.forEach((deliverable) => {
    acc[deliverable] = (acc[deliverable] || 0) + 1;
  });
  return acc;
}, {});

// Create a sorted list of deliverables by count (descending)
const sortedDeliverables = Object.entries(deliverableCounts)
  .sort((a, b) => b[1] - a[1]) // Sort by count descending
  .map(([deliverable, count]) => ({ deliverable, count }));

  return (
    <main>
      <h2>Featured Work</h2>

      <div className={projectStyles.featured}>
        <div className={projectStyles.featuredTile}>
          <div className={projectStyles.featuredTileDesc}>
              <Link className={projectStyles.linkedTile} href="/projects/dorsia">
                <Image
                    src="/projects/logos/dorsia.png"
                    alt="Dorsia"
                    className={projectStyles.projectLogo}
                    width={79}
                    height={11}
                    style={{opacity: '0.4'}}
                    priority
                  />
                <h3>Dorsia</h3>
                <p>I led early product and marketing design as the first design hire of this $35M-backed hospitality startup.</p>
              </Link>

              <h5>12 subprojects</h5>
              <div className={projectStyles.subprojectPreviews}>
                <Link href="/projects/dorsia/restaurant-profiles" className={projectStyles.subprojectPreview}>
                  <Image
                    src="/projects/thumbnails/restaurant-profiles.png"
                    alt="Project"
                    width={100}
                    height={100}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                  />
                </Link>
                <Link href="/projects/dorsia/shift-editor/" className={projectStyles.subprojectPreview}>
                  <Image
                    src="/projects/thumbnails/restaurant-scheduler.png"
                    alt="Project"
                    width={100}
                    height={100}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                  />
                </Link>
                <Link href="/projects/dorsia/dom-perignon" className={projectStyles.subprojectPreview}>
                  <Image
                    src="/projects/thumbnails/dom-perignon.png"
                    alt="Project"
                    width={100}
                    height={100}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                  />
                </Link>
                <Link href="/projects/dorsia" className={projectStyles.moreSubprojects}>+ 9 more</Link>
              </div>
          </div>

          <Link href="/projects/dorsia" className={projectStyles.featuredTileImage}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: 'auto',
                height: '100%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
            >
              <source src="/projects/dorsia-featured.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>

        </div>

        <div className={projectStyles.featuredTile}>
          <div className={projectStyles.featuredTileDesc}>

            <Link className={projectStyles.linkedTile} href="/projects/plottwisters">
              <Image
                  src="/projects/logos/pt.png"
                  alt="Dorsia"
                  className={projectStyles.projectLogo}
                  width={40}
                  height={40}
                  priority
                />
              <h3>Plot Twisters</h3>
              <p>I founded this award-winning EdTech design collective, focused on making playful self-reflection products.</p>
            </Link>

            <h5>6 subprojects</h5>
            <div className={projectStyles.subprojectPreviews}>
              <div className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/brand-strategy.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
              <div className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/org-design.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
              <div className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/openideo.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
              <div className={projectStyles.moreSubprojects}>+ 3 more</div>
            </div>
          </div>

          <Link href="/projects/plottwisters" className={projectStyles.featuredTileImage}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: 'auto',
                height: '100%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
            >
              <source src="/projects/dorsia-featured.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>

        </div>
      </div>

      {/* <h2 className="centeredh2">Skill Portfolios</h2> */}

      <h2 className="centeredh2">More Projects</h2>

      <div className={projectStyles.moreProjects}>

        <div className={projectStyles.filters}>
            <h4>Filter by Deliverable</h4>
            <div>
            {sortedDeliverables.map(({ deliverable, count }) => (
              <label key={deliverable} className={projectStyles.filterLabel}>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(deliverable)}
                  onChange={() => handleFilterChange(deliverable)}
                />
                {deliverable} ({count})
              </label>
            ))}
          </div>
        </div>
      
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={`my-masonry-grid ${projectStyles.allProjects}`}
          columnClassName={`my-masonry-grid_column ${projectStyles.allProjectsColumn}`}
        >
          {filteredProjects.map((project, index) => (
            <Link
              href={`/projects/${project.parentProject ? project.parentProject + '/' : ''}${project.projectSlug}`}
              key={index}
              className={projectStyles.project}
            >
              <Image
                className={projectStyles.projectThumbnail}
                src={project.projectCoverURL}
                alt={project.projectName}
                width={960}
                height={675}
                style={{ width: '100%', height: 'auto' }}
                quality={100}
                priority
              />
              <div className={projectStyles.projectDesc}>
                <h3>{project.projectName}</h3>
                <p>{project.projectDesc}</p>
                <div className={`tags ${projectStyles.tags}`}>
                  {project.projectDeliverables.map((deliverable, idx) => (
                    <span className={`tag ${projectStyles.tag}`} key={idx}>
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </Masonry>

      </div>

      {/* <h2 className="centeredh2">The Archive</h2>

      <h1>Older projects, unfinished projects, and just-for-fun projects.</h1> */}

    </main>
  );
}