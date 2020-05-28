Vue.component("hola-mundo", {
  template: `
    <header>
      <h1>{{titulo}}</h1>
      <h3>{{mensaje}}</h3>
    </header>
  `,
  data() {
    return {
      titulo: "Hola mundo desde componente",
      mensaje: "Bienvenido al curso de Vue JS",
    };
  },
});
