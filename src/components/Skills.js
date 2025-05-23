    import React from 'react';
    import { Box, Typography, Grid, Chip, useTheme, useMediaQuery } from '@mui/material';
    import { 
    Javascript, Html5, Css3, ReactLogo, 
    Redux, Nodejs, Python, Firebase, 
    Mongodb, Git, Docker, Postgresql 
    } from '@styled-icons/boxicons-logos';
    import { Language, DataObject, Storage, DesignServices, Build, Terminal } from '@mui/icons-material';

    const skills = [
    { name: 'JavaScript', icon: <Javascript size={24} />, category: 'Languages' },
    { name: 'Python', icon: <Python size={24} />, category: 'Languages' },
    { name: 'TypeScript', icon: <DataObject size={24} />, category: 'Languages' },
    { name: 'HTML5', icon: <Html5 size={24} />, category: 'Frontend' },
    { name: 'CSS3', icon: <Css3 size={24} />, category: 'Frontend' },
    { name: 'React.js', icon: <ReactLogo size={24} />, category: 'Frontend' },
    { name: 'React Native', icon: <ReactLogo size={24} />, category: 'Frontend' },
    { name: 'Redux', icon: <Redux size={24} />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <DesignServices size={24} />, category: 'Frontend' },
    { name: 'Bootstrap', icon: <DesignServices size={24} />, category: 'Frontend' },
    { name: 'Node.js', icon: <Nodejs size={24} />, category: 'Backend' },
    { name: 'Express.js', icon: <Nodejs size={24} />, category: 'Backend' },
    { name: 'Firebase', icon: <Firebase size={24} />, category: 'Backend' },
    { name: 'MongoDB', icon: <Mongodb size={24} />, category: 'Backend' },
    { name: 'REST APIs', icon: <Storage size={24} />, category: 'Backend' },
    { name: 'Git', icon: <Git size={24} />, category: 'Tools' },
    { name: 'Docker', icon: <Docker size={24} />, category: 'Tools' },
    { name: 'Postman', icon: <Terminal size={24} />, category: 'Tools' },
    ];

    const skillCategories = [
    { name: 'Languages', icon: <Language /> },
    { name: 'Frontend', icon: <DesignServices /> },
    { name: 'Backend', icon: <Storage /> },
    { name: 'Tools', icon: <Build /> },
    ];

    const Skills = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <section id="skills" className="section">
        <div className="container">
            <Typography variant="h2" className="section-title" sx={{ mb: 'var(--space-lg)' }}>
            My Skills
            </Typography>
            
            <Box sx={{ 
            textAlign: 'center', 
            mb: 'var(--space-xl)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-sm)'
            }}>
            {skillCategories.map((category) => (
                <Chip
                key={category.name}
                icon={React.cloneElement(category.icon, { 
                    sx: { color: 'var(--primary-500)' } 
                })}
                label={category.name}
                sx={{ 
                    px: 'var(--space-sm)',
                    py: 'var(--space-xs)',
                    backgroundColor: 'var(--gray-100)',
                    color: 'var(--gray-800)',
                    fontWeight: '600',
                    '& .MuiChip-label': {
                    pl: 'var(--space-xxs)'
                    },
                    '&:hover': {
                    backgroundColor: 'var(--gray-200)'
                    }
                }}
                />
            ))}
            </Box>
            
            <Grid container spacing={isMobile ? 2 : 3}>
            {skills.map((skill) => (
                <Grid item xs={6} sm={4} md={3} key={skill.name}>
                <Box 
                    className="card"
                    sx={{ 
                    p: 'var(--space-md)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'var(--transition-all)',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 'var(--shadow-md)',
                        '& .skill-icon': {
                        transform: 'scale(1.1)',
                        color: 'var(--primary-600)'
                        }
                    }
                    }}
                >
                    <Box 
                    className="skill-icon"
                    sx={{ 
                        color: 'var(--primary-500)',
                        mb: 'var(--space-sm)',
                        transition: 'var(--transition-all)',
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                    {skill.icon}
                    </Box>
                    <Typography 
                    variant="h6" 
                    sx={{ 
                        fontWeight: '600',
                        mb: 'var(--space-xxs)',
                        color: 'var(--gray-800)'
                    }}
                    >
                    {skill.name}
                    </Typography>
                    <Typography 
                    variant="caption" 
                    sx={{ 
                        color: 'var(--gray-600)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '500'
                    }}
                    >
                    {skill.category}
                    </Typography>
                </Box>
                </Grid>
            ))}
            </Grid>
        </div>
        </section>
    );
    };

    export default Skills;