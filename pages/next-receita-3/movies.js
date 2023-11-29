// A função fetch faz uma requisição, a uma máquina remota, de um recurso descrito numa URL, via http.
// O await serve para que o programa aguarde o resultado da função para prosseguir.

export async function getServerSideProps(context){
    const res = await fetch(`https://www.omdbapi.com/?apikey=5a35dc18&s=bagdad`)
    const data = await res.json()
    
    return {
        
        props: {
            
            data
            
        }
        
    }
    
}

function transformar (elemento){
    return(<div>{elemento.Title} --- {elemento.Year}</div>)
}

export default function Movies() {



    // const data = {

    //     "Search": [

    //         {

    //             "Title": "Bagdad Café",

    //             "Year": "1987",

    //             "imdbID": "tt0095801",

    //             "Type": "movie",

    //             "Poster": "https://m.media-amazon.com/images/M/MV5BNmUwZGZhZTktNGNmOS00NDA0LWEzYWUtZjE2ODA5OTM2OTc2XkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"

    //         },

    //         {

    //             "Title": "The Thief of Bagdad",

    //             "Year": "1940",

    //             "imdbID": "tt0033152",

    //             "Type": "movie",

    //             "Poster": "https://m.media-amazon.com/images/M/MV5BZWFhYjg4NTEtY2IzMS00YTc2LTg1NGUtMTEzNDBlZDIxZTk3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"

    //         },

    //         {

    //             "Title": "Bagdad",

    //             "Year": "1949",

    //             "imdbID": "tt0041149",

    //             "Type": "movie",

    //             "Poster": "https://m.media-amazon.com/images/M/MV5BZjAxYTJmMmItYzZhMS00OWMwLTkxMjEtZjVmNmM3ZGRlZTljXkEyXkFqcGdeQXVyNTk1MTk0MDI@._V1_SX300.jpg"

    //         },

    //         {

    //             "Title": "Bowery to Bagdad",

    //             "Year": "1955",

    //             "imdbID": "tt0044388",

    //             "Type": "movie",

    //             "Poster": "https://m.media-amazon.com/images/M/MV5BZTMwMTUyZTktOTk4OC00ZGY2LWFmMzAtYjkxMWMxNjdmOTg4XkEyXkFqcGdeQXVyNDY3MzU2MDM@._V1_SX300.jpg"

    //         },

    //         {

    //             "Title": "Babes in Bagdad",

    //             "Year": "1952",

    //             "imdbID": "tt0044389",

    //             "Type": "movie",

    //             "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmNmRlNzAtZDNjYi00ZjQ0LTljYTktZGUxOGNhMjFhZWI1XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg"

    //         }

    //     ],

    //     "totalResults": "59",

    //     "Response": "True"

    // }

    return (

            <div>

                {data.Search.map(transformar)}

            </div>

    )

}