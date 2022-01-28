import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { accionTime, accionAlumno } from "redux/accion";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import { allCancel, openSocket, getInitial } from "utils/api";

function RelojLimit({ user, alumno }) {
  useEffect(() => {
    console.log(`user ${user.uid} connect`);
    return () => console.log(`user ${user.uid} disconnect`);
  }, []);
  return <TimerInternal user={user} alumno={alumno} />;
}

function TimerInternal({ user, alumno }) {
  //hooks
  const dispatch = useDispatch();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  //state
  const [seconds, setSeconds] = useState(alumno?.data?.time);
  const [timer, setTimer] = useState({ h: null, m: null, s: null });

  useEffect(() => {
    let interval = null;
    if (seconds === 900) {
      enqueueSnackbar("Quedan 15 minutos para finalizar", {
        variant: "warning",
      });
    }
    if (seconds === 0) {
      enqueueSnackbar("El tiempo para realizar tu examen finalizo", {
        variant: "info",
      });
      setSeconds(0);
      dispatch(accionTime(0));
      setTimer({
        s: 0,
        h: 0,
        m: 0,
      });
      openSocket({ id: user.uid, time: seconds });
      allCancel({ id: user?.uid }).then(async () => {
        const { data } = await getInitial(user.uid);
        dispatch(accionAlumno({ data }));
        router.push("/home");
      });
    } else {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      dispatch(accionTime(seconds));
      setTimer({
        s: Math.round(seconds % 0x3c),
        h: Math.floor(seconds / 0xe10),
        m: Math.floor(seconds / 0x3c) % 0x3c,
      });
      openSocket({ id: user.uid, time: seconds })
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <AccessAlarmIcon />
      {`${timer.h}H ${timer.m} M ${timer.s}S`}
    </>
  );
}

RelojLimit.propTypes = {
  user: PropTypes.object,
  alumno: PropTypes.object
}

TimerInternal.propTypes = {
  user: PropTypes.object,
  alumno: PropTypes.object
}
export default RelojLimit;
