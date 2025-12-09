// src/api/queries/analytics.js
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
    // optional:
    // staleTime: 1000 * 60, // 1 minute, if you want
  });
}

export function useViewsOverTime(params = {}) {
  return useQuery({
    queryKey: ['analytics:views', params],
    queryFn: async () => {
      const res = await client.get(ANALYTICS.VIEWS, { params });
      return res.data.data;
    },
    // optional:
    // keepPreviousData: true, // if this is paginated / filter-changing
  });
}
