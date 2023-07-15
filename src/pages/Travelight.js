import React from 'react';
import SideBar from '../components/SideBar'
import Home from '../components/Home';
import Calender from '../components/Calender';

export default function Travelight() {
    return (
        <div className='d-flex'>
            <SideBar />
            <Home />
            <Calender />
        </div>
    )
}
