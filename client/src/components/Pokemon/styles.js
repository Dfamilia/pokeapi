import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../globalStyles';

export const useStyles = makeStyles({
    root: {
        width: 200,
        margin: 15,
    },
    media: {
        height: 140,
        backgroundSize: 'contain',
        backgroundColor: 'rgba(0,0,0,0.1)'

    },
    justifyContentSE: {
        justifyContent: 'space-evenly',
    },
    alignCenter: {
        textAlign: 'center'
    },
    itemType: {
        padding: '0 15px',
        borderRadius: 10,
        fontWeight: 800,
        color: 'white'
    },
    ...colors,

});
