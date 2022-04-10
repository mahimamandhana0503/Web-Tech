import Campus from './Campus'; 
import React from 'react';
import * as ReactDOM from 'react-dom';
import {Map} from '@esri/react-arcgis';

function App() {
 ReactDOM.render(
  <Map /> ,
  document.getElementById('container')
 );// ReactDOM.render()
}// App()

export default (props) => (
    <Map style={{ width: '70vw', height: '90vh' }}
        viewProperties={{
            center: [-118.28538,34.025],
            zoom: 14
        }}>
        <Campus />
    </Map>
)