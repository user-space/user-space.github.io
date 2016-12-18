import React from 'react';
import ReactDOM from 'react-dom';

var ChartPie = ({pieName, children}) =>
    <div id={pieName} className="ct-chart"> </div>

class ChartPieClass extends React.Component {
    componentDidUpdate() {
        const values = this.props.series || [62, 32, 6];
        var dataPreferences = {
            labels: this.props.labels || values.map(v=>v+'%'),
            series: values
        };

        var optionsPreferences = {
            height: '230px'
        };

        Chartist.Pie("#"+this.props.pieName, dataPreferences, optionsPreferences);
    }
    render() {
        return <ChartPie {...this.props}/>
    }
}
export default ChartPieClass
