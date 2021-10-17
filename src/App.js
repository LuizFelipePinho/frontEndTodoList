import './App.css';
import { Switch, Route, Router } from 'react-router';

import Header from './components/shared/Header/header'
import Footer from './components/shared/Footer/footer'
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home.js'
import VagaView from './pages/VagaView/VagaView';
import Edicao from './pages/Edicao/Edicao'

const App = () => {
  return (
      <div className="body">  
      <Header />
      <Switch> 
        <Route path="/" exact={true} component={Home}/>
        <Route path="/add" component={Cadastro}/>
        <Route path="/view/:id" component={VagaView}/>
        <Route path="/edit/:id" component={Edicao}/>

      </Switch>
      <Footer></Footer>
      </div>
    );
}

export default App;
