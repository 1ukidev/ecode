import { SafeAreaView, ScrollView } from 'react-native';
import { commonStyles } from '../Styles';
import { basico, intermediario, avancado } from '../Perguntas';
import { Card } from '../components/Custom';
import alert from '../Alert';
import Screens from './Screens';

export default Classes = ({ navigation }) => {
  const imgs = {
    code1: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    code2: 'https://images.unsplash.com/photo-1593720216276-0caa6452e004?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.0.3',
    code3: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  };

  const open = (questions, level) => {
    alert('', 'Iniciar aula?', [
      {
        text: 'Cancelar', style: 'cancel',
        onPress: () => { return; }
      },
      {
        text: 'OK', style: 'default',
        onPress: () => {
          navigation.navigate(Screens.QUESTIONS, { questions: questions, level: level });
        }
      }
    ]);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          title='Básico'
          description='Aprenda sobre os fundamentos básicos'
          imageUrl={imgs.code1}
          onPress={() => open(basico, 'Básico')}
        />
        <Card
          title='Intermediário'
          description='Teste conhecimentos intermediários'
          imageUrl={imgs.code2}
          onPress={() => open(intermediario, 'Intermediário')}
        />
        <Card
          title='Avançado'
          description='Teste conhecimentos avançados'
          imageUrl={imgs.code3}
          onPress={() => open(avancado, 'Avançado')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
