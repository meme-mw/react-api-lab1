import { useEffect, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
   
     fetch("https://fakestoreapi.com/products")
    .then(response => response.json() )
    // 4. Setting *dogImage* to the image url that we received from the response above
.then(data => setProducts(data) )
},[])

  return (
    <>
    <section className="flex flex-wrap items-center justify-center">
    {products.map(el=><div className="card bg-base-100 w-1/4 shadow-xl mx-2 ">
  <figure>
    <img
      src={el.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {el.title}
      <div className="badge badge-secondary">{el.price}</div>
    </h2>
    <p>{el.description}</p>
    
  </div>
</div>)}
</section>
    </>
  )
}

export default App
