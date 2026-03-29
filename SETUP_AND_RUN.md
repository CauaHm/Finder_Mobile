# Guia de Setup e Execução - Finder React Native

Projeto migrado de React Web para React Native com navegação por abas, autenticação e busca de produtos.

---

## 📦 Dependências para Instalar

### Node.js & npm
Certifique-se de ter Node.js 16+ e npm instalados:
```bash
node --version
npm --version
```

### React Native Dependencies
Execute no diretório raiz do projeto:
```bash
npm install
```

### Dependências específicas adicionadas
As seguintes bibliotecas já estão listadas em `package.json` e serão instaladas:

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-native": "^0.71.x",
    "react-native-web": "^0.18.x",
    "@react-navigation/native": "^6.x",
    "@react-navigation/native-stack": "^6.x",
    "@react-navigation/bottom-tabs": "^6.x",
    "@react-native-async-storage/async-storage": "^1.17.x",
    "axios": "^1.4.x",
    "react-icons": "^4.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "vite": "^4.x"
  }
}
```

---

## 🚀 Como Executar o Projeto

### Opção 1: Web (via Vite)
Se deseja testar a versão web adaptada:

```bash
npm run dev
```

Acesso: `http://localhost:5173`

### Opção 2: Android (via React Native CLI)
Pré-requisitos:
- Android Studio instalado
- ANDROID_HOME configurado
- Emulador Android ou dispositivo conectado

```bash
npx react-native run-android
```

### Opção 3: iOS (via React Native CLI)
Pré-requisitos:
- Xcode instalado (macOS apenas)
- CocoaPods instalado

```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

### Opção 4: Expo (Mais Rápido para Desenvolvimento)
Se preferir usar Expo para testes rápidos:

```bash
npm install -g expo-cli
npm install expo
expo start
```

Escaneie o QR code com a app "Expo Go" no seu celular.

---

## ⚙️ Configuração de Ambiente

### Backend API
O projeto espera um backend rodando em `http://localhost:5000` para autenticação:

```
POST /auth/login
POST /auth/register
POST /auth/logout
```

Se seu backend usa outra porta ou domínio, atualize em `src/screens/Login.tsx`:

```typescript
// Linha: const API_BASE_URL = 'http://localhost:5000';
// Altere para sua URL
```

### RapidAPI (Busca de Produtos)
O projeto usa a RapidAPI para buscar produtos. Configure em `src/services/api.ts`:

```typescript
// Adicione sua chave RapidAPI
// headers['x-rapidapi-key'] = 'sua_chave_aqui'
```

---

## 📁 Estrutura do Projeto

```
Finder_React-main/
├── src/
│   ├── components/       # Componentes RN (Cards, Header, Footer, etc)
│   ├── screens/          # Telas (Login, Home, Products, Favorites)
│   ├── contexts/         # AuthContext com AsyncStorage
│   ├── services/         # API service (axios + interceptors)
│   ├── navigation/       # AppNavigator (Stack + Bottom Tabs)
│   ├── styles/           # Theme global (colors, spacing, typography)
│   ├── Models/           # TypeScript models
│   ├── Templates/        # Layout templates
│   └── App.tsx           # Root component
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento web
npm run dev

# Build para produção web
npm run build

# TypeScript check
npm run type-check

# E ESLint
npm run lint

# React Native - Android
npx react-native run-android

# React Native - iOS
npx react-native run-ios

# Expo
expo start
```

---

## 🏃 Fluxo de Teste Recomendado

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Inicie o backend** (se tiver um servidor local):
   ```bash
   # Em outro terminal, na pasta do backend
   npm start
   ```

3. **Escolha o ambiente de teste**:
   - **Web**: `npm run dev`
   - **Android**: `npx react-native run-android`
   - **iOS**: `npx react-native run-ios`

4. **Teste os fluxos**:
   - ✅ Login / Cadastro
   - ✅ Busca de produtos
   - ✅ Adicionar/remover favoritos
   - ✅ Navegação entre abas
   - ✅ Loading states

---

## 🐛 Troubleshooting

### Erro: "Cannot find module 'react-native'"
```bash
npm install
```

### Erro: "Cannot find module '@react-navigation/native'"
```bash
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
```

### Erro: "Cannot find module '@react-native-async-storage/async-storage'"
```bash
npm install @react-native-async-storage/async-storage
```

### Metro bundler não sobe
```bash
npx react-native start --reset-cache
```

### Pod install (iOS) falha
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

---

## 📝 Notas Importantes

- O projeto foi **migrado de React Web para React Native** mantendo a mesma lógica de autenticação, API e navegação.
- A autenticação usa **AsyncStorage** para persistência de token (substitui localStorage).
- A navegação é **Stack + BottomTab** com guarda de autenticação.
- Os componentes foram **adaptados para RN** (sem CSS modules, usando StyleSheet).
- Layout responsivo via **theme centralizado** em `src/styles/theme.ts`.

---

## ✅ Checklist de Verificação Pós-Setup

- [ ] Dependências instaladas (`npm install`)
- [ ] Nenhum erro TypeScript em `src/`
- [ ] Backend API rodando (ou mock pronto)
- [ ] Emulador/device conectado (Android/iOS)
- [ ] Ambiente selecionado (web/android/ios)
- [ ] App inicia sem crashes
- [ ] Login funciona (ou mock de auth)
- [ ] Busca de produtos carrega
- [ ] Navegação entre abas funciona
- [ ] Favoritando produtos salva em AsyncStorage

---

Qualquer dúvida, consulte a documentação do [React Native](https://reactnative.dev) ou [React Navigation](https://reactnavigation.org).
