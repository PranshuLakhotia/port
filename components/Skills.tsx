'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  ToggleButtonGroup,
  ToggleButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, getSkillsByCategory, skillCategories } from '../data/skills';
import { fadeInUp, staggerContainer, staggerItem, progressBar } from '../lib/animations';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const filteredSkills = getSkillsByCategory(selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 85) return theme.palette.success.main;
    if (level >= 70) return theme.palette.primary.main;
    if (level >= 50) return theme.palette.warning.main;
    return theme.palette.error.main;
  };

  const getSkillLevel = (level: number) => {
    if (level >= 85) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
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
                Skills & Technologies
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
                A comprehensive overview of my technical skills and proficiency levels
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
                aria-label="skill categories"
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
                {skillCategories.map((category) => (
                  <ToggleButton key={category.key} value={category.key}>
                    {category.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={staggerContainer}>
            <Grid container spacing={3}>
              {filteredSkills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={skill.name}>
                  <motion.div
                    variants={staggerItem}
                    custom={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        height: '100%',
                        bgcolor: 'background.default',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          borderColor: getSkillColor(skill.level),
                          boxShadow: `0 4px 20px ${getSkillColor(skill.level)}20`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        {/* Skill Header */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: getSkillColor(skill.level),
                              fontWeight: 600,
                              bgcolor: `${getSkillColor(skill.level)}20`,
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                            }}
                          >
                            {getSkillLevel(skill.level)}
                          </Typography>
                        </Box>

                        {/* Progress Bar */}
                        <Box sx={{ mb: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              Proficiency
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight={600}>
                              {skill.level}%
                            </Typography>
                          </Box>
                          <Box sx={{ position: 'relative' }}>
                            <LinearProgress
                              variant="determinate"
                              value={100}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                bgcolor: 'grey.200',
                                '& .MuiLinearProgress-bar': {
                                  bgcolor: 'grey.300',
                                  borderRadius: 4,
                                },
                              }}
                            />
                            <motion.div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                borderRadius: 4,
                                background: `linear-gradient(90deg, ${getSkillColor(skill.level)}, ${getSkillColor(skill.level)}aa)`,
                              }}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{
                                duration: 1.5,
                                delay: index * 0.1,
                                ease: 'easeOut',
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Skill Category Badge */}
                        <Box sx={{ mt: 2 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.secondary',
                              textTransform: 'uppercase',
                              letterSpacing: 1,
                              fontWeight: 500,
                            }}
                          >
                            {skill.category.replace('_', ' ')}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={staggerItem}>
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 1,
                        }}
                      >
                        {skills.length}+
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Technologies
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: 'success.main',
                          mb: 1,
                        }}
                      >
                        {skills.filter(s => s.level >= 85).length}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Expert Level
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: 'warning.main',
                          mb: 1,
                        }}
                      >
                        2+
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Years Experience
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: 'secondary.main',
                          mb: 1,
                        }}
                      >
                        15+
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Projects Built
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
