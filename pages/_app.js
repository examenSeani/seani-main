import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from 'redux/store'
import { SnackbarProvider } from "notistack";
import Layout from 'Layout/Layout'
import Loading from 'components/Loading'
import "materialize-css/dist/css/materialize.css";
import "semantic-ui-css/semantic.min.css";
import 'assets/styles/index.css'
import 'assets/styles/modules.css'


function MyApp({ Component, pageProps }) {
  const [onloading, setOnloading] = useState(false);
  useEffect(() => {
    window.onload = function () {
      //setTimeout(setOnloading(false), 6000)
      setOnloading(false)
    };
  }, []);
  return (
    <>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <Layout>
              <Loading style={{ display: "flex" }} loader={onloading} />
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </Provider>
    </>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
