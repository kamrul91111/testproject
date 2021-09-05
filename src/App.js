import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  // states
  const [count, setCount] = useState(0); //first value in the array is the js value that we will modify, second value is the function to mutate the value
  const [data, setData] = useState([]);

  // react hook to launch a function dependening on dependencies rather than ui control elements
  useEffect(() => {
    // axios to make network request, can also be done using fetch
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []); //empty array dependency, so only launch the function when this component renders

  // helper functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // UI
  return (
    <div>
      <button onClick={() => decrement()}>decrement</button>
      <h1>{count}</h1>
      {/* js map function to iterate through array and render the values */}
      {data.map(item => (
        <div className='content'>
          <p style={{color: 'red'}}>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default App;
