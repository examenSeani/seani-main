import React, {useEffect} from "react";
import {useRouter} from 'next/router'
import Swal from "sweetalert2";
import { Menu } from "semantic-ui-react";
import {useSelector,useDispatch} from 'react-redux';
import {accionAlumno} from 'redux/accion'
import {mateCancel,logiCancel,lenguaCancel,examCancel,getInitial} from 'utils/api';

const Modal = () => {
  //hooks
  const dispatch = useDispatch()
  const router = useRouter();
  //state
  const typeTest = useSelector(state => state.typeTest);
  const time = useSelector(state => state.time);
  const user = useSelector(state => state.user);
  
  const primer = () => {
    if (time > 0) {
      Swal.fire({
        title: `¿Terminar módulo ${typeTest}?`,
        text: "Estas finalizando esta sección de tú evaluación, no se podrá revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: "¿Estas seguro?",
            text: "Tienes tiempo para revisar tu módulo",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si estoy totalmente seguro!",
          }).then((result) => {
            if (result.value) {
              // localStorage.setItem('time', 0)
              switch (typeTest) {
                case "Pensamiento analítico":
                  //exam
                  examCancel({id:user?.uid}).then(async ()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  })
                  break;
                case "Estructura de la lengua":
                  //lengua
                  lenguaCancel({id:user?.uid}).then(async ()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  })
                  break;
                case "Comprensión lectora":
                  //logico
                  logiCancel({id:user?.uid}).then(async ()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  });
                  break;
                case "Pensamiento matemático":
                  //mate
                  mateCancel({id:user?.uid}).then(async ()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  })
                  break;

                default:
                  examCancel({id:user?.uid}).then(async()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  })
                  break;
              }
            }
          });
        }
      });
    }else{
      Swal.fire({
        title: `Existio un error`,
        iconColor:"#ff0000",
        text: `En el cronometro hay un error, por favor cierra esta alerta y después da click en el texto "Ultima Pregunta del módulo Actual 🏅" para ser re dirigido a la pagina principal y así continuar con el siguiente módulo. Puedes dar Por terminado este módulo. No abra ningún problema todas tus respuestas ya han sido guardadas con éxito.`,
        icon: "warning",
        confirmButtonText: "OK",
      })
    }
  };
  
  useEffect(()=>{
    primer();
  }, [])

  return (
    <div>
      <Menu.Item name="Terminar este módulo" className="my-color" />
    </div>
  );
};

export default Modal;

/***
 *
 *
 *
 */
