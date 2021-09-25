import "./Counter.css";
import React, { useState, useEffect } from 'react';

function Counter(props){
    
    const [isLoading, setIsLoading] = useState(false);
    const  {count, setCounter}= props;
    const increaseCount = () => {        
        console.log(count );
        if(count==='')setCounter(1);
        else if(count<1000){
            setCounter(count + 1);
            
        }        
    }

    const decreaseCount = () => {
        if(count==='')setCounter(1);
        else if(count>1){
            setCounter(count - 1);
        }        
    }

    const handleCounterChange = (event) => {        
        let number = parseInt(event.target.value);
        if(isNaN(number)){
            setCounter('');
        }
        if(number<=1000 && number>=0){
            setCounter(parseInt(event.target.value));  
        }   
        
    }

    useEffect(() => {
        setIsLoading(true);
        fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json' , {
            method:'PUT',
            body : JSON.stringify({'202011021' : count})
        })
        .then(res => res.json())
        .then(body => {
            setIsLoading(false);
            // setCounter(body["202011021"])
        }) 
    },[count] )
    
    return(
        <div className="container">                      
            <div className="loaderContainer" style={{visibility:isLoading?"visible":"hidden"}}>
                <div className="loader"></div>
                <h5>Saving counter value</h5>
            </div>
            <button className="btn1" onClick={decreaseCount}>-</button>
            <input type="number" min="0" max="1000" value={count} className="input" onChange={handleCounterChange} />
            <button className="btn2" onClick={increaseCount}>+</button>
        </div>
    )
}
export default Counter;