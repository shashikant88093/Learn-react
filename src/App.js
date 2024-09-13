import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className='Content'>
    <Outlet/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
