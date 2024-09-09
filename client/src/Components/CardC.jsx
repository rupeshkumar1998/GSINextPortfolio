import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

export default function CardC({ item, onReadMore }) {
  return (
    <Card sx={{ maxWidth: 345, height: 400, backgroundColor: purple[900] }}>
      <CardMedia
        sx={{ height: 170 }}
        image={item.Pic}
        title="green iguana"
      />
      <CardContent sx={{ maxWidth: 345, height: 160 }}>
        <Typography gutterBottom variant="h5" textAlign={'center'} component="div">
          {item.Name}, {item.Date}
        </Typography>
        <Typography>
          {item.Title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            textOverflow: 'ellipsis',
          }}
        >
          {item.Summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingTop: 2, paddingLeft: 26 }}>
        <Button
          sx={{
            color: 'white',                // Text color
            backgroundColor: 'black',       // Background color
            '&:hover': {
              backgroundColor: '#333',      // Darker background on hover
            },
          }}
          onClick={() => onReadMore(item)} // Trigger onReadMore when button is clicked
        >
          ReadMe
        </Button>
      </CardActions>
    </Card>
  );
}
