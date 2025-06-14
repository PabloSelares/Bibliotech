import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Livro {
  id: number;
  titulo: string;
  genero: string;
  autor: string;
}

const LivrosDisponiveis = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroGenero, setFiltroGenero] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    try {
      const response = await fetch('https://seuservidor.com/api/livros');
      const data = await response.json();
      setLivros(data);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    } finally {
      setLoading(false);
    }
  };

  const livrosFiltrados = livros.filter((livro) => {
    const tituloMatch = livro.titulo.toLowerCase().includes(filtroNome.toLowerCase());
    const generoMatch = livro.genero.toLowerCase().includes(filtroGenero.toLowerCase());
    return tituloMatch && generoMatch;
  });

  const renderItem = ({ item }: { item: Livro }) => (
    <View style={styles.livroCard}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.texto}>Autor: {item.autor}</Text>
      <Text style={styles.texto}>Gênero: {item.genero}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={['#ff007a', '#6a006a']}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.header}>Livros Disponíveis</Text>

      <TextInput
        style={styles.input}
        placeholder="Filtrar por nome"
        placeholderTextColor="#fff"
        value={filtroNome}
        onChangeText={setFiltroNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Filtrar por gênero"
        placeholderTextColor="#fff"
        value={filtroGenero}
        onChangeText={setFiltroGenero}
      />

      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <FlatList
          data={livrosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </LinearGradient>
  );
};

export default LivrosDisponiveis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: '200',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff30',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    color: '#fff',
  },
  livroCard: {
    backgroundColor: '#ffffff20',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  texto: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
});
