import React from 'react'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <div className="header_inner">
                <h1 className='header_logo'>
                    portfolio
                    <em>developer</em>
                </h1>
                <nav className='header_nav show' role='navigation' aria-label='메인메뉴'>
                    <ul>
                        <li><a href="/">Intro</a></li>
                        <li><a href="/">Skill</a></li>
                        <li><a href="/">Site</a></li>
                        <li><a href="/">Port</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
                <nav className='header_nav_mobile' id='headerToggle' role='button' tabIndex='0'>
                    <span></span> {/*햄버거메뉴 줄 하나 만들어야 하므로 span*/}
                </nav>
            </div>
        </header>
    )
}

export default Header
