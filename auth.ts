import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: FirestoreAdapter(),
});
