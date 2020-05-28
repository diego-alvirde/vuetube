let DirectivaOn = {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-html="text"></p>        
    <button @click="miFuncion()">Aceptar</button>
   </div> 
  `,
  data() {
    return {
      title: "Directiva v-on",
      text: "<b>Hola desde directive v-on</b>",
      texto_bienvenida: "Bienvenido",
    };
  },
  methods: {
    miFuncion() {
      alert(this.texto_bienvenida);
    },
  },
};
