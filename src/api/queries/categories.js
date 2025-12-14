// src/api/queries/categories.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';
import { CATEGORIES } from '../endpoints';

/* ---------- Public ---------- */

export const fetchCategories = async () => {
  const res = await client.get(CATEGORIES.PUBLIC);
  return res.data.data;
};

export function useCategoriesQuery() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60,
  });
}

/* ---------- Admin ---------- */

export const fetchAdminCategories = async () => {
  const res = await client.get(CATEGORIES.ADMIN);
  return res.data.data;
};

export function useAdminCategoriesQuery() {
  return useQuery({
    queryKey: ['admin', 'categories'],
    queryFn: fetchAdminCategories,
  });
}

export function useCreateCategory() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => client.post(CATEGORIES.ADMIN, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin', 'categories'] });
    },
  });
}

export function useUpdateCategory() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) =>
      client.put(CATEGORIES.ADMIN_BY_ID(id), payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin', 'categories'] });
    },
  });
}

export function useDeleteCategory() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id) => client.delete(CATEGORIES.ADMIN_BY_ID(id)),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin', 'categories'] });
    },
  });
}
