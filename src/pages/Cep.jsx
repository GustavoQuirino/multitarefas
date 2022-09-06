import { useState } from "react";
import './Cep.css'
import { FaSearchLocation} from 'react-icons/fa'

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
                <button onClick={captura}>BUSCAR</button><br />
                <FaSearchLocation/>
            </div>
            
            {busca && 
                <div className="resultado">
                    <h1>{busca.address}</h1>
                    <h3>{busca.district}</h3>
                    <h3>{busca.city}</h3>
                    <h2>{busca.state}</h2>
                </div>}
        </div>
    )
}

export default Cep;