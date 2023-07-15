import React from 'react';
import '../CSS/SideBar.css';
import { RxDashboard } from 'react-icons/rx';
import { BsTicketPerforated, BsBookmarkHeart, BsWallet2, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { MdOutlineMessage } from 'react-icons/md';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className='text-center pt-5 pb-3'>
                <Link to='/' className='link-title'><span className='side-title'>Travelight</span></Link>
            </div>
            <div className='dflex text-center'>
                <div className='submenu mb-4'><Link to='/dashboard' className='link'><RxDashboard className='icon mx-2' />Dashboard</Link></div>
                <div className='submenu mb-4'><Link to='/myTickets' className='link'><BsTicketPerforated className='icon mx-2' />My Tickets</Link></div>
                <div className='submenu mb-4'><Link to='/favourite' className='link'><BsBookmarkHeart className='icon mx-2' />Favourite</Link></div>
                <div className='submenu mb-4'><Link to='/messages' className='link'><MdOutlineMessage className='icon mx-2' />Message</Link></div>
                <div className='submenu mb-4'><Link to='/transaction' className='link'><BsWallet2 className='icon mx-2' />Transaction</Link></div>
                <div className='submenu mb-4'><Link to='/settings' className='link'><FiSettings className='icon mx-2' />Settings</Link></div>
            </div>
            <div className='discount'>
                <div className='details'>
                    <h5> 50% Discount!</h5>
                    <span style={{ fontSize: 'small' }}>Get a dsicount on certain days and don't miss it.</span>
                    <div>
                        <button className='discountButton'><BsFillArrowRightCircleFill className='icon' /></button>
                        <img src='https://img.freepik.com/free-vector/summer-holidays-beach-background-poster-with-chair-starfish-cocktail-vector-illustration_98292-3679.jpg?w=740&t=st=1689424421~exp=1689425021~hmac=e64b3ad08bf50a0e834b17e546b446d4a0e9b05459d0a45ea30c0d7b758317a4' className='discountImage mx-3' alt='discount'></img>
                    </div>
                </div>
            </div>
            <div className='dflex text-center'>

                <div className='submenu mt-3'><FiLogOut className='icon mx-2' />Logout</div>
            </div>
        </div>
    )
}
