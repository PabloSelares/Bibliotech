import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const ELEMENT_WIDTH = 280;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState({ value: "", dirty: false });
  const [password, setPassword] = useState({ value: "", dirty: false });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = async () => {
    if (email.value && password.value) {
      router.push({
        pathname: "screens/home",
        params: {
          email: email.value,
        },
      });
    } else {
      handleErrorForm();
     
    }
  };

  const handleErrorEmail = () => {
    if (!email.value && email.dirty) {
      return <Text style={styles.error}>Campo obrigatório</Text>;
    } else if (!emailRegex.test(email.value) && email.dirty) {
      return <Text style={styles.error}>Email inválido</Text>;
    }
    return null;
  };

  const handleErrorPassword = () => {
    if (!password.value && password.dirty) {
      return <Text style={styles.error}>Campo obrigatório</Text>;
    } else if (password.value.length < 6 && password.dirty) {
      return (
        <Text style={styles.error}>Senha deve ter pelo menos 6 caracteres</Text>
      );
    }
    return null;
  };

  const handleErrorForm = () => {
    if (!email.value || !emailRegex.test(email.value)) {
      setEmail({ value: email.value, dirty: true });
    }

    if (!password.value) {
      setPassword({ value: password.value, dirty: true });
    }
  };

  return (
    <LinearGradient
      colors={["#ff007a", "#6a006a"]}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEmail({ value: text, dirty: true })}
          placeholder="E-mail"
          style={styles.input}
          placeholderTextColor="#000"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {handleErrorEmail()}

        <TextInput
          onChangeText={(text) => setPassword({ value: text, dirty: true })}
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#000"
        />
        {handleErrorPassword()}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.mainButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => router.replace("/screens/welcome")}
            activeOpacity={0.8}
          >
            <Text style={styles.mainButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
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
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 30,
    width: "90%",
    maxWidth: ELEMENT_WIDTH,
    marginBottom: 8,
    color: "#000",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  error: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 8,
  },
  buttonsContainer: {
    gap: 10,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  mainButton: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 30,
    width: "90%",
    maxWidth: ELEMENT_WIDTH,
    alignItems: "center",
    shadowColor: "#3a0ca3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  mainButtonText: {
    color: "#c2185b",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default Login;
