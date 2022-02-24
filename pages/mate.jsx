import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'cookies'
import { useDispatch, useSelector } from "react-redux";
import { accionTest, accionTipe } from "../redux/accion";
import Pagination from "@material-ui/lab/Pagination";
import { useStylesLengua } from 'assets/style-js'
import { Container } from "semantic-ui-react";
import data from "assets/json/examen_PensaMatematico.json";
import Maste from "components/Exam/Mat";
import Head from "next/head";


const mate = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStylesLengua();
  const alumno = useSelector((state) => state.alumno);

  useEffect(() => {
    dispatch(accionTest(true));
    dispatch(accionTipe("Pensamiento matemático"));
    return () => {
      dispatch(accionTest(false));
      dispatch(accionTipe(""));
    };
  }, []);
  const handleChange = (event, value) => {
    router.push(`/mate?page=${value}`);
  };

  function elegir(numero) {
    if (numero <= 0) {
      return false;
    }
    if (numero > 90) {
      return false;
    }
    return (
      <Maste
        dtajs={data[parseInt(numero)]}
        dataAlumno={alumno?.data?.matematico ? alumno?.data?.matematico : []}
        todos={alumno?.data}
        posision={parseInt(numero)}
      />
    );
  }

  return (
    <>
      <Head>
        <title>SEANI | Pensamiento matemático</title>
      </Head>
      <Container>
        {elegir(router.query.page)}

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

      </Container>
    </>
  );
};

export default mate;
export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx?.req, ctx?.res);
  var isSesion = cookies.get('user');
  var active = cookies.get('activeMat');
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