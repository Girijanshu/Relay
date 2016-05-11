import { convexAuth } from "@convex-dev/auth/server";
import GitHub from "@auth/core/providers/github";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [
    GitHub({
      issuer: "https://github.com/login/oauth",
    }),
  ],
});