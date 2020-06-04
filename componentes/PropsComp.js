Vue.component('props-comp', {
    template: `
        <div class="container">
            <h1>Peliculas Props</h1>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(movie, key) in movies" 
                :key="key">
                <MovieComp :ref="movie"  
                :id="movie.id" 
                :title="movie.title" 
                :synopsis="movie.synopsis" 
                :cover="movie.cover"
                :like="movie.like"
                />
                <MovieFav ref="movieFav" :show.sync="showFav"/>
                </div>
            </div>            
        </div>
    `,
    data(){
        return{
            movies: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false
                }
            ],
            showFav:false
        }
    },
    methods: {            
        sayHello(){
            alert("Hola")
        }
    },
    components: {
        MovieComp,
        MovieFav
    },    
    beforeMount() {
        console.log('beforeMount')
    },
    mounted(){
        console.log("mounted")
        console.log(this.$refs.movieFav.message)
        this.$refs.movieFav.message = "Hola desde el padre"
        //this.$refs.movieFav.showMessage()
    },
    beforeUpdate(){
        console.log("beforeUpdated")        
    },
    updated() {
        console.log("updated")                                
    },
    beforeDestroy(){        
        console.log("beforeDestroy")        
    },
    destroyed() {
        console.log("destroyed")        
    }
})