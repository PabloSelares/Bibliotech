import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";

// Impede o splash automático até que a fonte seja carregada
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      
<Stack.Screen name="screens/welcome" options={{ headerShown: false }} />
<Stack.Screen name="screens/inicio" options={{ headerShown: false }} />
<Stack.Screen name="screens/cadastro" options={{ headerShown: false }} />
<Stack.Screen name="screens/login" options={{ headerShown: false }} />
<Stack.Screen name="screens/home" options={{ headerShown: false }} />
  <Stack.Screen name="screens/livrosdisponiveis" options={{ headerShown: false }} />
       <Stack.Screen name="screens/minhaestante" options={{ headerShown: false }} />
       <Stack.Screen name="screens/livrosemleitura" options={{ headerShown: false }} />
          <Stack.Screen name="screens/suporte" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{
          headerTitle: "Bibliotech",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="settings" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
