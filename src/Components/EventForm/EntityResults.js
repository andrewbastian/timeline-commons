import React from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'entityName', headerName: 'Name/Title', width: 130 },
    {
        field: 'type',
        headerName: 'Type',
        width: 90,
    },
];

const rows = [
    { id: 1, entityName: 'Snow', type: 'person' },
    { id: 2, entityName: 'Lannister', type: 'person' },
    { id: 3, entityName: 'Lannister', type: 'person' },
    { id: 4, entityName: 'Stark', type: 'person' },
    { id: 5, entityName: 'Targaryen', type: 'person' },
    { id: 6, entityName: 'Melisandre', type: 'person' },
    { id: 7, entityName: 'Clifford', type: 'person' },
    { id: 8, entityName: 'Frances', type: 'person' },
    { id: 9, entityName: 'Roxie', type: 'person' },
];

const EntityResults = () => {
    return (
        <React.Fragment>
            <div style={{ marginTop: '1%', height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
            <Button variant='contained' color='primary' style={{ marginTop: '1%', marginLeft: '3%' }}>
                Add Selected to Event
            </Button>
        </React.Fragment>
    );
};

export default EntityResults;
