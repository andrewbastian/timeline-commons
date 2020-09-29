import React from 'react';

import {Card, CardActions, CardActionArea, Button, CardContent, CardMedia, Typography, Container, Link, Chip} from '@material-ui/core/';

import placeholdPic from '../placeholders/placeholdPic.JPG';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: '95%',
    margin: 'auto'
  },
  media: {
    height: 150,
    width: 180,
    float: 'left',
    margin: 10,
  },
  mediaSpan: {
  	display:'block'
  },
  editButton: {
  	display: "flex"
  }
}));


const TimelineCard = (props) => {
	// const data = props.data
	// const {title, description, creator, date} = data
	const classes = useStyles();
    return (
<Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Obama Administration Blocks Mining in Grand Canyon Region for 20 Years
          </Typography>
          <Typography variant="subtitle2" component="p">
          January 9th, 2012
          </Typography>
       <CardActions>
        <Button size="small" color="primary" className={classes.editButton}
        >
          Eidt
        </Button>

        
      </CardActions>
          <Container component="span" className={classes.mediaDiv}
          >
         <CardMedia
          className={classes.media}
          image={placeholdPic}
          title="placeholder"
        />
        </Container>


		          <Typography variant="body2" color="textSecondary" component="p">
            The Obama administration bans hard-rock mining on more than a million acres in and around the Grand Canyon, an area rich in high-grade uranium ore reserves. The ban is for 20 years. Environmental groups and some Democratic lawmakers have worked for years to limit mining near the Grand Canyon National Park. Representative Edward Markey (D-MA), the ranking member of the House Natural Resources Committee, says, “When families travel to see the Grand Canyon, they have a right to expect that the only glow they will see will come from the sun setting over the rim of this natural wonder, and not from the radioactive contamination that comes from uranium mining.” Interior Secretary Ken Salazar, who has twice imposed temporary bans on mining claims, says: “A withdrawal is the right approach for this priceless American landscape. People from all over the country and around the world come to visit the Grand Canyon. Numerous American Indian tribes regard this magnificent icon as a sacred place, and millions of people in the Colorado River Basin depend on the river for drinking water [and] irrigation.” The basin is already considered one of the nation’s most endangered waterways, and mining operations could use vast amounts of the area’s 
          </Typography>
		<Typography variant="body2" color="textSecondary" component="p">
			Mining Poses High Risks to Environment, Tourism - One in 12 Americans gets some or all of their water from the Colorado River Basin, including the residents of Phoenix and Los Angeles, and the area generates about $3.5 billion in annual income, largely from tourism. In contrast, the mining ban will mean that 465 prospective jobs will not materialize, and the area will lose some $16.6 million in annual tax revenue from mining. Supporters of the ban say that the jobs that would come from mining in the area would not be worth the risk to the river basin and the canyon, and a mining mishap would be potentially devastating for tourism. Many of the area’s lands are considered sacred by Native American tribes, and the lands support a vast number of wildlife habitats. Taylor McKinnon of the Center for Biological Diversity says that uranium mining in the area would critically despoil the area, ruin millions of Americans’ access to fresh water, and cut, not increase, job revenues. McKinnon says: “The real economic engine in northern Arizona is not uranium mining. It’s tourism. To jeopardize our economic engine with more toxic uranium mining is unacceptable.” In 2008, former Bureau of Land Management Director Jim Baca said flatly: “Without [the Colorado], there is no Western United States. If it becomes unusable, you move the entire Western United States out of any sort of economic position for growth.” 
		</Typography>
		<Link>[PROPUBLICA, 12/21/2008; ASSOCIATED PRESS, 1/9/2012]</Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Typography variant="subtitle2" component="p">
        Entry Tags:
       </Typography>
		<Chip size="small" color="primary" label="Environmental Protection Agency" component="a" href="#chip" clickable />
		<Chip size="small" color="primary" label="Edward Markey" component="a" href="#chip" clickable />
		<Chip size="small" color="primary" label="John Barrasso" component="a" href="#chip" clickable />
		<Chip size="small" color="primary" label="Ken Salazar" component="a" href="#chip" clickable />
		<Chip size="small" color="primary" label="Rosatom" component="a" href="#chip" clickable />

     </CardActions>
           <CardActions>
       <Typography variant="subtitle2" component="p">
        Category Tags:
       </Typography>
		<Chip size="small" color="secondary" label="National Parks" component="a" href="#chip" clickable />
		<Chip size="small" color="secondary" label="Public land use" component="a" href="#chip" clickable />
		<Chip size="small" color="secondary" label="Wildlife protection" component="a" href="#chip" clickable />
		<Chip size="small" color="secondary" label="Toxic waste" component="a" href="#chip" clickable />
		<Chip size="small" color="secondary" label="Oil and gas industry" component="a" href="#chip" clickable />

     </CardActions>
    </Card>
    );
};


export default TimelineCard;
