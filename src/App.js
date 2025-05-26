import Body from './component/Body';
import './App.css';
import { Provider } from 'react-redux';
import appstore from './utils/appstore';

function App() {
  return (
    <Provider store={appstore}>
       <Body/> 
    </Provider>
  
    
  )
}

export default App;
