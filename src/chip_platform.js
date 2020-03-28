import React, { useState, useEffect } from "react";
import { Grid, Chip } from '@material-ui/core';
const chipPlatform = (props) => {
    const onDelete= (index)=>{
        props.list.splice(index, 1);
    }
    return (
        <Grid item xs={10} justify='space-between' alignItems='center' alignContent='center'  style={{ padding: 10 }}>
            {
                props.list.map((e, index) => <Chip key={index} onDelete={onDelete} label={e} style={{margin:10}} />)
            }
        </Grid>
    )
}
export default chipPlatform;