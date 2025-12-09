// src/api/queries/products.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';
import { PRODUCTS } from '../endpoints';

/* ---------- Public ---------- */

// params: { page, q, category, pageSize, sort, minPrice, maxPrice }
export const fetchProducts = async (params = {}) => {
  const res = await client.get(PRODUCTS.PUBLIC, { params });
  return res.data.data;
};

export function useProductsQuery(params = {}) {
  return useQuery({
    queryKey: ['products', params],          // include params in key
    queryFn: () => fetchProducts(params),    // queryFn must be a function
    staleTime: 1000 * 60,
  });
}

export const fetchProductById = async (idOrSlug) => {
  const res = await client.get(PRODUCTS.BY_ID(idOrSlug));
  return res.data;
};

export function useProductQuery(idOrSlug) {
  return useQuery({
    queryKey: ['product', idOrSlug],
    queryFn: () => fetchProductById(idOrSlug),
    enabled: !!idOrSlug,
  });
}

/* ---------- Admin (CRUD) ---------- */

export const fetchAdminProducts = async (params = {}) => {
  const res = await client.get(PRODUCTS.ADMIN, { params });
  return res.data;
};

export function useAdminProductsQuery(params = {}) {
  return useQuery({
    queryKey: ['admin:products', params],
    queryFn: () => fetchAdminProducts(params),
    keepPreviousData: true,
  });
}

/* create product */
export function useCreateProduct() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => client.post(PRODUCTS.ADMIN_CREATE, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin:products'] });
    },
  });
}

/* update product */
export function useUpdateProduct() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) => client.put(PRODUCTS.ADMIN_BY_ID(id), payload),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ['admin:products'] });
      qc.invalidateQueries({ queryKey: ['product', variables.id] }); // refresh product detail
    },
  });
}

/* delete product */
export function useDeleteProduct() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id) => client.delete(PRODUCTS.ADMIN_BY_ID(id)),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin:products'] });
    },
  });
}
