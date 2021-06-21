import {useState} from 'react';

import {Collapse,  IconButton, InputAdornment, List, Paper, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { BorderColor, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz, Search, Sort } from '@material-ui/icons';

import Message from '../../components/Message';
import personImage from '../../images/profile.jpg';

const useStyles = makeStyles({
    root:{
        position: 'fixed',
        zIndex: 100000000,
        tabIndex: 0,
        bottom: -12,
        right:0,
        maxHeight: 'calc( 100vh - 110px )',
        width: '21.74%',
        minWidth: '200px',
        padding:0,
        overflow:'hidden',
        
    },
    message:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ddd',
        padding: 8,
        marginBottom: (prop) => prop.open ? 12 : 0,
    }
    ,image:{
        width: 40,
        height: 40,
        padding: '0px',
        '&>img':{
            maxWidth: '100%',
            width: '100%',
        },
        '&>div':{
           
            border: '2px solid white',
            width: 20,
            height: 20,
            backgroundColor: 'green',
            borderRadius: '50%',
            position:'absolute',
            bottom:-5,
            right: -5,
        },
        position: 'relative',
        marginRight: 8,
        display: 'inline-block'
    },
    left:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    textfield:{
        backgroundColor:'#ddd',
        borderRadius: 4,
        position:'sticky',
        top: '0',
        left:0,
        zIndex: 50,
        margin: '0 8px',
        width: 'calc( 100% - 16px)',
        border: '0px solid'
    },
    collapse:{
        position: 'relative',
        paddingBottom:0,
        marginBottom:0,
       
    },
    list:{
        width: '100%',
        overflow: 'auto',
        marginTop: 10,
        marginBottom: 24,
        paddingTop: 2,
        paddingBottom: '2px',
        height: '448px',
        

    } 
});



const Messages = () => {
    
    const [open,setOpen] = useState(false)
    const classes = useStyles({open});
    return (
       <Paper elevation={4} className={classes.root}>
           <div className={classes.message}>
              <div className={classes.left}>
                    <div className={classes.image}>
                            <img src={personImage} alt='user' />
                            <div></div>
                    </div>
                    <strong>Messaging</strong>
               </div>
               <div>
                    <IconButton disableRipple  >
                        <BorderColor />
                    </IconButton>
                    <IconButton disableRipple >
                        <MoreHoriz />
                    </IconButton>
                    <IconButton disableRipple onClick={() => setOpen(prev => !prev)}>
                        {open ?<KeyboardArrowDown /> : <KeyboardArrowUp />}
                    </IconButton>
               </div>
           </div>
           
           <Collapse in={open} timeout="auto" unmountOnExit style={{paddingBottom:0,marginBottom:0,}}>
                
                <div className={classes.collapse}>
                    <TextField placeholder="Search messages" type='search'
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position='start'>
                                <Search />
                            </InputAdornment>
                        ),
                        endAdornment:(
                            <InputAdornment position='end'>
                                <Sort />
                            </InputAdornment>
                        )
                    }}
                    className={classes.textfield}
                    fullWidth size='small'
                    variant='outlined'/>
                   
                </div>
                <List className={classes.list}>
                        <Message name="Frank Ojiako" active 
                        lastMessage="You: You're Welcome" lastVisited ="Jun 9"/>
                        <Message name="Chris nwasiwe" active 
                        lastMessage="chris: sure man!!!" lastVisited ="Jun 8"/>
                        <Message name="Ibiniye Obikoya"  
                        lastMessage="You: You're Welcome" lastVisited ="Jun 6"/>
                        <Message name="Frank Ojiako" active 
                        lastMessage="You: You're Welcome" lastVisited ="Jun 9"/>
                        <Message name="Frank Ojiako" 
                        lastMessage="You: You're Welcome" lastVisited ="Jun 2"/>
                        <Message name="Frank Ojiako" active 
                        lastMessage="You: You're Welcome" lastVisited ="Jan 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 6"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 5"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 10"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 12"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 12"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="May 10"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="April 9"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 10"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're Welcome" lastVisited ="Mar 8"/>
                        <Message name="Frank Ojiako"  
                        lastMessage="You: You're  not Welcome" lastVisited ="Mar 9"/>
                    </List>
           </Collapse>
           
       </Paper>
    )
}

export default Messages;