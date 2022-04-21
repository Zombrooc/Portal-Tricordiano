import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      try {
        api.get(`/users/`).then((response) => setUser(response.data));
      } catch (error) {
        console.log(error.data);
      }
    }
  }, []);

  async function signUp({ name, email, cpf, password }) {
    try {
      const {
        data: { user, token },
      } = await api.post("/users", {
        name,
        email,
        cpf,
        password,
      });

      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser(user);

      Router.back();

      return { done: true };

    } catch ({ response: { data } }) {
      return data;
    }
  }

  async function signIn({ email, password }) {
    try {
      const {
        data: { token, user },
      } = await api.post("/users/authenticate", {
        email,
        password,
      });

      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser(user);

      Router.back();

      return { done: true };
    } catch ({ response: { data } }) {
      return data;
    }
  }

  async function signOut() {
    setUser(null);

    setCookie(undefined, "nextauth.token", "", {
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    Router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
