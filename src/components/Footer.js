    import React from 'react';
    import { Box, Typography, IconButton, Link } from '@mui/material';
    import { GitHub, LinkedIn, Email, Code } from '@mui/icons-material';

    const Footer = () => {
    return (
        <Box 
        component="footer" 
        sx={{ 
            py: 6,
            px: 2,
            backgroundColor: 'var(--gray-900)',
            color: 'var(--gray-100)',
            textAlign: 'center',
            borderTop: '1px solid var(--gray-700)'
        }}
        >
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            mb: 4,
            gap: 1
        }}>
            <IconButton 
            href="https://github.com/Sirohi01" 
            target="_blank" 
            aria-label="GitHub"
            sx={{ 
                color: 'var(--gray-300)',
                '&:hover': {
                color: 'white',
                backgroundColor: 'var(--gray-700)',
                transform: 'translateY(-2px)'
                },
                transition: 'var(--transition-all)'
            }}
            >
            <GitHub fontSize="medium" />
            </IconButton>
            <IconButton 
            href="https://www.linkedin.com/in/manish-kumar-sirohi-593268217/" 
            target="_blank" 
            aria-label="LinkedIn"
            sx={{ 
                color: 'var(--gray-300)',
                '&:hover': {
                color: 'white',
                backgroundColor: 'var(--gray-700)',
                transform: 'translateY(-2px)'
                },
                transition: 'var(--transition-all)'
            }}
            >
            <LinkedIn fontSize="medium" />
            </IconButton>
            <IconButton 
            href="mailto:manishsirohi023@gmail.com" 
            aria-label="Email"
            sx={{ 
                color: 'var(--gray-300)',
                '&:hover': {
                color: 'white',
                backgroundColor: 'var(--gray-700)',
                transform: 'translateY(-2px)'
                },
                transition: 'var(--transition-all)'
            }}
            >
            <Email fontSize="medium" />
            </IconButton>
        </Box>
        
        <Typography 
            variant="body1"
            sx={{ 
            mb: 2,
            color: 'var(--gray-300)',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6
            }}
        >
            Let's build something amazing together. Feel free to reach out for collaborations or just to say hello!
        </Typography>
        
        <Typography 
            variant="body2"
            sx={{ 
            color: 'var(--gray-400)',
            mb: 2
            }}
        >
            © {new Date().getFullYear()} Manish Kumar Sirohi. All rights reserved.
        </Typography>
        
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
        }}>
            <Code fontSize="small" sx={{ color: 'var(--gray-500)' }} />
            <Typography 
            variant="caption"
            sx={{ 
                color: 'var(--gray-500)',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
            }}
            >
            Built with 
            <Link 
                href="https://reactjs.org/" 
                target="_blank" 
                underline="hover"
                sx={{ 
                color: 'var(--primary-300)',
                '&:hover': {
                    color: 'var(--primary-200)'
                }
                }}
            >
                React
            </Link>, 
            <Link 
                href="https://mui.com/" 
                target="_blank" 
                underline="hover"
                sx={{ 
                color: 'var(--primary-300)',
                '&:hover': {
                    color: 'var(--primary-200)'
                }
                }}
            >
                Material-UI
            </Link>, 
            and lots of 
            <Box component="span" sx={{ color: 'var(--accent-400)' }}>❤️</Box>
            </Typography>
        </Box>
        </Box>
    );
    };

    export default Footer;