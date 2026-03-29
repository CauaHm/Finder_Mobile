import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  ScrollView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; // Usando ícones compatíveis com Expo/React Native
import { useAuth } from '../../contexts/AuthContext';

export function LoginCard() {
  const [isSignInActive, setIsSignInActive] = useState(true);

  // States de Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // States de Registro
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const { login } = useAuth();
  const navigation = useNavigation<any>();

  const handleToggle = () => setIsSignInActive(!isSignInActive);

  // ATENÇÃO: Se estiver testando em Emulador Android, "localhost" não funciona. 
  // Troque por "http://10.0.2.2:5000" ou pelo IP da sua máquina (ex: "http://192.168.1.5:5000")
  const API_BASE_URL = "http://192.168.0.14:5000";

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      
      if (res.ok) {
        login(data.token);
        navigation.navigate("Products");
      } else {
        Alert.alert("Erro", data.message);
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", "Falha ao conectar com o servidor.");
    }
  };

  const handleRegister = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      });
      const data = await res.json();
      
      if (res.ok) {
        Alert.alert("Sucesso", "Conta criada! Fazendo login automático...");
        
        const loginRes = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: registerEmail, password: registerPassword }),
        });
        const loginData = await loginRes.json();
        
        if (loginRes.ok) {
            login(loginData.token);
            navigation.navigate("Products");
        } else {
            setIsSignInActive(true); 
        }
      } else {
        Alert.alert("Erro", data.message || "Erro no cadastro");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", "Erro ao conectar com o servidor.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.card}>
        <Text style={styles.title}>
          {isSignInActive ? 'Faça login no Finder' : 'Crie uma conta'}
        </Text>

        {!isSignInActive && (
          <View style={styles.inputContainer}>
            <FontAwesome5 name="user" size={16} color="#666" style={styles.icon} />
            <TextInput 
              style={styles.input} 
              placeholder="Nome" 
              value={registerName} 
              onChangeText={setRegisterName} 
            />
          </View>
        )}

        <View style={styles.inputContainer}>
          <FontAwesome5 name="envelope" size={16} color="#666" style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            value={isSignInActive ? loginEmail : registerEmail} 
            onChangeText={isSignInActive ? setLoginEmail : setRegisterEmail} 
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="lock" size={16} color="#666" style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Senha" 
            value={isSignInActive ? loginPassword : registerPassword} 
            onChangeText={isSignInActive ? setLoginPassword : setRegisterPassword} 
            secureTextEntry
          />
        </View>

        {isSignInActive && (
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity 
          style={styles.button} 
          onPress={isSignInActive ? handleLogin : handleRegister}
        >
          <Text style={styles.buttonText}>{isSignInActive ? 'Entrar' : 'Cadastrar'}</Text>
        </TouchableOpacity>

        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            {isSignInActive ? 'Ainda não tem conta? ' : 'Já tem uma conta? '}
          </Text>
          <TouchableOpacity onPress={handleToggle}>
            <Text style={styles.toggleLink}>
              {isSignInActive ? 'Cadastre-se' : 'Faça login'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  toggleText: {
    color: '#666',
    fontSize: 14,
  },
  toggleLink: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});