Vue.component("directivas", {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-text="text">          
    </p>
    <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text" target="_blank"></a>
    <directive-html></directive-html>
    <directive-show></directive-show>
    <directive-if></directive-if>
    <directive-for></directive-for>
    <directive-on></directive-on>
    <directive-model></directive-model>
    <directive-slot></directive-slot>
    <directive-pre></directive-pre>
    <directive-once></directive-once>
   </div> 
  `,
  data() {
    return {
      title: "Directivas de Vue.js",
      text: "Texto de prueba v-text",
      link: {
        text: "VueJS Home",
        href: "https://vuejs.org/",
        title: "Documentación Vue JS",
      },
    };
  },
  components: {
    "directive-html": DirectivaHtml,
    "directive-show": DirectivaShow,
    "directive-if": DirectivaIf,
    "directive-for": DirectivaFor,
    "directive-on": DirectivaOn,
    "directive-model": DirectivaModel,
    "directive-slot": DirectivaSlot,
    "directive-pre": DirectivaPre,
    "directive-once": DirectivaOnce,
  },
});
