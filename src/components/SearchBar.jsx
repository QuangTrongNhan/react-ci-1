/*Cách 1:*/

// import React from 'react';
// import '../assets/css/SearchBar.css';

// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text"/>
//                 <button className="btn-search">Search</button>
//             </div>
//         );
//     }

// }

// export {SearchBar};

/*Cách 2*/

import "../assets/css/SearchBar.css";


function SearchBar (props){   
        //mỗi khi state thay đổi thì render sẽ đc gọi để cập nhật view
        //value = this.state.kw ==> để đồng bộ hóa khi nhập vào cập nhật view lại ngay
        const {change, kw} =props
       
        return (
            <div className="searchBar-container">   
                 <input type="text" placeholder="enter your keywords" onChange={change} value={kw}/>
            </div>
        );
    }

export {SearchBar};