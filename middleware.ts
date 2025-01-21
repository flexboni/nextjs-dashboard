import { ROUTES } from "@/lib/constants/routes";
import { auth } from "@/lib/firebase/firebase";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = auth.currentUser;
  const isOnDashboard = request.nextUrl.pathname.startsWith(
    ROUTES.DASHBOARD.ROOT
  );

  if (isOnDashboard && !currentUser) {
    return NextResponse.redirect(new URL(ROUTES.AUTH.LOGIN, request.url));
  }

  if (currentUser && request.nextUrl.pathname === ROUTES.AUTH.LOGIN) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD.ROOT, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 1. 다음을 제외한 모든 경로에 미들웨어 적용
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    // - api 라우트
    // - Next.js 정적파일
    // - Next.js 이미지
    // - .png 파일
  ],
};
