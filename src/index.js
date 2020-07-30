import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo(){
  return (
    <div>
      Pagina de cadastro de video
    </div>
  )
}

ReactDOM.render(
 <BrowserRouter>
 <Switch>
 <Route path="/" component={App} exact/>
  <Route path="/cadastro/video" component={CadastroVideo} />
  <Route component={App} />
 </Switch>
 </BrowserRouter>,

  document.getElementById('root')
);