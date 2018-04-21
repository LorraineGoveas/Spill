import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import blue from 'material-ui/colors/blue';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';
import PinDropIcon from '@material-ui/icons/PinDrop';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MoreVertIcon from '@material-ui/icons/MoreVert';


/*
* Inline styling for the CommentBox component
* */
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
}); //end of inline styling for CommentBox

// list is used for default state data
const list = [
    {
        commentBoxId: 283910239238,
        username: 'Frodo Baggins',
        date: 'April 20, 2018',
        avatar_image: 'F',
        helperText: 'What would you like to post?',
        defaultValue: '',
        content: '',
    }
]; //end of default data

class CommentBox extends React.Component {

    constructor(props){
        super(props);

    this.state = {
        expanded: false,
        multiline: 'textFieldTest',
        list: list,
        content: '',
    };

    this.handlePostClick = this.handlePostClick.bind(this);
    this.handelCanclick = this.handleCancelClick(this);
    }//end constructor


    handlePostClick(id) {
        alert("post clicked! : objectid: " + id);
    }

    handleCancelClick(id){
        alert("cancel clicked : clearing comment box" );
    }

    handleChange = content => event => {
        this.setState({
            [content]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
            <div>
                {this.state.list.map(item =>
                    <div key={item.commentBoxId}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="avatar" className={classes.avatar}>
                                {item.avatar_image}
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={item.username}
                        subheader={item.date}
                    />

                    <CardContent>

                        <TextField
                            id="multiline-static"
                            label={item.helperText}
                            multiline
                            rows="7"
                            defaultValue={item.defaultValue}
                            value={this.state.content}
                            onChange={this.handleChange('content')}
                            className={classes.textField}
                            margin="normal"
                        />

                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <AddPhotoIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <PinDropIcon />
                        </IconButton>

                        <Button
                            variant="raised"
                            className={classes.button}
                            value={item.content}
                            onClick={() => this.handleCancelClick(item.commentBoxId)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="raised"
                            color="primary"
                            className={classes.button}
                            onClick={() => this.handlePostClick(item.commentBoxId)}
                        >
                            Post
                        </Button>

                    </CardActions>
                </Card>
                    </div>
                )}
            </div>
            </form>
        );//end return
    }//end render
}//end CommentBox

CommentBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentBox);