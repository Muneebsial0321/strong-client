import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';


const navItems = [
    { name: "Login", link: "/auth/login" },
    { name: "Signup", link: "/auth/register" },
    { name: "Home", link: "/home" },
    { name: "Execrises", link: "/exe" },
    { name: "Create Execrise", link: "/exe/create" },
];

export default function SideBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <>
            <List className='w-[14rem] text-white relative bg-gray-800 h-full'>
                {navItems.map((e, i) => (
                    <Link onClick={()=>setMobileOpen(false)} to={e.link} key={i}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ ml:"1.5rem" }}>
                                <ListItemText primary={e.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>

    );


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
            id='bg-red'
            className='bg-black'
            component="nav">
                <Toolbar>

                    <IconButton
                    className='text-white'
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}