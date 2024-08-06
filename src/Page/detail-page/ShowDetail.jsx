// src/components/ShowDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './showDetail.css'


const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('Error fetching show details:', error);
      });
  }, [id]);

  //remove HTML tags
  const remove = /(<([^>]+)>)/ig;

  return (
    <div className='show-detail'>
        
      {show && (
        <div className='detail-cont'>

          <div className='detail-img-cont'>  
            <img className='detail-img' src={show.image?.original} alt={show.name} />
            
          </div>

          <div className="box">
            <div className="title">
              <h1>{show.name}</h1>
            </div> 

            <p>{show.summary.replace(remove,' ')}</p>
            <br />

            <p>Days : {show.schedule?.days}</p>
            <p>Time : {show.schedule?.time}</p>
            
          </div>

          <div className='detail-btn detail-para'>
            <span className='btn' onClick={()=> navigate(-1)}>{'<'}Go back</span>
            <span className='btn'>Watch Show</span>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default ShowDetail;
