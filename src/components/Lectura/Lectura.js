import React from 'react'
import CardLectura from '../Cards/Card-lectura/CardLectura'
import Progress from '../Icons/Progress'
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

const Lectura = () => {
    return (
        <div>
            <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Octubre"
                continuar = "Continuar"
                calendar={<CalendarTodayOutlinedIcon />}
                progressIcon={<Progress />}
                progress="Progreso"
                numberProgress="25%"
            />
            {/* <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Octubre"
            />
            <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Octubre"
            />
            <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Octubre"
            /> */}
        </div>
    )
}

export default Lectura
