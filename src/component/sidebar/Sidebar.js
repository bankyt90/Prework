import React from 'react'
import {dataa} from "../../database/dataa"

const Sidebar = () => {
  return (
    <div className='side'>
        <h4 className='pt-2'><b>Trending Songs</b></h4>
        {dataa.map((item) => (
                <div key={item.id}>
                    <button className='btn btn-light song-btn'>{item.name}</button>
                </div>
            ))} 

            <button type='button' className='btn btn-light orange-btn mt-3 padding'>View More</button>
    </div>
        )
}

export default Sidebar