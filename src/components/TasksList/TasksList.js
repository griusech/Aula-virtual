import React from "react";
import CardTask from "../Cards/CardTask/CardTask";
import Progress from "../Icons/Progress";
import Task from "../Icons/Taks";
import Pencil from "../Icons/Pencil";
import NewTask from "../Icons/NewTask";
import NoProgress from "../Icons/NoProgress";
import Completed from "../Icons/Completed";
import Delayed from "../Icons/Delayed";
import Teacher from "../Icons/Teacher";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";

const Lectura = () => {
  return (
    <div>
      <CardTask
        title="LECTURA"
        description="Cuentos para aprender ortografía"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        textButton="Continuar"
        calendar={<CalendarTodayOutlinedIcon />}
        progressIcon={<Progress />}
        iconTask={<Task />}
        progress="Progreso"
        numberProgress="25%"
        matter="Lengua"
      />
      <CardTask
        title="LECTURA"
        description="Cuentos para aprender ortografía"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        textButton="Comenzar"
        calendar={<CalendarTodayOutlinedIcon />}
        progressIcon={<NoProgress />}
        iconTask={<Task />}
        newTask={<NewTask />}
        progress="Progreso"
        numberProgress="-"
        matter="Lengua"
      />
      <CardTask
        title="LECTURA"
        description="Cuentos para aprender ortografía"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        textButton="Continuar"
        calendar={<CalendarTodayOutlinedIcon />}
        progressIcon={<Progress />}
        iconTask={<Task />}
        delayedTask={<Delayed />}
        progress="Progreso"
        numberProgress="25%"
        matter="Lengua"
      />
      <CardTask
        title="LECTURA"
        description="Cuentos para aprender ortografía"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        calendar={<EventAvailableOutlinedIcon />}
        progressIcon={<Completed />}
        iconTask={<Task />}
        numberProgress="Actividad Completada"
        matter="Lengua"
      />

      <br />
      <hr />

      <CardTask
        title="ACTIVIDAD CON PREGUNTAS"
        description="¿Qué es la potencia y la raiz cuadrada un número?"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        textButton="Continuar"
        calendar={<CalendarTodayOutlinedIcon />}
        progressIcon={<Progress />}
        iconTask={<Pencil />}
        progress="Progreso"
        numberProgress="25%"
        matter="Lengua"
      />

      <CardTask
        title="ACTIVIDAD CON PREGUNTAS"
        description="¿Qué es la potencia y la raiz cuadrada un número?"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        textButton="Comenzar"
        calendar={<CalendarTodayOutlinedIcon />}
        progressIcon={<NoProgress />}
        iconTask={<Pencil />}
        newTask={<NewTask />}
        progress="Progreso"
        numberProgress="-"
        matter="Lengua"
      />

      <CardTask
        title="ACTIVIDAD CON PREGUNTAS"
        description="¿Qué es la potencia y la raiz cuadrada un número?"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        textButton="Continuar"
        calendar={<CalendarTodayOutlinedIcon />}
        progressIcon={<Progress />}
        iconTask={<Pencil />}
        delayedTask={<Delayed />}
        progress="Progreso"
        numberProgress="25%"
        matter="Lengua"
      />

      <CardTask
        title="ACTIVIDAD CON PREGUNTAS"
        description="¿Qué es la potencia y la raiz cuadrada un número?"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        calendar={<EventAvailableOutlinedIcon />}
        progressIcon={<Teacher />}
        iconTask={<Pencil />}
        numberProgress="Esperando Corrección"
        matter="Lengua"
      />

      <CardTask
        title="ACTIVIDAD CON PREGUNTAS"
        description="¿Qué es la potencia y la raiz cuadrada un número?"
        delivery="Fecha de Entrega"
        date="15 de Abril"
        calendar={<EventAvailableOutlinedIcon />}
        progressIcon={<Completed />}
        iconTask={<Pencil />}
        numberProgress="Actividad Completada"
        matter="Lengua"
      />
    </div>
  );
};

export default Lectura;
