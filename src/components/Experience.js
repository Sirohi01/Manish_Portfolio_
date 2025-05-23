    import React from 'react';
    import { Box, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
    import { Work, Code, DeveloperMode } from '@mui/icons-material';

    const experiences = [
    {
        company: 'LeaveCode Technologies Pvt. Ltd.',
        position: 'Mobile App Developer Intern',
        duration: 'Sep 2024 – Apr 2025',
        icon: <Work />,
        responsibilities: [
        "Developed 'AppLaChain', a React Native app for waste management with Redux and Firebase.",
        "Integrated Firebase Firestore for real-time updates and REST APIs with Axios.",
        "Worked with Tailwind CSS to create consistent UI across Android and iOS.",
        "Collaborated with backend developers to enhance API design and reliability."
        ]
    },
    {
        company: 'Sneagnic Pvt. Ltd.',
        position: 'Web Development Intern',
        duration: 'Feb 2024 – Aug 2024',
        icon: <Code />,
        responsibilities: [
        "Built 5+ responsive apps using React.js, Bootstrap, and Tailwind CSS.",
        "Improved site SEO and organic traffic.",
        "Integrated Node.js APIs and Firebase Auth for secure login flows."
        ]
    }
    ];

    const Experience = () => {
    return (
        <section id="experience" style={{
        padding: 'var(--space-xxl) var(--space-md)',
        background: 'white'
        }}>
        <div className="container">
            <Typography 
            variant="h2" 
            sx={{
                textAlign: 'center',
                mb: 'var(--space-xl)',
                position: 'relative',
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
            Work Experience
            </Typography>
            
            <Grid container spacing={4}>
            {experiences.map((exp, index) => (
                <Grid item xs={12} key={index}>
                <Paper 
                    elevation={0} 
                    sx={{ 
                    p: 3, 
                    borderRadius: 'var(--border-radius-lg)',
                    border: '1px solid var(--gray-200)',
                    transition: 'var(--transition-all)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 'var(--shadow-lg)',
                        borderColor: 'var(--primary-100)'
                    }
                    }}
                >
                    <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3,
                    flexDirection: { xs: 'column', sm: 'row' },
                    textAlign: { xs: 'center', sm: 'left' }
                    }}>
                    <Box sx={{ 
                        width: 60, 
                        height: 60, 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'white',
                        mr: { sm: 3 },
                        mb: { xs: 2, sm: 0 },
                        flexShrink: 0
                    }}>
                        {React.cloneElement(exp.icon, { fontSize: 'medium' })}
                    </Box>
                    <Box>
                        <Typography 
                        variant="h4" 
                        component="h3"
                        sx={{
                            color: 'var(--gray-900)',
                            fontWeight: 700,
                            mb: 0.5
                        }}
                        >
                        {exp.position}
                        </Typography>
                        <Typography 
                        variant="h6" 
                        sx={{
                            color: 'var(--primary-600)',
                            fontWeight: 600,
                            mb: 0.5
                        }}
                        >
                        {exp.company}
                        </Typography>
                        <Typography 
                        variant="subtitle2"
                        sx={{
                            color: 'var(--gray-500)',
                            fontWeight: 500,
                            display: 'inline-block',
                            background: 'var(--gray-100)',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 'var(--border-radius-pill)'
                        }}
                        >
                        {exp.duration}
                        </Typography>
                    </Box>
                    </Box>
                    
                    <List sx={{ pt: 0 }}>
                    {exp.responsibilities.map((item, i) => (
                        <ListItem 
                        key={i} 
                        sx={{ 
                            py: 1,
                            alignItems: 'flex-start',
                            '&:not(:last-child)': {
                            borderBottom: '1px solid var(--gray-100)'
                            }
                        }}
                        >
                        <ListItemIcon sx={{ 
                            minWidth: 30, 
                            color: 'var(--accent-500)',
                            mt: 0.5
                        }}>
                            <DeveloperMode fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary={item} 
                            primaryTypographyProps={{
                            variant: 'body1',
                            color: 'var(--gray-700)',
                            lineHeight: 1.6
                            }}
                        />
                        </ListItem>
                    ))}
                    </List>
                </Paper>
                </Grid>
            ))}
            </Grid>
        </div>
        </section>
    );
    };

    export default Experience;  