import { AxiosResponse } from 'axios';

import apiClient from '@/lib/axios';
import { Project } from '@/ts/interfaces';

export const getProjects = async (): Promise<AxiosResponse<Project[]>> =>
  apiClient.get('/api/projects');
