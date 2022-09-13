import { useEffect, useState } from 'react'
import './Timer.css'


const Timer = () => {

    const d = new Date()
    const hora = d.getHours()
    const minutos = d.getMinutes()
    const [segundos ,setSegundos] = useState()
    
    function pegaSegundos() {
        setSegundos(d.getSeconds())
    }

    

    return (
        <div className="principal">
            <div className="relogio">
                {<h1>{hora}</h1>}
                {<h1>{minutos}</h1>}
                {<h1>{segundos}</h1>}
            </div>
            <div className="timer">

            </div>
        </div>
    )
}

export default Timer;