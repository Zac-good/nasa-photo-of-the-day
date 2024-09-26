import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './Components/Header'
import APOD from './Components/APOD'
import Details from './Components/Details'
import Explanation from './Components/Explanation'
import styled, { keyframes } from 'styled-components'

const StyledBackground = styled.div`
  background-image: url('https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')
`

function App() {

  const [headerText, setHeaderText] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [details, setDetails] = useState(null);
  const [explanation, setExplanation] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=hl2cw4Z65fyWhwL4NdtssslgFaGfCbFbgfAa1w00')
    .then(res => {
      console.log(res);
      setPhoto(res.data.hdurl);
      setHeaderText(res.data.title);
      setDetails(res.data.copyright +' '+ res.data.date);
      setExplanation(res.data.explanation);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  

  return (
    <StyledBackground>
    <div className="App">
      <Header title={headerText}/>
      <Details detail={details}/>
      <APOD image={photo}/>
      <Explanation about={explanation}/>
    </div>
    </StyledBackground>
  );
}

export default App;
