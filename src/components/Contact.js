    import React from 'react';
    import { Box, Typography, Grid, TextField, Button, Divider } from '@mui/material';
    import { Email, Phone, LinkedIn, GitHub, Public } from '@mui/icons-material';

    const Contact = () => {
    return (
        <section id="contact" style={{
        padding: 'var(--space-xxl) var(--space-md)',
        background: 'var(--gray-50)'
        }}>
        <div className="container">
            <Typography 
            variant="h2" 
            sx={{
                textAlign: 'center',
                mb: 'var(--space-xl)',
                position: 'relative',
                color: 'var(--gray-900)',
                '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 'calc(-1 * var(--space-sm))',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary-500), var(--accent-500))',
                borderRadius: 'var(--border-radius-pill)'
                }
            }}
            >
            Get In Touch
            </Typography>
            
            <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <Box sx={{ 
                p: 4,
                borderRadius: 'var(--border-radius-lg)',
                background: 'white',
                height: '100%',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--gray-200)'
                }}>
                <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{
                    color: 'var(--gray-900)',
                    fontWeight: 700,
                    mb: 3
                    }}
                >
                    Contact Information
                </Typography>
                <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                    color: 'var(--gray-700)',
                    lineHeight: 1.7,
                    mb: 3
                    }}
                >
                    Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </Typography>
                
                <Box sx={{ my: 3 }}>
                    <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3,
                    p: 2,
                    borderRadius: 'var(--border-radius-md)',
                    transition: 'var(--transition-all)',
                    '&:hover': {
                        background: 'var(--gray-100)'
                    }
                    }}>
                    <Email sx={{ 
                        mr: 2, 
                        color: 'var(--primary-500)',
                        fontSize: '2rem'
                    }} />
                    <Box>
                        <Typography 
                        variant="subtitle2"
                        sx={{
                            color: 'var(--gray-500)',
                            mb: 0.5
                        }}
                        >
                        Email
                        </Typography>
                        <Typography
                        sx={{
                            color: 'var(--gray-900)',
                            fontWeight: 500
                        }}
                        >
                        manishsirohi023@gmail.com
                        </Typography>
                    </Box>
                    </Box>
                    <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3,
                    p: 2,
                    borderRadius: 'var(--border-radius-md)',
                    transition: 'var(--transition-all)',
                    '&:hover': {
                        background: 'var(--gray-100)'
                    }
                    }}>
                    <Phone sx={{ 
                        mr: 2, 
                        color: 'var(--primary-500)',
                        fontSize: '2rem'
                    }} />
                    <Box>
                        <Typography 
                        variant="subtitle2"
                        sx={{
                            color: 'var(--gray-500)',
                            mb: 0.5
                        }}
                        >
                        Phone
                        </Typography>
                        <Typography
                        sx={{
                            color: 'var(--gray-900)',
                            fontWeight: 500
                        }}
                        >
                        +91-9568259784
                        </Typography>
                    </Box>
                    </Box>
                </Box>
                
                <Divider sx={{ 
                    my: 3,
                    borderColor: 'var(--gray-200)'
                }} />
                
                <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{
                    color: 'var(--gray-900)',
                    fontWeight: 600,
                    mb: 3
                    }}
                >
                    Connect with me
                </Typography>
                <Box sx={{ 
                    display: 'flex', 
                    gap: 2,
                    flexWrap: 'wrap'
                }}>
                    <Button 
                    variant="outlined" 
                    startIcon={<GitHub />} 
                    href="https://github.com/Sirohi01" 
                    target="_blank"
                    sx={{
                        px: 3,
                        borderColor: 'var(--gray-300)',
                        color: 'var(--gray-700)',
                        '&:hover': {
                        borderColor: 'var(--primary-500)',
                        color: 'var(--primary-600)'
                        }
                    }}
                    >
                    GitHub
                    </Button>
                    <Button 
                    variant="outlined" 
                    startIcon={<LinkedIn />} 
                    href="https://www.linkedin.com/in/manish-kumar-sirohi-593268217/" 
                    target="_blank"
                    sx={{
                        px: 3,
                        borderColor: 'var(--gray-300)',
                        color: 'var(--gray-700)',
                        '&:hover': {
                        borderColor: 'var(--primary-500)',
                        color: 'var(--primary-600)'
                        }
                    }}
                    >
                    LinkedIn
                    </Button>
                    <Button 
                    variant="outlined" 
                    startIcon={<Public />} 
                    href="https://sirohi01.github.io/Manish_Sirohi_Portfolio/" 
                    target="_blank"
                    sx={{
                        px: 3,
                        borderColor: 'var(--gray-300)',
                        color: 'var(--gray-700)',
                        '&:hover': {
                        borderColor: 'var(--primary-500)',
                        color: 'var(--primary-600)'
                        }
                    }}
                    >
                    Portfolio
                    </Button>
                </Box>
                </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Box sx={{ 
                p: 4,
                borderRadius: 'var(--border-radius-lg)',
                background: 'white',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--gray-200)'
                }}>
                <form>
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        required
                        sx={{
                            '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'var(--gray-300)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--primary-500)',
                            },
                            }
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        type="email"
                        required
                        sx={{
                            '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'var(--gray-300)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--primary-500)',
                            },
                            }
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'var(--gray-300)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--primary-500)',
                            },
                            }
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={5}
                        required
                        sx={{
                            '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'var(--gray-300)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--primary-500)',
                            },
                            }
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        fullWidth
                        sx={{ 
                            mt: 2,
                            py: 2,
                            background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))',
                            '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: 'var(--shadow-md)'
                            }
                        }}
                        >
                        Send Message
                        </Button>
                    </Grid>
                    </Grid>
                </form>
                </Box>
            </Grid>
            </Grid>
        </div>
        </section>
    );
    };

    export default Contact;