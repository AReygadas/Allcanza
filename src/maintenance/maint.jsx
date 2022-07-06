import logo from './../images/logo.png';
import logo2 from './../images/under-construction.png';
import './../App.css';

export const Maintenance=()=> {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  style={{width:"25rem", height:"auto"}}/>
     
        <img src={logo2} className="App-logo" alt="logo"  style={{width:"25rem", height:"auto"}}/>   
        
      </header>
    </div>
  );
}