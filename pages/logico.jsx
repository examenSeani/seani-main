import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'cookies'
import { useStylesLengua } from '../assets/style-js'
import Pagination from "@material-ui/lab/Pagination";
import { Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { accionTest, accionTipe } from "redux/accion";
import data from "assets/json/exam_PensaLogic.json";
import Logic from "components/Exam/Logic";
import Head from "next/head";


const logico = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStylesLengua();
  const alumno = useSelector(state => state.alumno)

  useEffect(() => {
    dispatch(accionTest(true));
    dispatch(accionTipe("Comprensión lectora"));

    return () => {
      dispatch(accionTest(false));
      dispatch(accionTipe(""));
    };
  }, []);

  const handleChange = (event, value) => {
    //window.location.replace(`/logico?page=${value}`)
    router.push(`/logico?page=${value}`)
  };

  function elegir(numero) {
    if (numero <= 0) {
      return false;
    }
    if (numero > 90) {
      return false;
    }
    return (
      <Logic
        dtajs={data[parseInt(numero)]}
        dataAlumno={alumno?.data?.logico ? alumno?.data?.logico : []}
        todos={alumno?.data}
        posision={numero}
      />
    );
  }
  return (
    <>
      <Head>
        <title>SEANI | Comprensión lectora</title>
      </Head>
      <Container>
        {elegir(parseInt(router.query.page))}
        <div className={classes.root}>
          <Pagination
            className=" transparent center-align"
            count={data.length - 1}
            defaultPage={1}
            page={parseInt(router.query.page)}
            color="primary"
            onChange={handleChange}
          />
        </div>
      </Container>
    </>
  );
};

export default logico;

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx?.req, ctx?.res);
  var isSesion = cookies.get('user');
  var active = cookies.get('activeLogic');
  var examActive = JSON.parse(active)
  const login = isSesion ? true : false
  if (!login) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
      props: { login }
    }
  }
  if (login && !examActive) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      },
      props: { login }
    }
  }
  return {
    props: { login }
  }
}