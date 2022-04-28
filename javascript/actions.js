function getData() {
  return {
    formData: {
      email: "",
      username: "",
      cpf: "",
      phone: "",
      celphone: "",
      carDealership: "",
      message: "",
    },
    error: false,
    success: false,
    loading: false,
    buttonLabel: "Enviar",

    submitData() {
      if (!this.formData.carDealership.length) {
        this.error = true;
      } else {
        this.error = false;
        this.success = false;
        this.buttonLabel = "Enviando...";
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
          this.success = true;
          this.buttonLabel = "enviar";
          this.formData = {
            email: "",
            username: "",
            cpf: "",
            phone: "",
            celphone: "",
            carDealership: "",
            message: "",
          };
        }, 3000);
      }
    },
  };
}
