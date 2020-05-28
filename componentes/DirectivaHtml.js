let DirectivaHtml = {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-html="text">          
    </p>    
   </div> 
  `,
  data() {
    return {
      title: "Directiva v-html",
      text: "<b>Hola desde directive html</b>",
    };
  },
};
