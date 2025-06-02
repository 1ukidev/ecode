import { SafeAreaView, StyleSheet, Text } from "react-native";
import { commonStyles } from "../Styles";

export default About = () => {
  return (
    <SafeAreaView style={[commonStyles.container, { padding: 28 }]}>
      <Text style={styles.title}>
        🚀 Ecode
      </Text>
      <Text style={styles.subtitle}>
        Aplicação interativa para aprender programação com desafios práticos e gamificação
      </Text>
      <Text style={styles.sectionTitle}>Desenvolvido por:</Text>
      <Text style={styles.names}>
        - Leonardo Monteiro Moreira{"\n"}
        - Leandro da Silva Lima{"\n"}
        - João Alysson Sombra de Paiva{"\n"}
        - Gabriel Oliveira Rodrigues
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },

  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },

  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  names: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22,
  },
});
