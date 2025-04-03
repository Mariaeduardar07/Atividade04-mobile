import { Stack } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" }, 
        headerTintColor: "#fff",
        headerTitle: () => (
          <View style={styles.headerContainer}>
            <Image
              source={require("../assets/aviao.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={styles.headerText}>Globe Trek</Text>
            <Image
              source={require("../assets/pass.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="about" options={{ title: "Sobre" }} />
      <Stack.Screen name="termos" options={{ title: "Termos de Condição" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 100,
    color: "#3165e7",
    fontFamily: "29LTBunka",
    
  },
});