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

const Cadastro = () => {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState({ value: "", dirty: false });
  const [password, setPassword] = useState({ value: "", dirty: false });
  const [repeatPassword, setRepeatPassword] = useState({ value: "", dirty: false });
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleCadastro = async () => {
    setFormSubmitted(true);
    let error = false;

    if (!nome || nome.trim().length < 2) {
      error = true;
    }
    if (!email.value || !emailRegex.test(email.value)) {
      setEmail({ value: email.value, dirty: true });
      error = true;
    }
    if (!password.value || password.value.length < 6) {
      setPassword({ value: password.value, dirty: true });
      error = true;
    }
    if (repeatPassword.value !== password.value) {
      setRepeatPassword({ value: repeatPassword.value, dirty: true });
      error = true;
    }

    if (error) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push({
        pathname: "screens/home",
        params: { email: email.value },
      });
    }, 2000);
  };

  const handleErrorNome = () => {
    if (formSubmitted && nome.trim().length < 2) {
      return (
        <Text style={styles.error}>
          O nome deve ter pelo menos 2 caracteres
        </Text>
      );
    }
    return null;
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
        <Text style={styles.error}>
          Senha deve ter pelo menos 6 caracteres
        </Text>
      );
    }
    return null;
  };

  const handleErrorRepeatPassword = () => {
    if (repeatPassword.dirty && repeatPassword.value !== password.value) {
      return (
        <Text style={styles.error}>As senhas não coincidem</Text>
      );
    }
    return null;
  };

  return (
    <LinearGradient
      colors={["#ff007a", "#6a006a"]}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Crie sua conta</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setNome(text)}
          placeholder="Nome"
          style={styles.input}
          placeholderTextColor="#000"
          autoCapitalize="none"
        />
        {handleErrorNome()}

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

        <TextInput
          onChangeText={(text) => setRepeatPassword({ value: text, dirty: true })}
          placeholder="Repetir Senha"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#000"
        />
        {handleErrorRepeatPassword()}

        <TouchableOpacity
          style={[styles.registerButton, isLoading && styles.disabledButton]}
          onPress={handleCadastro}
          disabled={isLoading}
        >
          <Text style={styles.registerButtonText}>
            {isLoading ? 'Processando...' : 'Registrar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => router.replace("/screens/welcome")}
          activeOpacity={0.8}
        >
          <Text style={styles.mainButtonText}>Voltar</Text>
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
  registerButton: {
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
    marginTop: 10,
  },
  disabledButton: {
    opacity: 0.6,
  },
  registerButtonText: {
    color: "#c2185b",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.5,
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
    marginTop: 10,
  },
  mainButtonText: {
    color: "#c2185b",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default Cadastro;
