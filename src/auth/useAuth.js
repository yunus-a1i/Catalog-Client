// src/auth/useAuth.js
import client from '../api/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AUTH } from '../api/endpoints';

/**
 * Token helpers (localStorage). If you switch to httpOnly cookies,
 * remove client-side storage and adjust client.js accordingly.
 */
export function saveToken(token) {
  if (!token) return;
  localStorage.setItem('access_token', token);
}

export function getToken() {
  return localStorage.getItem('access_token');
}

export function clearToken() {
  localStorage.removeItem('access_token');
}

/**
 * Plain functions that call API (useful outside of React components)
 * - loginFn: POST /api/auth/login -> { accessToken, user, ...}
 * - registerFn: POST /api/auth/register -> similar
 */
export function loginFn(payload) {
  return client.post(AUTH.LOGIN, payload).then((res) => res.data);
}

export function registerFn(payload) {
  return client.post(AUTH.REGISTER, payload).then((res) => res.data);
}

/**
 * React Query: useLoginMutation
 * On success: save token (if provided), invalidate/refetch auth:me
 */
export function useLoginMutation(options = {}) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload) => loginFn(payload),
    onSuccess: (data) => {
      if (data?.accessToken) {
        saveToken(data.accessToken);
      }
      // refresh current user data
      qc.invalidateQueries({ queryKey: ['auth', 'me'] });
      if (options?.onSuccess) options.onSuccess(data);
    },
    onError: options?.onError,
  });
}

/**
 * React Query: useRegisterMutation
 * Behavior same as login: server may return token on register.
 */
export function useRegisterMutation(options = {}) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload) => registerFn(payload),
    onSuccess: (data) => {
      if (data?.accessToken) {
        saveToken(data.accessToken);
      }
      qc.invalidateQueries({ queryKey: ['auth', 'me'] });
      if (options?.onSuccess) options.onSuccess(data);
    },
    onError: options?.onError,
  });
}

/**
 * Fetch current user: GET /api/auth/me
 * Query key: ['auth','me']
 * retry: false to avoid repeated auth attempts on 401
 */
export function fetchMe() {
  return client.get(AUTH.ME).then((res) => res.data);
}

export function useMe(options = {}) {
  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: fetchMe,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    ...options,
  });
}

/**
 * Simple logout utility for UI actions:
 * - clear token
 * - clear react-query cache (optional)
 */
export function logout(qc = null) {
  clearToken();
  if (qc) {
    try {
      qc.clear();
    } catch (e) {
      // ignore
    }
  }
}
