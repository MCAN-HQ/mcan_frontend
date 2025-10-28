import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Chip, Button, Divider, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import mcanLogo from '../assets/mcanlogo.jpg';

const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <Card sx={{ height: '100%', borderRadius: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
    <CardContent>
      <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 1 }}>{value}</Typography>
      <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
    </CardContent>
  </Card>
);

const Pill: React.FC<{ text: string; color?: 'default' | 'primary' | 'success' }>= ({ text, color = 'default' }) => (
  <Chip label={text} color={color === 'success' ? 'success' : color === 'primary' ? 'primary' : undefined} sx={{ mr: 1, mb: 1, fontWeight: 600 }} />
);

const SectionHeading: React.FC<{ title: string; subtitle?: string }>= ({ title, subtitle }) => (
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.dark', mb: 1 }}>{title}</Typography>
    {subtitle && <Typography variant="subtitle1" color="text.secondary">{subtitle}</Typography>}
  </Box>
);

const AboutPage: React.FC = () => {
  return (
    <Box>
      {/* Hero */}
      <Box className="islamic-pattern" sx={{ bgcolor: 'var(--mcan-background)', pt: { xs: 6, md: 12 }, pb: { xs: 4, md: 10 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 4, lg: 6 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            <Grid xs={12} md={6}>
              <Chip label="About MCAN" color="primary" sx={{ fontWeight: 700, mb: { xs: 1, md: 2 }, fontSize: { xs: '0.8rem', sm: '0.9rem' } }} />
              <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: { xs: 1.2, md: 1.1 }, color: 'primary.dark', mb: { xs: 1, md: 2 }, fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.5rem' } }}>
                MUSLIM CORPERS ASSOCIATION OF NIGERIA (MCAN)
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, lineHeight: { xs: 1.4, md: 1.6 } }}>
                Muslim Corpers Association of Nigeria (MCAN) as the acronym implies is a religious body under the National Youth Service Corps (NYSC) Scheme established in 1978, registered with the Corporate Affairs Commission (CAC) since 1994 and affiliated with the Nigeria Supreme Council for Islamic Affairs (NSCIA) since 2018, a sister body to other Muslim Organisations across the Federation.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 2 }}>
                <Button 
                  component={RouterLink} 
                  to="/register" 
                  size="large" 
                  variant="contained" 
                  color="primary"
                  sx={{
                    minHeight: { xs: 44, sm: 48 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 }
                  }}
                >
                  Register
                </Button>
                <Button 
                  component={RouterLink} 
                  to="/services" 
                  size="large" 
                  variant="outlined" 
                  color="primary"
                  sx={{
                    minHeight: { xs: 44, sm: 48 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 }
                  }}
                >
                  Explore Programs
                </Button>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className="islamic-border" sx={{ p: 1, borderRadius: 2 }}>
                  <Box component="img" src={mcanLogo} alt="MCAN Logo" sx={{ width: '100%', maxWidth: 420, borderRadius: 2 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid xs={12} sm={4}><StatCard label="Years of Service" value="47+" /></Grid>
            <Grid xs={12} sm={4}><StatCard label="States & FCT" value="37" /></Grid>
            <Grid xs={12} sm={4}><StatCard label="Annual Members" value="178,000+" /></Grid>
          </Grid>
        </Container>
      </Box>

      {/* Motto & Slogan */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Motto & Slogan" subtitle="Our guiding principles" />
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderTop: '4px solid', borderColor: 'primary.main' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Motto</Typography>
                <Typography color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                  "SAY: TRULY, MY PRAYER, AND MY SERVICE OF SACRIFICE, MY LIFE AND MY DEATH, ARE (ALL) FOR ALLAH, THE CHERISHER OF THE WORLDS"
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Qur'an (Qur'an: 6/162)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', borderTop: '4px solid', borderColor: 'primary.main' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Slogan</Typography>
                <Typography color="text.secondary" sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
                  "SERVING ISLAM THROUGH THE NATION"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Registered Office */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Registered Office" subtitle="Our headquarters and administrative structure" />
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>National Headquarters</Typography>
                <Typography color="text.secondary">
                  Plot 1065, NIQS Crescent, Opposite Maryam Apartment, Mabushi, FCT Abuja.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>State Branches</Typography>
                <Typography color="text.secondary">
                  The State Branches shall have Administrative Secretariats in their respective State Capital.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Zonal Secretariats</Typography>
                <Typography color="text.secondary">
                  The Zones shall site their respective Secretariats at places where it will be administratively convenient and economically manageable within the Zone.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Aim and Objectives */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Aim and Objectives" subtitle="What we are organized to achieve" />
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>Aim</Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Ensuring the rights and welfare of all Muslim corps members and their communities is ensured and protected.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>Objectives</Typography>
                <Typography component="ol" sx={{ pl: 3 }}>
                  <li>To identify, organize, coordinate and direct the affairs of the Muslim Corps Members with a view to assisting them carry out their collective Islamic religious duties and responsibilities;</li>
                  <li>To promote members' pursuit of Islamic education so as to enhance their correct understanding and practice of Islamic as a Religion and Way of Life;</li>
                  <li>To engage in "Da'awah", i.e. Islamic propagation in both urban and rural communities and partake in general social welfare and philanthropic and activities especially in the prison yards, hospitals, remand homes and orphanages in line with the Islamic principles of charity.</li>
                  <li>To assert and defend the rights and interests of all Muslims in Nigeria and Muslim Corps members in particular;</li>
                  <li>To liaise and work hand-in hand with other organizations with similar aims and objectives.</li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Our Challenges</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  For every organisation to attain sustainability, development and ensure continuity, there are three major factors that cannot be underestimated:
                </Typography>
                <Typography component="ol" sx={{ pl: 3, mb: 3 }}>
                  <li><strong>Human resources</strong> - Alhamdulillah, we have over 178,000 Muslim corps members across 36 states and the FCT annually.</li>
                  <li><strong>Finance and economy</strong> - This has been one of our major challenges as it is hindering our activism and establishment of MCAN Mosques and Lodges, schools and Business centres across the federation.</li>
                  <li><strong>Enabling environment</strong> - Overtime, we used to enjoy both our rights and privileges extended by the NYSC, but recently such issues have been reduced.</li>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  As at now (after 47 years of flourishing existence), there are only 47 lodges in 28 states of the federation that are having MCAN lodges and/or mosques for Muslim corps members.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Achievements */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Our Achievements" subtitle="Alhamdulillah, since our assumption to office on 15th of March 2025" />
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Digital Transformation</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Developing MCAN National Website/database from 0% to 95%, an avenue that will serve in keeping our past and present records, digitalising our administrative processions and membership registration and lively tracking all MCAN property across the country. This project is expected to be completed by November 2025(in a month time), in sha Allāh.
                </Typography>
                <Pill text="Website Development" color="primary" />
                <Pill text="Database System" />
                <Pill text="Digital Records" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Spiritual Activities</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Successful conduction of almost 40 congregational (Jumu'ah) prayers led by the National Ameer and sometimes National Da'wah Chairman from 20th March till date.
                </Typography>
                <Pill text="Jumu'ah Prayers" color="primary" />
                <Pill text="Spiritual Leadership" />
                <Pill text="Community Building" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Infrastructure Development</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Construction of six tiled public restrooms and renovation of various facilities across the federation.
                </Typography>
                <Pill text="Public Restrooms" color="primary" />
                <Pill text="Facility Renovation" />
                <Pill text="Infrastructure" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Leadership Development</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Successful organisation of the General Executive Council (GEC) Meeting and Annual National Leadership Training Workshop from 25th-29th of September in IET Headquarters, Minna, Niger State.
                </Typography>
                <Pill text="GEC Meeting" color="primary" />
                <Pill text="Leadership Training" />
                <Pill text="Capacity Building" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Organizational Structure */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Organizational Structure" subtitle="Our administrative hierarchy" />
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>National Executive Council (NEC)</Typography>
                <Typography component="ul" sx={{ pl: 3 }}>
                  <li>National Ameer (President)</li>
                  <li>National Secretary General (NSG)</li>
                  <li>National Ameerah</li>
                  <li>National Da'wah Chairman</li>
                  <li>National Business Chairman and Assets Maintenance Officer (AMO)</li>
                  <li>National Public Relation Officer (PRO)</li>
                  <li>National Assistance Secretary General (ASG)</li>
                  <li>National Financial Secretary (FIN. SEC.)</li>
                  <li>National Treasurer</li>
                  <li>National Auditor</li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Zonal Executive Council (ZEC)</Typography>
                <Typography component="ul" sx={{ pl: 3 }}>
                  <li>Zonal Ameer/Coordinator (automatic vice to the National Ameer/President)</li>
                  <li>Zonal Secretary General (ZSG)</li>
                  <li>Zonal Assistance Secretary General (ZASG)</li>
                  <li>Zonal Da'wah Chairman</li>
                  <li>Zonal Project Chairman</li>
                  <li>Zonal Treasurer</li>
                  <li>Zonal Financial Secretary</li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>State Executive Council (SEC)</Typography>
                <Typography color="text.secondary">
                  Responsible for coordinating state's Muslim Corpers' Affairs and managing liaison offices across their respective LGAs. All the 36 states and the FCT have a well functional executive council, working hand-in-hand with the National body, showing the peak of loyalty.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Muslim Corpers Liaison Officer (MCLO)</Typography>
                <Typography color="text.secondary">
                  Responsible for managing MCAN members and property in their respective LGAs in every local government of the federation. Currently MCAN has over 600 LGAs with liaison offices and functional executive council.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Programs */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Programs" subtitle="Aligned with the NYSC calendar for maximum impact" />
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Pre-Orientation</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  The programme is aimed at raising the consciousness of Potential Corps Members (PCMs) in higher institutions within the country. Here, MCAN liaises with Muslim Students' Society of Nigeria (MSSN) by jointly organising seminars to familiarise PCMs with the aims and objectives of MCAN and NYSC.
                </Typography>
                <Pill text="Seminars" color="primary" />
                <Pill text="Virtual Engagements" />
                <Pill text="Campus Outreach" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Orientation Camp</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  The programme commences as the orientation camp opens for each stream across the country. Here, MCAN members identify and mobilise Muslim corps members to provide an atmosphere for the pursuit of Islamic personal development and closer interaction between Muslim corps members of different backgrounds.
                </Typography>
                <Pill text="Da'wah Programmes" color="primary" />
                <Pill text="Qur'an Recitation" />
                <Pill text="Humanitarian Works" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Post-Orientation</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  The post-orientation activities run from when corps members leave orientation camps to few days after their passing-out parade (POP). These activities are generally divided into three categories: Da'wah programmes, visitation programmes and community development programmes.
                </Typography>
                <Pill text="Weekly Programmes" color="primary" />
                <Pill text="Visitation Programmes" />
                <Pill text="Community Development" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Annual Programs */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionHeading title="Annual Programs" subtitle="Major events and activities" />
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>General Executive Council (GEC) Meeting</Typography>
                <Typography color="text.secondary">
                  Where all the national, zonal and state executives come to give details of their achievements and challenges at each level and look into the progress, share ideas on how to make MCAN great nationwide and physically interact and address pressing universal issues.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>National Convention</Typography>
                <Typography color="text.secondary">
                  Annual gathering of all MCAN members and stakeholders to review progress, set new goals, and strengthen the bonds of brotherhood and sisterhood across the nation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
          <Grid container spacing={3} alignItems="center">
            <Grid xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>Join MCAN</Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                Be part of a nationwide network of Muslim corps members serving Islam and the Nation. With over 178,000 members annually across 37 states and FCT, MCAN is the largest Muslim organization in the NYSC scheme.
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { md: 'flex-end' } }}>
                <Button component={RouterLink} to="/register" size="large" variant="contained" color="secondary">
                  Register Now
                </Button>
                <Button component={RouterLink} to="/contact" size="large" variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
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