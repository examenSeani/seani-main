import React,{useState} from 'react'
import MenuBar from 'components/Menu/Menu';
import { auth } from 'utils/firebase';
import { getInitial } from 'utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { accionUser, accionAlumno } from 'redux/accion';
import Loader from 'components/Loading'
const Layout = ({ children }) => {

    const [loader, setLoader] = useState(true);
    const dispatch = useDispatch();
    const user2 = useSelector(state => state.user?.uid)

    auth.onAuthStateChanged(async (currentUser) => {
        if (currentUser) {
            const { data } = await getInitial(currentUser.uid);
            dispatch(accionUser(currentUser));
            dispatch(accionAlumno({ data }));
            setLoader(false);
        } else {
            dispatch(accionUser(null));
            setLoader(false);
            //alert('Error obteniendo datos, revisa tu conexion a internet');
        }
    })

    return (
        <div>
            <Loader loader={loader}/>
            {user2 ? (<MenuBar />) : null}
            {children}
        </div>
    )
}

export default Layout
