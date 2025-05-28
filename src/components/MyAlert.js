import { StyleSheet } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";

export default MyAlert = ({ show, msg, onConfirm, isError }) => {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title={isError ? "Erro" : "Sucesso"}
      message={msg}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="OK"
      contentContainerStyle={styles.alert}
      titleStyle={styles.alertText}
      messageStyle={styles.alertText}
      confirmButtonTextStyle={styles.alertText}
      confirmButtonStyle={styles.alert}
      confirmButtonColor="black"
      onConfirmPressed={onConfirm}
    />
  );
};

const styles = StyleSheet.create({
  alert: {
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },

  alertText: {
    color: "white",
    fontWeight: "bold",
  },
});
