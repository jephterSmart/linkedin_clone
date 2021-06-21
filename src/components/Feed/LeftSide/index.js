
import { Card, CardContent, ListItem, Typography,ListItemText,List, ListItemSecondaryAction, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Group } from "@material-ui/icons";

import personImage from '../../../images/profile.jpg';
import StickyCard from '../../UI/Cards/stickyCard';


const useStyles = makeStyles(theme => ({
    background:{
        background: 'linear-gradient(45deg, blue, green)',
        width: '100%',
        height: 60,
        position:'relative',
        left:0,
        top: 0,
        '&>div':{
            width: 80,
            height: 80,
            position: 'absolute',
            top: '50%',
            left: 'calc(50% - 40px)',
            backgroundColor:'transparent'
        },
        '& img':{
            width: '100%',
            height:'100%',
            maxWidth:'100%',
            borderRadius:'50%',
            border: '2px solid white',
        }
    },
    content:{
        marginTop:0,
        textAlign:'center',
        borderBottom:'1px solid #ddd' ,
        padding: '0px 0',
        
    },
   
}))

const LeftSide = () => {
    
    const classes = useStyles();
 
      
     
      

 
    return(
        <div  >
            <Card >

                <div className={classes.background}>
                    <div>
                        <img src={personImage} alt='user' />
                    </div>
                </div>
                <CardContent className={classes.content} style={{marginTop:'60px'}}>
                    <Typography component='strong' style={{fontWeight:'700', cursor:'pointer'}}>User Full Name</Typography>
                    <Typography style={{fontSize: 14}}>User Current Position</Typography>

                </CardContent>
                <CardContent className={classes.content} >
                    <List>
                        <ListItem component='a' button dense>
                            <ListItemText primary="Who viewed your profile" />
                            <ListItemSecondaryAction >46</ListItemSecondaryAction>
                        </ListItem>
                        <ListItem component='a' button dense>
                            <ListItemText primary="Views of your videos" color='secondary'/>
                            <ListItemSecondaryAction style={{color: 'blue'}} >36</ListItemSecondaryAction>
                        </ListItem>
                    </List>

                </CardContent>
                <CardContent className={classes.content} >
                <List style={{paddingTop:0,paddingBottom:0}}>
                        <ListItem component='a' button >
                            <ListItemText primary="Who viewed your profile" />
                            
                        </ListItem>
                        
                    </List>
  
                </CardContent>
                <CardContent className={classes.content} style={{paddingBottom:0}}>
                <List style={{paddingTop:0,paddingBottom:0,}}>
                        <ListItem component='a' button >
                            <ListItemText primary="My items" />
                            
                        </ListItem>
                        
                    </List>
  
                </CardContent>
            </Card>
            
            <StickyCard style={{marginTop:8}}>
                <Card>
                <CardContent className={classes.content} style={{borderBottom:'0px solid'}}>
                   <Typography >Recent</Typography> 
                    <List >
                        <ListItem button dense >
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                        <ListItem button dense>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                        <ListItem button dense>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                    </List>
                </CardContent>
                <CardContent className={classes.content} style={{borderBottom:'0px solid'}}>
                   <Typography >Groups</Typography> 
                    <List >
                        <ListItem button dense >
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                        <ListItem button dense>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                        <ListItem button dense>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                    </List>
                </CardContent>
                <CardContent className={classes.content} style={{borderBottom:'0px solid',textAlign:'left'}}>
                   <Typography >Events</Typography> 
                    <List >
                        <ListItem button dense >
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                        <ListItem button dense>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                        <ListItem button dense>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Oracle group" />
                        </ListItem>
                    </List>
                </CardContent>
                <CardContent className={classes.content} style={{paddingBottom:0}}>
                <List style={{paddingTop:0,paddingBottom:0,}}>
                        <ListItem component='a' button >
                            <ListItemText primary="Discover More" />
                            
                        </ListItem>
                        
                    </List>
  
                </CardContent>
                </Card>
            </StickyCard>
         
            
        </div>
    )
}
export default LeftSide;