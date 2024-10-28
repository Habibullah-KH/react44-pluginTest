import { useState } from "react";
import List from "../List/List";
import { FaBars } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

const NavBar = () => {
    const [open, setOpen] = useState(false)
            const routes = [
                { id: 1, path: "/", name: "Home" },
                { id: 2, path: "/about", name: "About" },
                { id: 3, path: "/services", name: "Services" },
                { id: 4, path: "/contact", name: "Contact" },
                { id: 5, path: "/profile", name: "Profile" },
              ];

    return (


        <nav className="text-black bg-yellow-200">
            <div className="  p-3 md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCrossCircled className="text-xl" />
                    : <FaBars className="text-xl"/>
                }
            
            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 p-4
                ${open ? 'top-16' : '-top-80'}`}>
            {
                routes.map(route => <List key={route.id} route={route}/>)
            }
            
            </ul>
        </nav>
    );
};

export default NavBar;