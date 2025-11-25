// src/features/auth/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { registerFn } from '../auth/useAuth';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = registerFn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync({ name, email, password });
      // registered & logged in -> go home
      navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Create account</h2>

        <label className="block mb-3">
          <span className="text-sm">Full name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border rounded" />
        </label>

        <label className="block mb-3">
          <span className="text-sm">Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 block w-full px-3 py-2 border rounded" />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Password</span>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-1 block w-full px-3 py-2 border rounded" />
        </label>

        <button type="submit" className="w-full py-2 bg-brand-500 text-white rounded" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Creating…' : 'Create account'}
        </button>

        {mutation.isError && <div className="text-red-600 mt-2 text-sm">{mutation.error?.response?.data?.message || 'Registration failed'}</div>}
      </form>
    </div>
  );
}
