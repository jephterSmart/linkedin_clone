import {ListItem, ListItemIcon} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import personImage from '../../images/profile.jpg';

const useStyles = makeStyles({
    image:{
        width: '40px',
        height: '40px',
        padding: '0px',
        borderRadius: '50%',
        '& img':{
            width: '100%',
            maxWidth: '100%',
        },
        '& img:hover':{
           display: 'none',
        },
        '&:hover':{
            background: '#ddd',
        },
        '&:hover>div:nth-child(3)':{
            display: 'inline-block',
            background: 'transparent',
        },
        '&>div:nth-child(3)':{
            display: 'none',
            borderRadius: 4,
            width: 30,
            height: 30,
            margin: '5px',
            border: '2px solid #999',
          
        },
        position: 'relative',
        
    },
    badge:{
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '2px solid white',
        backgroundColor: (props) => (!props.active ? `rgba(0,255,0,1) radial-gradient(circle, 
            rgba(255,255,255,1) 0%, rgba(255,255,255,1) 36%, rgba(0,255,0,1) 37%, rgba(0,255,0,1) 100%)`
            : 'green') ,
        position: 'absolute',
        bottom: -5,
        right: -5,
        
    },
    text:{
        display: 'inline-block',
        padding: '8px',
        borderBottom: '1px solid #ddd',
        flexGrow: 3,
        '& strong':{
            fontSize:'0.9rem',
            lineHeight:0.8,
            fontWeight: 600
        },
        '& p':{
            fontSize: '0.8rem',
            color: '#ddd',
            lineHeight:0.8
        },
        '&+div':{
            textAlign:'left',
            fontSize: '0.9rem',
            color: '#ddd'
        }
    },
    listItem:{
        minHeight: '50px',
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
    }
});
const Person = ({name,active}) => {
    const obj ={
        active
    }
    const classes = useStyles(obj);
    return (
        <div className={classes.image}>
            <img src={personImage} alt={`user- ${name}`} />
            <div className={classes.badge}></div>
            <div></div>
        </div>
    )
}
const Message = ({name,active,lastMessage,lastVisited}) => {
    const classes = useStyles();
    return (
        <>
            <ListItem button className={classes.listItem}>
                <ListItemIcon>
                    <Person name={name} active={active}/>
                </ListItemIcon>
                <div className={classes.text}>
                    <strong>{name}</strong>
                    <p>{lastMessage}</p>
                </div>
                <div>{lastVisited}</div>
            </ListItem>
            
        </>
    );
} 

export default Message;