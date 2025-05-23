    import React from 'react';
    import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
    import { GitHub, OpenInNew } from '@mui/icons-material';

    const projects = [
    {
        title: 'FitPro',
        description: 'Personalized gym app with workout plans and YouTube integration.',
        technologies: ['React', 'Redux', 'Firebase'],
        githubLink: 'https://github.com/Sirohi01/FitPro-Demo2.git',
        liveLink: 'https://sirohi01.github.io/FitPro-Demo2/'
    },
    {
        title: 'KaloDash',
        description: 'Fitness dashboard for tracking calories, water, weight with interactive charts.',
        technologies: ['React', 'Redux', 'Chart.js'],
        githubLink: 'https://github.com/Sirohi01/Sirohi-CaloDash.git',
        liveLink: 'https://sirohi01.github.io/Sirohi-CaloDash/'
    },
    {
        title: 'Hospital Management System',
        description: 'End-to-end hospital admin system with real-time dashboard.',
        technologies: ['React', 'Vite', 'Node.js'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Crop Yield Prediction',
        description: 'ML model for crop prediction using KNN and pandas.',
        technologies: ['Python', 'Scikit-learn', 'Pandas'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Leaves Disease Detection',
        description: 'CNN model to detect plant diseases via image classification.',
        technologies: ['TensorFlow', 'Keras', 'OpenCV'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Food Blog Website',
        description: 'Dynamic blog site with Firebase CMS and SEO optimization.',
        technologies: ['React', 'Firebase', 'SEO'],
        githubLink: '#',
        liveLink: '#'
    }
    ];

    const Projects = () => {
    return (
        <Box 
        id="projects" 
        sx={{
            padding: { xs: 'var(--space-xl) var(--space-sm)', md: 'var(--space-xxl) var(--space-md)' },
            background: 'var(--gray-50)'
        }}
        >
        <Box sx={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: { xs: '0 var(--space-sm)', md: '0 var(--space-md)' }
        }}>
            <Typography 
            variant="h2" 
            sx={{
                textAlign: 'center',
                mb: 'var(--space-xl)',
                position: 'relative',
                color: 'var(--gray-900)',
                fontSize: { xs: '2rem', md: '2.5rem' },
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
            My Projects
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
                <Grid 
                item 
                xs={12} 
                sm={6} 
                lg={4} 
                key={index}
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                <Card 
                    sx={{ 
                    width: '100%',
                    maxWidth: '400px',
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius-lg)',
                    border: '1px solid var(--gray-200)',
                    transition: 'var(--transition-all)',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 'var(--shadow-lg)',
                        borderColor: 'var(--primary-100)'
                    }
                    }}
                >
                    <CardMedia
                    component="div"
                    sx={{
                        height: 180,
                        background: `linear-gradient(135deg, ${index % 2 === 0 ? 'var(--primary-100)' : 'var(--accent-100)'}, white)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: index % 2 === 0 ? 'var(--primary-600)' : 'var(--accent-600)',
                        fontSize: '3rem',
                        fontWeight: 'bold'
                    }}
                    >
                    {project.title.charAt(0)}
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h3"
                        sx={{
                        color: 'var(--gray-900)',
                        fontWeight: 700,
                        mb: 'var(--space-sm)'
                        }}
                    >
                        {project.title}
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                        mb: 'var(--space-md)',
                        color: 'var(--gray-700)',
                        lineHeight: 1.6
                        }}
                    >
                        {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, i) => (
                        <Chip 
                            key={i} 
                            label={tech} 
                            size="small" 
                            sx={{
                            backgroundColor: index % 2 === 0 ? 'var(--primary-50)' : 'var(--accent-50)',
                            color: index % 2 === 0 ? 'var(--primary-700)' : 'var(--accent-700)',
                            fontWeight: 500,
                            '& .MuiChip-label': {
                                px: 1
                            }
                            }}
                        />
                        ))}
                    </Box>
                    </CardContent>
                    <CardActions 
                    sx={{ 
                        justifyContent: 'space-between', 
                        p: 2,
                        borderTop: '1px solid var(--gray-100)'
                    }}
                    >
                    <Button 
                        size="small" 
                        startIcon={<GitHub />} 
                        href={project.githubLink} 
                        target="_blank"
                        sx={{
                        color: 'var(--gray-700)',
                        '&:hover': {
                            color: 'var(--primary-600)',
                            backgroundColor: 'transparent'
                        }
                        }}
                    >
                        Code
                    </Button>
                    <Button 
                        size="small" 
                        startIcon={<OpenInNew />} 
                        href={project.liveLink} 
                        target="_blank"
                        sx={{
                        color: 'white',
                        backgroundColor: index % 2 === 0 ? 'var(--primary-500)' : 'var(--accent-500)',
                        '&:hover': {
                            backgroundColor: index % 2 === 0 ? 'var(--primary-600)' : 'var(--accent-600)'
                        }
                        }}
                    >
                        Live Demo
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Box>
        </Box>
    );
    };

    export default Projects;