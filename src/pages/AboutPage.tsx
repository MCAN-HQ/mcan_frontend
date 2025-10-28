import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Chip, Button, Divider, Stack, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import mcanLogo from '../assets/mcanlogo.jpg';

const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <Card sx={{ height: '100%', borderRadius: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
    <CardContent sx={{ py: 3 }}>
      <Typography variant="h3" color="primary" sx={{ fontWeight: 700, mb: 1 }}>{value}</Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>{label}</Typography>
    </CardContent>
  </Card>
);

const Pill: React.FC<{ text: string; color?: 'default' | 'primary' | 'success' }>= ({ text, color = 'default' }) => (
  <Chip label={text} color={color === 'success' ? 'success' : color === 'primary' ? 'primary' : undefined} sx={{ mr: 1, mb: 1, fontWeight: 600 }} />
);

const SectionHeading: React.FC<{ title: string; subtitle?: string }>= ({ title, subtitle }) => (
  <Box sx={{ textAlign: 'center', mb: 6 }}>
    <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.dark', mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>{title}</Typography>
    {subtitle && <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>{subtitle}</Typography>}
  </Box>
);

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #0D4F1C 0%, #1B5E20 50%, #2E7D32 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid xs={12} md={6}>
              <Chip 
                label="About MCAN" 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  color: 'white', 
                  fontWeight: 700, 
                  mb: 3,
                  fontSize: '1rem'
                }} 
              />
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 900, 
                  lineHeight: 1.2, 
                  mb: 3, 
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
                  color: 'white'
                }}
              >
                MUSLIM CORPERS ASSOCIATION OF NIGERIA
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  fontSize: { xs: '1rem', sm: '1.1rem' }, 
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.9)'
                }}
              >
                A religious body under the National Youth Service Corps (NYSC) Scheme established in 1978, 
                registered with CAC since 1994 and affiliated with NSCIA since 2018. Serving Islam through the Nation.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  component={RouterLink} 
                  to="/register" 
                  size="large" 
                  variant="contained" 
                  sx={{
                    backgroundColor: '#FF8F00',
                    color: 'white',
                    minHeight: 48,
                    fontSize: '1rem',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#E65100',
                    }
                  }}
                >
                  Join MCAN
                </Button>
                <Button 
                  component={RouterLink} 
                  to="/services" 
                  size="large" 
                  variant="outlined" 
                  sx={{
                    borderColor: 'rgba(255,255,255,0.6)',
                    color: 'white',
                    minHeight: 48,
                    fontSize: '1rem',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  Our Services
                </Button>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src={mcanLogo}
                  alt="MCAN Logo"
                  sx={{ 
                    width: '100%', 
                    maxWidth: 400, 
                    borderRadius: 3,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }} 
                />
              </Box>
            </Grid>
          </Grid>
          
          {/* Stats */}
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid xs={12} sm={4}>
              <StatCard label="Years of Service" value="47+" />
            </Grid>
            <Grid xs={12} sm={4}>
              <StatCard label="States & FCT" value="37" />
            </Grid>
            <Grid xs={12} sm={4}>
              <StatCard label="Annual Members" value="178,000+" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Motto & Slogan */}
      <Container maxWidth="lg" sx={{ py: 8, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Our Foundation" subtitle="Motto and Slogan that guide our mission" />
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Motto</Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontStyle: 'italic', 
                  mb: 2, 
                  lineHeight: 1.6,
                  color: 'text.primary'
                }}
              >
                "SAY: TRULY, MY PRAYER, AND MY SERVICE OF SACRIFICE, MY LIFE AND MY DEATH, ARE (ALL) FOR ALLAH, THE CHERISHER OF THE WORLDS"
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                Qur'an (Qur'an: 6/162)
              </Typography>
            </Paper>
          </Grid>
          <Grid xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Slogan</Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700, 
                  color: 'primary.dark',
                  lineHeight: 1.4
                }}
              >
                "SERVING ISLAM THROUGH THE NATION"
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Aim and Objectives */}
      <Container maxWidth="lg" sx={{ py: 8, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Our Mission" subtitle="Aim and Objectives that drive our work" />
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Our Aim</Typography>
                <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Ensuring the rights and welfare of all Muslim corps members and their communities is ensured and protected.
                </Typography>
                
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Our Objectives</Typography>
                <Box component="ol" sx={{ pl: 3, m: 0 }}>
                  <Typography component="li" sx={{ mb: 2, lineHeight: 1.6 }}>
                    To identify, organize, coordinate and direct the affairs of the Muslim Corps Members with a view to assisting them carry out their collective Islamic religious duties and responsibilities
                  </Typography>
                  <Typography component="li" sx={{ mb: 2, lineHeight: 1.6 }}>
                    To promote members' pursuit of Islamic education so as to enhance their correct understanding and practice of Islamic as a Religion and Way of Life
                  </Typography>
                  <Typography component="li" sx={{ mb: 2, lineHeight: 1.6 }}>
                    To engage in "Da'awah", i.e. Islamic propagation in both urban and rural communities and partake in general social welfare and philanthropic activities
                  </Typography>
                  <Typography component="li" sx={{ mb: 2, lineHeight: 1.6 }}>
                    To assert and defend the rights and interests of all Muslims in Nigeria and Muslim Corps members in particular
                  </Typography>
                  <Typography component="li" sx={{ lineHeight: 1.6 }}>
                    To liaise and work hand-in hand with other organizations with similar aims and objectives
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Our Challenges</Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                  For every organisation to attain sustainability, development and ensure continuity, there are three major factors that cannot be underestimated:
                </Typography>
                <Box component="ol" sx={{ pl: 3, m: 0 }}>
                  <Typography component="li" sx={{ mb: 2, lineHeight: 1.6 }}>
                    <strong>Human resources</strong> - Alhamdulillah, we have over 178,000 Muslim corps members across 36 states and the FCT annually
                  </Typography>
                  <Typography component="li" sx={{ mb: 2, lineHeight: 1.6 }}>
                    <strong>Finance and economy</strong> - This has been one of our major challenges as it is hindering our activism and establishment of MCAN Mosques and Lodges
                  </Typography>
                  <Typography component="li" sx={{ lineHeight: 1.6 }}>
                    <strong>Enabling environment</strong> - Overtime, we used to enjoy both our rights and privileges extended by the NYSC, but recently such issues have been reduced
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 3, fontStyle: 'italic' }}>
                  As at now (after 47 years of flourishing existence), there are only 47 lodges in 28 states of the federation that are having MCAN lodges and/or mosques for Muslim corps members.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Achievements */}
      <Container maxWidth="lg" sx={{ py: 8, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Our Achievements" subtitle="Alhamdulillah, since our assumption to office on 15th of March 2025" />
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>Digital Transformation</Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Developing MCAN National Website/database from 0% to 95%, an avenue that will serve in keeping our past and present records, digitalising our administrative processions and membership registration and lively tracking all MCAN property across the country. This project is expected to be completed by November 2025(in a month time), in sha Allāh.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Pill text="Website Development" color="primary" />
                  <Pill text="Database System" />
                  <Pill text="Digital Records" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>Spiritual Activities</Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Successful conduction of almost 40 congregational (Jumu'ah) prayers led by the National Ameer and sometimes National Da'wah Chairman from 20th March till date.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Pill text="Jumu'ah Prayers" color="primary" />
                  <Pill text="Spiritual Leadership" />
                  <Pill text="Community Building" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>Infrastructure Development</Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Construction of six tiled public restrooms and renovation of various facilities across the federation.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Pill text="Public Restrooms" color="primary" />
                  <Pill text="Facility Renovation" />
                  <Pill text="Infrastructure" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>Leadership Development</Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Successful organisation of the General Executive Council (GEC) Meeting and Annual National Leadership Training Workshop from 25th-29th of September in IET Headquarters, Minna, Niger State.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Pill text="GEC Meeting" color="primary" />
                  <Pill text="Leadership Training" />
                  <Pill text="Capacity Building" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Organizational Structure */}
      <Container maxWidth="lg" sx={{ py: 8, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Organizational Structure" subtitle="Our administrative hierarchy and leadership" />
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>National Executive Council (NEC)</Typography>
                <Box component="ul" sx={{ pl: 3, m: 0 }}>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Ameer (President)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Secretary General (NSG)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Ameerah</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Da'wah Chairman</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Business Chairman and Assets Maintenance Officer (AMO)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Public Relation Officer (PRO)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Assistance Secretary General (ASG)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Financial Secretary (FIN. SEC.)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>National Treasurer</Typography>
                  <Typography component="li" sx={{ lineHeight: 1.6 }}>National Auditor</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Zonal Executive Council (ZEC)</Typography>
                <Box component="ul" sx={{ pl: 3, m: 0 }}>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>Zonal Ameer/Coordinator (automatic vice to the National Ameer/President)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>Zonal Secretary General (ZSG)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>Zonal Assistance Secretary General (ZASG)</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>Zonal Da'wah Chairman</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>Zonal Project Chairman</Typography>
                  <Typography component="li" sx={{ mb: 1, lineHeight: 1.6 }}>Zonal Treasurer</Typography>
                  <Typography component="li" sx={{ lineHeight: 1.6 }}>Zonal Financial Secretary</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>State Executive Council (SEC)</Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  Responsible for coordinating state's Muslim Corpers' Affairs and managing liaison offices across their respective LGAs. All the 36 states and the FCT have a well functional executive council, working hand-in-hand with the National body, showing the peak of loyalty.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Muslim Corpers Liaison Officer (MCLO)</Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  Responsible for managing MCAN members and property in their respective LGAs in every local government of the federation. Currently MCAN has over 600 LGAs with liaison offices and functional executive council.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ background: 'linear-gradient(135deg, #0D4F1C 0%, #1B5E20 50%, #2E7D32 100%)', color: 'white', py: 8 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={8}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
                Join MCAN Today
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                Be part of a nationwide network of Muslim corps members serving Islam and the Nation. 
                With over 178,000 members annually across 37 states and FCT, MCAN is the largest Muslim organization in the NYSC scheme.
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { md: 'flex-end' } }}>
                <Button 
                  component={RouterLink} 
                  to="/register" 
                  size="large" 
                  variant="contained" 
                  sx={{
                    backgroundColor: '#FF8F00',
                    color: 'white',
                    minHeight: 48,
                    fontSize: '1rem',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#E65100',
                    }
                  }}
                >
                  Register Now
                </Button>
                <Button 
                  component={RouterLink} 
                  to="/contact" 
                  size="large" 
                  variant="outlined" 
                  sx={{ 
                    color: 'white', 
                    borderColor: 'rgba(255,255,255,0.6)',
                    minHeight: 48,
                    fontSize: '1rem',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;