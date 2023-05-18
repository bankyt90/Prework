import React from 'react'
import { Navbar } from '../component/navbar/Navbar'
import Sidebar from "../component/sidebar/Sidebar"

export const Homepage = () => {
  return (
    <div className='home'>
        <br></br>
        <Navbar/>
        <div className='container-lg'>
        <div className='d-flex justify-content-between'>
            <div className='text-box'>
                <h1>
                    Make your party fun!
                </h1>
                <p>
                    Create your own custom Playlist .today.
                </p>
                <button className='btn btn-light orange-btn padding'>Create playlist</button>
            </div>
            <div>
                <Sidebar className/>
            </div>
        </div>
        </div>
    </div>
  )
}
