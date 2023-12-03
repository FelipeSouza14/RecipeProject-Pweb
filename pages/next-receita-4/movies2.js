import styles from '../styles/receita4/movies2.module.css';

export default function Movies2() {
    const data = fetcher(`http://www.omdbapi.com/?apikey=ME_SUBSTITUA&s=bagdad`)

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