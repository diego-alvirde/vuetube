Vue.component('computed-properties', {
    template: `
        <div>
            <h1>Computed Properties</h1>
            <p>{{ fullName }}</p>            
            <p>{{ userAge }}</p>            
        </div>
    `,
    data() {
        return {
            user:{
                name:'Jesus',
                lastName:'Lopez',
                year:'1991'
            }
        }
    },
    computed:{
        fullName() {
            return `${this.user.name} ${this.user.lastName}`
        },
        userAge() {
            let date = new Date()
            let currentYear = date.getFullYear()

            return currentYear - Number(this.user.year)
        },
    },
    methods:{
        nombreCompleto() {
            return `${this.user.name} ${this.user.lastName}`
        },
        edad() {
            let date = new Date()
            let currentYear = date.getFullYear()

            return currentYear - Number(this.user.year)
        }
    }
})