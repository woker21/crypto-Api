import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css';
import { BrowserRouter} from 'react-router-dom';
import CriptoApi from './CriptoApi';

ReactDOM.render(

<BrowserRouter>
    <CriptoApi/>
</BrowserRouter>
  
  ,




  document.getElementById('root')
);