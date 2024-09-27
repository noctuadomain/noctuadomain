import React from 'react';

import Title from '@/components/elements/title';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import ProjectsCarousel from '@/components/elements/projects-carousel';

const Projects: React.FC<ClassProps> = ({ className }) => {
  return (
    <>
      <Title
        title="projects"
        description="talented team of 2d and 3d professionals"
        id="portfolio"
      />
      <section className={cn('w-screen my-[134px] overflow-hidden flex flex-col gap-24', className)} id="portfolio">
        <ProjectsCarousel stopOnHover={true} />
        <ProjectsCarousel direction="left" />
      </section>
    </>
  );
};

export default Projects;
