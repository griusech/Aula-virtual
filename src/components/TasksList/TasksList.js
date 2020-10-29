import React from 'react'
import CardTask from '../Cards/CardTask/CardTask'
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
            <CardTask 
                entrega="Fecha de Entrega"
                fecha="15 de Abril"
                textButton = "Continuar"
                calendar={<CalendarTodayOutlinedIcon />}
                progressIcon={<Progress />}
                iconTask={<Task />}
                progress="Progreso"
                numberProgress="25%"
            />
            <CardTask 
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
            <CardTask 
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
            <CardTask 
                entrega="Fecha de Entrega"
                fecha="15 de Abril"
                calendar={<EventAvailableOutlinedIcon />}
                progressIcon={<Completed />}
                iconTask={<Task />}
                progress="Actividad Completada"
            />

            {/* <CardTask 
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
