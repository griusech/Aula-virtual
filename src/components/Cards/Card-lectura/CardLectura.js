import React from 'react'
import './CardLectura.css'
import Button from '@material-ui/core/Button';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const CardLectura = (
    {
    fecha, 
    entrega, 
    continuar, 
    calendar, 
    progressIcon, 
    progress, 
    numberProgress
    }) => {

    return (
        <div className="card-container">
            <div className="card-section">
                <div className="card-header">
                    
                        <div className="item1">
                            <div className="item-things">
                                <div className="item-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                <rect opacity="0.15" width="39.7452" height="40" rx="6" fill="#01CEAA"/>
                                <rect x="7.09741" y="12.8572" width="25.5505" height="17.1429" rx="1" fill="#4F36D6"/>
                                <rect x="7.09741" y="12.8572" width="25.5505" height="17.1429" rx="1" fill="#1A1A1A" fill-opacity="0.6"/>
                                <path d="M8.51685 14C8.51685 11.7909 10.3077 10 12.5168 10H27.2284C29.4375 10 31.2284 11.7909 31.2284 14V27.5714C31.2284 28.1237 30.7807 28.5714 30.2284 28.5714H9.51685C8.96456 28.5714 8.51685 28.1237 8.51685 27.5714V14Z" fill="#01CEAA"/>
                                <path d="M29.8089 19.2858H9.93628V20.7143H29.8089V19.2858Z" fill="white"/>
                                <path d="M15.6142 16.4286H9.93628V17.8572H15.6142V16.4286Z" fill="white"/>
                                <path d="M26.9699 22.1428H9.93628V23.5714H26.9699V22.1428Z" fill="white"/>
                                <path d="M29.8089 25H9.93628V26.4286H29.8089V25Z" fill="white"/>
                                <g opacity="0.2">
                                <path d="M19.8726 10H27.2283C29.4375 10 31.2283 11.7909 31.2283 14V27.5714C31.2283 28.1237 30.7806 28.5714 30.2283 28.5714H19.8726V10Z" fill="#4F36D6"/>
                                <path d="M19.8726 10H27.2283C29.4375 10 31.2283 11.7909 31.2283 14V27.5714C31.2283 28.1237 30.7806 28.5714 30.2283 28.5714H19.8726V10Z" fill="#1A1A1A" fill-opacity="0.6"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="39.7452" height="40" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>

                                </div>
                                <div className="item-info">
                                    <h5>LECTURA</h5>
                                    <p>Cuentos para aprender ortografía</p>
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
                                    <p>{fecha}</p>
                                </div>

                            </div>
                        </div>
                        <div className="item3">
                            <div className="item-things">
                                <div className="item-icon">
                                    {progressIcon}

                                </div>
                                <div className="item-info">
                                    <h5>{progress}</h5>
                                    <p>{numberProgress}</p>
                                </div>

                            </div>
                        </div>

                        <div className="item4">
                            <Button>
                                {continuar}
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
                   <ChatBubbleIcon />
                </div>
            </div>
        </div>
    )
}

export default CardLectura
