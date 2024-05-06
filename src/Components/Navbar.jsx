import React from 'react';
import("../styles/navbar.css");
function Navbar(props) {
    return (
        <>
            <header className="navbar">

                <h1>Land Calculator</h1>
                <ul>
                    <li>
                        <img src="/screen.png" width={30} height={30} alt="languageicons"/>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Navbar;