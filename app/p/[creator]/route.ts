import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";

/**
 * Liens courts pour les partenariats créateurs.
 *
 *   veasy.pro/p/ana  ->  /telecharger?utm_source=tiktok&utm_medium=creator&utm_campaign=ana
 *
 * Le slug est libre : aucun déploiement n'est nécessaire pour ajouter un créateur.
 * Les UTM sont posés côté serveur, donc ni un raccourcisseur ni un Linktree
 * ne peuvent casser l'attribution PostHog.
 *
 * En parallèle, le clic est enregistré dans Supabase pour permettre l'attribution
 * des inscriptions (voir le hook `hook_attribuer_createur`). L'IP n'est jamais
 * stockée : elle est hachée avec un sel qui ne quitte pas la base.
 */

// Clé publiable Supabase : conçue pour être exposée, protégée par RLS.
const SUPABASE_URL = "https://gtvjqhdjeuwrntqvyabv.supabase.co";
const SUPABASE_KEY = "sb_publishable_dLLoAQn0AWwRS7a-VshljA_zVDPThMH";

function visitorIp(req: NextRequest): string | null {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip");
}

async function enregistrerClic(creator: string, ip: string) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/rpc/enregistrer_clic`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_creator: creator, p_ip: ip }),
      signal: AbortSignal.timeout(2000),
    });
  } catch {
    // L'attribution est un bonus : jamais au prix de la redirection.
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ creator: string }> },
) {
  const { creator } = await params;
  const slug = creator.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 40);

  const url = new URL("/telecharger", req.url);
  url.searchParams.set("utm_source", "tiktok");
  url.searchParams.set("utm_medium", "creator");
  if (slug) url.searchParams.set("utm_campaign", slug);

  const ip = visitorIp(req);
  if (slug && ip) after(() => enregistrerClic(slug, ip));

  return NextResponse.redirect(url, 302);
}
