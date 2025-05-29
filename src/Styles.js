import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export const createHeaderOptions = (hideBackButton = false) => ({
  headerLeft: hideBackButton ? () => null : undefined,

  headerStyle: {
    backgroundColor: "black",
    borderWidth: 2,
  },

  headerTitleStyle: {
    color: "white",
    fontWeight: "bold",
  },

  headerTintColor: "white",
});
