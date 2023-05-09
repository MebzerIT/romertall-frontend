
import './App.css';

import Header from './components/Header';

import Footer from './components/Footer';
import ConvertionField from './components/ConvertionField';
import ConvertContainer from './containers/ConvertContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ConvertContainer/>
      <Footer/>
    </div>
  );
}

export default App;
