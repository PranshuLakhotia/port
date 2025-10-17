'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  useTheme,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Work,
  School,
  Code,
  Business,
  LocationOn,
  CalendarToday,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, getExperiencesByType, experienceTypes } from '../data/experience';
import { fadeInUp, staggerContainer, staggerItem, slideInFromLeft } from '../lib/animations';

export default function Experience() {
  const [selectedType, setSelectedType] = useState('all');
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: string,
  ) => {
    if (newType !== null) {
      setSelectedType(newType);
    }
  };

  const filteredExperiences = getExperiencesByType(selectedType);

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Work />;
      case 'education':
        return <School />;
      case 'project':
        return <Code />;
      default:
        return <Business />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work':
        return theme.palette.primary.main;
      case 'education':
        return theme.palette.success.main;
      case 'project':
        return theme.palette.secondary.main;
      default:
        return theme.palette.warning.main;
    }
  };

  return (
    <Box
      id="experience"
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
                Experience & Journey
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
                My professional journey, education, and key projects
              </Typography>
            </Box>
          </motion.div>

          {/* Type Filter */}
          <motion.div variants={staggerItem}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
              <ToggleButtonGroup
                value={selectedType}
                exclusive
                onChange={handleTypeChange}
                aria-label="experience types"
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
                {experienceTypes.map((type) => (
                  <ToggleButton key={type.key} value={type.key}>
                    {type.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={staggerContainer}>
            <Timeline position="alternate">
              {filteredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={staggerItem}
                  custom={index}
                >
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ 
                        m: 'auto 0',
                        textAlign: index % 2 === 0 ? 'right' : 'left',
                        color: 'text.secondary'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        <CalendarToday sx={{ fontSize: 16 }} />
                        <Typography variant="body2" fontWeight={500}>
                          {experience.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        <LocationOn sx={{ fontSize: 16 }} />
                        <Typography variant="body2">
                          {experience.location}
                        </Typography>
                      </Box>
                    </TimelineOppositeContent>
                    
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          bgcolor: getIconColor(experience.type),
                          p: 1,
                          border: `3px solid ${getIconColor(experience.type)}20`,
                        }}
                      >
                        {getIcon(experience.type)}
                      </TimelineDot>
                      {index < filteredExperiences.length - 1 && (
                        <TimelineConnector
                          sx={{
                            bgcolor: 'divider',
                            width: 2,
                          }}
                        />
                      )}
                    </TimelineSeparator>
                    
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card
                          sx={{
                            p: 3,
                            bgcolor: 'background.default',
                            border: '1px solid',
                            borderColor: 'divider',
                            '&:hover': {
                              borderColor: getIconColor(experience.type),
                              boxShadow: `0 4px 20px ${getIconColor(experience.type)}20`,
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <CardContent sx={{ p: 0 }}>
                            {/* Header */}
                            <Box sx={{ mb: 2 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: 600,
                                    color: 'text.primary',
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {experience.title}
                                </Typography>
                                {experience.current && (
                                  <Chip
                                    label="Current"
                                    size="small"
                                    sx={{
                                      bgcolor: 'success.main',
                                      color: 'success.contrastText',
                                      fontWeight: 500,
                                    }}
                                  />
                                )}
                              </Box>
                              
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  color: getIconColor(experience.type),
                                  fontWeight: 500,
                                  mb: 1,
                                }}
                              >
                                {experience.company}
                              </Typography>
                              
                              <Typography
                                variant="caption"
                                sx={{
                                  color: 'text.secondary',
                                  textTransform: 'uppercase',
                                  letterSpacing: 1,
                                  fontWeight: 500,
                                }}
                              >
                                {experience.type.replace('_', ' ')}
                              </Typography>
                            </Box>

                            {/* Description */}
                            <Box sx={{ mb: 3 }}>
                              <Stack spacing={1}>
                                {experience.description.map((desc, descIndex) => (
                                  <Box key={descIndex} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                    <Box
                                      sx={{
                                        width: 4,
                                        height: 4,
                                        borderRadius: '50%',
                                        bgcolor: getIconColor(experience.type),
                                        mt: 1,
                                        flexShrink: 0,
                                      }}
                                    />
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.6,
                                      }}
                                    >
                                      {desc}
                                    </Typography>
                                  </Box>
                                ))}
                              </Stack>
                            </Box>

                            {/* Technologies */}
                            <Box>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.primary',
                                  fontWeight: 500,
                                  mb: 1,
                                }}
                              >
                                Technologies:
                              </Typography>
                              <Stack direction="row" flexWrap="wrap" gap={1}>
                                {experience.technologies.map((tech) => (
                                  <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                      borderColor: getIconColor(experience.type),
                                      color: getIconColor(experience.type),
                                      fontSize: '0.75rem',
                                      '&:hover': {
                                        bgcolor: getIconColor(experience.type),
                                        color: 'white',
                                      },
                                      transition: 'all 0.2s ease',
                                    }}
                                  />
                                ))}
                              </Stack>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </TimelineContent>
                  </TimelineItem>
                </motion.div>
              ))}
            </Timeline>
          </motion.div>

          {/* Summary Stats */}
          <motion.div variants={staggerItem}>
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: 'text.primary',
                }}
              >
                Journey Highlights
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={4}
                sx={{ justifyContent: 'center' }}
              >
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
                      {experiences.filter(e => e.type === 'work').length}+
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Work Experiences
                    </Typography>
                  </Box>
                </motion.div>
                
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
                      {experiences.filter(e => e.type === 'project').length}+
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Major Projects
                    </Typography>
                  </Box>
                </motion.div>
                
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
                      2+
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Years Experience
                    </Typography>
                  </Box>
                </motion.div>
                
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
                      {new Set(experiences.flatMap(e => e.technologies)).size}+
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Technologies Used
                    </Typography>
                  </Box>
                </motion.div>
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
