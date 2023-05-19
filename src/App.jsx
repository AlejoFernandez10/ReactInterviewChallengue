import { useState } from 'react'

import './styles/App.css'
import { useEffect } from 'react';




const RANDOM_CAT_FACT = 'https://catfact.ninja/fact'

const GIPHY_API_KEY = 'Tjp3kgYvuG2fcy6J5o9DoicsrtbzFtzm';




function App() {

  const [fact, setFact] = useState()

  const [firstThreeWords, setFirstThreeWords] = useState('')


  const [gif , setGif] = useState()



  const getGif =  (params) =>{
      
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${params}&limit=5&offset=0&rating=g&lang=en`)
    .then((res) =>  res.json())
    .then((data)=>  setGif(data.data[0].images.original.url))
  }

  const getRandomFact = ()=>{

    fetch(RANDOM_CAT_FACT)
    .then((res) => res.json())
    .then((data) => {
      setFact(data.fact)

     setFirstThreeWords(data.fact.split(" ").splice(0, 3).join(' '))
    })


    
    

  }  
  
  
  useEffect(()=>{
    getRandomFact()

  },[])

  useEffect(()=>{

    getGif(firstThreeWords);
  }, [firstThreeWords])
  

  
  
  return (
    <main className='main-container'>

      <h1 className='main-title'>Generate Gifs </h1>
        
        <section className='section-container'>

          <div>
           {gif &&
              <img src={gif} alt={'gif image'} className='gif-image'  />
            }  
            
          </div>


          <div className='fact-container' >
            <p className='fact'>{fact}</p>
          
          </div>


        </section>
        <button onClick={()=> getRandomFact() } style={{width:'100px', marginTop:'40px', marginBottom:'20px'}} >Refresh</button>
    </main>
  )
}

export default App
