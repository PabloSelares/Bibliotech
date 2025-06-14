import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function MinhaEstante() {
  const router = useRouter();
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarLivros() {
      try {
        const resposta = await fetch('https://sua-api.com/livros'); 
        const data = await resposta.json();
        const apenasLidos = data.filter(livro => livro.status === 'lido');
        setLivros(apenasLidos);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setCarregando(false);
      }
    }

    carregarLivros();
  }, []);

  const renderLivro = ({ item }) => (
    <View style={styles.cardLivro}>
      <Image source={{ uri: item.capa }} style={styles.capa} />
      <Text style={styles.tituloLivro}>{item.titulo}</Text>
      <Text style={styles.autorLivro}>{item.autor}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#ff007a', '#6a006a']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Livros Já Lidos</Text>
        <View style={{ width: 28 }} />
      </View>

      {carregando ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={livros}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderLivro}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={styles.lista}
          showsVerticalScrollIndicator={false}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '200',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  lista: {
    paddingBottom: 20,
  },
  cardLivro: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
  },
  capa: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  tituloLivro: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  autorLivro: {
    fontSize: 14,
    color: '#ddd',
  },
});
