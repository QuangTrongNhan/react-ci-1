// import {Emoji} from "../components/Emoji"
// import {emojis} from "../emojis"
// import '../assets/css/EmojiList.css'


import {Emoji} from "../components/Emoji"
import {emojis} from "../emojis"
import '../assets/css/EmojiList.css';


function EmojiList (props) {
    const lists =[]

    for(let i=0; i < 30 ; i++) {
        lists. push (
            <Emoji {...emojis[i]}/>
        )
    }
    
    return(
        <div className="emojilist-cont">
           {
               lists
           }
        </div>
    )

    
}

export {EmojiList};