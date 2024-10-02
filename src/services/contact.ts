import { FieldValues } from 'react-hook-form';

import apiClient from '@/lib/axios';

export const sendMessage = async (formData: FieldValues) =>
  apiClient.post('/api/contact', formData);
