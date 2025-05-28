import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MyButton, MyInput } from "../components/Custom";
import Database from "../Database";
import { commonStyles } from "../Styles";
import Util from "../Util";
import Screens from "./Screens";

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const error = (msg) => {
    setShowError(true);
    setErrorMsg(msg);
  };

  const validate = () => {
    if (email.trim() === "" || senha.trim() === "") {
      error("Preencha o e-mail e a senha!");
      return false;
    }

    if (!Util.validateEmail(email)) {
      return false;
    }

    return true;
  };

  const login = async () => {
    if (!validate()) return;

    const contasRaw = await Database.getValue("contas");
    const contas = contasRaw ? JSON.parse(contasRaw) : [];

    const usuario = contas.find((c) => c.email === email && c.senha === senha);

    if (usuario) {
      await Database.storeValue("logged", true);
      navigation.replace(Screens.HOME);
    } else {
      error("Usuário não cadastrado");
    }
  };

  const singup = () => {
    navigation.navigate(Screens.SINGUP);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={styles.header}>
        Aprenda mais sobre programação com o Ecode! Conecte-se para continuar
      </Text>

      <MyInput
        text="E-mail"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <MyInput
        text="Senha"
        value={senha}
        onChangeText={(value) => setSenha(value)}
        isPassword={true}
      />

      <MyButton text="Login" onPress={login} />

      <TouchableOpacity style={styles.singup} onPress={singup}>
        <Text style={styles.singupText}>Não possui uma conta?</Text>
      </TouchableOpacity>

      <MyAlert
        show={showError}
        msg={errorMsg}
        onConfirm={() => setShowError(false)}
        isError={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 36,
    textAlign: "center",
  },

  singup: {
    marginTop: 16,
  },

  singupText: {
    color: "white",
    fontWeight: "bold",
  },
});
