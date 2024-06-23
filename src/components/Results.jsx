import React from 'react'

export default function Results({ results}) {
  return (
    <div>
        {results.map((result) => (
            <div key={result.id}>
            <h2>{result.original_title}</h2>
            {/* <img src={`https://image.tmdb.org/t/p/w300/${result.poster_path}`} alt={result.title} />
            <p>{result.overview}</p> */}
            </div>
        ))}
    </div>
  )
}
