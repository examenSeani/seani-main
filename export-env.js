const { writeFileSync } = require('fs');
require('dotenv').config()

const varsToExport = [
  "apiKey",
  "authDomain",
  "databaseURL",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
  "measurementId"
]
function getSerializedVal(varName) {
  const val = process.env[varName]
  return typeof val === 'string' ? `'${val}'` : val
}
const vals = varsToExport
  .map(varName => `${varName}: ${getSerializedVal(varName)}`)
  .join(',\n  ')

const jsFile = `${__dirname}/utils/variables.js`
writeFileSync(jsFile,
  `// WARN: This is a generated file. Do not modify!
    export * from './constante'
    export const collection = ${getSerializedVal('collection')};
    //ya no es nesesario modificar las credenciales, en su lugar crear un ".env" y meter toda la info
    //poner fecha en cuando se aplicara
    export const fechaActual = new Date(Date.now());

    export  const firebaseConfig  = {
       ${vals}
    };
  `, 'utf8'
)

/**
 * apiKey: "AIzaSyAyiLjNMCdX4vkB_kM0n8D_KE-tWhzGGg4",
  authDomain: "seani-954ac.firebaseapp.com",
  databaseURL: "https://seani-954ac.firebaseio.com",
  projectId: "seani-954ac",
  storageBucket: "seani-954ac.appspot.com",
  messagingSenderId: "821462862987",
  appId: "1:821462862987:web:43310b4bbc8b84f354d88e",
  measurementId: "G-EXBFMRJ8F4",

 */