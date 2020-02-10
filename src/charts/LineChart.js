import React, {useRef, useEffect, useState, Component} from "react";
import Chart from 'chart.js';

class LineChart extends Component {
    rand = Math.floor(Math.random() * 50)
    chartRef = React.createRef()
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "March" , 'Abril', 'Maio'],
                datasets: [
                    {
                        label: "Compras",
                        data: [1, 6, 7, 16, 32],
                    },
                    {
                        label: "Vendas",
                        data: [2, 7, 14, 22, 23],
                        backgroundColor: 'rgba(0,204,238,.4)',
                    },
                    {
                        label: "Ordens",
                        data: [3, 13, 21, 42, 55],
                        backgroundColor: 'rgba(120,0,240,.4)',
                    },
                    {
                        label: "Mensagens",
                        data: [5, 20, 35, 60, this.rand*.04],
                        backgroundColor: 'rgba(240,0,120,.4)',
                    },
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        console.log(Math.floor(Math.random() * 150));
        
        return (
            <div className="grafico">
                <canvas
                    ref={this.chartRef}
                />
            </div>
        )
    }
};

export default LineChart;
