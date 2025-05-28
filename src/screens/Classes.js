import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { avancado, basico, intermediario } from "../Perguntas";
import { commonStyles } from "../Styles";
import { Card, MyConfirm } from "../components/Custom";
import Screens from "./Screens";

export default Classes = ({ navigation }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");
  const [confirmAction, setConfirmAction] = useState(null);

  const imgs = {
    code1:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    code2:
      "https://images.unsplash.com/photo-1593720216276-0caa6452e004?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.0.3",
    code3:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  };

  const open = (questions, level) => {
    setShowConfirm(true);
    setConfirmMsg(`Iniciar aula?`);
    setConfirmAction(() => () => {
      navigation.navigate(Screens.QUESTIONS, {
        questions: questions,
        level: level,
      });
      setShowConfirm(false);
    });
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          title="Básico"
          description="Aprenda sobre os fundamentos básicos"
          imageUrl={imgs.code1}
          onPress={() => open(basico, "Básico")}
        />
        <Card
          title="Intermediário"
          description="Teste conhecimentos intermediários"
          imageUrl={imgs.code2}
          onPress={() => open(intermediario, "Intermediário")}
        />
        <Card
          title="Avançado"
          description="Teste conhecimentos avançados"
          imageUrl={imgs.code3}
          onPress={() => open(avancado, "Avançado")}
        />

        <MyConfirm
          show={showConfirm}
          msg={confirmMsg}
          onConfirm={confirmAction}
          onCancel={() => setShowConfirm(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
