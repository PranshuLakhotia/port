'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowDown,
  Download,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, floating, pulse } from '../lib/animations';

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'AI/ML Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <GitHub />, href: 'https://github.com/pranshu-lakhotia', label: 'GitHub' },
    { icon: <LinkedIn />, href: 'https://linkedin.com/in/pranshu-lakhotia', label: 'LinkedIn' },
    { icon: <Email />, href: 'mailto:pranshu@example.com', label: 'Email' },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'transparent',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                Hello, I'm
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #4D94FF, #9C96FF, #FF6B9D)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(77, 148, 255, 0.5)',
                  animation: 'glow 2s ease-in-out infinite alternate',
                  '@keyframes glow': {
                    from: {
                      textShadow: '0 0 20px rgba(77, 148, 255, 0.5), 0 0 30px rgba(156, 150, 255, 0.3)',
                    },
                    to: {
                      textShadow: '0 0 30px rgba(77, 148, 255, 0.8), 0 0 40px rgba(156, 150, 255, 0.6)',
                    },
                  },
                }}
              >
                Pranshu Lakhotia
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Box sx={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 400,
                    minHeight: '1.2em',
                  }}
                >
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ 
                      color: theme.palette.primary.main,
                      marginLeft: '2px'
                    }}
                  >
                    |
                  </motion.span>
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '500px',
                  lineHeight: 1.7,
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Passionate about creating innovative web solutions with modern technologies. 
                Specializing in React, Next.js, and AI/ML integration to build impactful digital experiences.
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => handleScroll('projects')}
                    sx={{
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                    }}
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
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
              </Stack>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 1.0 }}
            >
              <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <IconButton
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 2,
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'primary.contrastText',
                          boxShadow: 4,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Box>

          {/* Right Content - Animated Avatar/Illustration */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                variants={floating}
                animate="animate"
              >
                <Box
                  sx={{
                    width: { xs: 280, md: 400 },
                    height: { xs: 280, md: 400 },
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -4,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      opacity: 0.3,
                      filter: 'blur(10px)',
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: { xs: '4rem', md: '6rem' },
                    }}
                  >
                    PA
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Box>
        </Stack>

        {/* Scroll Indicator */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            variants={pulse}
            animate="animate"
          >
            <IconButton
              onClick={() => handleScroll('about')}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                },
              }}
            >
              <KeyboardArrowDown sx={{ fontSize: 32 }} />
            </IconButton>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
