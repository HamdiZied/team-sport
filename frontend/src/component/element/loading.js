import React from 'react'
import loadi from '../images/gif/loadi.gif' 

export default function Loading() {
    return (
        <div className="loading">
            <h2> Data Loading</h2>
            <img src={loadi} alt="aaaa"/>
            
        </div>
    )
}
