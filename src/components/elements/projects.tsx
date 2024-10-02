'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Title from '@/components/elements/title';
import ProjectsCarousel from '@/components/elements/projects-carousel';
import YouTube from '@/components/ui/youtube';

import { ClassProps, Project } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { getProjects } from '@/services/projects';

const Projects: React.FC<ClassProps> = ({ className }) => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const reversedProjects = React.useMemo(() => {
    return [...projects].sort((a, b) => b.id - a.id);
  }, [projects]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        const projects = res.data as Project[];

        setProjects(projects);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      }
    };

    fetchProjects();
  }, []);

  const [activeVideo, setActiveVideo] = React.useState<string>('');

  const openVideo = React.useCallback((link: string) => {
    setActiveVideo(link);
  }, []);
  // TODO: add loader
  return (
    <>
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50"
          >
            <YouTube link={activeVideo} setActiveVideo={setActiveVideo} />
          </motion.div>
        )}
      </AnimatePresence>
      <Title
        title="projects"
        description="talented team of 2d and 3d professionals"
        id="portfolio"
      />
      <section
        className={cn('my-[134px] flex w-screen flex-col gap-24 overflow-hidden', className)}
        id="portfolio"
      >
        <ProjectsCarousel elements={projects} openVideo={openVideo} />
        <ProjectsCarousel elements={reversedProjects} direction="left" openVideo={openVideo} />
      </section>
    </>
  );
};

export default Projects;
