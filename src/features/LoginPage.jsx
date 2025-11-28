// src/features/auth/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router';
import { useLoginMutation } from '../auth/useAuth';
import heroImageSrc from '../../public/loginImg.jpeg';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-white">
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl flex bg-transparent border border-[#dfdfdf]">
        {/* LEFT (dark) */}
        <div className="w-1/2 min-h-[520px] bg-[#fbfbfb] text-black p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                {/* globe icon placeholder */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12h20" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                </svg>
              </div>
              <div className="text-4xl font-semibold tracking-tighter">Royal Stallion</div>
            </div>

            <h3 className="text-2xl font-semibold mb-2">Sign in or sign up to continue</h3>
            <p className="text-sm text-black/70 mb-6">Create a free account or sign in to continue. We will never sell your personal information.</p>

            <div className="flex gap-3 mb-5">

              <a href={oauthUrl} className="flex-1 h-12 border border-black/10 rounded-md bg-black/5 flex items-center justify-center gap-2">
                {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" opacity="0.6"/></svg> */}
                Login with Google
              </a>

            </div>

            <div className="relative my-4">
              <div className="absolute left-0 right-0 top-1/2 border-t border-black/10"></div>
              <div className="relative text-center text-xs text-black/60 w-full">
                <span className="bg-[#fbfbfb] px-3 relative inline-block">OR</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm text-black/80">Enter email address</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 bg-black/5 border border-black/10 rounded-full placeholder:text-black/40"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="text-sm text-black/80">Enter password address</span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 bg-black/5 border border-black/10 rounded-full placeholder:text-black/40"
                  placeholder="xxxxxxxx"
                />
              </label>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-full font-medium disabled:opacity-60"
                disabled={mutation?.isLoading}
              >
                {mutation?.isLoading ? 'Signing in…' : 'Continue'}
              </button>

              {mutation?.isError && (
                <div className="text-sm text-red-400 mt-1">
                  {mutation?.error?.response?.data?.message || (mutation?.error?.message ?? 'Login failed')}
                </div>
              )}
            </form>
          </div>

          {/* <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2 items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0b0b0b] bg-white/20" />
              ))}
            </div>
            <div className="text-sm text-white/60">Join 642,869 happy Wanderers…</div>
          </div> */}

          {/* <div className="mt-3 text-xs text-white/50">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-sm">Average trip rating</div>
                <div className="text-xl font-bold">9.6/10</div>
              </div>
              <div className="text-center">
                <div className="text-sm">Total nights booked</div>
                <div className="text-xl font-bold">51,000+</div>
              </div>
            </div>
          </div> */}

        </div>

        {/* RIGHT (image) */}
        <div className="w-1/2 min-h-[520px] relative">
          <button className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white">
            ✕
          </button>

          <img
            src={heroImageSrc}
            alt="hero"
            className="object-cover w-full h-full"
          />

          {/* overlay bottom info to match composition */}
          {/* <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center justify-between">
              <div className="text-sm">Average trip rating</div>
              <div className="text-sm">Total nights booked</div>
            </div>

            <div className="flex items-center justify-between mt-1">
              <div className="text-3xl font-bold">9.6/10</div>
              <div className="text-3xl font-bold">51,000+</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* bottom actions (create account / oauth) kept outside the left form to preserve logic */}
      <div className="absolute bottom-8 w-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-6">
          <div className="flex items-center justify-between text-sm text-white/70">
            <Link to="/register" className="underline">Create account</Link>
            <a href={oauthUrl} className="underline">Sign in with Google</a>
          </div>
        </div>
      </div>
    </div>
  );
}
