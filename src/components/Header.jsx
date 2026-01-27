import React, { useState } from 'react'

const headerNav=[
    {
        title:"Intro",
        url:"#Intro"
    },
    {
        title:"Skill",
        url:"#Skill"
    },
    {
        title:"Site",
        url:"#Site"
    },    
    {
        title:"Port",
        url:"#Port"
    },   
    {
        title:"Contact",
        url:"#Contact"
    },   

]

const Header = () => {

    const [show,setShow] = useState(false);
    const toggleMenu = ()=>{
        setShow(pshow => !pshow)
        //(pshow => !pshow) : 참 -> 거짓, 거짓 -> 참으로 변경
        //! : 반대값으로 변경
    }
    //show : 상태를 만들고 초기값을 false으로 지정
    // setShow : 상태값을 바꾸는 값

    //useState : 상태를 만들어주는 HOOK명령어
    //HOOK명령어 : 컴포넌트 안에서 상태를 만들고 관리하는 명령어들.

    return (
        <header id='header' role='banner'>
            <div className="header_inner">
                <h1 className='header_logo'>
                    portfolio
                    <em>developer</em>
                </h1>
                <nav className={`header_nav ${show ? "show":""}`} role='navigation' aria-label='메인메뉴'>
                    <ul>
                        {headerNav.map((nav,key)=>(
                            <li key={key}><a href={nav.url}>{nav.title}</a></li>
                        ))}
                    </ul>
                </nav>
                <nav className='header_nav_mobile' id='headerToggle' role='button' tabIndex='0' onClick={toggleMenu}>
                    <span></span> {/*햄버거메뉴 줄 하나 만들어야 하므로 span*/}
                </nav>
            </div>
        </header>
    )
}

export default Header
