import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Screen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Logo.png")} style={styles.imgLogo} />
      <Text style={styles.title}>SEJA BEM VINDO</Text>

      <Link href="/login" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </Link>

      <Link href="/about" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sobre</Text>
        </Pressable>
      </Link>

      <Link href="/termos" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Termos</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgLogo: {
    width: 200,
    height: 210,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2155d4",
    marginBottom: 20,
  },
  button: {
   alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#79d9f4',
    width: 210,
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
},
buttonText: {
    color: '#0036ad',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
}
});
