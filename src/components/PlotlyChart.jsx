import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist";

const PlotlyChart = () => {
    const plotRef = useRef(null);

    useEffect(() => {
        if (plotRef.current) {
            const trace1 = {
                mode: 'markers',
                type: 'scatter3d',
                x: [-5.9, -5.7, -5.6, -5.5, -6.3, -6.1],
                y: [-6.6, -5.0, -4.3, -5.2, -5.6, -5.3],
                z: [-2.3, -2.2, -2.6, -1.8, -1.1, -0.7],
                marker: { size: 5, color: 'blue' }
            };

            const layout = {
                margin: { t: 0, b: 0, l: 0, r: 0 },
                paper_bgcolor: 'black',
                scene: { 
                    bgcolor: 'black',
                    xaxis: { color: 'white' },
                    yaxis: { color: 'white' },
                    zaxis: { color: 'white' }
                }
            };

            Plotly.newPlot(plotRef.current, [trace1], layout, { displayModeBar: false });
        }
    }, []);

    return <div className="rounded-3xl w-full sm:h-[326px] h-[300px] flex justify-center items-center" ref={plotRef}></div>;
};

export default PlotlyChart;
