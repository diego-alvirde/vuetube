let DirectivaFor = {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-html="text">          
    </p>        
    <ul>
      <li v-for="(item, key, index) in other_list" :key="index">{{key}}:{{item.name}} {{item.last_name}}</li>
    </ul>
   </div> 
  `,
  data() {
    return {
      title: "Directiva v-for",
      text: "<b>Hola desde directive v-for</b>",
      lista: ["rojo", "azul", "verde", "naranja", "gris"],
      object_list: {
        name: "Edgar",
        last_name: "LOpez",
      },
      other_list: [
        {
          name: "Edgar",
          last_name: "LOpez",
        },
        {
          name: "Luis",
          last_name: "LOpez",
        },
        {
          name: "Alan",
          last_name: "LOpez",
        },
        {
          name: "Fernando",
          last_name: "LOpez",
        },
      ],
    };
  },
};
