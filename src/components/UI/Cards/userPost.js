import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Collapse,IconButton,
    Typography,Avatar, Divider, TextField,} from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import personImage from '../../../images/profile.jpg'
import { Add, EmojiEmotionsOutlined, PanoramaOutlined, Send, Share, Sms, ThumbUp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 8,
    padding: '8px',
    paddingBottom: 24
  },
  img:{
    borderRadius: '50%',
    width: 40,
    height: 40
  },
  action:{
      display:'flex',
      justifyContent:'space-between',
      alignItems: 'center',
      padding: '2px 8px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    display: 'inline-block',
    fontSize: '12px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  act:{
    cursor: 'pointer',
    '&:hover, &:active':{
     backgroundColor: theme.palette.text.secondary, 
     borderRadius: 8  
    },
    display:'flex',
    fontSize: '1rem',
    padding: '8px 4px',
    alignItems: 'center',
  },
  acts:{
    display: 'flex',
    padding: '8px 0',
    width: '100%',
    justifyContent: 'flex-start'
  },
  top:{
    display:'flex',
    width: '100%',
    '& img':{
        borderRadius: '50%',
        width: 40,
        height: 40
    },
    '& .MuiOutlinedInput-root':{
        borderRadius: 16,
        height: 40,
        border: '1px solid #DDD'
    },
    justifyContent: 'space-between'
    
},
}));
const Action = ({text,icon}) => {
    const classes = useStyles()
    return (<div className={classes.act}>
            <span>{icon}</span> <span>{text}</span>
    </div>)
}

export default function RecipeReviewCard({action,image,information}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
        {action && (
            <>
                <div className={classes.action}>
                 <div><strong>Shedrack Ajaegbu</strong> <span>loves this </span> </div>
                 <IconButton aria-label="actions">
                     <MoreVertIcon />
                 </IconButton>
                </div>
                <Divider />
            </>
        )}
        
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={personImage} alt='user' className={classes.img} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" style={{color:'blue'}}>
            <Add/> <Typography>Follow</Typography>
          </IconButton>
        }
        title="User Name (Jerry Lee) . 2nd"
        subheader="About- COO at loctech | looking for a job in the tech"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {
              information.length > 140 ?( 
                  <>
                  <span>{information.substring(0,140)} </span>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                      {information.substring(140)}
                  </Collapse>
                    {!expanded &&(
                        <IconButton className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                disableRipple> ... see more </IconButton>
                    ) }
              </>): <span>{information} </span>
          }
        </Typography>
      </CardContent>
      {image &&  <CardMedia
        className={classes.media}
        image={image.src}
        title={image.title}
      />}
      
      <div>
          Efects and likes
      </div>
      
      <Divider />
      <CardActions disableSpacing className={classes.acts}>
       
          <Action icon={<ThumbUp style={{transform: 'rotateY(180deg)'}}  />} text="Like"/>
   
        
        <Action icon={<Sms style={{transform: 'rotateY(180deg)'}}  />} text="Comment"/>
       
        
            <Action icon={<Share  />} text="Share"/>
        
            <Action icon={<Send />} text="Send"/>
     
      </CardActions>
      <div className={classes.top}>
            <img src={personImage} alt='user' />
            <TextField placeholder=" Add a comment..." 
                InputProps={{
                    endAdornment: (
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <IconButton>< EmojiEmotionsOutlined /></IconButton>
                            <IconButton>< PanoramaOutlined /></IconButton>
                        </div>
                    )
                }}
                variant='outlined'
                style={{borderRadius: 16,height: 30 }}
                fullWidth
            />
        </div>
      
    </Card>
  );
}