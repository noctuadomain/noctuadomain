'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';

import Title from '@/components/elements/title';
import ProjectsCarousel from '@/components/elements/projects-carousel';
import YouTube from '@/components/ui/youtube';

import ProjectDialog from '@/components/elements/project-dialog';
import Button from '@/components/ui/button';

import { ClassProps, Project } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { getProjects } from '@/services/projects';
import { getSession } from '@/lib/auth';

const Projects: React.FC<ClassProps> = ({ className }) => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const reversedProjects = React.useMemo(() => {
    return [...projects].sort((a, b) => b.id - a.id);
  }, [projects]);
  const [activeVideo, setActiveVideo] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [session, setSession] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  React.useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const res = await getProjects();
        const projects = res.data as Project[];

        setProjects(projects);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchProjects();
    fetchSession();
  }, []);

  const openVideo = React.useCallback((link: string) => {
    setActiveVideo(link);
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: '#070B10',
            color: '#F9F8F8',
            border: '1px solid #212530'
          }
        }}
      />
      <ProjectDialog
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
        projects={projects}
        toast={toast}
        setProjects={setProjects}
      />
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
        className={cn(
          'lg: relative my-[134px] flex w-screen flex-col gap-24 overflow-hidden 2xl:my-[120px] 2xl:gap-20 lg:my-[107px] lg:gap-14 md:my-[80px] md:gap-10',
          className
        )}
        id="portfolio"
      >
        {session && (
          <Button className="self-center" variant="primary" onClick={openDialog}>
            Manage projects
          </Button>
        )}
        <ProjectsCarousel elements={projects} openVideo={openVideo} isLoading={isLoading} />
        <ProjectsCarousel
          elements={reversedProjects}
          direction="left"
          openVideo={openVideo}
          isLoading={isLoading}
        />
      </section>
    </>
  );
};

export default Projects;
