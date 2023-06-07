import { toast as toastify } from 'react-toastify';

export const toast = (e: string, type: 'success' | 'error' | 'info') =>
  toastify(e, { type, theme: 'colored' });
