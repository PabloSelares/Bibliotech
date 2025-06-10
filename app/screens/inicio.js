import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const inicio = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#ff007a', '#6a006a']}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Bibliotech</Text>
        <Text style={styles.subtitle}>Inicie sua jornada na leitura</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => router.replace('/screens/login')}
          activeOpacity={0.8}
        >
          <Text style={styles.mainButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => router.replace('/screens/cadastro')}
          activeOpacity={0.8}
        >
          <Text style={styles.mainButtonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "200", 
    color: "#fff",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    lineHeight: 22,
  },
  buttonsContainer: {
    gap: 20,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  mainButton: {
    backgroundColor: "#fff",
    paddingVertical: 16,
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
    color: "#c2185b",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default inicio;
