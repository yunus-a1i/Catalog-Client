import { useQuery } from '@tanstack/react-query';
import client from '../client';
import { ANALYTICS } from '../endpoints';

export function useTopProducts() {
  return useQuery({
    queryKey: ['analytics:top-products'],
    queryFn: async () => {
      const res = await client.get(ANALYTICS.TOP_PRODUCTS);
      return res.data.data;
    },
    staleTime: 1000 * 60,
  });
}

export function useViewsOverTime(params = {}) {
  return useQuery({
    queryKey: ['analytics:views', params],
    queryFn: async () => {
      const res = await client.get(ANALYTICS.VIEWS, { params });
      return res.data.data;
    },
  });
}

export function useAnalyticsSummary() {
  return useQuery({
    queryKey: ['analytics:summary'],
    queryFn: async () => {
      const res = await client.get(ANALYTICS.SUMMARY);
      return res.data.data;
    },
    staleTime: 1000 * 60 * 5,
  });
}