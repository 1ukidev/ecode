export default Util = {
  validateEmail: (email, errorCallback = null) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (regex.test(email) === false) {
      if (errorCallback) {
        errorCallback("Email inválido");
      } else {
        console.error("Email inválido");
      }
      return false;
    }

    return true;
  },
};
