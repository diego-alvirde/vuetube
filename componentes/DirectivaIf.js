let DirectivaIf = {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-show="bandera" v-html="text">          
    </p>    
    <p v-if="user.permisos && user.vip">Contenido permitido y Vip</p>
    <p v-else-if="user.permisos">Contenido permitido</p>
    <p v-else-if="user.vip">Vip</p>
    <p v-else>Contenido no permitido</p>
   </div> 
  `,
  data() {
    return {
      title: "Directiva v-if",
      text: "<b>Hola desde directive v-if</b>",
      bandera: true,
      user: {
        permisos: false,
        vip: true,
      },
    };
  },
};
