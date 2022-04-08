import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const Campus = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {
            // Create a polygon geometry
            const polygon = {
                type: "polygon", // autocasts as new Polygon()
                rings: [
                    [-118.2873486, 34.02509955],
                    [-118.28538, 34.0205],
                    [-118.2865371, 34.020675],
					[-118.2813553, 34.01967449],
					[-118.281248, 34.02388946],
					[-118.282225, 34.02095992],
					[-118.2828092, 34.02191396],
					[-118.2895154, 34.02078771],
					[-118.2849683, 34.02561807],
                    [-118.2911194, 34.03259688]
                ]
            };

            // Create a symbol for rendering the graphic
            const fillSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [200,0,20, 0.25],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 1
                }
            };

            // Add the geometry and symbol to a new graphic
            const graphic = new Graphic({
                geometry: polygon,
                symbol: fillSymbol
            });
            setGraphic(graphic);
            props.view.graphics.add(graphic);
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);

    return null;

}

export default Campus;