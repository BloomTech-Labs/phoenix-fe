import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CTAStyles from '../../styles/CTAStyles';
import Registration from '../Authorized/Registration.js';


const tiers = [
    {
      title: 'Step 1',
      subheader: 'Register',
      
      description: ['Quick and Easy to join',
       'No crazy sign up questions',
        'Secured information ', 
        ''],
      
    },
    {
      title: 'Step 2',
      subheader: 'Find Events',
      description: [
        'Search through events.',
        'Find things you like.',
        'RSVP for events.',
        'Host your own events.',
        
      ],
    
    },
    {
      title: 'Step 3',
      subheader: 'Meet People',
      description: [
        'Meet like minded people. ',
        'Do activities. ',
        'Choice to meet with individuals or a group. ',
        
      ],
      
    },
  ];

function CTApage (){
const useStyles = CTAStyles;
const classes = useStyles();

return(
<>
    <CssBaseline />
    
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Phoenix 
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Meet up with new people, try new activites and build long lasting friendships (maybe more). You may have had a hard road but welcome to easy street! 
        Welcome to Phoenix! 
        </Typography>
      </Container>
    <Container maxWidth="md" component="main">
    <Grid container spacing={5} alignItems="flex-end">
      {tiers.map((tier) => (
        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
          <Card>
            <CardHeader
              title={tier.title}
              subheader={tier.subheader}
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
              action={tier.title === 'Pro' }
              className={classes.cardHeader}
            />
            <CardContent>
             
              <ul>
                {tier.description.map((line) => (
                  <Typography component="li" variant="subtitle1" align="center" key={line}>
                    {line}
                  </Typography>
                ))}
              </ul>
            </CardContent>
            <CardActions>
                
            <Button fullWidth variant={tier.buttonVariant} color="primary">
                {tier.buttonText}
              </Button>
              
            </CardActions>
          </Card>
         
        </Grid>
      ))}
    </Grid>
    
  </Container>
  <Button><Registration title="Find Happiness Now!"/></Button>
  </>
)

}


export default CTApage;