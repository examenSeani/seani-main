import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'cookies'
import data from "../assets/json/Examen_PensaAnlitico.json";
import { useDispatch, useSelector } from "react-redux";
import { accionTest, accionTipe } from "../redux/accion";
import { useStylesLengua } from "../assets/style-js";
import Pagination from "@material-ui/lab/Pagination";
import Pagina1 from "../components/Exam/Pregunta1";
import Head from "next/head";

const exam = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStylesLengua();
  const alumno = useSelector(state => state.alumno)

  useEffect(() => {
    dispatch(accionTest(true));
    dispatch(accionTipe("Pensamiento analítico"));
    return () => {
      dispatch(accionTest(false));
      dispatch(accionTipe(""));
    };
  }, []);

  const handleChange = (event, value) => {
    router.push(`/exam?page=${value}`);
  };

  function elegir(numero) {
    if (numero <= 0) {
      return false;
    }
    if (numero > 90) {
      return false;
    }
    return (
      <Pagina1
        dtajs={data[parseInt(numero)]}
        dataAlumno={alumno?.data?.test ? alumno?.data?.test : []}
        todos={alumno?.data}
        posision={numero}
      />
    );
  }

  return (
    <div>
      <Head>
        <title>SEANI | Pensamiento analítico</title>
      </Head>
      {elegir(parseInt(router.query.page))}

      {/* Aqui esta la barra de navegacióntre preguntas */}
      {/* <div className={classes.root}>
        <Pagination
          className=" transparent center-align"
          count={data.length - 1}
          defaultPage={1}
          page={parseInt(router.query.page)}
          color="primary"
          onChange={handleChange}
        />
      </div> */}
      
    </div>
  );
};

export default exam;

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx?.req, ctx?.res);

  var isSesion = cookies.get('user');
  var active = cookies.get('activeExam1');
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