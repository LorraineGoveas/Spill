import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

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

const deleteStyle = {
    color: 'black',
    background:'red',
    borderRadius: 12,
    border: 0,
    height: 20,
    padding: '0 10px'
};

const viewStyle = {
    color: 'white',
    background:'blue',
    borderRadius: 12,
    border: 0,
    height: 20,
    padding: '0 10px'
};

function CustomizedTable(props) {

    return (
        <Paper >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell numeric>ID</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow key={n.id}>
                                <TableCell numeric>{n.id}</TableCell>
                                <TableCell>{n.author}</TableCell>
                                <TableCell>{n.location}</TableCell>
                                <TableCell>{n.status}</TableCell>
                                <TableCell>{n.desc}</TableCell>
                                <TableCell>{n.date}</TableCell>
                                <TableCell>{n.image}</TableCell>
                                <TableCell>
                                    <table><tr>
                                        <th>
                                            <Button style={deleteStyle}> Delete </Button>
                                        </th>
                                        <th>
                                            <Button style={viewStyle}> View </Button>
                                        </th>
                                    </tr></table>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default CustomizedTable;