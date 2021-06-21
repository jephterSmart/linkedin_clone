import {makeStyles} from '@material-ui/core/styles';
import {ArrowDropDown} from '@material-ui/icons'
// import {NavLink} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    link:{
        textDecoration:'none',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        color: theme.palette.text.secondary,
        border: '2px solid transparent',
        '&:hover':{
            color: theme.palette.text.primary,
            
        },
        '&:active':{
            color: theme.palette.text.primary,
            borderBottomColor: (prop) => prop.dropdown? 'transparent': theme.palette.text.primary
        },
        padding:theme.shape.borderRadius ,
        marginLeft: 8,
        cursor:'pointer',
    },
    text:{
        verticalAlign:'baseline',
        fontSize:'0.8rem',
        lineHeight:'1.2rem',
        display:'flex',
        alignItems:'flex-end',
    }
}))
function NavigationItem({icon,text,path,dropdown,callback}){
    const obj ={
        dropdown:dropdown
    }
    const classes = useStyles(obj);
    return(
        <div path={path} className={classes.link} onClick={dropdown && callback}>
            <div>
                {icon}
            </div>
            <div className={classes.text}><span>{text}</span>{dropdown && <ArrowDropDown />}</div>
           
        </div>
    );
}
export default NavigationItem;