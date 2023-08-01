
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './home';
import LoginPage from './loginpage';
import MainPage from "./mainpage"
import SharePopup from './sharepopup';
import SignupPage from './signuppage';
function App() {

  return (
    <div className="App"> 

<Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/loginpage" element={<LoginPage/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
        <Route path ="/signuppage" element={<SignupPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
