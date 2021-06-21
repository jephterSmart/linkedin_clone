import {makeStyles} from '@material-ui/core/styles'

import LeftSide from '../../components/Feed/LeftSide'; 
import CenterSection from '../../components/Feed/CenterSide';
import RightSide from '../../components/Feed/RightSide';


const useStyles = makeStyles({
    root:{
        width: '100%',
        display:'flex',
        justifyContent: 'center',
        alignItems:'flex-start',
        '&>div':{
            marginRight: 24
        },
        '&>div:last-child':{
            marginRight:0
        }
    },
    left:{
        width: '21.74%'
    },
    center:{
        width: '52.17%'
    },
    right:{
        width: '26.09%',
    }

}) 

const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.left}>
                <LeftSide />
            </div>
            <div className={classes.center}>
                <CenterSection />
            </div>
            <div className={classes.right}>
              <RightSide />
            </div>
        </div>
    )
}

export default Home;