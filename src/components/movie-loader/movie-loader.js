import React from 'react';

import './movie-loader.css';

const MovieLoader = ({ listLoaded }) => {

  let maxId = 100;

  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if(file) {
      const reader = new FileReader();

      reader.onload = () => {
        const text = reader.result.split(/\n+\s/);
        text.pop();

        const data = text.map((movie) => {
          const movieSplit = movie.split(/\n+/);

          const getValue = (key) => {
            return movieSplit.filter(item => item.startsWith(key)).join().substr(key.length);
          };

          const newData = {
            id: maxId++,
            title: getValue('Title: '),
            releaseYear: getValue('Release Year: '),
            format: getValue('Format: '),
            stars: getValue('Stars: ')
          };
          
          return newData;
        });

        listLoaded(data);
      };

      reader.readAsText(file);
    } else {
      console.log('File not supported!'); 
    }
  };

  return(
    <div className="movies-attach-file">
      <label htmlFor="file">
        <a className="btn btn-file">
          <span>Choose a file</span>
          <i className="material-icons">attach_file</i>
        </a>  
      </label>
      <input className="movies-file" id="file" type="file" name="Movies File" 
          onChange={handleChange} />
    </div>    
  );
}

export default MovieLoader;