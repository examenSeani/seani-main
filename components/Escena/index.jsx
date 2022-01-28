import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useStylesEscene} from 'assets/style-js'
import PropTypes from 'prop-types'

export default function Escene({ title, itemProblem }) {
    const classes = useStylesEscene();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2" style={{fontSize: 35}}>
                    {title}
                </Typography>
                {itemProblem.map((poste, index) => (
                    <Typography style={{fontSize: 25, marginBottom: 2}} color="textSecondary" key={index}>
                        {poste}
                    </Typography>
                ))}

            </CardContent>
        </Card>
    )
}


Escene.propTypes = {
    title: PropTypes.string,
    itemProblem: PropTypes.array
}

Escene.defaultProps = {
    title: "En caso de que te encuentres en estas situaciones:",
    itemProblem: [
        "Conexión a internet muy inestable.",
        "Cerrar la pestaña por error.",
        "Se termine la batería a tu celular.",
        "Se interrumpa la energía eléctrica.",
        "Se apague tu dispositivo."
    ]
}



