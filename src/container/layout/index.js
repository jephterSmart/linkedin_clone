 

 import {AppBar,Toolbar,Grid,TextField,InputAdornment, Card, Fade, Typography, CardContent, Button,
     IconButton} from '@material-ui/core';
 import {makeStyles} from '@material-ui/core/styles'
 import {Home,SupervisorAccount,BusinessCenter,Sms,Notifications,Apps, Search, MoreHoriz, Cancel, List, Add} from '@material-ui/icons';


 
 import Navigation from '../../components/Navigation';
 import NavigationItem from '../../components/Navigation/NavigationItem';

 import personImage from '../../images/profile.jpg';
import Messages from '../messages';
import { useState } from 'react';
const useStyles = makeStyles(theme => ({
   personPic:{
      width: props => props.width ? props.width :'24px',
      height:props => props.width ? props.width :'24px',
      textAlign:'center',
      borderRadius:'50%',
      '&>img':{
         width:'100%',
         maxWidth:'100%',
         height:'100%',
      }
   },
   gridItem:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
   },
   logo:{
      color:theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius,
      width: 40,
      height:40,
      textAlign:'center',
      fontSize:34,
      lineHeight: 1.2,
      marginRight: 12
   },
   toolbar:{
      width: '80%',
      margin:'auto',
      paddingLeft: 0,
      paddingRight:0,
      display:'flex',
      justifyContent:'space-between',
      paddingBottom:0
   },
   borderLeft:{
      borderLeft: '1px solid #ddd'
   },
   root:{
      paddingBottom:0,
      boxShadow: 'none',
      
   },
   content:{
      margin:'auto',
      marginTop: 70,
      width:'85%',
      textAlign: 'center',
      '&>div':{
         paddingBottom: 12,
         verticalAlign: 'baseline'
      },
      position: 'relative',
   }
}))
const PersonPic = (props) => {
   const classes = useStyles(props)
   return (<div className={classes.personPic}>
      <img src={personImage} alt='user ' />
   </div>)
}
const useMeStyles = makeStyles(theme => ({
   card:{
      width: 280,
      position: 'absolute',
      top: 72,
      left: -148,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
   },
   topBar:{
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      marginBottom:0,
      paddingBottom: 0,

   },
   btn:{
      textTransform: 'none',
      borderRadius: 12,
   },
   cardContent:{
      borderBottom: '1px solid #ddd',
      '&>header':{
         fontWeight: 'bold',
         color: 'black'
      },
      '&>ul':{
         margin:'4px -40px',
      },
      '& li':{
         listStyle: 'none',
         width: '100%',
         color: theme.palette.text.secondary,
         cursor:'pointer',
         padding: '8px 0px',
        
         marginRight:0,
      },
      '& li:hover':{
         textDecoration: 'underline'
      }
   },
   cnt:{
      cursor: 'pointer',
      width: '100%',
      color: theme.palette.text.secondary,
      padding:'8px 16px',
      paddingBottom: '8px !important',
      margin:0,
      '&:hover':{
         textDecoration:'underline',
      }
   }

}))
const OpenMe = (props) => {
   const classes = useMeStyles(props);
   return(
      <Fade in={props.open}>
      <Card raised={true} className={classes.card}>
         
            <CardContent className={classes.topBar}>
               <PersonPic width='50px'/>
               <div style={{marginLeft: 10}}>
                  <Typography component='strong' variant='h6'>Uzezi Oghenekaro</Typography>
                  <Typography>Full stack web developer at Loctech Nigeria Limited</Typography>
               </div>
               
               
            </CardContent>
            <CardContent className={classes.cardContent}>
            <Button variant='outlined' className={classes.btn} fullWidth
               size='small'>View profile</Button>
            </CardContent>
            <CardContent className={classes.cardContent}>
               <header>Account</header>
               <ul>
                  <li>Settings &amp; Privacy</li>
                  <li>Help</li>
                  <li>Language</li>
               </ul>
            </CardContent>
            <CardContent className={classes.cardContent}>
            <header>Manage</header>
               <ul>
                  <li>Posts &amp; Activity</li>
                  <li>Job Posting Account</li>
                 
               </ul>
            </CardContent>  
            <CardContent className={classes.cnt}>
               Sign Out
            </CardContent>
      </Card>
      </Fade>
   )
}
const useWorkStyles = makeStyles(theme => ({
   modal:{
      
      borderTopRightRadius:0,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius:0,
      width:'29vw',
      marginTop:1,
      position: 'absolute',
      left:'70vw ',
      height: '628px',
      backgroundColor:theme.palette.background.paper,
      tabIndex: 1,
   },
   backdrop:{
      minWidth: '100vw',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(10,10,10,0.75)',
      position: 'fixed',
      top:'65px',
      zIndex: 10000000000000000,
      left:0,
      visibility: props => props.open? 'visible' : 'hidden'
   }
   ,card:{
      margin:'12px',
      marginRight: '12px !important',
      padding:'8px 0px',
      border: '1px solid #ddd',
      borderRadius: 8,
      clear:'both',
      '&>div' :{
         display:'flex',
         flexDirection: 'column',
      },
      '&>div>div':{
         display:'flex',
         alignItems:'center',
         justifyContent:'space-around',

      },
      "&>h6":{
         fontSize: '1.1rem',
         width:'100%',
         borderBottom:'1px solid #ddd',
         padding: '12px',
         margin:'12px 0px'
      },
      '&>ul':{
         listStyle:'none',
         marginLeft:'-38px',
      },
      '& li:last-child':{
         borderBottom: '1px solid #ddd',
         paddingBottom: 12,
      },
      '& li':{
         width: '100%',
         cursor:'pointer',
         textAlign: 'left',
         padding: '8px',
         
      },
      '& li:hover':{
         textDecoration: 'underline',
      },
      "& p":{
         textAlign:'left',
         padding: '8px'
      }
   },
   closeBtn:{
      float: 'right'
      ,margin: '12px',

   }
}));
const Work = (props) => {
      const classes = useWorkStyles(props);
   return (
      <div className={classes.backdrop}  onClick={props.handleClose}>
         <div className={classes.modal}>
            <Fade in={props.open}>
           <div>
               <IconButton disableRipple onClick={props.handleClose} className={classes.closeBtn}>
                     <Cancel />
               </IconButton>
            <div style={{height:'540px', overflow:'auto' ,clear:'both'}}>
            <div className={classes.card}>
                  <h6>Visit More LinkedIn Products</h6>
                  <div>
                     <div>
                     <NavigationItem text="Post a job" icon ={<List style={{color:'blue'}}/>} />
                     <NavigationItem text="Post a job" icon ={<List style={{color:'blue'}}/>} />
                     <NavigationItem text="Post a job" icon ={<List style={{color:'blue'}}/>} />
                     <NavigationItem text="Post a job" icon ={<List style={{color:'blue'}}/>} />
                     </div>
                     <div>
                     <NavigationItem text="Post a job" icon ={<List style={{color:'blue'}}/>} />
                     <NavigationItem text="Post a job" icon ={<List style={{color:'blue'}}/>} />
                     <NavigationItem text="Post a job" icon ={<List style={{color:'blue'}}/>} />
                     <NavigationItem text="Post a job" icon ={<List style={{color:'blue'}}/>} />
                     </div>
                  </div>
               </div>
               <div className={classes.card}>
                  <h6>LinkedIn Business Services</h6>
                  <ul>
                     <li>
                        <strong>Talent Solutions</strong>
                        <br />
                        <span>Find and Attract people</span>
                     </li>
                     <li>
                        <strong>Talent Solutions</strong>
                        <br />
                        <span>Find and Attract people</span>
                     </li>
                     <li>
                        <strong>Talent Solutions</strong>
                        <br />
                        <span>Find and Attract people</span>
                     </li>
                     <li>
                        <strong>Talent Solutions</strong>
                        <br />
                        <span>Find and Attract people</span>
                     </li>
                     <li>
                        <strong>Talent Solutions</strong>
                        <br />
                        <span>Find and Attract people</span>
                     </li>
                     <li>
                        <strong>Talent Solutions</strong>
                        <br />
                        <span>Find and Attract people</span>
                     </li>
                  </ul>
                  <p>Create a company page <Add /> </p>
               </div>
               
            </div>
            </div>
            </Fade>
         </div>
      </div>
     
   )
}
 function Layout({children}){
    const classes = useStyles();
    const [openWork,setOpenWork] = useState();
    const [openMe,setOpenMe] = useState();
    const NavItems = [
       {path: '/feeds',icon:<Home />,text:"Home"},
       {path: '/network',icon:<SupervisorAccount />,text:"My Network"},
       {path: '/jobs',icon:<BusinessCenter />,text:"Jobs"},
       {path: '/messages',icon:<Sms style={{transform:'rotateY(180deg)'}}/>,text:"Messaging"},
       {path: '/notifications',icon:<Notifications style={{transform:'rotateZ(30deg)'}}/>,text:"Notifications"},

    ]
   
    const toggleWork = () => {
         setOpenWork(prev => !prev)
    }
    const toggleMe = () => {
       setOpenMe(prev => !prev);
    }
    return (<>
       <AppBar component='header' className={classes.root}  >
         <Toolbar component={Grid} className={classes.toolbar} variant='dense'>
            
            <Grid item className={classes.gridItem}>
               <div className={classes.logo}>in</div>
               <TextField variant='outlined' placeholder='Search' type='search'
               InputProps={{
                  startAdornment: <InputAdornment position='start'>
                     <Search/>
                  </InputAdornment> 
               }}
               size='small'
               />
               
            </Grid>
            <Grid component='nav' item className={classes.gridItem}>
                  <Navigation navList={NavItems} />
                  <div style={{position:'relative'}}>
                     <NavigationItem dropdown icon={<PersonPic />} text='Me' callback={toggleMe}/>
                     <OpenMe open ={openMe}/>
                  </div>
            </Grid>
            <Grid item className={classes.gridItem + ' '+ classes.borderLeft}>
               <NavigationItem dropdown icon={<Apps />} text="Work" callback={toggleWork} />
              
               <div>Try Premium for free</div>
            </Grid>
         </Toolbar>        
       </AppBar>
       <main className={classes.content}>
         
            <Work open={openWork} handleClose={toggleWork}/>
        
          <div>Develop new skills  Millions of members use LinkedIn Learning. Unlock your free access today. Ad 
             <MoreHoriz />
          </div>
          {children}
          <Messages />
       </main>
       </>
    )
 }
 export default Layout;