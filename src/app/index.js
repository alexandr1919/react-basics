import { useContext } from 'react';
import './App.css';
import AppLayout from './blocks/AppLayout';
import WelcomeMessage from './Pages/Settings/Blocks/WelcomeMessage';
import AppBar from './blocks/bar/AppBar';
import Settings from './Pages/Settings';
import { AppProvider } from './Provider/AppProvider';



function App() {
  // const isDarktheme = useContext(isDarkthemeContext);
  
  return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Settings/>
        </AppProvider>
      </AppLayout>    
  );
}

export default App;
