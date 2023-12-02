// A função fetch faz uma requisição, a uma máquina remota, de um recurso descrito numa URL, via http.
// O await serve para que o programa aguarde o resultado da função para prosseguir.
// No NextJS, se queremos que um código seja executado no servidor quando uma página é requisitada, precisamos exportar uma função assíncrona de nome getServerSideProps, que recebe um objeto context como parâmetro e que retorna um objeto JSON com uma propriedade de nome props.


// Faz a requisição dos dados da API e os transforma em JSON
export async function getServerSideProps(context){
    const res = await fetch(`https://www.omdbapi.com/?apikey=5a35dc18&s=bagdad`)
    const data = await res.json()
    
    return {
        // O json precisa estar encapsulado em props, pois é regra do Next.js
        props: {
            
            data // Como foi usado o nome "data" aqui...
        }
    }
}

function transformar (elemento){
    return(<div className={styles.cards}>{elemento.Title} --- {elemento.Year}</div>)
}

export default function Movies({data}) { // Então o nome do parametro desestruturado também precisa ser igual
    return (
        <div>
            {data.Search.map(transformar)}
        </div>
    )
}