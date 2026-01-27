import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';
import { PRODUCTS } from '../endpoints';

/* ---------- Public ---------- */

export const fetchProducts = async (params = {}) => {
  const res = await client.get(PRODUCTS.PUBLIC, { params });
  return res.data.data;
};

export function useProductsQuery(params = {}) {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => fetchProducts(params),
    staleTime: 1000 * 60,
  });
}

export const fetchProductById = async (idOrSlug) => {
  const res = await client.get(PRODUCTS.BY_ID(idOrSlug));
  return res.data.data;
};

export function useProductQuery(idOrSlug) {
  return useQuery({
    queryKey: ['product', idOrSlug],
    queryFn: () => fetchProductById(idOrSlug),
    enabled: !!idOrSlug,
  });
}

/* ---------- Admin ---------- */

export const fetchAdminProducts = async (params = {}) => {
  const res = await client.get(PRODUCTS.ADMIN, { params });
  return res.data;
};

export function useAdminProductsQuery(params = {}) {
  return useQuery({
    queryKey: ['admin', 'products', params],
    queryFn: () => fetchAdminProducts(params),
    keepPreviousData: true,
  });
}

export function useCreateProduct() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => client.post(PRODUCTS.ADMIN_CREATE, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin', 'products'] });
      qc.invalidateQueries({ queryKey: ['products'] });
    },
  });
}

export function useUpdateProduct() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) =>
      client.put(PRODUCTS.ADMIN_BY_ID(id), payload),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ['admin', 'products'] });
      qc.invalidateQueries({ queryKey: ['products'] });
      qc.invalidateQueries({ queryKey: ['product', variables.id] });
    },
  });
}

export function useDeleteProduct() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id) => client.delete(PRODUCTS.ADMIN_BY_ID(id)),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin', 'products'] });
      qc.invalidateQueries({ queryKey: ['products'] });
    },
  });
}