import React from 'react'
import CardLectura from '../Cards/Card-lectura/CardLectura'
import Progress from '../Icons/Progress'
import Task from '../Icons/Taks'
import NewTask from '../Icons/NewTask'
import NoProgress from '../Icons/NoProgress'
import Completed from '../Icons/Completed'
import Delayed from '../Icons/Delayed'
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

const Lectura = () => {
    return (
        <div>
            <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Abril"
                textButton = "Continuar"
                calendar={<CalendarTodayOutlinedIcon />}
                progressIcon={<Progress />}
                iconTask={<Task />}
                progress="Progreso"
                numberProgress="25%"
            />
            <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Abril"
                textButton = "Comenzar"
                calendar={<CalendarTodayOutlinedIcon />}
                progressIcon={<NoProgress />}
                iconTask={<Task />}
                newTask = {<NewTask />}
                progress="Progreso"
                numberProgress="-"
            />
            <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Abril"
                textButton = "Continuar"
                calendar={<CalendarTodayOutlinedIcon />}
                progressIcon={<Progress />}
                iconTask={<Task />}
                delayedTask = {<Delayed />}
                progress="Progreso"
                numberProgress="25%"
            />
            <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Abril"
                calendar={<EventAvailableOutlinedIcon />}
                progressIcon={<Completed />}
                iconTask={<Task />}
                progress="Actividad Completada"
            />

            {/* <CardLectura 
                entrega="Fecha de Entrega"
                fecha="15 de Abril"
                calendar={<EventAvailableOutlinedIcon />}
                progressIcon={<Completed />}
                iconTask={<Task />}
                progress="Actividad Completada"
            /> */}
        </div>
    )
}

export default Lectura
