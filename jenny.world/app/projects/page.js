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
  const [selectedOwnershipFilters, setSelectedOwnershipFilters] = useState([]);
  const [selectedProjectSizeFilters, setSelectedProjectSizeFilters] = useState([]);

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

// Count occurrences of each ownership type across all projects
const ownershipCounts = projects.reduce((acc, project) => {
  acc[project.projectOwnership] = (acc[project.projectOwnership] || 0) + 1;
  return acc;
}, {});

// Count occurrences of each projectSize type across all projects
const projectSizeCounts = projects.reduce((acc, project) => {
  acc[project.projectSize] = (acc[project.projectSize] || 0) + 1;
  return acc;
}, {});

// Create a sorted list of deliverables by count (descending)
const sortedDeliverables = Object.entries(deliverableCounts)
  .sort((a, b) => b[1] - a[1]) // Sort by count descending
  .map(([deliverable, count]) => ({ deliverable, count }));


const handleOwnershipFilterChange = (ownership) => {
    if (selectedOwnershipFilters.includes(ownership)) {
      setSelectedOwnershipFilters(
        selectedOwnershipFilters.filter((item) => item !== ownership)
      );
    } else {
      setSelectedOwnershipFilters([...selectedOwnershipFilters, ownership]);
    }
  };

const handleProjectSizeFilterChange = (projectSize) => {
  if (selectedProjectSizeFilters.includes(projectSize)) {
    setSelectedProjectSizeFilters(
      selectedProjectSizeFilters.filter((item) => item !== projectSize)
    );
  } else {
    setSelectedProjectSizeFilters([...selectedProjectSizeFilters, projectSize]);
  }
};

useEffect(() => {
  let filtered = projects;

  // Apply deliverable filters
  if (selectedFilters.length > 0) {
    filtered = filtered.filter((project) =>
      selectedFilters.every((filter) =>
        project.projectDeliverables.includes(filter)
      )
    );
  }

  // Apply ownership filters
  if (selectedOwnershipFilters.length > 0) {
    filtered = filtered.filter((project) =>
      selectedOwnershipFilters.includes(project.projectOwnership)
    );
  }

  // Apply projectSize filters
  if (selectedProjectSizeFilters.length > 0) {
    filtered = filtered.filter((project) =>
      selectedProjectSizeFilters.includes(project.projectSize)
    );
  }

  setFilteredProjects(filtered);
}, [selectedFilters, selectedOwnershipFilters, selectedProjectSizeFilters, projects]);

// For filter toggling, keeping details open on desktop
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth > 960);
  };

  // Check the initial window size
  handleResize();

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => window.removeEventListener('resize', handleResize);
}, []);

// Count by parent project
const countProjectsByParentProject = (parentProjectId) => {
  return projects.filter(project => project.parentProject === parentProjectId).length;
};

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

              <h5>{countProjectsByParentProject("dorsia")} subprojects</h5>
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

            <Link className={projectStyles.linkedTile} href="/projects/plot-twisters">
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

            <h5>{countProjectsByParentProject("plot-twisters")} subprojects</h5>
            <div className={projectStyles.subprojectPreviews}>
              <Link href="/projects/plot-twisters/brand-strategy" className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/brand-strategy.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </Link>
              <Link href="/projects/plot-twisters/org-design" className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/org-design.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </Link>
              <Link href="/projects/plot-twisters/openideo" className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/openideo.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </Link>
              <div className={projectStyles.moreSubprojects}>+ 9 more</div>
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
              <source src="/projects/plot-twisters/final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>

        </div>
      </div>

      {/* <h2 className="centeredh2">Skill Portfolios</h2> */}

      <h2 className="centeredh2">More Projects</h2>

      <div className={projectStyles.moreProjects}>

        <div className={projectStyles.filters}>
          <h6 style={{fontSize: '1em'}}>{projects.length} projects total</h6>

          <details className={projectStyles.detailsTag} open={isDesktop}>
            <summary><h4>Ownership</h4></summary>
            <div className={projectStyles.checkboxes}>
              {[100, 90, 80, 70].map((ownership) => (
                <label key={ownership} className={projectStyles.filterLabel}>
                  <input
                    type="checkbox"
                    checked={selectedOwnershipFilters.includes(ownership)}
                    onChange={() => handleOwnershipFilterChange(ownership)}
                  />
                  {ownership === 100 && `100% created by me (${ownershipCounts[100] || 0})`}
                  {ownership === 90 && `90% created by me (${ownershipCounts[90] || 0})`}
                  {ownership === 80 && `Owned but collaborative (${ownershipCounts[80] || 0})`}
                  {ownership === 70 && `Equal teamwork (${ownershipCounts[70] || 0})`}
                </label>
              ))}
            </div>
          </details>

          <details className={projectStyles.detailsTag} open={isDesktop}>
            <summary><h4>Complexity</h4></summary>
            <div className={projectStyles.checkboxes}>
              {["XL", "L", "M", "S"].map((projectSize) => (
                <label key={projectSize} className={projectStyles.filterLabel}>
                  <input
                    type="checkbox"
                    checked={selectedProjectSizeFilters.includes(projectSize)}
                    onChange={() => handleProjectSizeFilterChange(projectSize)}
                  />
                  {projectSize === "XL" && `Rigorous (${projectSizeCounts["XL"] || 0})`}
                  {projectSize === "L" && `Challenging (${projectSizeCounts["L"] || 0})`}
                  {projectSize === "M" && `Moderately Complex (${projectSizeCounts["M"] || 0})`}
                  {projectSize === "S" && `Some Complexity (${projectSizeCounts["S"] || 0})`}
                </label>
              ))}
            </div>
          </details>

          <details className={projectStyles.detailsTag} open={isDesktop}>
            <summary><h4>Deliverable</h4></summary>
            <div className={projectStyles.checkboxes}>
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
          </details>


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
                  {project.projectOwnership >= 90 && (
                    <span className={`tag ${projectStyles.tag} ${projectStyles.ownershipLabel}`}>
                      {project.projectOwnership === 100
                        ? "💡 100% created by me"
                        : "💡 90% created by me"}
                    </span>
                  )}
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