import {VictoryPie, VictoryChart, VictoryAxis, VictoryTheme} from 'victory'

export default function Pie({classData}){
    const data = []
    for(const [key, value] of Object.entries(classData)){
        data.push({x: key, y: value})
    }

    return (

        <VictoryPie
            data={data}
            colorScale="qualitative"
        />
    )
}