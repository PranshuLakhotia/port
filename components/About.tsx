'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Avatar,
  Stack,
  useTheme,
} from '@mui/material';
import {
  LocationOn,
  School,
  Work,
  Download,
  Code,
  Psychology,
  Rocket,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, cardHover } from '../lib/animations';

const quickFacts = [
  { icon: <LocationOn />, label: 'Location', value: 'India' },
  { icon: <School />, label: 'Education', value: 'B.Tech CSE' },
  { icon: <Work />, label: 'Experience', value: '2+ Years' },
  { icon: <Code />, label: 'Projects', value: '15+ Completed' },
];

const highlights = [
  {
    icon: <Code />,
    title: 'Full Stack Development',
    description: 'Expertise in modern web technologies including React, Next.js, Node.js, and cloud platforms.',
  },
  {
    icon: <Psychology />,
    title: 'AI/ML Integration',
    description: 'Experience in integrating machine learning models and AI services into web applications.',
  },
  {
    icon: <Rocket />,
    title: 'Performance Optimization',
    description: 'Passionate about creating fast, scalable, and user-friendly applications.',
  },
];

export default function About() {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="about"
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
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                About Me
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
                Passionate developer with a love for creating innovative solutions
                and learning new technologies
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} alignItems="center">
            {/* Left Side - Image and Quick Facts */}
            <Grid item xs={12} md={5}>
              <motion.div variants={fadeInLeft}>
                <Stack spacing={4}>
                  {/* Avatar */}
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Avatar
                        sx={{
                          width: { xs: 200, md: 280 },
                          height: { xs: 200, md: 280 },
                          bgcolor: 'primary.main',
                          fontSize: { xs: '3rem', md: '4rem' },
                          fontWeight: 700,
                          boxShadow: 4,
                        }}
                      >
                        PA
                      </Avatar>
                    </motion.div>
                  </Box>

                  {/* Quick Facts */}
                  <Grid container spacing={2}>
                    {quickFacts.map((fact, index) => (
                      <Grid item xs={6} key={fact.label}>
                        <motion.div
                          variants={staggerItem}
                          custom={index}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Card
                            sx={{
                              p: 2,
                              textAlign: 'center',
                              height: '100%',
                              bgcolor: 'background.paper',
                              boxShadow: 2,
                              '&:hover': {
                                boxShadow: 4,
                                transform: 'translateY(-2px)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <Box sx={{ color: 'primary.main', mb: 1 }}>
                              {fact.icon}
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                              {fact.label}
                            </Typography>
                            <Typography variant="subtitle2" fontWeight={600}>
                              {fact.value}
                            </Typography>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </motion.div>
            </Grid>

            {/* Right Side - Content */}
            <Grid item xs={12} md={7}>
              <motion.div variants={fadeInRight}>
                <Stack spacing={4}>
                  {/* Bio */}
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}
                    >
                      Hi there! I'm Pranshu 👋
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        mb: 3,
                        fontSize: '1.1rem',
                      }}
                    >
                      I'm a passionate Full Stack Developer with over 2 years of experience 
                      in creating modern web applications. I specialize in React, Next.js, 
                      and have a keen interest in AI/ML technologies.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        mb: 3,
                        fontSize: '1.1rem',
                      }}
                    >
                      My journey started with a curiosity about how websites work, and it has 
                      evolved into a passion for building scalable, user-friendly applications 
                      that solve real-world problems. I love learning new technologies and 
                      staying up-to-date with the latest industry trends.
                    </Typography>
                  </Box>

                  {/* Skills Tags */}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Core Technologies
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {[
                        'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
                        'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
                      ].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Chip
                            label={skill}
                            variant="outlined"
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>

                  {/* Download Resume Button */}
                  <Box>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        startIcon={<Download />}
                        sx={{
                          borderRadius: 3,
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                        }}
                      >
                        Download Resume
                      </Button>
                    </motion.div>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>

          {/* Highlights Section */}
          <motion.div variants={staggerItem}>
            <Box sx={{ mt: 8 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  textAlign: 'center',
                  color: 'text.primary',
                }}
              >
                What I Bring to the Table
              </Typography>
              <Grid container spacing={3}>
                {highlights.map((highlight, index) => (
                  <Grid item xs={12} md={4} key={highlight.title}>
                    <motion.div
                      variants={cardHover}
                      initial="rest"
                      whileHover="hover"
                      custom={index}
                    >
                      <Card
                        sx={{
                          p: 3,
                          height: '100%',
                          textAlign: 'center',
                          bgcolor: 'background.paper',
                          border: '1px solid',
                          borderColor: 'divider',
                          '&:hover': {
                            borderColor: 'primary.main',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Box
                          sx={{
                            color: 'primary.main',
                            mb: 2,
                            '& svg': { fontSize: 40 },
                          }}
                        >
                          {highlight.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
                        >
                          {highlight.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                          {highlight.description}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
