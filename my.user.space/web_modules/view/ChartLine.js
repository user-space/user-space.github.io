import React from 'react';
import ReactDOM from 'react-dom';

var ChartLine = ({lineName, children}) =>
    <div id={lineName} className="ct-chart"> </div>

class ChartLineClass extends React.Component {
    componentDidMount() {
        const values = this.props.series || [287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944];

        const dataColouredRoundedLineChart = {
          labels: this.props.labels || ['\'06','\'07','\'08','\'09', '\'10', '\'11', '\'12', '\'13', '\'14','\'15'],
          series: [
            values,
            values.map(v=>v*1.33),
            values.map(v=>v*.8)
          ]
        };

        const optionsColouredRoundedLineChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 10
          }),
          axisY: {
              showGrid: true,
              offset: 40
          },
          axisX: {
              showGrid: false,
          },
          low: 0,
          high: 1300,
          showPoint: true,
          height: '230px'
        };


        var colouredRoundedLineChart = new Chartist.Line("#"+this.props.lineName, dataColouredRoundedLineChart, optionsColouredRoundedLineChart);

        // md.startAnimationForLineChart(colouredRoundedLineChart);

    }
    render() {
        return <ChartLine {...this.props}/>
    }
}

export default ChartLineClass
