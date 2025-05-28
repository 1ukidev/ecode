import { StyleSheet } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";

export default MyConfirm = ({ show, msg, onConfirm, onCancel }) => {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title=""
      message={msg}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      showCancelButton={true}
      confirmText="Sim"
      cancelText="Não"
      contentContainerStyle={styles.alert}
      titleStyle={styles.alertText}
      messageStyle={styles.alertText}
      confirmButtonTextStyle={styles.alertText}
      confirmButtonStyle={styles.alert}
      cancelButtonTextStyle={styles.alertText}
      cancelButtonStyle={styles.alert}
      confirmButtonColor="black"
      onConfirmPressed={onConfirm}
      onCancelPressed={onCancel}
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
