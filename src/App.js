
import './App.css';
import Choose from './components/Choose/Choose';
import FAQ from './components/FAQ/FAQ';
import FirstPage from './components/FirstPage/FirstPage';
import Footer from './components/Footer/Footer';
import HappyClients from './components/HappyClients/HappyClients';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import OurTeam from './components/OurTeam/OurTeam';
import Practices from './components/Practices/Practices';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
{/* Header */}
<Header />

{/* First Page */}
<FirstPage />

{/* Lets Introduce ourself */}
<Introduction />

{/* Why choose us? */}
<Choose />

{/* Area of practices */}
<Practices />

{/* What saysour happy clients? */}
<HappyClients />

{/* Our Team */}
<OurTeam />

{/* FAQ */}
<FAQ />
{/* Subscribe our newsletter */}
<Subscribe />

{/* Footer */}
<Footer />

    </div>
  );
}

export default App;
