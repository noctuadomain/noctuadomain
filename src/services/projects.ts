import { AxiosResponse } from 'axios';

import apiClient from '@/lib/axios';
import { Project } from '@/ts/interfaces';

export const getProjects = async (): Promise<AxiosResponse<Project[]>> =>
  apiClient.get('/api/projects');

export const deleteProject = async (id: number) => apiClient.delete(`/api/admin/projects?id=${id}`);

export const createProject = async (
  project: Omit<Project, 'id'>
): Promise<AxiosResponse<Project>> => apiClient.post('/api/admin/projects', project);

export const editProject = async (project: Project) =>
  apiClient.patch('/api/admin/projects', project);
