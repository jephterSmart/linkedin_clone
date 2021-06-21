import {makeStyles} from '@material-ui/core/styles';

import NavigationItem from './NavigationItem';
const useStyles = makeStyles(theme => ({
    root:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
}))
const Navigation = ({navList}) => {
    const classes = useStyles();
    return( <div className= {classes.root}>{navList.map((navItem) => 
            <NavigationItem key={navItem.path} 
            path={navItem.path} icon={navItem.icon}
            text = {navItem.text}/>)}
            </div>)
} 
export default Navigation;