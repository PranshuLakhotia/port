'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Send,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, Controller } from 'react-hook-form';
import { fadeInUp, staggerContainer, staggerItem, cardHover } from '../lib/animations';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: <Email />,
    title: 'Email',
    value: 'pranshu@example.com',
    href: 'mailto:pranshu@example.com',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: <LocationOn />,
    title: 'Location',
    value: 'India',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: <GitHub />,
    title: 'GitHub',
    href: 'https://github.com/pranshu-lakhotia',
  },
  {
    icon: <LinkedIn />,
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/pranshu-lakhotia',
  },
  {
    icon: <Email />,
    title: 'Email',
    href: 'mailto:pranshu@example.com',
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success',
      });
      reset();
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 30% 70%, rgba(77, 148, 255, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 70%, rgba(0, 102, 255, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                Get In Touch
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
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <motion.div variants={fadeInUp}>
                <Stack spacing={3}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    Let's Connect
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and development.
                  </Typography>

                  {/* Contact Info Cards */}
                  <Stack spacing={2}>
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        variants={staggerItem}
                        custom={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card
                          component={info.href !== '#' ? 'a' : 'div'}
                          href={info.href !== '#' ? info.href : undefined}
                          sx={{
                            p: 2,
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            textDecoration: 'none',
                            color: 'inherit',
                            cursor: info.href !== '#' ? 'pointer' : 'default',
                            '&:hover': {
                              borderColor: 'primary.main',
                              boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                color: 'primary.main',
                                p: 1,
                                borderRadius: 2,
                                bgcolor: `${theme.palette.primary.main}10`,
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" color="text.secondary">
                                {info.title}
                              </Typography>
                              <Typography variant="body1" fontWeight={500}>
                                {info.value}
                              </Typography>
                            </Box>
                          </Box>
                        </Card>
                      </motion.div>
                    ))}
                  </Stack>

                  {/* Social Links */}
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 2,
                      }}
                    >
                      Follow Me
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      {socialLinks.map((link, index) => (
                        <motion.div
                          key={link.title}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <IconButton
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              bgcolor: 'background.paper',
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
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    p: 4,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 4,
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 3,
                      }}
                    >
                      Send Message
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Stack spacing={3}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <Controller
                              name="name"
                              control={control}
                              rules={{ required: 'Name is required' }}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  label="Full Name"
                                  error={!!errors.name}
                                  helperText={errors.name?.message}
                                  sx={{
                                    '& .MuiOutlinedInput-root': {
                                      '&:hover fieldset': {
                                        borderColor: 'primary.main',
                                      },
                                    },
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Controller
                              name="email"
                              control={control}
                              rules={{
                                required: 'Email is required',
                                pattern: {
                                  value: /^\S+@\S+$/i,
                                  message: 'Invalid email address',
                                },
                              }}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  label="Email Address"
                                  type="email"
                                  error={!!errors.email}
                                  helperText={errors.email?.message}
                                  sx={{
                                    '& .MuiOutlinedInput-root': {
                                      '&:hover fieldset': {
                                        borderColor: 'primary.main',
                                      },
                                    },
                                  }}
                                />
                              )}
                            />
                          </Grid>
                        </Grid>

                        <Controller
                          name="subject"
                          control={control}
                          rules={{ required: 'Subject is required' }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Subject"
                              error={!!errors.subject}
                              helperText={errors.subject?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          )}
                        />

                        <Controller
                          name="message"
                          control={control}
                          rules={{ required: 'Message is required' }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Message"
                              multiline
                              rows={5}
                              error={!!errors.message}
                              helperText={errors.message?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          )}
                        />

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={loading}
                            startIcon={loading ? <CheckCircle /> : <Send />}
                            sx={{
                              py: 1.5,
                              px: 4,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              borderRadius: 3,
                              textTransform: 'none',
                            }}
                          >
                            {loading ? 'Sending...' : 'Send Message'}
                          </Button>
                        </motion.div>
                      </Stack>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
