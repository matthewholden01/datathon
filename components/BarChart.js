import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel} from 'victory'
import dash from '../styles/dashboard.module.css'

export default function BarChart({ageData}){
    const data = []
    for(const [key, value] of Object.entries(ageData)){
        data.push({age: key, numPar: value})
    }
    return (
        <VictoryChart
            animate={{
                duration: 2000,
                onLoad: {duration: 1000}
            }}
            style={{background:{fill: "white"}}}
            domainPadding={20}
            padding={50}
        >
            <VictoryLabel
                style={dash.goodText}
                text="Age Groups"
                x={180}
                y={20}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x}`)}
            />
            <VictoryAxis
                tickValues={[1,2,3,4,5,6]}
                tickFormat={["15-18", "18-20", "20-22", "22-25", "25-30", "30-50"]}
            />
            <VictoryBar
                style={{data: {fill: "purple", stroke: "black", strokeWidth: "3"}}}
                data={data}
                x="age"
                y="numPar"
            />

        </VictoryChart>
    )
}