"use client";

import { useEffect, useState } from "react";

// Clé publiable Supabase : conçue pour être exposée, protégée par RLS.
// La fonction appelée est protégée par mot de passe et ne sait faire qu'une
// seule chose — ajouter une adresse à la liste des partenaires.
const SUPABASE_URL = "https://gtvjqhdjeuwrntqvyabv.supabase.co";
const SUPABASE_KEY = "sb_publishable_dLLoAQn0AWwRS7a-VshljA_zVDPThMH";
const STORAGE_KEY = "veasy_admin_pwd";

export default function Parceiros() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setPassword(saved);
    } catch {}
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/ajouter_partenaire`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ p_email: email, p_password: password }),
      });
      const data = await res.json();
      setResult(data);
      if (data?.ok) {
        try { localStorage.setItem(STORAGE_KEY, password); } catch {}
        setEmail("");
      }
    } catch {
      setResult({ ok: false, message: "Réseau indisponible." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "#F0F7F7",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#1A1A1A",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          width: "100%",
          maxWidth: 380,
          background: "#fff",
          border: "1px solid #E2EEF0",
          borderRadius: 14,
          padding: 24,
        }}
      >
        <h1 style={{ fontSize: 19, fontWeight: 800, margin: "0 0 4px" }}>
          Premium partenaire
        </h1>
        <p style={{ fontSize: 13, color: "#666", margin: "0 0 20px", lineHeight: 1.45 }}>
          Active le Premium pour une créatrice. Si elle n&apos;a pas encore de compte,
          il s&apos;activera automatiquement à son inscription.
        </p>

        <label style={{ fontSize: 12, fontWeight: 700, display: "block", marginBottom: 6 }}>
          Mot de passe
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          style={input}
        />

        <label
          style={{ fontSize: 12, fontWeight: 700, display: "block", margin: "16px 0 6px" }}
        >
          E-mail de la créatrice
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          inputMode="email"
          placeholder="ana@gmail.com"
          required
          style={input}
        />

        <button type="submit" disabled={busy} style={button(busy)}>
          {busy ? "…" : "Activer le Premium"}
        </button>

        {result && (
          <p
            style={{
              marginTop: 16,
              marginBottom: 0,
              fontSize: 13,
              lineHeight: 1.45,
              fontWeight: 600,
              color: result.ok ? "#049142" : "#FF3B30",
            }}
          >
            {result.message}
          </p>
        )}
      </form>
    </main>
  );
}

const input: React.CSSProperties = {
  width: "100%",
  padding: "11px 13px",
  fontSize: 16, // 16px : empêche le zoom automatique sur iOS
  border: "1px solid #E2EEF0",
  borderRadius: 9,
  outline: "none",
  boxSizing: "border-box",
};

const button = (busy: boolean): React.CSSProperties => ({
  width: "100%",
  marginTop: 20,
  padding: "13px 16px",
  fontSize: 15,
  fontWeight: 700,
  color: "#fff",
  background: busy ? "#7FB9C2" : "#0091A5",
  border: "none",
  borderRadius: 9,
  cursor: busy ? "default" : "pointer",
});
