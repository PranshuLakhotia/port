'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Close,
  ArrowForward,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, getProjectsByCategory } from '../data/projects';
import { fadeInUp, staggerContainer, staggerItem, cardHover } from '../lib/animations';

const projectCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Apps' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'ml', label: 'AI/ML' },
  { key: 'other', label: 'Other' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCategoryChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string,
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = getProjectsByCategory(selectedCategory);
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  const getGridSize = (index: number, isFeatured: boolean) => {
    if (isFeatured) {
      return index === 0 ? { xs: 12, md: 8 } : { xs: 12, md: 4 };
    }
    return { xs: 12, sm: 6, md: 4 };
  };

  const ProjectCard = ({ project, featured = false, index = 0 }: any) => (
    <motion.div
      variants={staggerItem}
      custom={index}
      whileHover="hover"
      initial="rest"
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          '&:hover': {
            borderColor: 'primary.main',
            boxShadow: `0 8px 30px ${theme.palette.primary.main}20`,
          },
          transition: 'all 0.3s ease',
        }}
        onClick={() => handleProjectClick(project)}
      >
        <CardMedia
          component="div"
          sx={{
            height: featured && index === 0 ? 300 : 200,
            bgcolor: 'grey.100',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover::before': {
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'text.secondary',
              fontWeight: 300,
              opacity: 0.5,
            }}
          >
            {project.title.charAt(0)}
          </Typography>
        </CardMedia>
        
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography
              variant={featured && index === 0 ? 'h5' : 'h6'}
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </Typography>
            {featured && (
              <Chip
                label="Featured"
                size="small"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 500,
                }}
              />
            )}
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 2,
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: featured && index === 0 ? 3 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </Typography>
          
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {project.technologies.slice(0, featured && index === 0 ? 5 : 3).map((tech: string) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontSize: '0.75rem',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                  },
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
            {project.technologies.length > (featured && index === 0 ? 5 : 3) && (
              <Chip
                label={`+${project.technologies.length - (featured && index === 0 ? 5 : 3)}`}
                size="small"
                sx={{
                  bgcolor: 'grey.100',
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                }}
              />
            )}
          </Stack>
          
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontWeight: 500,
            }}
          >
            {project.year} • {project.category.toUpperCase()}
          </Typography>
        </CardContent>
        
        <CardActions sx={{ p: 3, pt: 0 }}>
          <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
            {project.githubUrl && (
              <Button
                size="small"
                startIcon={<GitHub />}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
                sx={{ textTransform: 'none' }}
              >
                Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                size="small"
                startIcon={<Launch />}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
                sx={{ textTransform: 'none' }}
              >
                Live Demo
              </Button>
            )}
            <Button
              size="small"
              endIcon={<ArrowForward />}
              sx={{ ml: 'auto', textTransform: 'none' }}
            >
              Details
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </motion.div>
  );

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #0066FF, #6C63FF)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Featured Projects
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                A showcase of my recent work and personal projects
              </Typography>
            </Box>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={staggerItem}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
              <ToggleButtonGroup
                value={selectedCategory}
                exclusive
                onChange={handleCategoryChange}
                aria-label="project categories"
                sx={{
                  '& .MuiToggleButton-root': {
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500,
                    '&.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    },
                  },
                }}
              >
                {projectCategories.map((category) => (
                  <ToggleButton key={category.key} value={category.key}>
                    {category.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </motion.div>

          {/* Featured Projects - Bento Grid */}
          {featuredProjects.length > 0 && (
            <motion.div variants={staggerContainer}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: 'text.primary',
                }}
              >
                Featured Work
              </Typography>
              <Grid container spacing={3} sx={{ mb: 6 }}>
                {featuredProjects.map((project, index) => (
                  <Grid item {...getGridSize(index, true)} key={project.id}>
                    <ProjectCard project={project} featured={true} index={index} />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <motion.div variants={staggerContainer}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: 'text.primary',
                }}
              >
                Other Projects
              </Typography>
              <Grid container spacing={3}>
                {regularProjects.map((project, index) => (
                  <Grid item {...getGridSize(index, false)} key={project.id}>
                    <ProjectCard project={project} featured={false} index={index} />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            bgcolor: 'background.paper',
          },
        }}
      >
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight={600}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <Close />
                </IconButton>
              </DialogTitle>
              
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      height: 300,
                      bgcolor: 'grey.100',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                    }}
                  >
                    <Typography variant="h2" sx={{ color: 'text.secondary', opacity: 0.3 }}>
                      {selectedProject.title.charAt(0)}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {selectedProject.longDescription}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Technologies Used
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {selectedProject.technologies.map((tech: string) => (
                        <Chip
                          key={tech}
                          label={tech}
                          variant="outlined"
                          sx={{
                            borderColor: 'primary.main',
                            color: 'primary.main',
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                  
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Year:</strong> {selectedProject.year} | <strong>Category:</strong> {selectedProject.category.toUpperCase()}
                    </Typography>
                  </Box>
                </Box>
              </DialogContent>
              
              <DialogActions sx={{ p: 3 }}>
                <Stack direction="row" spacing={2}>
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      View Code
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button
                      variant="contained"
                      startIcon={<Launch />}
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                </Stack>
              </DialogActions>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </Box>
  );
}
