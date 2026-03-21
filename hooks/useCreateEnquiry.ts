import { useState } from 'react';
import apiService from '@/service/apiService';
import { websiteEndpoints } from '@/config/websiteEndpoints';

interface UseCreateEnquiryResult {
  submitEnquiry: (formData: FormData) => Promise<any>;
  loading: boolean;
  error: string | null;
}

export const useCreateEnquiry = (): UseCreateEnquiryResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitEnquiry = async (formData: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.postFormData(websiteEndpoints.createEnquiry, formData);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to submit request.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitEnquiry, loading, error };
};
