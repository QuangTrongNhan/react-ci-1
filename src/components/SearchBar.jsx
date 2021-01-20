import React from 'react'
import '../assets/css/SearchBar.css'

function SearchBar(props) {
    return(
        <div className="search-container">
            <input type="text" placeholder="Enter your keyword"/>
            <button className="btn-search">Search</button>
        </div>
    )
}

export {SearchBar}