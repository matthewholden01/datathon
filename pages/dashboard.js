import BarChart from "../components/BarChart";
import Pie from "../components/Pie";
import dash from "../styles/dashboard.module.css"
import utils from '../styles/utils.module.css'
import Counter from '../components/Counter'
import SlidingText from "../components/SlidingText";
import IconHolder from "../components/IconHolder";
import {Button, Carousel} from 'react-bootstrap'

export default function Dashboard({participantData}){
    var sumOfPeople = 0;
    for(var el in participantData.age){
        if(participantData.age.hasOwnProperty(el)){
            sumOfPeople += parseFloat(participantData.age[el]);
        }
    }
    return (
        <div style={{ background:'#f1f1f1'}}>
        <main style={{
            backgroundImage: "url('/background.png')", maxWidth: "100%"}} className={dash.slanted_edge}>
            <br/>
            <div className="container-fluid row justify-content-center">

                <img src="logo.png"/>

            </div>
        </main>
        <div className="container-fluid justify-content-center" style={{paddingBottom: 125, paddingTop: 150, width: '80%'}}>
            <div className="row justify-content-around">
                <div >
                    <SlidingText />
                </div>
                <div className="col">
                    <div className="row justify-content-center">
                        <h2 className={dash.goodText}>
                            Data Doesn't discriminate!
                        </h2>
                    </div>
                    <hr style={{width: 800}}/>
                    <div className="row justify-content-center text-wrap">
                        <h6 style={{width: 600}}>
                            The TAMU datahon welcomes everyone to join the world of Data Science! Whether you are just entering high school,
                            finishing your doctoral thesis, or you are sending your kids off to college yourself it is never too late to start
                            your adventure into big data!
                        </h6>
                    </div>
                    <div className="row justify-content-center align-items-baseline" style={{}}>
                        <div className="col-3" style={{ height: 250, marginTop: 30,marginRight: 200}}>
                            <Pie classData={participantData.class}/>
                        </div>
                        <div className="col-3" style={
                        {
                            height: 200,
                            backgroundColor: "white",
                            borderStyle: "solid",
                            borderColor:"black",
                            borderWidth:"2px",
                            padding: 0,
                            boxShadow: "-15px 15px 0 0 purple"}}>
                        <BarChart ageData={participantData.age}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container justify-content-center" style={{ paddingTop:30}}>
            <div className="row justify-content-center" style={{paddingBottom: 30}}>
                <h1 className={dash.goodText}>A Hackathon for Anyone and Everyone</h1>
            </div>
            <hr/>

            <div className="row justify-content-center">
                <Counter final={(participantData.experience['0'] / sumOfPeople) * 100} years={'< 1 Year'} val = {utils.countervalue} content={utils.countercontent} icon ={utils.countericon} style={`${utils.counter}`}/>
                <Counter final={(participantData.experience['1'] / sumOfPeople) * 100} years={'1 Years'} val = {utils.countervalue} content={utils.countercontent} icon ={utils.countericon} style={`${utils.counter} ${utils.blue}`} />
                <Counter final={(participantData.experience['2'] / sumOfPeople) * 100} years={'2 Years'} val = {utils.countervalue} content={utils.countercontent} icon ={utils.countericon} style={`${utils.counter} ${utils.purple}`}/>
                <Counter final={(participantData.experience['3'] / sumOfPeople) * 100} years={'3 Years'} val = {utils.countervalue} content={utils.countercontent} icon ={utils.countericon} style={`${utils.counter} ${utils.ice}`}/>
                <Counter final={(participantData.experience['4'] / sumOfPeople) * 100} years={'4+ Years'} val = {utils.countervalue} content={utils.countercontent} icon ={utils.countericon} style={`${utils.counter} ${utils.orange}`}/>
            </div>
            </div>
        <div className="container-fluid justify-content-center text-center" style={{padding:100}}>
            <div className={dash.goodText}style={{paddingBottom: 100}}>
                <h1>A Variety of Technical Experience and Skills</h1>
                <br/>
                <hr/>
            </div>
            <div className="row">
                <div className={`col ${utils.animP}`}>
                <IconHolder icon={'/icons/Excel.svg'} style={utils.moving}/>
                </div>
                <div className={`col ${utils.animP}`}>
                    <IconHolder icon={'/icons/Python.svg'}/>
                </div>
                <div className={`col ${utils.animP}`}>
                    <IconHolder icon={'/icons/R.svg'}/>
                </div>
                <div className={`col ${utils.animP}`}>
                    <IconHolder icon={'/icons/Keras.svg'}/>
                </div>
                <div className={`col ${utils.animP}`}>
                    <IconHolder icon={'/icons/full_stack.svg'}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className={`col ${utils.animP2}`}>
                    <IconHolder icon={'/icons/SQL.svg'}/>
                </div>
                <div className={`col ${utils.animP2}`}>
                    <IconHolder icon={'/icons/NumPy.svg'}/>
                </div>
                <div className={`col ${utils.animP2}`}>
                    <IconHolder icon={'/icons/Pandas.svg'}/>
                </div>
                <div className={`col ${utils.animP2}`}>
                    <IconHolder icon={'/icons/Pytorch.svg'}/>
                </div>
                <div className={`col ${utils.animP2}`}>
                    <IconHolder icon={'/icons/cloud.svg'}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className={`col ${utils.animP3}`}>
                    <IconHolder icon={'/icons/Scikit-learn.svg'}/>
                </div>
                <div className={`col ${utils.animP3}`}>
                    <IconHolder icon={'/icons/dev_ops.svg'}/>
                </div>
                <div className={`col ${utils.animP3}`}>
                    <IconHolder icon={'/icons/Tableau.svg'}/>
                </div>
                <div className={`col ${utils.animP3}`}>
                    <IconHolder icon={'/icons/TensorFlow.svg'}/>
                </div>
                <div className={`col ${utils.animP3}`}>
                    <IconHolder icon={'/icons/MATLAB.svg'}/>
                </div>
            </div>
        </div>
        <div className="jumbotron" style={{paddingTop: 50}}>
            <div className="row justify-content-center" style={{paddingBottom: 20}}>
                <h3>Click the Button below to get Workshop, Team, and project Recommendations</h3>
            </div>
            <div className="row justify-content-center">
                <Button>Click me!</Button>
            </div>
        </div>
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:5000/participant_data')
    const participantData = await res.json()

    return { props: { participantData } }
}
