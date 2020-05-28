let DirectivaShow = {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-show="bandera" v-html="text">          
    </p>    
    <p v-show="user.permisos">Contenido no permitido</p>
   </div> 
  `,
  data() {
    return {
      title: "Directiva v-show",
      text: "<b>Hola desde directive v-show</b>",
      bandera: true,
      user: {
        permisos: false,
      },
    };
  },
};
