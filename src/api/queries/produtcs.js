// src/api/queries/products.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';
import { PRODUCTS } from '../endpoints';

/* ---------- Public ---------- */

// params: { page, q, category, pageSize, sort, minPrice, maxPrice }
export const fetchProducts = async (params = {}) => {
  const res = await client.get(PRODUCTS.PUBLIC, { params });
  return res.data; // expects { items: [], meta: { totalPages, ... } }
};

export function useProductsQuery(params = {}) {
  return useQuery(['products', params], () => fetchProducts(params), {
    keepPreviousData: true
  });
}

export const fetchProductById = async (idOrSlug) => {
  const res = await client.get(PRODUCTS.BY_ID(idOrSlug));
  return res.data;
};

export function useProductQuery(idOrSlug) {
  return useQuery(['product', idOrSlug], () => fetchProductById(idOrSlug), {
    enabled: !!idOrSlug
  });
}

/* ---------- Admin (CRUD) ---------- */

export const fetchAdminProducts = async (params = {}) => {
  const res = await client.get(PRODUCTS.ADMIN, { params });
  return res.data;
};

export function useAdminProductsQuery(params = {}) {
  return useQuery(['admin:products', params], () => fetchAdminProducts(params), {
    keepPreviousData: true
  });
}

/* create product */
export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation(
    (payload) => client.post(PRODUCTS.ADMIN_CREATE, payload),
    {
      onSuccess: () => qc.invalidateQueries('admin:products')
    }
  );
}

/* update product */
export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation(
    ({ id, payload }) => client.put(PRODUCTS.ADMIN_BY_ID(id), payload),
    {
      onSuccess: (_, variables) => {
        qc.invalidateQueries(['admin:products']);
        qc.invalidateQueries(['product', variables.id]); // refresh product detail
      }
    }
  );
}

/* delete product */
export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation(
    (id) => client.delete(PRODUCTS.ADMIN_BY_ID(id)),
    {
      onSuccess: () => qc.invalidateQueries('admin:products')
    }
  );
}
