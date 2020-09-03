import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

const Pokemon = React.forwardRef(({ pokemonInfo }, ref) => {
    const classes = useStyles();
    console.log('pokemon', pokemonInfo)

    return (
        <Card ref={ref} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${pokemonInfo?.sprites?.other["official-artwork"]?.front_default}`}
                    title="Contemplative Reptile"
                />
                <CardContent >
                    <Typography variant="h5" component="h2" className={classes.alignCenter} >
                        {pokemonInfo.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.justifyContentSE}>
                {
                    pokemonInfo?.types?.map(type => (
                        <Typography key={`${pokemonInfo.id}-${type.type.name}`} variant="caption" display="inline" className={`${classes.itemType} ${classes[type.type.name]}`}>
                            {type.type.name}
                        </Typography>
                    ))
                }
            </CardActions>
        </Card>
    );
});

export default Pokemon;
