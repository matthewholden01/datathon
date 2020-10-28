import dash from "../styles/dashboard.module.css";

export default function SlidingText(){

    return (
        <div className={dash.bigcontainer}>
            <div className={dash.perspectivetext}>
                <div className={dash.perspectiveline}>
                    <p className={dash.transP}></p>
                    <p className={dash.transP}>The Data</p>
                </div>
                <div className={dash.perspectiveline}>
                    <p className={dash.transP}>The Data</p>
                    <p className={dash.transP}>Revolution</p>
                </div>
                <div className={dash.perspectiveline}>
                    <p className={dash.transP}>Revolution</p>
                    <p className={dash.transP}>Is Waiting</p>
                </div>
                <div className={dash.perspectiveline}>
                    <p className={dash.transP}>Is Waiting</p>
                    <p className={dash.transP}>For You</p>
                </div>
                <div className={dash.perspectiveline}>
                    <p className={dash.transP}>For You</p>
                    <p className={dash.transP}></p>
                </div>
            </div>
        </div>
    )
}