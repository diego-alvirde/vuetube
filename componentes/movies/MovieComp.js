let MovieComp = {
    props: {
        id: {
            type: Number,
            required:true
        },
        title: {
            type: String,
            required:true
        },
        synopsis: {
            type: String,       
            default: "No posee Sinopsis"     
        },
        cover: {
            type: String,
            required:true
        },
        like: {
            type: Boolean,
            required:true,
            default () {
                return false
            }
        }

    },
    template: `
        <div>
            <img :src="cover" />
            <h2>{{title}}</h2>
            <p>{{synopsis}}</p>             
            <button @click="toggleLike" v-text="like ? 'Favorita':'Agregar a Favoritos'"></button>
            <hr>
        </div>
    `,
    methods: {
        toggleLike() {                                    
            let movie = this.$parent.movies.find(m => m.id == this.id)
            movie.like = !this.like
            this.$parent.showFav = !this.like          
            this.$parent.sayHello()                          
        }
    },
    data (){
        return {
            prueba:"Prueba"
        }
    }
}