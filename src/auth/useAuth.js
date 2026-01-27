import client from '../api/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AUTH } from '../api/endpoints';

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

export function loginFn(payload) {
  return client.post(AUTH.LOGIN, payload).then((res) => res.data);
}

export function registerFn(payload) {
  return client.post(AUTH.REGISTER, payload).then((res) => res.data);
}

export function useLoginMutation(options = {}) {
  const qc = useQueryClient();
  
  return useMutation({
    mutationFn: (payload) => loginFn(payload),
    onSuccess: (data) => {
      const token = data.data?.token || data.token;
      if (token) {
        saveToken(token);
      }
      qc.invalidateQueries({ queryKey: ['auth', 'me'] });
    },
    onError: options?.onError,
  });
}

export function useRegisterMutation(options = {}) {
  const qc = useQueryClient();
  
  return useMutation({
    mutationFn: (payload) => registerFn(payload),
    onSuccess: (data) => {
      if (data?.token) {
        saveToken(data.token);
      }
      qc.invalidateQueries({ queryKey: ['auth', 'me'] });
      if (options?.onSuccess) options.onSuccess(data);
    },
    onError: options?.onError,
  });
}

export function fetchMe() {
  return client.get(AUTH.ME).then((res) => res.data);
}

export function useMe(options = {}) {
  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: fetchMe,
    retry: false,
    staleTime: 1000 * 60 * 5,
    ...options,
  });
}

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