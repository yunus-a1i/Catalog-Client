import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import client from '../api/client';
import { saveToken } from './useAuth';
import Spinner from '../components/common/Spinner';

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
        const query = new URLSearchParams(window.location.search);

        let token = hash.get('access_token') || query.get('access_token');

        if (!token) {
          navigate('/login?error=oauth_failed', { replace: true });
          return;
        }

        token = token.trim();
        saveToken(token);
        client.defaults.headers.common.Authorization = `Bearer ${token}`;

        await client.get('/auth/me');
        history.replaceState(null, '', window.location.pathname);
        navigate('/', { replace: true });
      } catch {
        localStorage.removeItem('access_token');
        navigate('/login?error=oauth_failed', { replace: true });
      }
    })();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-primary dark:bg-dark-surface-primary">
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-4 text-text-secondary dark:text-dark-text-secondary">
          Signing you in...
        </p>
      </div>
    </div>
  );
}