// src/api/endpoints.js

export const AUTH = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ME: '/auth/me',
  GOOGLE: '/auth/google'
};

export const PRODUCTS = {
  PUBLIC: '/products',
  BY_ID: (id) => `/products/${id}`,
  ADMIN: '/admin/products',
  ADMIN_CREATE: '/admin/products/create',
  ADMIN_BY_ID: (id) => `/admin/products/${id}`
};

export const CATEGORIES = {
  PUBLIC: '/categories',
  BY_ID: (id) => `/categories/${id}`,
  ADMIN: '/admin/categories',
  ADMIN_BY_ID: (id) => `/admin/categories/${id}`
};

export const ANALYTICS = {
  TOP_PRODUCTS: '/admin/analytics/top-products',
  VIEWS: '/admin/analytics/views'
};
