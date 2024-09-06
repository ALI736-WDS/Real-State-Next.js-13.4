"use client";

//chun mikhaim faghat in component client side beshe va kole layout ro client nakonim, in ro dar component joda neveshtim
//V 13.4 : dar akhar in component ro dar main layout be dor barname rap mikonim

import { SessionProvider } from "next-auth/react";

function NextAuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
