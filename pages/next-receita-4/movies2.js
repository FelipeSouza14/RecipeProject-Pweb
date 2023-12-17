// import styles from '../styles/receita4/movies2.module.css';
import useSWR from 'swr';

// A função useSWR() é um hook, e ela está permitindo que ao não receber os dados, a página exiba a mensagem "carregando..."
export default function Movies2() {
    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=5a35dc18&s=bagdad`, fetcher)

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div>
            {data.Search.map((m) => <div>{m.Title} --- {m.Year}</div>)}
        </div>
    )
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();

    return json;
}