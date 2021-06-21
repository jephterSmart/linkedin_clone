
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Layout from './container/layout';
import Feeds from './container/feeds';

const theme = createMuiTheme({
  palette:{
    background: {
      default:'#ddd',
      paper: '#fff'
    },
    primary:{
      main:'#fff'
    },
    secondary:{
      main:'#3f51b5'
    }
  },
  action:{
    focus:'rgba(0,0,200,0.8)',
    active:'rgba(0,0,200,0.8)'
  }
  
});
function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
        <Layout>
          <Feeds/>
        </Layout>
    </ThemeProvider>
  );
}

export default App;
