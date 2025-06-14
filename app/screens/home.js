import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  const [menuVisivel, setMenuVisivel] = useState(false);

  const logout = () => {
 
    router.replace('screens/login'); 
  };

  return (
    <LinearGradient
      colors={['#ff007a', '#6a006a']}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >

      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo à Bibliotech</Text>
        <TouchableOpacity onPress={() => setMenuVisivel(true)}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('screens/minhaestante')}>
          <Ionicons name="book" size={40} color="#fff" />
          <Text style={styles.cardText}>Minha Estante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('screens/livrosdisponiveis')}>
          <Ionicons name="library" size={40} color="#fff" />
          <Text style={styles.cardText}>Livros Disponíveis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('screens/livrosemleitura')}>
          <Ionicons name="book-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Livros em Leitura</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('screens/suporte')}>
          <Ionicons name="call-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Suporte</Text>
        </TouchableOpacity>
      </View>

   
      <Modal transparent visible={menuVisivel} animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setMenuVisivel(false)}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={logout} style={styles.menuItem}>
              <Ionicons name="log-out-outline" size={20} color="#6a006a" />
              <Text style={styles.menuText}>Sair</Text>
            </TouchableOpacity>
          
          </View>
        </Pressable>
      </Modal>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '200',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    width: 140,
    height: 160,
    backgroundColor: '#ffffff20',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 12,
    fontWeight: '200',
    textAlign: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#6a006a',
    fontWeight: '600',
  },
});
