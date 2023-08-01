import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./mainpage.css";
import Axios from 'axios';

function MainPage() {
  const [username , setUsername]=useState('');
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [likeCount1, setLikeCount1] = useState(0);
  const [likeCount2, setLikeCount2] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    Axios.get('http://localhost:3006/login')
      .then((response) => {
        console.log(response.data);
        if (response.data.loggedIn) {
          setUsername(response.data.user[0].username);
        }
        else{
          setUsername('');
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

  const handleLogout = () => {
    navigate('/');
};

const handleLikeClick1 = () => {
  if (liked1) {
    setLikeCount1((prevCount) => prevCount - 1);
  } else {
    setLikeCount1((prevCount) => prevCount + 1);
  }
  setLiked1((prevLiked) => !prevLiked);
};
useEffect(() => {
  Axios.post('http://localhost:3006/mainpage', { postId: 1, likeCount: likeCount1 })
    .then((response) => {
      // Handle the response if needed
    })
    .catch((error) => {
      console.log(error);
    });
}, [likeCount1]);

  const handleLikeClick2 = () => {
    if (liked2) {
      setLikeCount2((prevCount) => prevCount - 1);
    } else {
      setLikeCount2((prevCount) => prevCount + 1);
    }
    setLiked2((prevLiked) => !prevLiked);
  };


useEffect(() => {
  Axios.post('http://localhost:3006/update-like-count', { postId: 2, likeCount: likeCount2 })
    .then((response) => {
      // Handle the response if needed
    })
    .catch((error) => {
      console.log(error);
    });
}, [likeCount2]);

  return (
    <>
      <div className="pachhadi"></div>
       <div className="background_img"></div>
      <div className="backg">
      {username ? (
        <>
        <h1> welcome , {username} !</h1>
        <button  className ="logoutButton" onClick={handleLogout}> LogOut</button>
        <div className="searchbar">
          <table className="table">
            <tbody>
            <tr>
             <td className="searchb">
             <i class="fa-solid fa-magnifying-glass fa-beat fa-2x"></i>
              </td> 
              <td>
                <input
                  type="text"
                  placeholder="Search for a movie or a tv show here !"
                  className="searcht" 
                />
              </td>
            </tr>
            </tbody>
          </table>
             
        </div>
        <div className="cardformp">
          <div className="imageformp">
            <img
              className="imgformp"
              src="images/infinitywar.jpg"
              alt="Infinitywar"
            />
          </div>
          <div className="titlformp">
            <h2 className="cardtitlemp">Avengers:Infinity War</h2>
            <p className="desmp">
            Marvel Movies have introduced us to an impressive roster of superheroes and anti-heroes, each with their unique powers, backstories, and personalities. From Iron Man's wit and genius intellect to Captain America's unwavering sense of duty, and from Black Panther's regal presence to the God of Thunder, Thor's majestic aura, these characters have become iconic symbols of heroism, justice, and sacrifice. Moreover, the franchise has showcased complex villains like Loki and Thanos, making the narratives even more compelling.
            </p>
          </div>
          <div className={liked1 ? "likebuttonclicked" : "likebutton"}>
            <i class="fa-solid fa-heart fa-2x" onClick={handleLikeClick1}></i>
          </div>
          <div className="likeCount">{likeCount1 && likeCount1}</div>
        </div>

        <div className="cardformp">
          <span className="imageformp">
            <img src="images/infinitywar.jpg" alt="Infinitywar" />
          </span>
          <span className="titlformp">
            <h2 className="cardtitlemp">Avengers:Infinity War</h2>
            <p className="desmp">
              A purple guy wants to collect a bunch of colorful stones in order
              to wipe out the half of entire universe.
            </p>
          </span>
          <div className={liked2 ? "likebuttonclicked" : "likebutton"}>
            <i class="fa-solid fa-heart fa-2x" onClick={handleLikeClick2}></i>
          </div>
          <div className="likeCount">{likeCount2}</div>
        </div>

        <div className="cardformp">
          <span className="imageformp">
            <img src="images/infinitywar.jpg" alt="Infinitywar" />
          </span>
          <span className="titlformp">
            <h2 className="cardtitlemp">Avengers:Infinity War</h2>
            <p className="desmp">
              A purple guy wants to collect a bunch of colorful stones in order
              to wipe out the half of entire universe.
            </p>
          </span>
          <div className={liked1? "likebuttonclicked" : "likebutton"}>
            <i class="fa-solid fa-heart fa-2x" onClick={handleLikeClick1}></i>
          </div>
          <div className="likeCount">{likeCount1}</div>
        </div>

        <div className="cardformp">
          <span className="imageformp">
            <img src="images/infinitywar.jpg" alt="Infinitywar" />
          </span>
          <span className="titlformp">
            <h2 className="cardtitlemp">Avengers:Infinity War</h2>
            <p className="desmp">
              A purple guy wants to collect a bunch of colorful stones in order
              to wipe out the half of entire universe.
            </p>
          </span>
          <div className={liked1 ? "likebuttonclicked" : "likebutton"}>
            <i class="fa-solid fa-heart fa-2x" onClick={handleLikeClick1}></i>
          </div>
          <div className="likeCount">{likeCount1}</div>
        </div>

        <div className="cardformp">
          <span className="imageformp">
            <img src="images/infinitywar.jpg" alt="Infinitywar" />
          </span>
          <span className="titlformp">
            <h2 className="cardtitlemp">Avengers:Infinity War</h2>
            <p className="desmp">
              A purple guy wants to collect a bunch of colorful stones in order
              to wipe out the half of entire universe.
            </p>
          </span>
          <div className={liked1? "likebuttonclicked" : "likebutton"}>
            <i class="fa-solid fa-heart fa-2x" onClick={handleLikeClick1}></i>
          </div>
          <div className="likeCount">{likeCount1}</div>
        </div>
        </>
          ) : (
        <>
            <h1>Welcome!</h1>
          </>
        )}
        </div>
    </>
  );
}
export default MainPage;
