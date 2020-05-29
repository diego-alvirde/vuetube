let DirectivaSlot = {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-html="text">          
    </p>                
    <boton-componente>
      <template v-slot:action>
        Cerrar
      </template>
      <template v-slot:element>
        Modal
      </template>
    </boton-componente>
   </div> 
  `,
  data() {
    return {
      title: "Directiva v-slot",
      text: "<b>Hola desde directive v-slot</b>",
    };
  },
  components: {
    "boton-componente": botonComponente,
  },
};
