import axios from 'axios';
import React, { useEffect, useState } from 'react';


const FetchingAx = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    console.log("out");

    const fetchData = async () => {
      // console.log("work");

      // axios.get('https://fakestoreapi.com/products')
      // .then(response => {
      //   // console.log(response.data,"rsp");
      // })
      // .catch(error => {
      //   console.error(error);
      // });




      // setLoading(true);
      try {
        console.log("Work");
       const response = await axios.get('https://fakestoreapi.com/products');
        //  .then(response=> console.log(response));
        // console.log(response,"resp");
        setData(response.data);
        // console.log(response.data);
      } catch (err) {
        console.log(err.message);
        // setError(err.message);
      // } finally {
      //   setLoading(false);
      // }
    }

  }
  fetchData();

}, []);
  
  console.log(data,"data");

  // if (loading) return <div>Loading</div>

  // if (error) return <div>Error: {error}</div>;

  return (
    <div>
        {/* <div className='flex content-center'>
          <label htmlFor=""></label>
          <input type="text" />
        </div> */}
      {
        // console.log(data)
      data.map((item) => (
        <div key={item.id} >
          <div className='border border-black p-3 flex flex-col items-start gap-3 mb-4 '>
            <div className="header">
              <p>{item.title}</p>
            </div>
            <div>
              <p>{item.category}</p>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchingAx;
