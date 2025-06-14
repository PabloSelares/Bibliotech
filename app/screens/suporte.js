import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Suporte() {
  const router = useRouter();
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = () => {
    if (!mensagem.trim()) {
      Alert.alert('Erro', 'Por favor, descreva o problema.');
      return;
    }
    Alert.alert('Suporte', 'Sua mensagem foi enviada! Entraremos em contato em breve.');
    setMensagem('');
  };

  return (
    <LinearGradient
      colors={["#ff007a", "#6a006a"]}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.titulo}>Suporte</Text>
            <View style={{ width: 28 }} />
          </View>

          <Text style={styles.descricao}>Descreva o erro ou problema que você está enfrentando:</Text>

          <TextInput
            placeholder="Digite aqui sua mensagem..."
            placeholderTextColor="#ddd"
            multiline
            numberOfLines={6}
            value={mensagem}
            onChangeText={setMensagem}
            style={styles.input}
          />

          <TouchableOpacity style={styles.botao} onPress={enviarMensagem}>
            <Text style={styles.textoBotao}>Enviar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  descricao: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 15,
    color: '#fff',
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#6a006a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
