// src/auth/OAuthCallback.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import client from "../api/client";
import { saveToken } from "./useAuth";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        // --- Read hash or query token ---
        const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
        const query = new URLSearchParams(window.location.search);

        let token =
          hash.get("access_token") ||
          query.get("access_token");

        if (!token) {
          navigate("/login?error=oauth_failed", { replace: true });
          return;
        }

        token = token.trim();

        // --- Save token ---
        saveToken(token);
        client.defaults.headers.common.Authorization = `Bearer ${token}`;

        // --- Verify token ---
        await client.get("/auth/me");

        // --- Clean URL ---
        history.replaceState(null, "", window.location.pathname);

        // --- Redirect ---
        navigate("/", { replace: true });
      } catch {
        localStorage.removeItem("access_token");
        navigate("/login?error=oauth_failed", { replace: true });
      }
    })();
  }, [navigate]);

  return <div className="p-8 text-center">Signing you in…</div>;
}
