import Navbar from './Resourses/Navbar'
import Content from './Resourses/Content'
import Team from './Resourses/Team'
import Contact from './Resourses/Contact'
import Footer from './Resourses/Footer'
import Video from './Resourses/Video'
import './App.css';
import InfoTiles from './Resourses/InfoTiles'

function App() {
  return (
    <div className="App">
      <Video/>
      <Navbar/>
      <Content/>
      <InfoTiles/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
