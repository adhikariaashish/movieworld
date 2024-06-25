import Results from "@/components/Results";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  
  const endpoint = genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week';
  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    {next: {revalidate: 600000}}
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  const data = await res.json();
  const results = data.results;

 
  return <div>
    <Results results={results} />
     </div>;
}
