// src/api/queries/categories.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';
import { CATEGORIES } from '../endpoints';

// public list
export const fetchCategories = async () => {
  const res = await client.get(CATEGORIES.PUBLIC);
  return res.data;
};

export function useCategoriesQuery() {
  return useQuery('categories', fetchCategories, { staleTime: 1000 * 60 * 10 });
}

// admin list
export const fetchAdminCategories = async () => {
  const res = await client.get(CATEGORIES.ADMIN);
  return res.data;
};

export function useAdminCategoriesQuery() {
  return useQuery('admin:categories', fetchAdminCategories);
}

export function useCreateCategory() {
  const qc = useQueryClient();
  return useMutation(
    (payload) => client.post(CATEGORIES.ADMIN, payload),
    { onSuccess: () => qc.invalidateQueries('admin:categories') }
  );
}

export function useUpdateCategory() {
  const qc = useQueryClient();
  return useMutation(
    ({ id, payload }) => client.put(CATEGORIES.ADMIN_BY_ID(id), payload),
    { onSuccess: () => qc.invalidateQueries('admin:categories') }
  );
}

export function useDeleteCategory() {
  const qc = useQueryClient();
  return useMutation(
    (id) => client.delete(CATEGORIES.ADMIN_BY_ID(id)),
    { onSuccess: () => qc.invalidateQueries('admin:categories') }
  );
}
