import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Statistics({good,bad,neutral}){
  
    if (good > 0 || neutral > 0 || bad > 0){
      return(
        <div>
        <p >good={good}</p>
        <p>bad={bad}</p>
        <p>neutral={neutral}</p>
        <p>total={good+bad+neutral}</p>
        <p>average=good+1</p>
        </div>
      )
     

    }
     
      
      return (
        <p>no feedback given</p>
      )
     

  
  



}
function Unicef(){
  const [good,setGood]=useState(
    0
  )
  const [bad,setBad]=useState(
    0
  )
  const [neutral,setNeutral]=useState(
    0
  )
  return (
    
      
    
    
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    
    
 
    </div>
    
  
  )



}

ReactDOM.render(
  <div>
      <Unicef></Unicef>
      

  </div>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
