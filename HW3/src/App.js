import React from 'react';
import Campus from './Campus'; 
import * as ReactDOM from 'react-dom';
import {Map} from '@esri/react-arcgis';
import {Scene} from '@esri/react-arcgis';
import {WebMap,WebScene} from '@esri/react-arcgis';

function App() {
	ReactDOM.render(
	  <WebMap style={{width:'80vw',height:'80vh',border:'1px solid black',margin:'10px'}} id="0cdc7786dbb4485694ad88dd8a46d39b" /> ,
	  document.getElementById('container')
	);// ReactDOM.render()
}// App()

export default (props) => (
    <Map style={{ width: '70vw', height: '90vh' }}
        //mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            center: [-118.29,34.03],
            zoom: 10
        }}>
        <Campus />
    </Map>
)
