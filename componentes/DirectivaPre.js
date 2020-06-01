let DirectivaPre = {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-html="text">          
    </p>        
    <p v-pre>{{title}}</p>
   </div> 
  `,
  data() {
    return {
      title: "Directiva v-pre",
      text: "<b>Hola desde directive v-pre</b>",
    };
  },
};
