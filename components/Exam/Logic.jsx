import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Radio from "@material-ui/core/Radio";
import {useSelector} from 'react-redux'
import {testLogic} from 'utils/api';
import {IMG} from './styled';
import Alert from '../Alert/Alert';
import { useRouter } from "next/router";

const Logic = ({ dtajs, dataAlumno, posision }) => {

  const router = useRouter();
  const { page }=router.query;

  let conver = parseInt(posision);
  let valorActive = dataAlumno[conver] ? dataAlumno[conver] : "";

  const [tempResp, setTempResp] = useState({});
  const [selectValue, setSelectValue] = useState(valorActive.respuesta);
  const [alertState, changeAlertState]=useState(false);
  const [alert, changeAlert]=useState({});
  const user = useSelector(state => state.user)

  useEffect(() => {
    setSelectValue(valorActive.respuesta);
  }, [valorActive.respuesta]);

  useEffect(()=>{

    let respValue = dataAlumno[posision].respuesta;

    respValue != "" ? console.log('contesta porfa') : 
    setSelectValue();

  }, [conver])

  const handlerElegirRespuesta = (e) => {
    setTempResp({
      pregunta: dtajs?._id,
      respuesta: e.target.value,
    });
    //console.log(datajs?._id);
    setSelectValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!tempResp?.pregunta || !tempResp?.pregunta) {
      return false;
    } else {
      dataAlumno[conver] = tempResp;
      testLogic({id:user?.uid,arre:dataAlumno})
      .then(()=>{
        changeAlertState(true);
        changeAlert({
          tipo: 'exito', mensaje: 'Se guardo con exito'
        });
        page < 15 ? router.push(`/logico?page=${parseInt(page) + 1}`) :
        setTimeout(()=>{
          changeAlert({tipo: 'exito', mensaje: 'Da click en Terminar este modulo'});
        }, 1800);
      }).catch(()=>{
        changeAlertState(true);
        changeAlert({
          tipo: 'error', mensaje: 'Existio un error, intentalo nuevamente'
        });
      })
      setTempResp({});
    }
  };

  return (
    <div>
      {dtajs?.pregunta_txt ? <h1>{dtajs?.pregunta_txt}</h1> : null}
      {dtajs?.pregunta_url ? (
        <IMG
          className="responsive-img materialboxed"
          src={dtajs?.pregunta_url}
          alt="pregunta"
          width="900px"
          height="550px"
          // onClick={zoomHandler}
        />
      ) : null}
      <form onSubmit={handlerSubmit}>
        <FormControl component="fieldset">
          <RadioGroup
            //defaultValue={selectValue}
            aria-label="gender"
            name="customized-radios"
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label={dtajs?.respuesta1}
              onChange={handlerElegirRespuesta}
              checked={selectValue === "A"}
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label={dtajs?.respuesta2}
              onChange={handlerElegirRespuesta}
              checked={selectValue === "B"}
            />
            <FormControlLabel
              value="C"
              control={<Radio />}
              label={dtajs?.respuesta3}
              onChange={handlerElegirRespuesta}
              checked={selectValue === "C"}
            />
            <FormControlLabel
              value="D"
              control={<Radio />}
              label={dtajs?.respuesta4}
              onChange={handlerElegirRespuesta}
              checked={selectValue === "D"}
            />
          </RadioGroup>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Guardar Respuesta
          </Button>
        </FormControl>
      </form>
      <Alert tipo={alert.tipo} mensaje={alert.mensaje} estadoAlerta={alertState} cambiarEstadoAerta={changeAlertState} />
    </div>
  );
};

Logic.propTypes = {
  dtajs: PropTypes.object,
  dataAlumno:PropTypes.array,
  posision: PropTypes.number
}
export default Logic;
