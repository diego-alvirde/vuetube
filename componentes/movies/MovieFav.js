let MovieFav = {
    props: {
        show: {
            type:Boolean,
            required:true,
            default(){
                return false;
            }
        }
    },
    template: `
        <div v-show="show" class="movieFav-wrapper">
            <div :id="'fav-'+_uid" class="movieFav">
                
            </div>
        </div>
    `,
    created(){
        
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted(){
        console.log("mounted")                
        let vm = this
        let $element = document.getElementById(`fav-${this._uid}`)

        $element.addEventListener('animationend', function(){                        
            vm.$emit('update:show', false)
        })               
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
        
    },    
}