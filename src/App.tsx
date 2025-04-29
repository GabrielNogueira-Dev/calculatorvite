

import { useState,FormEvent } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

import './App.css'
import logo from './assets/android-chrome-192x192.png'

function App() {
 
  
 
  //Para converter de euros para dólares basta multiplicar o valor em euro por 1,15068
  const [euro,setEuro] = useState(0)
  const [dolar,setDolar] = useState(0)
  const [informacoes,setInfo]  = useState<Props>() 
  
  interface Props{
    Euro:string | number;
    Dolar: string | number;
  }
  
  
  function Calculate(event:FormEvent ){
    event.preventDefault();
    let FormEuro = euro * 1.15
    let FormDolar = dolar * 0.8699
    setInfo({
      Euro:FormEuro.toFixed(2),
      Dolar:FormDolar.toFixed(2)
    })
    if( euro >0){
     setDolar( Number(euro))
      toast.success("Euro convertido com sucesso")
      
    
    }else if(dolar >0){
      setEuro(dolar)
      toast.success("Dolar convertido com sucesso")
    }else{toast.warn("Precisa digitar algum valor")
      
    }
    setInfo
    
  }
  
  
  
  
  return (
    
    <div className='container'>
 <ToastContainer autoClose= {3000}/>
      <h1 className='title'> EUR x USD</h1>
<img className='Logo' src={logo} alt="logo conversao" />
     <form  className='formulary'
    >
<label>EUR</label>
<input className='input' 
type="number"
placeholder='Write one value'

step="0.01"
value={euro}
onChange={(e)=> setEuro(Number(e.target.value))} />

<br/> <br/>

<label>USD</label>
<input className='input' 
 type="number"
 placeholder='Write one value'
 
 step="0.01"
 value={dolar}
 onChange={(e)=> setDolar(Number(e.target.value))} />
<br/> <br/>
<button onClick={Calculate}>Calcular</button>

<br/> 
{informacoes && Object.keys(informacoes).length > 0 && (
  <section className='Objectkey'>
<h3>Conversão Atual:</h3><br/>
<h4 className='text'>${informacoes?.Euro} | €{informacoes?.Dolar} </h4>

  </section>

)}

     </form>
      </div>
   
  )
}

export default App

