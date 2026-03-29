import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { DefaultButton } from '../DefaultButton';
import { GenericHtml } from '../GenericHtml';

export function SectionContact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cel, setCel] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {
    Alert.alert('Sucesso', 'Simulação de envio de formulário!');
    setNome('');
    setEmail('');
    setCel('');
    setMsg('');
  };

  return (
    <View style={styles.container}>
      <GenericHtml titulo="Sua loja no digital: mais vendas, mais visibilidade!" tituloGrifado="Entre em contato conosco">
        <Text>
          Tem alguma dúvida ou precisa de mais informações? Preencha o formulário abaixo e nossa equipe entrará em contato com você.
        </Text>
      </GenericHtml>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Celular" value={cel} onChangeText={setCel} keyboardType="phone-pad" />
        <TextInput style={[styles.input, styles.textArea]} placeholder="Alguma dúvida?" value={msg} onChangeText={setMsg} multiline numberOfLines={4} />
        <DefaultButton value="Enviar" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16, backgroundColor: '#fff', borderRadius: 8 },
  header: { marginBottom: 12 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 4 },
  titleHighlight: { fontSize: 16, color: '#F6C000' },
  form: {},
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 10 },
  textArea: { height: 100, textAlignVertical: 'top' },
});