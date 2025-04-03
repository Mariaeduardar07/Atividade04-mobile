import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerIntro}>
        <Image source={require("../assets/Logo.png")} style={styles.imgLogo} />
        <Text style={styles.titleIntro}>
          VENHA CONHECER UM POUCO DA NOSSA HISTÓRIA
        </Text>
      </View>

      <Text style={styles.titleText}>
          Sobre Nós
        </Text>
      <Text style={styles.textIntro}>
      O GlobeTrek nasceu da nossa paixão por viajar e da vontade de tornar o planejamento de roteiros mais fácil e acessível. Somos duas alunas desenvolvedoras do SENAI e, no dia 03/04/2025, transformamos essa ideia em realidade.
      </Text>
      <Text style={styles.textIntro}>
      Criamos este site para ajudar viajantes a explorarem o mundo sem complicação, oferecendo roteiros completos para diferentes estilos de viagem. Aqui, você encontra caminhos prontos para sua próxima aventura!
      </Text>
      <Text style={styles.textIntroBold}>
      Seja bem-vindo ao GlobeTrek – Jornada pelo Mundo! 🌍✈️
      </Text>


      <Text style={styles.buttonTitle}>
     Para onde vamos agora? 🌍✈️
      </Text>
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
    alignItems: "center",
    marginTop: 30,
  },
  containerIntro: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10, 
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  imgLogo: {
    width: 80,
    height: 85,
  },
 titleIntro: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2155d4",
  },
    textIntro: {
    width: 320,
    marginTop: 8,
    fontSize: 16,
    textAlign: "justify",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2155d4",
    marginTop: 35,
    marginRight: 240,
  },
  textIntroBold: {
    width: 320,
    marginTop: 8,
    fontSize: 16,
    textAlign: "justify",
    fontWeight: "bold",
  },
  buttonTitle: {
    width: 320,
    marginTop: 90,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
   
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#79d9f4",
    width: 210,
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#0036ad",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
