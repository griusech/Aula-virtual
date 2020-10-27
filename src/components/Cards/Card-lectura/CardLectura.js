import React from 'react'
import './CardLectura.css'
import Button from '@material-ui/core/Button';
import Hoja from '../../../img/clip-de-papel.svg'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const CardLectura = () => {
    return (
        <div className="card-container">
            <div className="card-section">
                <div className="card-header">
                    
                        <div className="item1">
                            <div className="item-things">
                                <div className="item-icon">
                                    <ChatBubbleIcon />
                                </div>
                                <div className="item-info">
                                    <h4>Lectura</h4>
                                    <p>Cuentos para aprender ortografía</p>
                                </div>
                            </div>

                        </div> 

                        <div className="item2">
                            texto loco loco loco loco loco loco 
                        </div>
                        <div className="item3">
                            Progreso
                        </div>

                        <div className="item4">
                            <Button>
                                Continuar
                            </Button> 
                        </div>
                    
                </div>
                <div className="card-footer">
                   Texto <ChatBubbleIcon />
                </div>
            </div>
        </div>
    )
}

export default CardLectura
