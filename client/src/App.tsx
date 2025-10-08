import { useState, useEffect, } from 'react'
import axios from 'axios';

function App() {
  const veggie = 'carrot';
  const [fruits, setFruits] = useState<string[]>([]);

  const fetchApi = async () => {
      const response = await axios.get('http://localhost:3001/api');
      setFruits(response.data);
      console.log(response.data);
  }
  const postApi = async () => {
      try {
        await axios.post('http://localhost:3001/api', { item: veggie });
        console.log('Posted veggies');
      } catch (err) {
        console.error('Error posting veggies', err);
      }
  }
  useEffect(() => {
        postApi().then(fetchApi);
      }, []);

  return (
    <>
      <div>
        <p>Fruits from API:</p>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul> 
      </div>
    </>
  )
}

export default App
