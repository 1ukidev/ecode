import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { commonStyles } from '../Styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Screens from './Screens';

export default Home = ({ navigation }) => {
  const openClasses = () => {
    navigation.navigate(Screens.CLASSES);
  };

  const openScore = () => {
    navigation.navigate(Screens.HISTORY);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <TouchableOpacity style={styles.button} onPress={openClasses}>
        <Text style={styles.text}>Aulas</Text>
        <AntDesign name="caretright" size={10} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openScore}>
        <Text style={styles.text}>Histórico</Text>
        <AntDesign name="caretright" size={10} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 28,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center'
  },

  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8
  }
});
