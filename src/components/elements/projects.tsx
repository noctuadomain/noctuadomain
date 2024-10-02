'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Title from '@/components/elements/title';
import ProjectsCarousel from '@/components/elements/projects-carousel';
import YouTube from '@/components/ui/youtube';
import Loading from '@/components/ui/loading';

import { ClassProps, Project } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { /* createProject, deleteProject, */ getProjects } from '@/services/projects';
import { getSession } from '@/lib/auth';
import Button from '../ui/button';
import { /* toast,  */ Toaster } from 'react-hot-toast';

const Projects: React.FC<ClassProps> = ({ className }) => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const reversedProjects = React.useMemo(() => {
    return [...projects].sort((a, b) => b.id - a.id);
  }, [projects]);
  const [activeVideo, setActiveVideo] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [session, setSession] = React.useState(null);

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

  /* const handleCreate = async (link: string, title: string) => {
    try {
      const newProject = {
        link,
        title
      };
      const res = await createProject(newProject);
      const resProject = res.data as Project;
      setProjects(prevProjects => [...prevProjects, resProject]);
      toast.success('Project added successfully');
    } catch (error) {
      console.error('Failed to add project', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to add project: ${errorMessage}`);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProject(id);
      setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
      toast.success('Project deleted successfully');
    } catch (error) {
      console.error('Failed to delete project', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to delete project: ${errorMessage}`);
    }
  }; */

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
          'relative my-[134px] flex w-screen flex-col gap-24 overflow-hidden',
          className
        )}
        id="portfolio"
      >
        {session && (
          <Button className="self-start" variant="primary" /*  onClick={test} */>
            Add Project
          </Button>
        )}
        {session && (
          <Button className="self-start" variant="outline" /*  onClick={test} */>
            Remove Project
          </Button>
        )}
        {!isLoading ? (
          <ProjectsCarousel elements={projects} openVideo={openVideo} />
        ) : (
          <Loading className="mx-auto" />
        )}
        {!isLoading ? (
          <ProjectsCarousel elements={reversedProjects} direction="left" openVideo={openVideo} />
        ) : (
          <Loading className="mx-auto" />
        )}
      </section>
    </>
  );
};

export default Projects;
