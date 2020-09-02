import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        margin: 10,
    },
    media: {
        height: 140,
        backgroundSize: 'contain',
        backgroundColor: 'rgba(0,0,0,0.1)'

    },
    justifyContentSE: {
        justifyContent: 'space-evenly',
        backgroundColor: 'red',
        padding: '0 15px',
        borderRadius: 10,
        fontWeight: 800,
    },
    alignCenter: {
        textAlign: 'center'
    },


});

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
                        <Typography key={`${type.type.name}-${pokemonInfo.id}`} variant="caption" display="inline">
                            {type.type.name}
                        </Typography>
                    ))
                }
            </CardActions>
        </Card>
    );
});

// const index = React.forwardRef(({ pokemonInfo }, ref) => {
//     return (
//         <div ref={ref}>
//             {pokemonInfo.name}
//         </div>
//     )
// })

export default Pokemon;
