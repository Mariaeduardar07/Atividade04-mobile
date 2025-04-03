import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.png")}
        style={{ width: 200, height: 211, marginBottom: 20 }}
      />

      <View style={styles.containerLogin}>
        <TextInput
          style={styles.inputEmail}
          placeholder="Email"
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#000"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Botão pressionado!")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.textSenha}>Have an account?</Text>
      </View>
      <Text style={styles.navigationText}>
        Navegue pelo GlobeTrek com facilidade!🌍
      </Text>
      <View style={styles.footerButtons}>
        <Link href="/about" style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Sobre</Text>
        </Link>
        <Link href="/" style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Home</Text>
        </Link>
        <Link href="/termos" style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Termos</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    height: "100%",
  },
  containerLogin: {
    backgroundColor: "#3165e7",
    width: 300,
    height: 300,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  inputEmail: {
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 250,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    width: 250,
  },
  textSenha: {
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    width: 250,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#000",
  },
  navigationText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "600",
  },
  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 10,
  },
  smallButton: {
    backgroundColor: "#3165e7",
    padding: 8,
    borderRadius: 10,
    width: 80,
    alignItems: "center",
    
  },
  smallButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});