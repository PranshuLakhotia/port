'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <GitHub />, href: 'https://github.com/pranshu-lakhotia', label: 'GitHub' },
  { icon: <LinkedIn />, href: 'https://linkedin.com/in/pranshu-lakhotia', label: 'LinkedIn' },
  { icon: <Email />, href: 'mailto:pranshulakhotia@gmail.com', label: 'Email' },
];

export default function Footer() {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Main Footer Content */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={4}
          >
            {/* Brand */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #0066FF, #6C63FF)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1,
                }}
              >
                Pranshu Lakhotia
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '300px',
                  lineHeight: 1.6,
                }}
              >
                Full Stack Developer passionate about creating innovative solutions 
                with modern technologies.
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 4 }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle2" fontWeight={600} color="text.primary">
                  Navigation
                </Typography>
                {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    component="a"
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
              
              <Stack spacing={1}>
                <Typography variant="subtitle2" fontWeight={600} color="text.primary">
                  More
                </Typography>
                {['Experience', 'Contact'].map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    component="a"
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>

            {/* Social Links */}
            <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="subtitle2" fontWeight={600} color="text.primary">
                Connect
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        bgcolor: 'background.default',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'primary.contrastText',
                          borderColor: 'primary.main',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </Stack>
          </Stack>

          <Divider />

          {/* Bottom Footer */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © {new Date().getFullYear()} Pranshu Lakhotia. All rights reserved.
            </Typography>
            
            <Stack direction="row" spacing={3}>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                }}
              >
                Built with Next.js, MUI & Framer Motion
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Scroll to Top Button */}
        <motion.div
          style={{
            position: 'absolute',
            top: -25,
            right: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: 4,
              '&:hover': {
                bgcolor: 'primary.dark',
                boxShadow: 6,
              },
              transition: 'all 0.3s ease',
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        </motion.div>
      </Container>
    </Box>
  );
}
