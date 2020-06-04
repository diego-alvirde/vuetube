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
        }

    },
    template: `
        <div>
            <img :src="cover" />
            <h2>{{title}}</h2>
            <p>{{synopsis}}</p>             
        </div>
    `
}