import { useState } from "react";
import './Cep.css'

const Cep = () => {

    const [cep,setCep] = useState()
    const [busca,setBusca] = useState('')
    
    const pegaCep = (e) => {
        setCep(e.target.value)
           
    }
    function captura(){
        
        fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                setBusca(data)
            })
    }
    
    const limpa = (e) => {
        e.target.value = ''
    }


    return (
        <div className="display">
            <div className="busca">
                <h1>BUSCA CEP</h1>
                <input type='text'placeholder="00000-000" maxLength={8} onChange={pegaCep} onClick={limpa}/><br />
                <button onClick={captura}>BUSCAR</button>
            </div>
            <div className="resultado">
                {busca && 
                <>
                    <h1>{busca.address}</h1>
                    <h3>{busca.district} - {busca.city}</h3>
                
                </>}
            </div>
        </div>
    )
}

export default Cep;