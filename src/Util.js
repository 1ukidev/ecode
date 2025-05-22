export default Util = {
  validateEmail: (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (regex.test(email) === false) {
      alert('E-mail inválido!');
      return false;
    }

    return true;
  }
};
