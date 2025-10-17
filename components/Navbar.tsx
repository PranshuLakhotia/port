'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme as useMUITheme,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../lib/ThemeProvider';
import { fadeInDown, slideInFromRight } from '../lib/animations';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMUITheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromRight}
    >
      <Box sx={{ width: 250, height: '100%', bgcolor: 'background.paper' }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            Portfolio
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem 
                button 
                onClick={() => handleNavClick(item.href)}
                sx={{
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '& .MuiListItemText-primary': {
                      color: 'inherit',
                    },
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            </motion.div>
          ))}
          <ListItem>
            <IconButton onClick={toggleTheme} color="primary">
              {mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </motion.div>
  );

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
      >
        <AppBar
          position="fixed"
          elevation={scrolled ? 4 : 0}
          sx={{
            bgcolor: scrolled 
              ? mode === 'dark' 
                ? 'rgba(26, 26, 26, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease-in-out',
            borderBottom: scrolled ? `1px solid ${muiTheme.palette.divider}` : 'none',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #0066FF, #6C63FF)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleNavClick('#home')}
                >
                  Pranshu Lakhotia
                </Typography>
              </motion.div>

              {!isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        color="inherit"
                        onClick={() => handleNavClick(item.href)}
                        sx={{
                          mx: 1,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: 0,
                            height: '2px',
                            bottom: 0,
                            left: '50%',
                            bgcolor: 'primary.main',
                            transition: 'all 0.3s ease',
                            transform: 'translateX(-50%)',
                          },
                          '&:hover::after': {
                            width: '100%',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton onClick={toggleTheme} color="primary">
                      {mode === 'dark' ? <LightMode /> : <DarkMode />}
                    </IconButton>
                  </motion.div>
                </Box>
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        <AnimatePresence>
          {mobileOpen && drawer}
        </AnimatePresence>
      </Drawer>
    </>
  );
}
