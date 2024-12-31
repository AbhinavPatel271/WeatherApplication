import React , {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Weather from './weather';

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [check , setCheck] = useState(false);
  const [city , setCity] = useState("");

  function cityEntered(event){
         const cityname = event.target.value;
         setCity(cityname);
  }
  function clicked(){
    if(city.trim() === "")
      alert("Enter a city name");
    else
      setCheck(true);
  }
  return (
    <div className="main">
      {showAlert && (
      <Alert variant="filled" severity="info" onClose={() => setShowAlert(false)}>
        <AlertTitle>WELCOME TO YOUR WEATHER APP</AlertTitle>
    <p>Enter the city name in the serach bar and then click the tick button to get the weather details. <br />
       Make sure to enter a valid city name. <br />
       HAVE A NICE DAY.</p>
      </Alert>  )}
        
      <TextField 
           onChange={cityEntered}
           id="outlined-basic" 
           label="Enter the city name" 
           variant="outlined" className="ipt"  
           value={city}/>
        <br />
      <Button 
           onClick={clicked}
           className="btn" 
           variant="outlined"> 
           <DoneIcon className='icon'/> 
      </Button>
      <Weather check={check} cityName={city} reset={() => setCheck(false)}/>
    </div>
  )
}
export default App;