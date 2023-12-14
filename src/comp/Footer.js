import React from 'react'
import '../css/foot.css'
const Footer = () => {
    return (
        <>
            <div className="Footer mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>take your </span>move</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons justify-content-between">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="./Categories">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="./Categories">travel</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="./Contact">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="./Avis">avis</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="./Favorite">fav</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +212 3121864083</p>
                            <p><i class="fa-solid fa-envelope"></i> adventures-time@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Aharmouch, Ayoub.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>※ Mr. Aharmouch Ayoub ※ </p>
            </div>
        </>
    )
}

export default Footer