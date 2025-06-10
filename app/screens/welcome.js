import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Welcome = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#ff007a', '#6a006a']}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>BiblioTech</Text>
        <Text style={styles.subtitle}>Sua próxima leitura começa aqui</Text>
      </View>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => router.replace('screens/inicio')}
        activeOpacity={0.8}
      >
        <Text style={styles.mainButtonText}>Começar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 38,
    fontWeight: "200", // fonte fina
    color: "#fff",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    lineHeight: 24,
  },
  mainButton: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: "80%",
    maxWidth: 280,
    alignItems: "center",
    shadowColor: "#3a0ca3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  mainButtonText: {
    color: "#c2185b", // cor que combina com o gradiente
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default Welcome;
