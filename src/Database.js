import AsyncStorage from "@react-native-async-storage/async-storage";

export default Database = {
  storeValue: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  },

  getValue: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);

      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.error(error);
    }
  },
};
