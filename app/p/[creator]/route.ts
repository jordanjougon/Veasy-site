import { NextRequest, NextResponse } from "next/server";

/**
 * Liens courts pour les partenariats créateurs.
 *
 *   veasy.pro/p/ana  ->  /telecharger?utm_source=tiktok&utm_medium=creator&utm_campaign=ana
 *
 * Le slug est libre : aucun déploiement n'est nécessaire pour ajouter un créateur.
 * Les UTM sont posés côté serveur, donc ni un raccourcisseur ni un Linktree
 * ne peuvent casser l'attribution PostHog.
 */
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

  return NextResponse.redirect(url, 302);
}
