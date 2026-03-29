# Finder — React Native

App mobile de busca de produtos via Amazon API, com autenticação, favoritos e navegação por tabs.

---

## Stack

- React Native + Expo
- TypeScript
- React Navigation (Stack + Bottom Tabs)
- AsyncStorage
- Axios

---

## Instalação

```bash
npm install
npx expo start
```

Para rodar em dispositivo físico, instale o app **Expo Go** e escaneie o QR code.

---

## Dependências principais

```bash
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npm install @react-native-async-storage/async-storage axios
expo install react-native-safe-area-context react-native-screens
```

---

## Estrutura

```
src/
├── components/
├── screens/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── Favorites.tsx
│   └── Login.tsx
├── contexts/
│   └── AuthContext.tsx
├── services/
│   └── api.ts
├── navigation/
│   └── AppNavigator.tsx
├── Models/
├── storage/
└── styles/
```

---

## Funcionalidades

- Login com token salvo em AsyncStorage
- Busca de produtos via RapidAPI (Amazon)
- Favoritos persistidos localmente
- Navegação protegida por autenticação

---

## Variáveis de ambiente

Crie um `.env` na raiz:

```env
EXPO_PUBLIC_API_KEY=sua_chave_aqui
EXPO_PUBLIC_API_URL=https://real-time-amazon-data.p.rapidapi.com/search
```

---

## Checklist

- [ ] Login salva token em AsyncStorage
- [ ] Logout limpa token e redireciona
- [ ] Busca de produtos funciona via API
- [ ] Favoritos gravam e listam corretamente
- [ ] Navegação por tabs (Home / Products / Favorites)

---

## Branches

```bash
# Atualizar main
git checkout main && git pull origin main

# Nova feature
git checkout -b feat/nome-da-feature
```

Convenção de commits: `feat`, `fix`, `refactor`, `docs`
