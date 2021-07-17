import React from 'react'
import Card from './Card'
const Cards = () => {
    return (
        <div className="flex  h-full lg:mx-20 justify-center items-center py-4  flex-wrap  lg:bg-yellow-50 border-1 lg:shadow-2xl rounded-lg md:mx-0 ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Cards
