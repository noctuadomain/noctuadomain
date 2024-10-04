import React from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Dialog from '@/components/ui/dialog';
import Button from '@/components/ui/button';
import Field from '@/components/ui/field';

import { Project } from '@/ts/interfaces';
import { linkOptions, validate } from '@/lib/utils';
import { createProject, deleteProject, editProject } from '@/services/projects';

interface ProjectDialogProps {
  isDialogOpen: boolean;
  closeDialog: () => void;
  projects: Project[];
  toast: typeof toast;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  isDialogOpen,
  closeDialog,
  projects,
  toast,
  setProjects
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' });

  const [isLoading, setIsLoading] = React.useState(false);

  const handleCreate = async (formData: FieldValues) => {
    setIsLoading(true);
    try {
      const newProject = {
        link: formData.createLink,
        title: formData.createTitle
      };

      const res = await createProject(newProject);
      const resProject = res.data as Project;
      setProjects(prevProjects => [...prevProjects, resProject]);
      closeDialog();
      toast.success('The project has been successfully created');
    } catch (error) {
      console.error('Failed to add a project', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to add a project: ${errorMessage}`);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const handleEdit = async (formData: FieldValues) => {
    setIsLoading(true);
    try {
      const mutatedProject = {
        id: parseInt(formData.editId),
        link: formData.editLink,
        title: formData.editTitle
      };

      await editProject(mutatedProject);

      setProjects(prevProjects =>
        prevProjects.map(project => (project.id === mutatedProject.id ? mutatedProject : project))
      );
      closeDialog();

      toast.success('The project has been successfully edited');
    } catch (error) {
      console.error('Failed to update a project', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to update project: ${errorMessage}`);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const handleDelete = async (formData: FieldValues) => {
    setIsLoading(true);
    try {
      const id = parseInt(formData.deleteId);

      await deleteProject(id);
      setProjects(prevProjects => prevProjects.filter(project => project.id !== id));

      closeDialog();
      toast.success('The project has been successfully deleted');
    } catch (error) {
      console.error('Failed to delete project', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to delete a project: ${errorMessage}`);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const tabs = [
    {
      title: 'Create',
      content: (
        <form className="text-black" onSubmit={handleSubmit(handleCreate)}>
          <Field
            inputClassName="border border-solid border-[#E5E7EB]"
            placeholder="https://www.youtube.com/watch?v=yhRCGxF4UmM"
            title="Video link"
            name="createLink"
            disabled={isLoading}
            register={register}
            options={linkOptions}
            error={
              typeof errors?.createLink?.message === 'string' ? errors?.createLink?.message : ''
            }
          />
          <Field
            inputClassName="border border-solid border-[#E5E7EB]"
            wrapperClassName="mt-4"
            placeholder="LED cube interactive dance"
            title="Video title"
            name="createTitle"
            disabled={isLoading}
            register={register}
            options={validate(4, 64)}
            error={
              typeof errors?.createTitle?.message === 'string' ? errors?.createTitle?.message : ''
            }
          />
          <Button className="mt-4 bg-black py-3 text-white" disabled={isLoading}>
            Create Project
          </Button>
        </form>
      )
    },
    {
      title: 'Edit',
      content: (
        <form className="text-black" onSubmit={handleSubmit(handleEdit)}>
          <label className="mb-2 block">Project to edit</label>
          <select className="w-full rounded-lg border px-3 py-2" {...register('editId')}>
            {projects.map(project => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
          <Field
            inputClassName="border border-solid border-[#E5E7EB]"
            wrapperClassName="mt-4"
            placeholder="https://www.youtube.com/watch?v=yhRCGxF4UmM"
            title="New video link"
            name="editLink"
            disabled={isLoading}
            register={register}
            options={linkOptions}
            error={typeof errors?.editLink?.message === 'string' ? errors?.editLink?.message : ''}
          />
          <Field
            inputClassName="border border-solid border-[#E5E7EB]"
            wrapperClassName="mt-4"
            placeholder="LED cube interactive dance"
            title="New video title"
            name="editTitle"
            disabled={isLoading}
            register={register}
            options={validate(4, 64)}
            error={typeof errors?.editTitle?.message === 'string' ? errors?.editTitle?.message : ''}
          />
          <Button className="mt-4 bg-black py-3 text-white" disabled={isLoading}>
            Edit Project
          </Button>
        </form>
      )
    },
    {
      title: 'Delete',
      content: (
        <form className="text-black" onSubmit={handleSubmit(handleDelete)}>
          <label className="mb-2 block">
            Project to <span className="text-red-500">delete</span>
          </label>
          <select className="w-full rounded-lg border px-3 py-2" {...register('deleteId')}>
            {projects.map(project => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
          <Button className="mt-4 bg-red-500 py-3 text-white" disabled={isLoading}>
            Delete Project
          </Button>
        </form>
      )
    }
  ];

  return <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Manage projects" tabs={tabs} />;
};

export default ProjectDialog;
