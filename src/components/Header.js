    import React, { useState, useEffect } from 'react';
    import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useScrollTrigger, Slide } from '@mui/material';
    import { Menu, Close } from '@mui/icons-material';
    import { Link } from 'react-scroll';

    const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
        {children}
        </Slide>
    );
    };

    const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'hero' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Education', to: 'education' },
        { name: 'Contact', to: 'contact' },
    ];

    const drawer = (
        <div style={{ 
        width: '250px',
        background: `var(--gray-50)`,
        height: '100%'
        }}>
        <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            padding: 'var(--space-sm)',
            background: `var(--primary-500)`
        }}>
            <IconButton 
            onClick={handleDrawerToggle}
            sx={{ color: 'white' }}
            >
            <Close />
            </IconButton>
        </div>
        <List>
            {navItems.map((item) => (
            <ListItem 
                button 
                key={item.name} 
                component={Link}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={handleDrawerToggle}
                sx={{
                '&:hover': {
                    backgroundColor: 'var(--primary-50)'
                }
                }}
            >
                <ListItemText 
                primary={item.name} 
                sx={{ 
                    textAlign: 'center',
                    '& span': {
                    color: 'var(--gray-800)',
                    fontWeight: '500'
                    }
                }} 
                />
            </ListItem>
            ))}
        </List>
        </div>
    );

    return (
        <>
        <HideOnScroll>
            <AppBar 
            position="fixed" 
            sx={{ 
                backgroundColor: scrolled ? 'var(--primary-700)' : 'transparent',
                backgroundImage: scrolled ? 'none' : 'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)',
                boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
                transition: 'var(--transition-all)',
                backdropFilter: scrolled ? 'blur(8px)' : 'none',
                py: scrolled ? 0 : 'var(--space-xs)'
            }}
            >
            <Toolbar sx={{ 
                justifyContent: 'space-between',
                maxWidth: '1440px',
                width: '100%',
                mx: 'auto',
                px: 'var(--space-md)'
            }}>
                <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                    fontWeight: '800',
                    fontSize: 'var(--text-lg)',
                    color: 'white',
                    letterSpacing: '0.025em'
                }}
                >
                Manish Sirohi
                </Typography>
                <div sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navItems.map((item) => (
                    <Button 
                    key={item.name} 
                    component={Link}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    sx={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 'var(--text-sm)',
                        textTransform: 'capitalize',
                        mx: 'var(--space-xxs)',
                        '&:hover': {
                        color: 'var(--accent-200)',
                        backgroundColor: 'transparent'
                        }
                    }}
                    >
                    {item.name}
                    </Button>
                ))}
                </div>
                <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                    display: { md: 'none' },
                    color: 'white'
                }}
                >
                <Menu />
                </IconButton>
            </Toolbar>
            </AppBar>
        </HideOnScroll>
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true,
            }}
            sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: 250,
                borderRight: '1px solid var(--gray-200)'
            },
            }}
        >
            {drawer}
        </Drawer>
        </>
    );
    };

    export default Header;