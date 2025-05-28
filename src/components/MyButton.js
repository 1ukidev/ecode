import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default MyButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    padding: 8,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
