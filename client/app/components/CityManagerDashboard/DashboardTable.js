import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

let id = 0;
function createData(author, location, status, desc, date, image) {
    id += 1;
    return { id, author, location, status, desc, date, image };
}

const defaultData = [
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

class CustomizedTable extends React.Component {

    constructor() {
        super();

        {/* Internal State of CustomizedTable contains an array of data and variables for sorting */
        }
        this.state = {
            data: defaultData,
            sort: {
                column: null,
                direction: 'desc',
            }
        };

        this.onSort = this.onSort.bind(this);
    }//end constructor

    componentDidMount(){
        //Stub data
        const data = [];

        for(let i = 0; i < defaultData.length; i++){
            const id = defaultData[i].id;
            const author = defaultData[i].author;
            const location = defaultData[i].location;
            const status = defaultData[i].status;
            const desc = defaultData[i].desc;
            const date = defaultData[i].date;
            const image = defaultData[i].image;
            data.push({id, author, location, status, desc, date, image});
        }//end for

        this.setState({data});
    }//end componentDidMount

    onSort(column){
        return(function (e){
            let direction = this.state.sort.direction;

            if(this.state.sort.column === column){

                //Change the sort direction if the same column is sorted
                direction = this.state.sort.direction === 'asc' ? 'desc' : 'asc';

            }//end if

            //Sort ascending
            const sortedData = this.state.data.sort((a, b) => {
                if(column === 'id'){

                    const collator = new Intl.Collator(undefined, {
                        numeric: true, sensitivity: 'base' });

                    return collator.compare(a.id, b.id);
                }
                if(column === 'author'){

                    const collator = new Intl.Collator(undefined, {
                        numeric: true, sensitivity: 'base' });

                    return collator.compare(a.author, b.author);
                }
                if(column === 'location'){

                    const collator = new Intl.Collator(undefined, {
                        numeric: true, sensitivity: 'base' });

                    return collator.compare(a.location, b.location);
                }
                if(column === 'status'){

                    const collator = new Intl.Collator(undefined, {
                        numeric: true, sensitivity: 'base' });

                    return collator.compare(a.status, b.status);
                }
                if(column === 'desc'){

                    const collator = new Intl.Collator(undefined, {
                        numeric: true, sensitivity: 'base' });

                    return collator.compare(a.desc, b.desc);
                }
                if(column === 'date'){

                    const collator = new Intl.Collator(undefined, {
                        numeric: true, sensitivity: 'base' });

                    return collator.compare(a.date, b.date);
                }


            });

            if(direction === 'desc'){
                sortedData.reverse();
            }

            this.setState({
                data: sortedData,
                sort: {
                    column,
                    direction,
                }
            });
        }).bind(this); // Bind "this" again because the onSort function is returning another function
    }// end onSort


    render(){
    return (
        <Paper >

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell numeric>ID<button onClick={this.onSort('id')}>sort</button></TableCell>
                        <TableCell>Author<button onClick={this.onSort('author')}>sort</button></TableCell>
                        <TableCell>Location<button onClick={this.onSort('location')}>sort</button></TableCell>
                        <TableCell>Status<button onClick={this.onSort('status')}>sort</button></TableCell>
                        <TableCell>Description<button onClick={this.onSort('desc')}>sort</button></TableCell>
                        <TableCell>Date<button onClick={this.onSort('date')}>sort</button></TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.data.map(n => {
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
                    })} {/** end of data mapping **/}
                </TableBody>
            </Table>
        </Paper>
    );
    }
    }


export default CustomizedTable;