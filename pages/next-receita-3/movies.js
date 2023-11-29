// A função fetch faz uma requisição, a uma máquina remota, de um recurso descrito numa URL, via http.
// O await serve para que o programa aguarde o resultado da função para prosseguir.

export async function getServerSideProps(context){
    const res = await fetch(`https://www.omdbapi.com/?apikey=5a35dc18&s=bagdad`)
    const data = await res.json()
    
    return {
        
        props: {
            
            data // Como foi usado o nome "data" aqui...
        }
    }
}

function transformar (elemento){
    return(<div>{elemento.Title} --- {elemento.Year}</div>)
}

export default function Movies({data}) { // Então o nome do parametro desestruturado também precisa ser igual
    return (
        <div>
            {data.Search.map(transformar)}
        </div>
    )
}