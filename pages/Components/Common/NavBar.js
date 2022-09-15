import React from 'react'
import InstaGramIcon from '../Basic/Svg/instaGramIcon'
import HomeIcon from '../Basic/Svg/HomeIconFilled'
import HomeEmpty from '../Basic/Svg/HomeEmpty'
import MessageFilled from '../Basic/Svg/MessageFilled'
import MessageEmpty from '../Basic/Svg/MessageEmpty'
import HeartEmpty from '../Basic/Svg/HeartEmpty'
import HeartFilled from '../Basic/Svg/HeartFilled'
import Image from 'next/image'
import AjayDp from '../Basic/images/profilePicture.jpg'

const NavBar = () => {
    return (
        <div className='container Main-Nav'>
            <nav className="topNav navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <InstaGramIcon />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex m-auto">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <HomeIcon />
                                   {/*  <HomeEmpty /> */}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <MessageEmpty />
                                    {/* <MessageFilled /> */}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <HeartEmpty />
                                    {/* <HeartFilled /> */}
                                </a>
                            </li>
                            <li className="nav-item dropdown navBarsec">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Image src={AjayDp} className="navBarimg" />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar