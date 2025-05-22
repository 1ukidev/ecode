import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';

export default MyInput = ({text, value, onChangeText, isPassword = false}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{text}</Text>
      <TextInput
        autoCapitalize='none'
        spellCheck={false}
        autoCorrect={false}
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginBottom: 20
  },

  inputLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },

  textInput: {
    color: 'white',
    width: 275,
    height: 65,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    paddingTop: Platform.OS === 'android' ? 30 : 20
  }
});
