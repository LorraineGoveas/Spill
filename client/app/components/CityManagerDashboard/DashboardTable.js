import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(author, location, status, desc, date, image) {
    id += 1;
    return { id, author, location, status, desc, date, image };
}

const data = [
    createData('Frodo Baggins', "San Francisco, CA", "Resolved", "Broken Road on Powell in front of Westfield","01/01/2018", "Image"),
    createData('Gandalf the Grey', "The Shire, ME", "Unresolved", "Hazardous tree on roadway towards Gondor","01/12/2018", "Image"),
    createData('Legolas', "San Mateo, CA", "Resolved", "Broken street lights near the grocery store","01/23/2018", "Image"),
];

function CustomizedTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell numeric>ID</CustomTableCell>
                        <CustomTableCell>Author</CustomTableCell>
                        <CustomTableCell>Location</CustomTableCell>
                        <CustomTableCell>Status</CustomTableCell>
                        <CustomTableCell>Description</CustomTableCell>
                        <CustomTableCell>Date</CustomTableCell>
                        <CustomTableCell>Image</CustomTableCell>
                        <CustomTableCell>Action</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow className={classes.row} key={n.id}>
                                <CustomTableCell numeric>{n.id}</CustomTableCell>
                                <CustomTableCell>{n.author}</CustomTableCell>
                                <CustomTableCell>{n.location}</CustomTableCell>
                                <CustomTableCell>{n.status}</CustomTableCell>
                                <CustomTableCell>{n.desc}</CustomTableCell>
                                <CustomTableCell>{n.date}</CustomTableCell>
                                <CustomTableCell>{n.image}</CustomTableCell>
                                <CustomTableCell>
                                    <table><tr>
                                        <th>
                                            <button>Delete</button>
                                        </th>
                                        <th>
                                            <button>View</button>
                                        </th>
                                    </tr></table>
                                </CustomTableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);