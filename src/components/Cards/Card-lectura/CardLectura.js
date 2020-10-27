import React from 'react'
import './CardLectura.css'
import Button from '@material-ui/core/Button';

const CardLectura = () => {
    return (
        <div className="card-container">
            <div className="card-section">
                <div className="card-header">
                    
                        <div className="item1">
                            ITEM1
                        </div> 

                        <div className="item6">
                            <Button>
                            Primario
                            </Button> 
                        </div>
                    
                </div>
                <div className="card-footer">
                    TEXTO 1 <span>Texto 2</span>
                </div>
            </div>
        </div>
    )
}

export default CardLectura
