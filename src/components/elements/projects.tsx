'use client';

import React from 'react';

import Title from '@/components/elements/title';
import ProjectsCarousel from '@/components/elements/projects-carousel';

import { ClassProps, Project } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Projects: React.FC<ClassProps> = ({ className }) => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/projects');
      const projects = (await res.json()) as Project[];

      setProjects(projects);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Title
        title="projects"
        description="talented team of 2d and 3d professionals"
        id="portfolio"
      />
      <section
        className={cn('my-[134px] flex w-screen flex-col gap-24 overflow-hidden', className)}
        id="portfolio"
      >
        <ProjectsCarousel elements={projects} />
        <ProjectsCarousel
          elements={[...projects].sort((a, b) => b.id - a.id)}
          direction="left"
          stopOnHover={false}
        />
      </section>
    </>
  );
};

export default Projects;
