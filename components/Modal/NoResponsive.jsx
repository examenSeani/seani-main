import React from "react";
import Swal from "sweetalert2";
import {useRouter} from 'next/router'
import MenuItem from "@material-ui/core/MenuItem";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import {accionAlumno} from 'redux/accion'
import { useSelector,useDispatch} from "react-redux";
import {
  mateCancel,
  logiCancel,
  lenguaCancel,
  examCancel,
  getInitial
} from "utils/api";

const NoResponsive = () => {
  //hooks
  const dispatch = useDispatch()
  const router = useRouter();
  //state
  const typeTest = useSelector((state) => state.typeTest);
  const time = useSelector((state) => state.time);
  const user = useSelector((state) => state.user);

  const primer = () => {
    if (time > 0) {
      Swal.fire({
        title: `¿Terminar módulo ${typeTest}?`,
        text: "No podras revertir esto",
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
              switch (typeTest) {
                case "Pensamiento analítico":
                  //exam
                  examCancel({ id: user?.uid }).then(async() => {
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  });
                  break;
                case "Estructura de la lengua":
                  //lengia
                  lenguaCancel({ id: user?.uid }).then(async() => {
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  });
                  break;
                case "Comprensión lectora":
                  //logico
                  logiCancel({ id: user?.uid }).then(async() => {
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  });
                  break;
                case "Pensamiento matemático":
                  //mate
                  mateCancel({ id: user?.uid }).then(async() => {
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  });
                  break;

                default:
                  examCancel({ id: user?.uid }).then(async() => {
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  });
                  break;
              }
            }
          });
        }
      });
    }
  };
  return (
    <MenuItem onClick={primer}>
      <IconButton aria-label="Exit examen" color="inherit">
        <DoneIcon />
      </IconButton>
      <p>Terminar este módulo</p>
    </MenuItem>
  );
};

export default NoResponsive;
/***
 *
 *
 */
