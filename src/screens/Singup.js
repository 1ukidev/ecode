import { SafeAreaView } from 'react-native';
import { useState } from 'react';
import { commonStyles } from '../Styles';
import { MyInput, MyButton } from '../components/Custom';
import Database from '../Database';
import Util from '../Util';

export default Singup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const validate = () => {
    if (email.trim() === '' || senha.trim() === ''
          || confirmarSenha.trim() === '') {
      alert('Preencha todas as informações necessárias!');
      return false;
    }

    if (senha.trim() !== confirmarSenha.trim()) {
      alert('As senhas não são iguais!');
      return false;
    }

    if (!Util.validateEmail(email)) {
      return false;
    }

    return true;
  };

  const singup = async () => {
    if (!validate()) return;

    let contas = await Database.getValue('contas') || [];
    if (contas.some(c => c.email === email)) {
      alert('Email já cadastrado');
      return;
    }

    const newId = contas.length ? contas[contas.length - 1].id + 1 : 1;
    contas.push({ id: newId, email: email, senha: senha });

    await Database.storeValue('contas', JSON.stringify(contas));

    alert('Cadastrado com sucesso! Faça o login para continuar');

    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <MyInput
        text='E-mail'
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <MyInput
        text='Senha'
        value={senha}
        onChangeText={(value) => setSenha(value)}
        isPassword={true}
      />

      <MyInput
        text='Confirme a senha'
        value={confirmarSenha}
        onChangeText={(value) => setConfirmarSenha(value)}
        isPassword={true}
      />

      <MyButton text='Cadastrar' onPress={singup} />
    </SafeAreaView>
  );
};
