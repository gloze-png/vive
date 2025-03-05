"use client";

import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig"; // Ensure path is correct
import { AuthContext } from "./_context/AuthContext";
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import {api} from '@/convex/_generated/api'

function Provider({ children }) {
  const [user, setUser] = useState(null); // useState 
  const CreateUser = useMutation(api.users.CreateUser);
  //const createUser = useMutation();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("User status changed:", user);
      setUser(user);

       const result = await CreateUser({
        name: user?.displayName, 
        email: user?.email,
        pictureURL:user?.photoURL
      });
      console.log(result);
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

      
  return (
    <div>
     
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
    </div>
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
