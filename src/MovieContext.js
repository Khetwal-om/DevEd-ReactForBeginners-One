import React,{useState,createContext} from 'react';
import Nav from "./Nav";



export const MovieContext = createContext();




export const MovieProvider=(props)=>{

    const [movies,setMovies]=useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 2345
        },
        {
            name: 'Champions League',
            price: '$10',
            id: 2345
        },
        {
            name: 'Find me in Paris',
            price: '$10',
            id: 2345
        }
    ]);

    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}

