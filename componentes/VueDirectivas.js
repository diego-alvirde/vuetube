Vue.component("directivas", {
  template: `
   <div>
    <p v-text="text">          
    </p>
    <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text" target="_blank"></a>
   </div> 
  `,
  data() {
    return {
      text: "Texto de prueba v-text",
      link: {
        text: "VueJS Home",
        href: "https://vuejs.org/",
        title: "Documentación Vue JS",
      },
    };
  },
});
