import { Link } from 'react-router-dom';
import{ FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faSearch, faSquarePersonConfined} from '@fortawesome/free-solid-svg-icons';
import{} from '@fortawesome/free-solid-svg-icons';
import LoginPage from './loginpage';
import MainPage from './mainpage';
import './home.css';
import'./cards.css';
import SharePopup from './sharepopup';
import React, { useState } from 'react';


function HomePage() {
    const [showPopup, setShowPopup] = useState(false);

    return(

        <main>
        <div className="background_i"></div>
        <div className="background_c"></div>
        <div className='navbar'>
            <div className='navTitle'>
                Genre
            </div>
            <div  className='navTitle'>
               <Link to ='/mainpage' className ="linkk"> Home
                </Link>
            </div>

            <div className='navTitle'>
                AboutUs
            </div>

            <div className="navTitle">
                <Link to='/loginpage' className ="linkk" >
                Login</Link>
            </div>

            <div className="navTitle">
                <Link to='/signuppage' className ='linkk'> 
                Signup
                </Link>
            </div>
            <div className ="Profile">
            <i class="fa-solid fa-user"></i>
            </div>
            <button className='sharetext' onClick={()=> {setShowPopup(true);}}>
               <u> Share </u>
            </button>
            <div>
            {showPopup && <SharePopup closePopup={setShowPopup}/>}</div>
        </div>
        <h1 className="headingforhome">
          {" "}
          <u>Here are some movies you might like </u>
        </h1>

        <div  className="card">

          <div className="image">
              <img src="images/infinitywar.jpg" alt="Infinitywar"/>
          </div>
          <div className="titl">
              <h2>Avengers:Infinity War</h2>
          </div>
          <div className="des">
              A purple guy wants to collect a bunch of colorful stones in order to wipe out the half of entire universe.
          </div >
        </div>
      
        <div className="card">
          <div className="image">
              <img src="images/doctorstrange.jpg" alt="Infinitywar"/>
          </div>
          <div className="titl">
              <h2>Doctor Strange</h2>
          </div>
          <div className="des">
              A genius and rich neurosurgeon gets into a car accident and all of his money finishes during the treatment.
          </div>
        </div>
        
        <div className="card">
          <div className="image">
              <img src="images/endgame.jpg" alt="Infinitywar"/>
          </div>
          <div className="titl">
              <h2>Avengers:Endgame</h2>
          </div>
          <div className="des">
              The remaining avengers time travel with the hope of bringing back the blipped ones.
          </div>
        </div>
        
        <div className="card">
          <div className="image">
              <img src="images/ragnarok.jpeg" alt="Infinitywar"/>
          </div>
          <div className="titl">
              <h2>Thor : Ragnarok</h2>
          </div>
          <div className="des">
              Hela tries to rule over Asgard but Thor and Loki have other plans.
          </div>
          </div>
          
          <div className="card">
              <div className="image">
                  <img src="images/Loki.jpg" alt="Infinitywar"/>
              </div>
              <div className="titl">
                  <h2>Loki</h2>
              </div>
              <div className="des">
                 Loki ends up at Time Variation Authority where he meets the other versions of himself.
              </div>
          </div>
         
        <div className="card">
          <div className="image">
              <img src="images/moonknight.jpg" alt="Infinitywar"/>
          </div>
          <div className="titl">
              <h2>Moon Knight</h2>
          </div>
          <div className="des">
             A guy gains the power because of an ancient egyptian god and tries to stop another guy from awaking another egyptian god.
          </div>
          </div>
           
          <div className="card">
              <div className="image">
                  <img src="images/Ironman2.jpg" alt="Infinitywar"/>
              </div>
              <div className="titl">
                  <h2>Ironman2</h2>
              </div>
              <div className="des">
                  Tony Stark faces an electric villian .He gets chased away from his hometown and then he makes a badass comeback.
              </div>
          </div>
           
              <div className="card">
                  <div className="image">
                      <img src="images/AgeofUltron.jpg" alt="Infinitywar"/>
                  </div>
                  <div className="titl">
                      <h2>Avengers : Age of Ultron</h2>
                  </div>
                  <div className="des">
                      Ultron wants to kill the avengers and all the humans in order to "save the world".
                  </div>
              </div>
      </main>
    );
}

export default HomePage;