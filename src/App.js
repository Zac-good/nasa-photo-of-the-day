import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './Components/Header'
import APOD from './Components/APOD'
import Details from './Components/Details'
import Explanation from './Components/Explanation'

function App() {

  const [headerText, setHeaderText] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [details, setDetails] = useState(null);
  const [explanation, setExplanation] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=hl2cw4Z65fyWhwL4NdtssslgFaGfCbFbgfAa1w00')
    .then(res => {
      console.log(res.data);
      setPhoto(res.data.hdurl);
      setHeaderText(res.data.title);
      setDetails(res.data.copyright +' '+ res.data.date);
      setExplanation(res.data.explanation);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  console.log(headerText);

  

  return (
    <div className="App">
      <Header title={headerText}/>
      <APOD image={photo}/>
      <Details detail={details}/>
      <Explanation about={explanation}/>
    </div>
  );
}

export default App;
