import { useState } from "react";
import { SafeAreaView } from "react-native";
import { MyAlert, MyButton, MyInput } from "../components/Custom";
import Database from "../Database";
import { commonStyles } from "../Styles";
import Util from "../Util";

export default Singup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("Cadastrado com sucesso!");
  const [successCalback, setSuccessCalback] = useState(null);

  const error = (msg) => {
    setShowError(true);
    setErrorMsg(msg);
  };

  const success = (msg, callback) => {
    setShowSuccess(true);
    setSuccessMsg(msg);
    setSuccessCalback(() => callback);
  };

  const validate = () => {
    if (
      email.trim() === "" ||
      senha.trim() === "" ||
      confirmarSenha.trim() === ""
    ) {
      error("Preencha todas as informações necessárias");
      return false;
    }

    if (senha.trim() !== confirmarSenha.trim()) {
      error("As senhas não são iguais");
      return false;
    }

    if (!Util.validateEmail(email, (msg) => error(msg))) {
      return false;
    }

    return true;
  };

  const singup = async () => {
    if (!validate()) return;

    let contas = await Database.getValue("contas");
    contas = contas ? JSON.parse(contas) : [];

    if (contas.some((c) => c.email === email)) {
      error("Email já cadastrado");
      return;
    }

    const newId = contas.length ? contas[contas.length - 1].id + 1 : 1;
    contas.push({ id: newId, email: email, senha: senha });

    await Database.storeValue("contas", JSON.stringify(contas));

    success("Cadastrado com sucesso! Faça o login para continuar", () => {
      navigation.goBack();
    });
  };

  return (
    <SafeAreaView style={commonStyles.container}>
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

      <MyInput
        text="Confirme a senha"
        value={confirmarSenha}
        onChangeText={(value) => setConfirmarSenha(value)}
        isPassword={true}
      />

      <MyButton text="Cadastrar" onPress={singup} />

      <MyAlert
        show={showError}
        msg={errorMsg}
        onConfirm={() => setShowError(false)}
        isError={true}
      />

      <MyAlert
        show={showSuccess}
        msg={successMsg}
        onConfirm={successCalback}
        isError={false}
      />
    </SafeAreaView>
  );
};
