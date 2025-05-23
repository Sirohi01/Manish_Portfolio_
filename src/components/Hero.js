    import React from 'react';
    import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
    import { Code, Phone, Email, GitHub } from '@mui/icons-material';
    import { Link } from 'react-scroll';

    const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <section 
        id="hero" 
        style={{ 
            padding: `var(--space-xxl) var(--space-md)`,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--gray-50)'
        }}
        >
        <div className="container">
            <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
                <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom 
                sx={{
                    fontWeight: '800',
                    lineHeight: '1.2',
                    color: 'var(--gray-900)',
                    '& span': {
                    color: 'var(--primary-500)',
                    background: 'linear-gradient(90deg, var(--primary-500), var(--accent-500))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                    }
                }}
                >
                Hi, I'm <span>Manish Kumar Sirohi</span>
                </Typography>
                
                <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                sx={{ 
                    color: 'var(--gray-600)',
                    fontWeight: '600',
                    mb: 'var(--space-md)'
                }}
                >
                React-Native Developer | React.js Developer | Frontend Engineer
                </Typography>
                
                <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                    marginBottom: 'var(--space-xl)',
                    color: 'var(--gray-700)',
                    fontSize: 'var(--text-md)',
                    lineHeight: '1.7'
                }}
                >
                Innovative and results-driven Web Developer with experience building dynamic, responsive, and scalable web applications using React.js, Redux, JavaScript, and modern frontend technologies.
                </Typography>
                
                <div style={{ 
                display: 'flex', 
                gap: 'var(--space-sm)', 
                marginBottom: 'var(--space-xl)',
                flexWrap: 'wrap'
                }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    component={Link}
                    to="contact"
                    smooth={true}
                    duration={500}
                    startIcon={<Email />}
                    sx={{
                    px: 'var(--space-md)',
                    py: 'var(--space-sm)',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                    }}
                >
                    Contact Me
                </Button>
                
                <Button 
                    variant="outlined" 
                    color="primary" 
                    href="https://github.com/Sirohi01" 
                    target="_blank"
                    startIcon={<GitHub />}
                    sx={{
                    px: 'var(--space-md)',
                    py: 'var(--space-sm)',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    '&:hover': {
                        borderColor: 'var(--primary-600)',
                        color: 'var(--primary-600)'
                    }
                    }}
                >
                    GitHub
                </Button>
                </div>
                
                <div style={{ 
                display: 'flex', 
                gap: 'var(--space-md)', 
                flexWrap: 'wrap'
                }}>
                <Button 
                    variant="text" 
                    color="inherit" 
                    href="tel:+919568259784" 
                    startIcon={<Phone sx={{ color: 'var(--primary-500)' }} />}
                    sx={{
                    textTransform: 'none',
                    color: 'var(--gray-700)',
                    '&:hover': {
                        color: 'var(--primary-600)',
                        background: 'transparent'
                    }
                    }}
                >
                    +91-9568259784
                </Button>
                
                <Button 
                    variant="text" 
                    color="inherit" 
                    href="mailto:manishsirohi023@gmail.com" 
                    startIcon={<Email sx={{ color: 'var(--primary-500)' }} />}
                    sx={{
                    textTransform: 'none',
                    color: 'var(--gray-700)',
                    '&:hover': {
                        color: 'var(--primary-600)',
                        background: 'transparent'
                    }
                    }}
                >
                    manishsirohi023@gmail.com
                </Button>
                </div>
            </Grid>
            
            
            </Grid>
        </div>
        </section>
    );
    };

    export default Hero;