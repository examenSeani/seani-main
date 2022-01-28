import React from 'react';
import data from './data.modules';

const Modulos = ({analitico, lectora, matematico, lengua}) => {

    const accion = (name)=>{
        if(name == 'analitico'){
            analitico();
        }else if(name == 'lectora'){
            lectora();
        }else if(name == 'matematico'){
            matematico();
        }
        else if(name == 'lengua'){
            lengua();
        }else{
            console.log('existio un error');
        }
    }
    
    return (  
        <div className="container-modulos">
            <h2>Módulos de la evaluación</h2>
            {
                data.map((doc)=>{
                    let clase = `modulo ${doc.ref}`
                    return(
                        <div className={clase} onClick={()=>accion(doc.ref)}>
                            <h2>{doc.nombre}</h2>
                            <img src={doc.img} alt="img"/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Modulos;