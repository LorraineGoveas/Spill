import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';
import PinDropIcon from '@material-ui/icons/PinDrop';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
});

class CommentBox extends React.Component {
    state = {
        expanded: false,
        multiline: 'textFieldTest',
    };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });

    };

    render() {
        const { classes } = this.props;

        return (

            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                F
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Frodo Baggins"
                        subheader="April 22, 2018"
                    />

                    <CardContent>
                        <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="multiline-static"
                            label="What would you like to post?"
                            multiline
                            rows="7"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                        /></form>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <AddPhotoIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <PinDropIcon />
                        </IconButton>

                        <Button variant="raised" className={classes.button}>
                            Cancel
                        </Button>
                        <Button variant="raised" color="primary" className={classes.button}>
                            Post
                        </Button>

                    </CardActions>
                </Card>
            </div>
        );
    }
}

CommentBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentBox);