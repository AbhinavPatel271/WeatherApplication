import React , {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
 
const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

function Weather(props) {
    const [flag , setFlag] = useState(false);
    const city = props.cityName;
    const apikey = "7a19fa0e958dce67e10da018f36aa6c9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const [data, setData] = useState(null);

    async function getData() {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          setData(json);
          setFlag(true);
        } catch (error) {
          console.error(error.message);
          setFlag(false);   
          alert("City not found");
        }
      }

  if (props.check){
       getData();
       props.reset();
  } 
  if(flag){
  return (
    <div className='container' >
        <div className='weather'>      
           <List sx={style} aria-label="mailbox folders">
               <ListItem> <ListItemText primary={`Weather: ${data.weather[0].main}`} /> </ListItem>
               <Divider component="li" />
               <ListItem> <ListItemText primary={`Temperature: ${Math.round(data.main.temp - 273.15)} ℃`} /> </ListItem>
               <Divider component="li" />
               <ListItem> <ListItemText primary={`Pressure : ${data.main.pressure} hPa`} /> </ListItem>
               <Divider component="li" />
               <ListItem> <ListItemText primary={`Humidity : ${data.main.humidity} %`} /> </ListItem>
               <Divider component="li" />
               <ListItem> <ListItemText primary={`Wind Speed : ${data.wind.speed} meter/sec`} /> </ListItem>
               <Divider component="li" />
               <ListItem> <ListItemText primary={`Description: ${data.weather[0].description}`} /> </ListItem>
            </List>
       </div>
    </div>
   )
 }
 else return null;
}

export default Weather;