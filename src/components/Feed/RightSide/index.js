import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Add, ArrowRightAlt, Info, MoreHoriz } from '@material-ui/icons';

import personImage from '../../../images/profile.jpg';
import StickyCard from '../../UI/Cards/stickyCard';

const useStyles = makeStyles({
    card:{
        padding:'8px',
    },

    feed:{
        display:'flex'
        ,width:'100%',
        justifyContent: 'space-between',
        paddingLeft: 8

    },
    follow:{
        display: 'flex',
        width: '100%',
        '& img':{
            width: 40,
            height: 40,
            borderRadius:'50%',
        },
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign:'left',
        marginBottom: 16,
        '& .MuiButton-root':{
            borderRadius: 16,
            textTransform: 'none'
        },
        '& p':{
            fontSize: '12px',
            display:'inline-block',
        }
    }
})
const FollowPerson = ({name,status}) => {
    const classes = useStyles();
    return (
        <div className={classes.follow}>
            <img src={personImage}  alt='Person to be followed'/>
            <div>
                <strong>{name}</strong> <br /> 
                <p >{status}</p>
                <Button disableRipple variant='outlined'><Add /> Follow </Button>
            </div>
        </div>
    )
}
const PromoteCard = ({title,text}) => {
    return(
        <Card style={{borderRadius: 0,boxShadow:'none'}}>
            <CardMedia 
            image={personImage} title={title}
            style={{padding:'32px 8px'}}/>
            <CardContent>
                <div style={{textAlign:'center',fontSize:'12px'}}>{title}</div>
                <p>{text}</p>
            </CardContent>
            <CardActions>
                <p style={{textAlign:'center', color:'blue',cursor:'pointer', width:'100%'}}>Learn more</p>
            </CardActions>
        </Card>
    )
}
const RightSide = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.feed}>
                <Typography variant='h6'>Add to your feed</Typography>
                <Info />
                </div>
                <CardContent>
                    <FollowPerson  name="Seyi Makinde" status="Governor of Oyo state. Redefining governance"/>
                    <FollowPerson  name="Seyi Makinde" status="Governor of Oyo state. Redefining governance"/>
                    <FollowPerson  name="Seyi Makinde" status="Governor of Oyo state. Redefining governance"/>
                   
                    
                </CardContent>
                <Typography component='p'>View all recomendation <ArrowRightAlt /> </Typography>
            </Card>
            <StickyCard style={{marginTop: 8}}>
                <Card>
                    <div className={classes.feed}>
                        <Typography variant='h6' >Promoted</Typography>
                        <MoreHoriz />
                    </div>
                    <div className={classes.feed}>
                        <PromoteCard title='Develop new Skill' 
                        text="Millions of users use linkedin today to unlock their potentials" />
                        <div 
                        style={{width: 2,backgroundColor:'#ddd',margin:'0px 4px',minHeight:'100%'}}>
                            
                        </div>
                        <PromoteCard title='Develop new Skill' 
                        text="Millions of users use linkedin today to unlock their potentials" />
                    </div>
                </Card>
                <div style={{textAlign:'center', marginTop: 16}}>
                    <a href='#le' style={{paddingRight: 24, textDecoration:'none', color:'#777'}} >About</a> 
                    <a href='#me' style={{paddingRight: 24, textDecoration:'none', color:'#777'}}>Accessibility</a> 
                    <a href='#see' style={{paddingRight: 24, textDecoration:'none', color:'#777'}}>Help center</a> 
                    <br /> <br />
                    <a href='#le' style={{paddingRight: 24, textDecoration:'none', color:'#777'}}>Privacy &amp; Terms</a>
                    <a href='#me' style={{paddingRight: 24, textDecoration:'none', color:'#777'}}>Ad choices</a>
                    <br /> <br />
                    <a href='#see' style={{paddingRight: 24, textDecoration:'none', color:'#777'}}>Get the linkedin app</a> 
                    <a href='#le' style={{paddingRight: 24, textDecoration:'none', color:'#777'}}>More</a> 
                    
                    <br /><br />
                    
                </div>
                <div>Linkedin Corperation &copy; 2021</div>
            </StickyCard>
        </div>
    )

}
export default RightSide;