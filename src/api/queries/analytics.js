// src/api/queries/analytics.js
import { useQuery } from '@tanstack/react-query';
import client from '../client';
import { ANALYTICS } from '../endpoints';

export function useTopProducts() {
  return useQuery('analytics:top-products', async () => {
    const res = await client.get(ANALYTICS.TOP_PRODUCTS);
    return res.data;
  });
}

export function useViewsOverTime(params = {}) {
  return useQuery(['analytics:views', params], async () => {
    const res = await client.get(ANALYTICS.VIEWS, { params });
    return res.data;
  });
}
