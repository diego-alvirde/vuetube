let MovieFav = {
    template: `
        <div class="movieFav-wrapper">
            <div class="movieFav" :id="'fav-'+_uid">
                
            </div>
        </div>
    `,
    beforeMount() {
        console.log('beforeMount')
    },
    mounted(){
        console.log("mounted")        
        let vm = this
        let $element = document.getElementById(`fav-${this._uid}`)

        $element.addEventListener('animationend', function(){
            vm.$emit('hideFav', false)
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
    }
}