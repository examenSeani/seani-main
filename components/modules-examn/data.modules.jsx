import React from 'react';
import pAnalitico from '../../assets/images/pAnalitico.png';
import cLectora from '../../assets/images/cLectora.png';
import pMatematico from '../../assets/images/pMatematico.png';
import eLengua from '../../assets/images/eLengua.png';


const DataModules = [
    {
        id: 1,
        nombre : "Pensamiento Analítico",
        img : pAnalitico,
        ref: "analitico"
    },
    {
        id: 2,
        nombre : "Comprension Lectora",
        img : cLectora,
        ref: "lectora"
    },
    {
        id: 3,
        nombre : "Pensamiento Matemático",
        img : pMatematico,
        ref: "matematico"
    },
    {
        id: 4,
        nombre : "Estructura de La lengua",
        img : eLengua,
        ref: "lengua"
    }
];

export default DataModules;