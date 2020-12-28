import React from 'react'
import '../assets/css/LightBulb.css'
let isOn=true
class LightBulb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn:true
        }
    }
    switch() {
        if(this.state.isOn === true) {
          this.setState({isOn:false})
        }else if(this.state.isOn===false){
            this.setState({isOn:true})
        }
    }
    //render là 1 method ()
    render() {
        return (
            //dùng để viết html và các element lại vs nhau
            <div className>
                <img src={this.state.isOn==true ? 'off.jpg' : 'on.jpg'} alt="bulb"
                className = 'hinh'
                />
                <button className onClick={()=>this.switch()}>click me</button>
               
            </div>
        )
    }
}

export{LightBulb}

