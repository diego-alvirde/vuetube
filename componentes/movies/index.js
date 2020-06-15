const API_KEY = "86a2ffdf018d7d8fe6e41362467c77be"
const BASE_URL = "https://api.themoviedb.org/3/"
Vue.component('movie-app', {
    template: `
        <div class="container">
            <h5>Bienvenido {{user.name}} {{user.lastName}}</h5>
            <SearchComponent ref="searchComponent" v-model="searchMovies"></SearchComponent>
            <div v-show="!Object.keys(searchMovies).length">
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
                    </div>
                </div>
                <div class="row">
                        <label class="btn m-1" :class="{
                            'btn-light': n != page,
                            'btn-primary': n == page
                        }" v-for="(n, index) in total_pages" :key="index">
                        {{n}}
                        <input class="d-none" type="radio" :value="n" v-model="page"/>
                        </label>
                </div>
            </div>
            <div v-show="Object.keys(searchMovies).length">
                <h1>Resultados de Busqueda</h1>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" v-for="(movie, key) in searchMovies.results" 
                    :key="key" v-if="movie.poster_path">
                    <MovieComp :ref="movie"  
                    :id="movie.id" 
                    :title="movie.title" 
                    :synopsis="movie.overview" 
                    :cover="movie.poster_path"
                    :like="movie.like"
                    />                
                    </div>
                </div>
                <div class="row">
                        <button @click="$refs.searchComponent.cambia(n)" class="btn m-1" :class="{
                            'btn-light': n != page,
                            'btn-primary': n == page
                        }" v-for="(n, index) in searchMovies.total_pages" :key="index">
                        {{n}}
                        <input class="d-none" type="radio" :value="n" v-model="page"/>
                        </button>
                </div>
            </div>

                <MovieFav ref="movieFav" :show.sync="showFav"/>                  
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
            showFav:false,
            page:1,
            total_pages:null,
            searchMovies:{}
        }
    },
    watch: {
        page (){
            this.getPopulares()
        }
    },
    methods: {            
        cambia(valor){            
            this.page = valor
            this.getPopulares()
        },
        sayHello(){
            alert("Hola")
        },
        setNewUser(event){
            this.user = event.target.value
        },
        getPopulares(){
            let url = `${
                BASE_URL
              }discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${this.page}&language=es`
            fetch(url)
            .then(response => response.json())
            .then(data => {         
                this.total_pages = data.total_pages          
                this.movies = data.results.map(m => {
                    //m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`
                    m.like = false
                    return m
                })
            })
        }
    },
    components: {
        MovieComp,
        MovieFav,
        SearchComponent
    },    
    beforeMount() {
        
    },
    mounted(){        
        //console.log(this.$refs.movieFav.message)
        //this.$refs.movieFav.message = "Hola desde el padre"
        //this.$refs.movieFav.showMessage()
        let locationURL = new URL(window.location.href)
        this.page = locationURL.searchParams.get('page') || 1
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