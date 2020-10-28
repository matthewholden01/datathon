import React from 'react'
import {VictoryPie, VictoryAnimation, VictoryLabel} from 'victory'

export default class Percentage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            percent: 0, data: this.getData(0)
        };
        console.log(this.props.experience)
    }
    componentDidMount() {
        let percent = 25;
        this.setStateInterval = window.setInterval (() => {
            percent += (Math.random() * 25);
            percent =(percent > this.props.data ) ? this.props.data : percent;
            this.setState({
                percent : percent , data: this.getData(percent)
            });
        }, 2000)
    }


    componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
    }
    getData(percent){
        return [{x: 1, y: percent}, {x:2, y: 100 - percent}]
    }

    render() {
        return (
            <div>
                <svg viewBox="0 0 400 400" width="100%" height="100%" >
                    <VictoryPie
                        standalone={false}
                        animate={{duration: 1000}}
                        width={400} height={400}
                        data={this.state.data}
                        innerRadius={120}
                        cornerRadius={25}
                        labels={() => null}
                        style={{
                            data: {fill: ({datum}) => {
                                const color = datum.y > 30 ? "green" : "purple";
                                return datum.x === 1 ? color : "transparent";
                                }}
                        }}
                    />
                    <VictoryAnimation duration={1000} data={this.state}>
                        {(newProps) => {
                            return (
                                <VictoryLabel
                                    textAnchor="middle" verticalAnchor="middle"
                                    x={200} y={200}
                                    text={`${this.props.experience} Years\n${Math.round(newProps.percent)}%`}
                                    style={{fontSize: 45}}
                                />
                            )
                        }}
                    </VictoryAnimation>
                </svg>
            </div>
        )
    }
}