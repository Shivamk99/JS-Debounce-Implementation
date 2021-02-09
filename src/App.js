import React,{useState, useCallback} from 'react';
import './App.css';

export default function Count() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  
  const increaseCount = () => {
    setCount(count => count + 1);
  }
  var _ = require('lodash');
  const debouncedCount = useCallback(_.debounce(increaseCount, 1000),[]);
  
  const handleChange = (e) => {
    setText(e.target.value);
    debouncedCount();
  }
  
  return (
    <>
      <h2>Count {count}</h2>
      <h3>Text {text}</h3>
      <input type="text" onChange={handleChange}/>
    </>
  );
}

 