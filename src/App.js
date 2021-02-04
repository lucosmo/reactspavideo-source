import logo from './logo.svg';
import './App.css';
import Header from './Components1';
import Forms from './Components2';
import video from './video1.mp4';
import imgback from './back1.jpg';
import videoposter from './video1.png';

function App() {
  
  return (
    <div>
    <div className="App">
      <header className="App-header">
      	<video className="video-my" autoPlay muted loop><source src={video} type="video/mp4" poster={videoposter}/></video>
        <p className="video-overlay">
          Hello there. <br />My name is Lukasz and this is my sample <br />react single page app using <br />video as background.
        </p>
        
      </header>
      
    </div>
    <Header />
    <div className="App">
      <header className="App-header">
    <img className="bck" src={imgback} />
    <p className="bck-overlay">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
     </header>
       
    </div>
    <Forms />
    </div>
  );
}

export default App;
