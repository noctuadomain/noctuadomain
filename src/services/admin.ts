import { AxiosResponse } from 'axios';

import apiClient from '@/lib/axios';
import { Admin } from '@/ts/interfaces';

export const getAdminByEmail = async (email: string): Promise<AxiosResponse<Admin>> =>
  apiClient.post('/api/admin', { email });
