This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify





---


1. App.js


```javascript
import React from 'react';
import './App.css';
import MovieList from './MovieList';
function App() {
  return (
    <div className="App">
      <MovieList/>
   </div>
  );
}

export default App;

```



---


2. MovieList.js

```javascript
import React,{useState} from 'react';

import Movie from './MOvie';

const MovieList=()=>{


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
        <div>
            {movies.map(movie =>(
               <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </div>
    );
};


export default MovieList;

```



3. MOvie.js

```javascript

import React from 'react';
const Movie=({name,price,key})=>{


    return(
        <div>
            <h3> {name}</h3>
            <p>{price}</p>
        </div>
    );
};


export default Movie;

```



2. Create a nav component,wanna show the name and list of movies


 __MovieContext.js__
 
```javascript
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


```



 __MovieList.js__
 
 ```javascript
import React,{useState,useContext} from 'react';

import Movie from './MOvie';
import {MovieContext} from "./MovieContext";

const MovieList=()=>{

    const [movies,setMovies]=useContext(MovieContext);
    return(
        <div>
                {movies.map(movie=>(
                    <Movie name={movie.name} price={movie.price} key={movie.id}/>
                     ))}

        </div>
    );
};


export default MovieList;

```


__Movie.js__

```javascript
import React from 'react';




const Movie=({name,price,key})=>{


    return(
        <div>
            <h3> {name}</h3>
            <p>{price}</p>
        </div>
    );
};


export default Movie;

```

__Nav.js__


```javascript
import React from 'react';




const Nav=({name,price,key})=>{


    return(
        <div>
            <h3>LOTO</h3>
            <p>List of Movies:</p>
        </div>
    );
};


export default Nav;

```

__App.js__

```javascript
import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';

function App() {
  return (
      <MovieProvider>
    <div className="App">
        <Nav/>
        <MovieList/>

   </div>
      </MovieProvider>
  );
}

export default App;

```




### Can import it in Nav.js too


:heart:    :yellow_heart:       Bhaiya ONE time investment h

```javascript
import React,{useContext} from 'react';

import {MovieContext} from "./MovieContext";


const Nav=()=>{

    const [movies,setMovies]=useContext(MovieContext);
    return(
        <div>
            <h3>LOTO</h3>
            <p>List of Movies:  {movies.length}</p>
        </div>
    );
};


export default Nav;

```




### Let's create a component that will create additional movies to our list

__we can also pass function in our context and use it *wherever* we want__


  > AddMovie.js

```javascript
import React,{useState,useContext} from 'react';
import {MovieContext} from "./MovieContext";

//useState  because I wanna render out two inputs





const AddMovie=()=>{

    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [movies,setMovies]=useContext(MovieContext);

    const updateName=e=>{
        setName(e.target.value);
    };


    const updatePrice=e=>{
        setPrice(e.target.value);
    };

    const addMovie= e =>{
        e.preventDefault();
        //we also have access to the latest update movie
        //...preMovies array of objects *copy
        setMovies(prevMovies=>[...prevMovies,{name:name,price:price}]);
    };


    return(
        <form onSubmit={addMovie}>
            <input type={"text"} name={"name"} value={name} onChange={updateName}/>
            <input type={"text"} name={"price"} value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    );
}


export default AddMovie

```
