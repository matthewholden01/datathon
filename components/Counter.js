import React from 'react';
import utils from '../styles/utils.module.css'
export default class Counter extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                currPercent : 0
            }
        }
        componentDidMount() {
            let currPercent = 0
            this.interval = setInterval(() => {
                currPercent += 1
                currPercent = (currPercent > this.props.final) ? Math.round(this.props.final) : currPercent
                this.setState({
                    currPercent: currPercent
                });
            }, 120);
        }
        componentWillUnmount() {
            clearInterval(this.interval)
        }
        render()
        {
            return (
                <div className="col-2 col-sm-4" style={{paddingTop: 40}}>
                    <div className={this.props.style}>
                        <div className={this.props.content}>
                            <span className={this.props.value}>{this.state.currPercent}%</span>
                            <h3>{this.props.years}</h3>
                        </div>
                        <div className={this.props.icon}>
                            <i></i>
                        </div>
                    </div>
                </div>

            )
        }
    }
