import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  Chip,
  Stack,
  Fade,
  Slide,
  Zoom,
} from '@mui/material';
import {
  People,
  Business,
  LocationOn,
  TrendingUp,
  Security,
  Support,
  ArrowForward,
  PlayArrow,
  Mosque,
  DirectionsBus,
  HomeWork,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import mcanLogo from '../assets/mcanlogo.jpg';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { 
      label: 'Annual Members', 
      value: '178,000+', 
      icon: <People sx={{ fontSize: 40 }} />, 
      gradient: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
      description: 'Muslim Corps Members'
    },
    { 
      label: 'States & FCT', 
      value: '37', 
      icon: <LocationOn sx={{ fontSize: 40 }} />, 
      gradient: 'linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)',
      description: 'Across Nigeria'
    },
    { 
      label: 'Years of Service', 
      value: '47+', 
      icon: <TrendingUp sx={{ fontSize: 40 }} />, 
      gradient: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)',
      description: 'Dedicated Service'
    },
    { 
      label: 'MCAN Lodges', 
      value: '47', 
      icon: <Business sx={{ fontSize: 40 }} />, 
      gradient: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)',
      description: 'In 28 States'
    },
  ];

  const features = [
    {
      title: 'Digital e-ID Cards',
      description: 'Generate and manage your MCAN digital identity card with QR code verification and blockchain security.',
      icon: <Security sx={{ fontSize: 48 }} />,
      gradient: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
      benefits: ['QR Code Verification', 'Blockchain Security', 'Instant Generation', 'Mobile Access']
    },
    {
      title: 'Smart Payment System',
      description: 'Consent-based monthly deduction system with transparent financial tracking and real-time analytics.',
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      gradient: 'linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)',
      benefits: ['Auto Deduction', 'Real-time Analytics', 'Transparent Tracking', 'Mobile Payments']
    },
    {
      title: 'Property Management',
      description: 'Comprehensive management of MCAN properties including lodges, buses, masjids with IoT integration.',
      icon: <Business sx={{ fontSize: 48 }} />,
      gradient: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)',
      benefits: ['IoT Integration', 'Real-time Monitoring', 'Maintenance Tracking', 'Booking System']
    },
    {
      title: '24/7 Member Support',
      description: 'AI-powered support system with human backup for all MCAN members across Nigeria.',
      icon: <Support sx={{ fontSize: 48 }} />,
      gradient: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)',
      benefits: ['AI Chatbot', 'Human Support', 'Multi-language', 'Quick Response']
    },
  ];

  const services = [
    {
      title: 'Lodges',
      description: 'State-managed accommodation facilities',
      icon: <HomeWork sx={{ fontSize: 32 }} />,
      count: '50+',
      mainColor: theme.palette.primary.main,
      lightColor: theme.palette.primary.light
    },
    {
      title: 'Transportation',
      description: 'Transport assets and logistics',
      icon: <DirectionsBus sx={{ fontSize: 32 }} />,
      count: '30+',
      mainColor: theme.palette.secondary.main,
      lightColor: theme.palette.secondary.light
    },
    {
      title: 'Masjids',
      description: 'Prayer spaces and Islamic centers',
      icon: <Mosque sx={{ fontSize: 32 }} />,
      count: '25+',
      mainColor: theme.palette.success.main,
      lightColor: theme.palette.success.light
    },
  ];


  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)'
            : 'linear-gradient(135deg, #0D4F1C 0%, #1B5E20 50%, #2E7D32 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.06) 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.02) 50%, transparent 70%)
            `,
            zIndex: 1,
          }}
        />
        
        {/* Floating Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 1,
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            zIndex: 1,
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: { xs: 1, sm: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            <Grid xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Fade in={isVisible} timeout={1000}>
                <Box sx={{ px: { xs: 1, sm: 0 } }}>
                  <Chip
                    label="Serving Islam Through the Nation"
                    sx={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      color: 'white',
                      fontWeight: 600,
                      mb: { xs: 2, md: 4 },
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 0.5, sm: 1 },
                    }}
                  />
                  
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.5rem', lg: '3.5rem' },
                      fontWeight: 900,
                      lineHeight: { xs: 1.2, md: 1.1 },
                      mb: { xs: 2, md: 4 },
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E0E0E0 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      letterSpacing: '-0.02em',
                      textAlign: { xs: 'center', md: 'left' },
                      px: { xs: 1, sm: 0 }
                    }}
                  >
                    Muslim Corpers Association of Nigeria
                  </Typography>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      mb: { xs: 2, md: 4 },
                      opacity: 0.95,
                      fontWeight: 400,
                      lineHeight: { xs: 1.4, md: 1.6 },
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                      maxWidth: { xs: '100%', md: '90%' },
                      textAlign: { xs: 'center', md: 'left' },
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    A religious body under the National Youth Service Corps (NYSC) Scheme established in 1978, 
                    registered with CAC since 1994 and affiliated with NSCIA since 2018. Serving Islam through the Nation.
                  </Typography>
                  
                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={{ xs: 1.5, sm: 2 }}
                    sx={{ 
                      width: { xs: '100%', sm: 'auto' },
                      alignItems: { xs: 'center', sm: 'flex-start' },
                      px: { xs: 1, sm: 0 }
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      onClick={() => navigate('/register')}
                      sx={{
                        background: 'linear-gradient(135deg, #FF8F00 0%, #FFB74D 100%)',
                        color: 'white',
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1.2, sm: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 700,
                        borderRadius: 3,
                        boxShadow: '0 6px 20px rgba(255, 143, 0, 0.3)',
                        textTransform: 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        minHeight: { xs: 44, sm: 48 },
                        width: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #E65100 0%, #FF9800 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(255, 143, 0, 0.4)',
                        },
                      }}
                    >
                      Join MCAN Today
                    </Button>
                    
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<PlayArrow />}
                      onClick={() => navigate('/about')}
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.6)',
                        color: 'white',
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1.2, sm: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 700,
                        borderRadius: 3,
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        textTransform: 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        minHeight: { xs: 44, sm: 48 },
                        width: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                          borderColor: 'white',
                          background: 'rgba(255, 255, 255, 0.15)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            
            <Grid xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Fade in={isVisible} timeout={1500}>
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 0 } }}>
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -20,
                        left: -20,
                        right: -20,
                        bottom: -20,
                        background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite',
                      },
                    }}
                  >
                    <Avatar
                      src={mcanLogo}
                      sx={{
                        width: { xs: 150, sm: 200, md: 300 },
                        height: { xs: 150, sm: 200, md: 300 },
                        border: '4px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: { xs: 4, md: 8 }, background: theme.palette.background.default }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
                  lineHeight: { xs: 1.2, md: 1.1 }
                }}
              >
                Our Impact
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 600, 
                  mx: 'auto',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  px: { xs: 2, md: 0 }
                }}
              >
                Serving Islam through the Nation - Over 178,000 Muslim Corps Members annually across 37 states and FCT
              </Typography>
            </Box>
          </Fade>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {stats.map((stat, index) => (
              <Grid xs={12} sm={6} md={3} key={index}>
                <Slide direction="up" in={isVisible} timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: { xs: 2, sm: 3 },
                      height: '100%',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)'
                        : 'linear-gradient(145deg, #FFFFFF 0%, #FAFAFA 100%)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: { xs: 'none', md: 'translateY(-8px)' },
                        boxShadow: { xs: '0 4px 12px rgba(0, 0, 0, 0.1)', md: '0 20px 40px rgba(0, 0, 0, 0.1)' },
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: stat.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          color: 'white',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          background: stat.gradient,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {stat.label}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary">
                        {stat.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 4, md: 8 }, background: theme.palette.background.paper }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
              <Chip
                label="Features"
                color="primary"
                sx={{ fontWeight: 700, mb: 2 }}
              />
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
                  lineHeight: { xs: 1.2, md: 1.1 }
                }}
              >
                Digital Solutions for Modern Corps Members
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 600, 
                  mx: 'auto',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  px: { xs: 2, md: 0 }
                }}
              >
                Digital solutions and comprehensive services designed specifically for Muslim Corps Members across Nigeria
              </Typography>
            </Box>
          </Fade>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {features.map((feature, index) => (
              <Grid xs={12} md={6} key={index}>
                <Zoom in={isVisible} timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 4,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)'
                        : 'linear-gradient(145deg, #FFFFFF 0%, #FAFAFA 100%)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: 3,
                          background: feature.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          color: 'white',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                        {feature.title}
                      </Typography>
                      
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>
                      
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <Chip
                            key={benefitIndex}
                            label={benefit}
                            size="small"
                            sx={{
                              background: 'rgba(27, 94, 32, 0.1)',
                              color: 'primary.main',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, background: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Our Services
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                Supporting Muslim Corps Members with accommodation, transportation, and spiritual services across Nigeria
              </Typography>
            </Box>
          </Fade>
          
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid xs={12} md={4} key={index}>
                <Slide direction="up" in={isVisible} timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)'
                        : 'linear-gradient(145deg, #FFFFFF 0%, #FAFAFA 100%)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${service.mainColor} 0%, ${service.lightColor} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          color: 'white',
                        }}
                      >
                        {service.icon}
                      </Box>
                      
                      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                        {service.count}
                      </Typography>
                      
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {service.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* CTA Section */}
      <Box
        sx={{
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)'
            : 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>
                Ready to Join MCAN?
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                Join Nigeria's largest Muslim Corps Members community with over 178,000 members annually 
                across 37 states and FCT. Serving Islam through the Nation since 1978.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => navigate('/register')}
                  sx={{
                    background: 'linear-gradient(135deg, #FF8F00 0%, #FFB74D 100%)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    boxShadow: '0 8px 25px rgba(255, 143, 0, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #E65100 0%, #FF9800 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(255, 143, 0, 0.4)',
                    },
                  }}
                >
                  Register Now
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      borderColor: 'white',
                      background: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;