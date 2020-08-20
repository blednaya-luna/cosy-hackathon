import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyles } from 'pages/Shop/Item/styles';

export const Item = ({ title, description, price }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea disabled>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap>
            {description}
          </Typography>
          <Typography variant="overline" color="primary" component="p">
            {`${price} WAVES`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <Button size="small" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};
