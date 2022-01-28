import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStylesEscene } from 'assets/style-js'


export default function Tipe({ items }) {
    const classes = useStylesEscene();
    return (
        <Card className={classes.toor} >
            <CardContent>
                {items.map((poste, index) => (
                    <Typography style={{fontSize: 25, marginBottom: 2}}color="textSecondary" key={index}>
                        {poste}
                    </Typography>
                ))}

            </CardContent>
        </Card>
    )
}

Tipe.propTypes = {
    items: PropTypes.array
}

Tipe.defaultProps = {
    items: [
        "Lógico / Matemáticas",
        "Comprensión lectora"
    ]
}
