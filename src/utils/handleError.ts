export const notifyError = (e:any) => {
    console.error(e);
    alert(e?.response?.data?.detail || "Ocurrió un error");
  };