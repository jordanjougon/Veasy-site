import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en", "pt-BR"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already on a language-prefixed route — do nothing
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Only redirect on an explicit past choice (language switcher click),
  // never guess from Accept-Language: Googlebot rarely sends a meaningful
  // language header, and Google explicitly warns that content-negotiation
  // redirects can stop it from crawling/indexing the other locale variants.
  // Unlocalized paths otherwise fall through to the pt-BR rewrite below.
  const preferred = request.cookies.get("preferred-lang")?.value;
  if (preferred && preferred !== "pt-BR" && locales.includes(preferred)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // pt-BR default: rewrites in next.config.ts handle routing
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip internal Next.js paths, static files, and API routes
    "/((?!_next/static|_next/image|favicon.ico|veasy-logo.svg|images|robots.txt|sitemap.xml|api|p/).*)",
  ],
};
