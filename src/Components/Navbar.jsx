import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.svg'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { CommentRounded, Home, Info, PhoneRounded, ShoppingCartCheckoutRounded } from '@mui/icons-material';






function Navbar() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // دالة لتبديل الوضع وتخزينه في localStorage
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // حفظ التفضيل
    };

    // تطبيق الفئة الخاصة بالوضع على body
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);



    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: <a className='xa' href="/">Home</a>,
            icons: <Home />
        },
        {
            text: <a className='xa' href="#About">About</a>,
            icons: <Info />
        },
        {
            text: <a className='xa' href="#Testimonials">Testimonials</a>,
            icons: <CommentRounded />
        },
        {
            text: <a className='xa' href="#Contact">Contact</a>,
            icons: <PhoneRounded />
        },
        {
            text: "Cart",
            icons: <ShoppingCartCheckoutRounded />
        },
    ];
    return (
        <nav >
            <a href="/">
                <div className="nav-logo-container ">
                    <img src={logo} alt="" />
                </div>
            </a>
            <div className="navbar-links-container ">
                <a href="/">Home</a>
                <a href="#About">About</a>
                <a href="#Testimonials">Testimonials</a>
                <a href="#Contact">Contact</a>
                <a href="">
                    <BsCart2 className='navbar-cart-icon' />
                </a>
                <button className='primary-button'>Booking Now</button>
                <button onClick={toggleTheme} className="toggle-btn ms-1">
                      {theme === "light" ? "Dark" : "Light"}
                </button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />

            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
                <Box sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icons}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>)}
                    </List>

                </Box>


            </Drawer>
        </nav>
    )
}

export default Navbar
