import { Dimmer } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading({ loader }) {
    
    return (
        <Dimmer active={loader} style={{ position: "fixed", opacity: 1 }}>
            <CircularProgress size={130} />
        </Dimmer>
    )
}
Loading.propTypes = {
    loader: PropTypes.bool
}

