import React from 'react'
import './CardTask.css'
import Button from '@material-ui/core/Button';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const CardLectura = (
    {
    fecha, 
    entrega, 
    textButton,
    calendar, 
    progressIcon, 
    progress, 
    iconTask,
    newTask,
    delayedTask,
    numberProgress
    }) => {

    return (
        <div className="card-container">
            <div className="card-section">
                <div className="card-header">
                    
                        <div className="item-iconTask">
                            {iconTask}
                        </div>
                        <div className="item1">
                            <div className="item-things">
                                <div className="item-infoTask">
                                    <h5>LECTURA</h5>
                                    <p>Cuentos para aprender ortografía</p>
                                    <p>{newTask ? newTask : delayedTask}</p>
                                </div>
                            </div>

                        </div> 

                        <div className="item2">
                            <div className="item-things">
                                <div className="item-icon">
                                    {calendar}

                                </div>
                                <div className="item-info">
                                    <h5>{entrega}</h5>
                                    <p className={delayedTask ? "conClase" : ""}>{fecha}</p>
                                </div>

                            </div>
                        </div>
                        <div className="item3">
                            <div className="item-things">
                                <div className="item-icon">
                                    {progressIcon}

                                </div>
                                <div className="item-info">
                                    {
                                        
                                    }
                                    <h5>{progress}</h5>
                                    <p>{numberProgress}</p>
                                </div>

                            </div>
                        </div>

                       

                        <div className={textButton ? "item4" : "item4 v-hidden"}>
                            <Button>
                                {textButton}
                            </Button> 
                        </div>
                        
                    
                </div>
                <div className="card-footer">
                   <div className="boton-materia">
                    <div className="circle">

                    </div>
                    <div className="materia">
                    Lengua

                    </div>
                   </div>
                   <div className="chatIcon">
                        <ChatBubbleIcon />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default CardLectura
