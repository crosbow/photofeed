import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const defaultLocale = "en";
const locales = ["en", "bn"];

const getLocale = (req) => {
  const acceptedLanguage = req.headers.get("accept-language");
  const headers = { "accept-language": acceptedLanguage };

  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
};

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  const pathnameHasLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    // locale is not provided on pathname. get it and redirect with locale
    const locale = getLocale(req);

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};
