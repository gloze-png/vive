"use client";

import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig"; // Ensure path is correct
import { AuthContext } from "./_context/AuthContext";

function Provider({ children }) {
  const [user, setUser] = useState(null); // useState 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("User status changed:", user);
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within Provider");
  }
  return context;
};

export default Provider;
