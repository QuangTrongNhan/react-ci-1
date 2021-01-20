import React from 'react' 
import '../assets/css/DisplayItem.css'

class DisplayItem extends React.Component {
    render() {
        return (
            <div className="display-container">
                <div className="display-row">
                    <div className="display-col">
                        <img src="" alt=""/>
                    </div>
                    <div className="display-col">2</div>
                    <div className="display-col">3</div>
                    <div className="display-col">4</div>
                    
                </div>
                <div className="display-row">
                    <div className="display-col">1</div>
                    <div className="display-col">2</div>
                    <div className="display-col">3</div>
                    <div className="display-col">4</div>
                </div>
            </div>
        )
    }
}

export {DisplayItem}