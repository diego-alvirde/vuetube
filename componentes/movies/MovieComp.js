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
        <div :id="id | formatId" class="card" :class="{}">                                    
            <img :src="cover" class="card-img-top"/>
            <div class="card-body">
            <h2 class="card-title">{{title | uppercase | reverse}}</h2>
            <p class="card-text">{{synopsis | reduce}}</p>             
            <button @click="toggleLike" :class="{
                'btn btn-danger':like,
                'btn btn-primary':!like
            }">
                <span v-text="like ? 'Favorita':'Agregar a Favoritos'"></span>
                <i :class="{
                    'fas fa-heart':like,
                    'far fa-heart':!like
                }"></i>
            </button>
            </div>                        
        </div>
    `,
    methods: {
        toggleLike() {                                    
            let movie = this.$parent.movies.find(m => m.id == this.id)
            movie.like = !this.like
            this.$parent.showFav = !this.like          
            //this.$parent.sayHello()                          
        }
    },
    data (){
        return {
            prueba:"Prueba"
        }
    },
    computed: {
        btnClass() {
            return this.like ? 'btn btn-danger' : 'btn btn-primary'
        }
    },
    filters:{
        formatId(value){
            return `movieCard-${value}`
        },
        uppercase(value){
            return value.toUpperCase()
        },
        reverse(value){
            return value.split('').reverse().join('')
        },
        reduce(value){
            return value.substring(0,39).concat("...")
        }
    },
    watch:{
        like(newVal, oldVal){
            console.log(newVal, oldVal)
        }
    }
}