import '../css/BoxChat.css';
import React from 'react'

class BoxChat extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container-boxchat">
                <div className="boxchat-header">boxchat header</div>
                <div className="boxchat-body">boxchat body</div>
                <div className="boxchat-footer">
                    <input type="text"/>
                    <button>Send</button>
                </div>
            </div>
        )
    }
}

export {BoxChat}