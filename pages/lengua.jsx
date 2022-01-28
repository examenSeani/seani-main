import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'cookies'
import { useDispatch, useSelector } from "react-redux";
import { accionTipe, accionTest } from 'redux/accion'
import data from 'assets/json/exam_EstrucLengua.json'
import Pagination from "@material-ui/lab/Pagination";
import { useStylesLengua } from 'assets/style-js'
import { Container } from "semantic-ui-react";
import Lenguaje from "components/Exam/Lengua";
import Head from "next/head";


const lengua = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStylesLengua();
  const alumno = useSelector(state => state.alumno)

  useEffect(() => {
    dispatch(accionTest(true));
    dispatch(accionTipe("Estructura de la lengua"));
    return () => {
      dispatch(accionTest(false));
      dispatch(accionTipe(""));
    };
  }, []);

  const handleChange = (event, value) => {
    router.push(`/lengua?page=${value}`);
  };

  function elegir(numero) {
    if (numero <= 0) {
      return false;
    }
    if (numero > 90) {
      return false;
    }
    return (
      <Lenguaje
        dtajs={data[parseInt(numero)]}
        dataAlumno={alumno?.data?.lengua ? alumno?.data?.lengua : []}
        todos={alumno?.data}
        posision={numero}
      />
    );
  }

  return (
    <>
      <Head>
        <title>SEANI | Estructura de la lengua</title>
      </Head>
      <Container>
        {elegir(router.query.page)}
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



export default lengua;

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx?.req, ctx?.res);
  var isSesion = cookies.get('user');
  const login = isSesion ? true : false;
  var active = cookies.get('activeLengua');
  var examActive = JSON.parse(active)
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