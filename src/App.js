import logo from './logo.svg';
import './App.css';
import Sidebar from './images/Sidebar.png'
import HomeFeed from './components/HomeFeed';
import DevicePreview from './components/DevicePreview';

function App() {
  return (
    <div className='container'>
     <img src={Sidebar} alt="Sidebar"/>
     <HomeFeed/>
     <DevicePreview/>
    </div>
    
  );
}

export default App;