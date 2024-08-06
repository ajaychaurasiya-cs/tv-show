// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
  const [shows, setShows] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <div className='home'>
        <div className="title-box">
         <h2 className='home-title'>Show List</h2>
        </div>

        <div className='container'>
            {shows.map(show => (
            <div key={show.show.id}>
                <div className='card'>
                    <div className="card-cont" onClick={()=> navigate(`/show/${show.show.id}`)}>
                        <span className='home-img-cont'>
                            <img className='home-img' src={show.show.image?.medium} alt={show.show.name} />
                        </span>

                    <div className='card-detail'>
                        <span className='box'>
                          <h4 className='show-title'>{show.show.name}</h4><br />
                         <p>{show.show.genres[0]} {show.show.genres[1]} {show.show.genres[2]} 
                         </p>
                          
                        </span>

                        <span className='btn'> Watch Show</span>
                        <span className='btn'> Read more ...</span>
                        
                    </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        
    </div>
  );
}

export default Home;
