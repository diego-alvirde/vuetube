let DirectivaModel = {
  template: `
   <div>
    <h1 v-text="title"></h1>
    <p v-html="text">          
    </p>        
    <input type="text" v-model="nombre" />
    <h3>Checkbox</h3>
    <label>
      <input type="checkbox" v-model="checked"/>
      Activado
    </label>
    <h2>Peliculas</h2>
    <label v-for="(movie, key) in movies" :key="key">
      <input type="checkbox" :value="movie" v-model="favoritesMovies" />
      {{movie}}
    </label>

    <div v-if="favoritesMovies.length > 0">
      <h2>Peliculas Favoritas</h2>
      <ul>
        <li v-for="movie in favoritesMovies">{{movie}}</li>
      </ul>
    </div>

   </div> 
  `,
  data() {
    return {
      title: "Directiva v-model",
      text: "<b>Hola desde directive v-model</b>",
      nombre: "",
      checked: false,
      favoritesMovies: [],
      movies: ["El padrino", "Sangre por Sangre", "La momia"],
    };
  },
};
