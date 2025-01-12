import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FiStar } from 'react-icons/fi';
import {MdDateRange} from "react-icons/md";

export default function Card({ result }) {
  return (
    <div className="group overflow-hidden group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-lg rounded-lg sm:border-slate-400  sm:m-2 transition-shadow duration-500">
      <Link href={`/movie/${result.id}`}>
        
          <Image
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            width={500}
            height={300}   
              style={{
                  // maxWidth: '100%',
                  // height: '153px',
              }}
            className='sm:rounded-t-lg transform transition duration-300 ease-in-out group-hover:scale-105'
            alt={`${result.title} Poster`}
          />
        <div className='p-2 '>
          <h2 className="text-xl font-bold mt-2 truncate ">{result.title || result.original_name}</h2>

          <p className='text-sm flex items-center gap-1'>
          <MdDateRange className='h-5 text-blue-500'/>
          {result.release_date || result.first_air_date}
          <>

          <FiStar className='h-5 ml-3 text-yellow-300'/>
          
          {result.vote_average.toFixed(1) + " / 10 "}
          </>

          </p>
         
        </div>
      </Link>
    </div>
  );
}
