import NextAuth from "next-auth";
import authConfig from "@/lib/auth-config";

const { auth } = NextAuth(authConfig);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default auth;
