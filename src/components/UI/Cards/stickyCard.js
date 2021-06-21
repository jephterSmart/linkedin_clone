
import {makeStyles} from '@material-ui/core/styles'
import {useEffect,useRef} from 'react';

const useStyles = makeStyles({
    sticky:{
        position: 'fixed',
        top: '65px',
        marginTop: 0,
       
        
    }
})
const StickyCard = ({children,...rest}) => {
    const stickyRef = useRef(null);
    const classes = useStyles();
    useEffect(()=> {
        
        let rectTop = stickyRef.current.getBoundingClientRect().top;
        let rectWidth = stickyRef.current.getBoundingClientRect().width;
        const tmp = stickyRef.current.cloneNode(true);
        tmp.id = 'tmp'
        tmp.style.visibility = 'hidden';
        function scrollHandler() {
            if (window.scrollY + 60 > rectTop ) {
              stickyRef.current.parentNode.appendChild(tmp);
                if(!stickyRef.current.classList.contains(classes.sticky)){
                    stickyRef.current.classList.add(classes.sticky);
                    stickyRef.current.style.width = `${rectWidth}px`
                }
                    
            } else {
              stickyRef.current.parentNode.children.item(
                  item => {
                      if(item.id === 'tmp'){
                        stickyRef.current.parentNode.removeChild(item);
                        console.log(item);
                      }
                      
                  }
              )
              stickyRef.current.classList.remove(classes.sticky)
            }
        }
        console.log(stickyRef)
        if(stickyRef.current)
        window.addEventListener('scroll',scrollHandler );
        return () => {
            window.removeEventListener('scroll',scrollHandler);
        }
     },[stickyRef,classes.sticky])
    return(
        <div ref={stickyRef} {...rest}>
            {children}
        </div>
    )
}

export default StickyCard;

