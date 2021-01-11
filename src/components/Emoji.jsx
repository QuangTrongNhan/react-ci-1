import '../assets/css/Emoji.css';

function Emoji (props) {
    /*kĩ thuật object destructuring để truy cập vào key thay vì dùng obj.key*/ 
    
    const {symbol,title} = props; //tương tự {symbol} =props.symbol , {title} = props.title
   return (
       <div className="emoji-container">
           <p>{symbol} {title}</p>
       </div>
       
   )
} 



export {Emoji}