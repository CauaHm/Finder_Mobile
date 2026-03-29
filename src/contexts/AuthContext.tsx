import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const TOKEN_KEY = '@finder:token';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function loadToken() {
      try {
        const savedToken = await AsyncStorage.getItem(TOKEN_KEY);
        if (savedToken) {
          setToken(savedToken);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Erro ao carregar token', error);
      }
    }

    void loadToken();
  }, []);

  const login = async (newToken: string) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, newToken);
      setToken(newToken);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Erro ao salvar token', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      setToken(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Erro ao remover token', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}