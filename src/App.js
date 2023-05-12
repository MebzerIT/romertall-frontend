
import './App.css';

import Header from './components/Header';

import Footer from './components/Footer';
import ConvertionField from './components/ConvertionField';
import ConvertContainer from './containers/ConvertContainer';
import ShowHistory from './components/ShowHistory';
// import './assets/styles/osgCustom.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
      {/* <h1>Romerisk tall konvertering</h1> */}
        <div class="osg-grid osg-grid--gutter">
            <div class="osg-grid__column--6 ">
              <div class="osg-padding-3 osg-text--align-center osg-color-bg-blue-light">
                <ConvertContainer />
              </div>
            </div>
            <div class="osg-grid__column--6">
              <div class="osg-padding-3 osg-text--align-center osg-color-bg-blue-light">
                <ShowHistory/>
              </div>
            </div>
        </div>
      </div>
      <Footer />
  </div>
  );
}

export default App;
