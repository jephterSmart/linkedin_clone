import { Card, CardContent } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import { Image } from "@material-ui/icons";

import personImage from '../../../images/profile.jpg'
import Post from '../../UI/Cards/userPost';

const useStyles = makeStyles(theme => ({
    top:{
        display:'flex',
        width: '100%',
        '& img':{
            borderRadius: '50%',
            width: 40,
            height: 40
        },
        '& input':{
            borderRadius: 16,
            flexGrow: 2,
            padding: '8px 16px',
            height:40,
            border: '1px solid '+ theme.palette.text.secondary
        }
    },
    actions:{
        display: 'flex',
        padding: '8px 0',
        width: '100%',
        justifyContent:'space-between'
    },
    action:{
        cursor: 'pointer',
        '&:hover, &:active':{
         backgroundColor: theme.palette.text.secondary, 
         borderRadius: 8  
        },
        display:'flex',
        marginRight: '24px',
        fontSize: '1.2rem',
        padding: '8px 4px'
    }
}));
const Action = ({text,icon}) => {
    const classes = useStyles()
    return (<div className={classes.action}>
            <span>{icon}</span> <span>{text}</span>
    </div>)
}
const CenterSection = () => {
    const classes = useStyles()
    return(
        <>
            <Card>
                <CardContent style={{paddingBottom:4}}>
                    <div className={classes.top}>
                        <img src={personImage} alt='user' />
                        <input placeholder='Start A post'/>
                    </div>
                    <div className={classes.actions}>
                        <Action icon={<Image />} text="Photo"/>
                        <Action icon={<Image />} text="Video"/>
                        <Action icon={<Image />} text="Event"/>
                        <Action icon={<Image />} text="Article"/>
                    </div>
                </CardContent>
            </Card>
            <Post  action image ={{src:personImage, title:'user'}}
            information={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor congue elit 
            id ornare. Ut bibendum euismod augue, quis rhoncus sem condimentum vel. Ut ac mi vitae velit tempor 
            egestas nec non dui. Aenean eu semper nulla, id consequat eros. Nam hendrerit ut nulla nec vestibulum.
             Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam 
             erat volutpat. Praesent at augue eget lectus blandit consequat nec non urna.

            Phasellus ac semper leo. Duis euismod nunc ac lobortis imperdiet. Aliquam vel lobortis tortor, 
            vitae laoreet nibh. Vestibulum vehicula sed nisl in accumsan. Nunc nec purus sit amet magna 
            bibendum sodales in ut libero. Fusce ac augue vitae justo vehicula volutpat ut vel nisl. 
            In urna nisl, elementum vel eros sit amet, ultrices vulputate orci. Praesent a mattis felis. 
            Donec maximus, odio a ornare ultricies, felis odio tempor massa, eget pharetra nisl massa nec 
            justo. Aenean pellentesque in nibh ut condimentum. Ut dictum faucibus aliquam. Maecenas vitae 
            est id sem tincidunt condimentum ac at felis. Nulla et turpis in nisi luctus blandit vel nec turpis.
            
            Nulla facilisi. Etiam at quam vel diam viverra consequat. Aenean cursus condimentum diam, eu
             lacinia elit interdum non. Suspendisse orci nisl, accumsan sed dictum non, maximus ut arcu. 
             Mauris commodo placerat enim non ornare. Ut eu rutrum dui. Quisque mollis a enim quis viverra. 
             Duis lacinia eleifend posuere. In convallis libero ac nibh molestie, a viverra mi posuere. 
             Mauris tincidunt vestibulum eleifend. Cras ut justo magna. Vestibulum elementum commodo convallis. 
             Aliquam varius ullamcorper odio, vel aliquet nunc elementum non. Donec gravida sapien sed sem varius 
             placerat. Morbi ut blandit odio. Phasellus vel eros lectus.
            
            Ut dapibus risus sed fermentum interdum. Duis sed lorem sed dolor blandit molestie vitae ut purus. 
            Maecenas neque ipsum, hendrerit eu gravida quis, congue et sem. Nulla varius velit quis est consequat, 
            a tempor nulla ultrices. Fusce eleifend aliquam urna nec dignissim. Curabitur tempor tortor eu orci 
            dignissim, quis pellentesque massa lobortis. Etiam convallis leo sit amet ex placerat aliquet. Nulla 
            facilisi. Duis sed elit dui. Nullam eleifend, dolor quis tincidunt fermentum, erat elit ullamcorper 
            ligula, sed luctus nibh libero at ligula. Fusce ut ante id turpis varius condimentum. Duis tincidunt 
            imperdiet commodo. Praesent porttitor sagittis dictum. Fusce ornare mi urna. Etiam vitae erat scelerisq
            ue, ullamcorper turpis nec, vestibulum tellus.
            
            Quisque sed orci justo. Phasellus euismod odio quis cursus malesuada. Aliquam malesuada id dui ac 
            laoreet. Praesent nec feugiat eros. Etiam eu fermentum eros, ac viverra risus. Lorem ipsum dolor sit 
            amet, consectetur adipiscing elit. Phasellus rhoncus posuere felis, a placerat nibh sollicitudin ac. 
            Sed nec pellentesque ante. Nulla luctus leo non malesuada maximus. Interdum et malesuada fames ac ante 
            ipsum primis in faucibus.`}/>
           <Post image={{src:personImage,title:'under'}} information={`
           look at me now, lok at me now, i gave you oall i got, what did i get treturn, Zero
           zero, zero, zero. i am always busy, but tonighjt i am going to allow nyou tocome through
                      `} />
        </>
    )
}
export default CenterSection;