import React from 'react';
import '../CSS/Home.css';
import { IoNotificationsOutline } from 'react-icons/io5'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function Home() {
    return (
        <div className='home'>
            <div className='d-flex'>
                <input type='text' className='search-bar' placeholder='Search your favourite destination' />
                <button className='search'>Search</button>
                <div className='notifications-holder'>
                    <IoNotificationsOutline className='notification mr-5' />
                </div>
            </div>
            <h3 className='greetings mt-2'>
                Hello Mike!
            </h3>
            <span className='greetMessage'>Welcome back and start your planning here.</span>
            <h5 className='topDestination mt-2'>Top Destinations</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://img.freepik.com/premium-vector/watercolor-capri-illustration_52683-84744.jpg?w=740" className="card-img-top mt-2" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Italy</h5>
                        </div>
                        <div className="card-footer">
                            <small className="small-text">Starting at $250</small>
                            <BsFillArrowRightCircleFill className='icon' />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://freedesignfile.com/upload/2012/10/Japan-2.jpg" className="card-img-top mt-2" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Japan</h5>
                        </div>
                        <div className="card-footer">
                            <small className="small-text">Starting at $250</small>
                            <BsFillArrowRightCircleFill className='icon' />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://img.freepik.com/free-vector/pink-skyline-sydney_23-2147773966.jpg?w=740&t=st=1689404295~exp=1689404895~hmac=ebb1bf998e2c4b7667c73650003941ed3811e713208172286c8675ff6750c7c4" className="card-img-top mt-2" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Sydney</h5>
                        </div>
                        <div className="card-footer">
                            <small className="small-text">Starting at $250</small>
                            <BsFillArrowRightCircleFill className='icon' />
                        </div>
                    </div>
                </div>
            </div>
            <h5 className='topDestination mt-2'>Most Popular</h5>
            <div className="container text-center">
                <div className="row row-cols-2">
                    <div className="col">
                        <div className="cards mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://cdn.dribbble.com/users/1729545/screenshots/6636920/___dribble____1____2_4x.jpg?compress=1&resize=1000x750&vertical=center" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-bodys">
                                        <h5 className="card-titles mt-2">Sao Paulo</h5>
                                        <p className="card-text"><small className="text-body-secondary">$250/day</small></p>
                                        <div>
                                            <button className='discountButton'><BsFillArrowRightCircleFill className='icon' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cards mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://img.freepik.com/premium-photo/sunset-octavio-frias-oliveira-bridge-sao-paulo-brazil_306105-3194.jpg?w=996" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-bodys">
                                        <h5 className="card-titles mt-2">Eiffel Tower</h5>
                                        <p className="card-text"><small className="text-body-secondary">$250/day</small></p>
                                        <div>
                                            <button className='discountButton'><BsFillArrowRightCircleFill className='icon' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cards mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://img.freepik.com/premium-photo/view-famous-golden-gate-bridge-san-francisco-california-usa_268835-2967.jpg?w=996" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-bodys">
                                        <h5 className="card-titles mt-2">Santorini</h5>
                                        <p className="card-text"><small className="text-body-secondary">$250/day</small></p>
                                        <div>
                                            <button className='discountButton'><BsFillArrowRightCircleFill className='icon' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cards mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://img.freepik.com/free-photo/famous-eiffel-tower-paris-with-gorgeous-colors_268835-830.jpg?w=996&t=st=1689431250~exp=1689431850~hmac=eee3565812fa3cbdbef3e5778d1d1ffb82440f50c331860372bdcc4cbb71d9af" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-bodys">
                                        <h5 className="card-titles mt-2">San Francisco</h5>
                                        <p className="card-text"><small className="text-body-secondary">$250/day</small></p>
                                        <div>
                                            <button className='discountButton'><BsFillArrowRightCircleFill className='icon' /></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
