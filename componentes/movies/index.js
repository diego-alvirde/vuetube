const API_KEY = "86a2ffdf018d7d8fe6e41362467c77be"
const BASE_URL = "https://api.themoviedb.org/3/"
Vue.component('movie-app', {
    template: `
        <div class="container">
            <h5>Bienvenido {{user.name}} {{user.lastName}}</h5>
            <h1>Peliculas App</h1>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" v-for="(movie, key) in movies" 
                :key="key">
                <MovieComp :ref="movie"  
                :id="movie.id" 
                :title="movie.title" 
                :synopsis="movie.overview" 
                :cover="movie.poster_path"
                :like="movie.like"
                />
                <MovieFav ref="movieFav" :show.sync="showFav"/>
                </div>
            </div>                  
        </div>
    `,
    data(){
        return{
            user:{
                name:'Fernando',
                lastName:'Lopez'
            },
            oldUser: null,
            movies: [],
            showFav:false
        }
    },
    methods: {            
        sayHello(){
            alert("Hola")
        },
        setNewUser(event){
            this.user = event.target.value
        },
        getPopulares(){
            let url = `${
                BASE_URL
              }discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=es`
            fetch(url)
            .then(response => response.json())
            .then(data => {            
                this.movies = data.results.map(m => {
                    m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`
                    m.like = false
                    return m
                })
            })
        }
    },
    components: {
        MovieComp,
        MovieFav
    },    
    beforeMount() {
        
    },
    mounted(){        
        //console.log(this.$refs.movieFav.message)
        //this.$refs.movieFav.message = "Hola desde el padre"
        //this.$refs.movieFav.showMessage()
        this.getPopulares()
    },
    beforeUpdate(){
        
    },
    updated() {
        
    },
    beforeDestroy(){        
        
    },
    destroyed() {
          
    },    
})