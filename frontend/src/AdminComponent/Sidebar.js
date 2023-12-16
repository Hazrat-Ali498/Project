import React from 'react';
// import {NavLink} from 'react-router-dom';
import '../AdminComponent/Sidebar.css';
import { Link } from 'react-router-dom';
// FaBars
import{
    FaTh,FaUserAlt, FaCommentAlt, FaShoppingBag, FaThList, FaRegChartBar
} from 'react-icons/fa'

const Sidebar = (props)=>{
    
//     const [isopen, setIsopen]= useState(false);
//     const toggle=()=> setIsopen(!isopen);

    const menuitem=[
        {
            path:"/dashboard",
            name:"Dasboard",
            icon:<FaTh/>
        },

        {
            path:"/products",
            name:"Products",
            icon:<FaShoppingBag/>
        },
        {
            path:"/products-list",
            name:"Products List",
            icon:<FaThList/>
        },

        {
            path:"/users",
            name:"View Users",
            icon:<FaUserAlt/>
        },
        
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        
        {
            path:"/reports",
            name:"Reports",
            icon:<FaRegChartBar/>
        },
       
       
    ];
    return(
       <div className="container-fluid">
            <div className="sidebar" style={{position:"fixed"}}>
                <div className="top_section">
                    <h1 className="logo" >Elite Haven</h1>
                </div>
                {
                    menuitem.map((item, index) => (
                        <Link key={index} className={`link ${window.location.pathname === item.path ? 'active' : ''}`} onClick={() => props.select(item.name)}>
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </Link>
                    ))
                }

            </div>
       </div>
    );
};
export default Sidebar;