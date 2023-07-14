import React from 'react';
import '../CSS/SideBar.css';
import { RxDashboard } from 'react-icons/rx';
import { BsTicketPerforated, BsBookmarkHeart, BsWallet2, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { MdOutlineMessage } from 'react-icons/md';
import { FiSettings, FiLogOut } from 'react-icons/fi';
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className='text-center pt-5 pb-3'>
                <span className='side-title'>Travelight</span>
            </div>
            <div className='dflex text-center'>
                <div className='submenu mb-4'><RxDashboard className='icon mx-2' />Dashboard</div>
                <div className='submenu mb-4'><BsTicketPerforated className='icon mx-2' />My Tickets</div>
                <div className='submenu mb-4'><BsBookmarkHeart className='icon mx-2' />Favourite</div>
                <div className='submenu mb-4'><MdOutlineMessage className='icon mx-2' />Message</div>
                <div className='submenu mb-4'><BsWallet2 className='icon mx-2' />Transaction</div>
                <div className='submenu mb-4'><FiSettings className='icon mx-2' />Settings</div>
            </div>
            <div className='discount'>
                <div className='details'>
                    <h5> 50% Discount!</h5>
                    <span style={{ fontSize: 'small' }}>Get a dsicount on certain days and don't miss it.</span>
                    <div>
                        <button className='discountButton'><BsFillArrowRightCircleFill className='icon my-3' /></button>
                    </div>
                </div>
            </div>
            <div className='dflex text-center'>

                <div className='submenu mt-3'><FiLogOut className='icon mx-2' />Logout</div>
            </div>
        </div>
    )
}
