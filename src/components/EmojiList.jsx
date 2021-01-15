// import {Emoji} from "../components/Emoji"
// import {emojis} from "../emojis"
// import '../assets/css/EmojiList.css'

import {Emoji} from "./Emoji"
import { emojis } from "../emojis";
import "../assets/css/EmojiList.css";


function EmojiList (props) {
    const {kw} =props
    const filtered = emojis.filter(val => {
        if(val.keywords.indexOf(kw) != -1) {
            return true
        }else {
            return false
        }
    })
    const lists=[]
    const length= emojis.length >= 20 ? 20 : emojis.length
    for(let i=0; i<length; i++) {
        lists.push(
            <Emoji{...emojis[i]}/>
        )
    }
    console.log(filtered)
   return (
       <div className="emojilist-cont">
           {
               lists
           }
       </div>
       
   )
} 



export {EmojiList};


