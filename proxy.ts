import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en", "pt-BR"];
const defaultLocale = "pt-BR";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  for (const part of acceptLanguage.split(",")) {
    const lang = part.split(";")[0].trim().toLowerCase();
    if (lang === "fr" || lang.startsWith("fr-")) return "fr";
    if (lang === "en" || lang.startsWith("en-")) return "en";
    if (lang === "pt" || lang.startsWith("pt-")) return defaultLocale;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already on a language-prefixed route — do nothing
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Respect explicit user choice stored in cookie
  const preferred = request.cookies.get("preferred-lang")?.value;
  if (preferred && locales.includes(preferred)) {
    if (preferred === "pt-BR") return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // First visit: detect from browser Accept-Language
  const locale = getLocale(request);

  if (locale === "fr" || locale === "en") {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // pt-BR default: rewrites in next.config.ts handle routing
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip internal Next.js paths, static files, and API routes
    "/((?!_next/static|_next/image|favicon.ico|veasy-logo.svg|images|robots.txt|sitemap.xml|api).*)",
  ],
};
