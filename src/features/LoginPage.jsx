// src/features/auth/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router';
import { useLoginMutation } from '../auth/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('to') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useLoginMutation returns a react-query mutation object
  const mutation = useLoginMutation();

  // compute oauth url — uses VITE_API_BASE_URL when backend is on a different origin
  // If your backend is same origin and mounts auth at /api/auth/google you can use '/api/auth/google'
  const API_BASE = import.meta.env.VITE_API_BASE_URL || '';
  const oauthUrl = `${API_BASE.replace(/\/$/, '')}/auth/google`; // ensures no duplicate slash

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync({ email, password });
      // login succeeded -> redirect
      navigate(redirectTo, { replace: true });
    } catch (err) {
      // error shown below from mutation state
      console.error('Login error', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Sign in</h2>

        <label className="block mb-3">
          <span className="text-sm">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded focus:ring-2 focus:ring-brand-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Password</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded focus:ring-2 focus:ring-brand-500"
          />
        </label>

        <button
          type="submit"
          className="w-full py-2 bg-brand-500 text-white rounded mb-3 disabled:opacity-60"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? 'Signing in…' : 'Sign in'}
        </button>

        {mutation.isError && (
          <div className="text-sm text-red-600 mt-2">
            {mutation.error?.response?.data?.message || (mutation.error?.message ?? 'Login failed')}
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <Link to="/register" className="text-sm text-slate-600">Create account</Link>

          {/* oauthUrl computed above — opens the server route that starts passport flow */}
          <a href={oauthUrl} className="text-sm text-slate-600">Sign in with Google</a>
        </div>
      </form>
    </div>
  );
}
