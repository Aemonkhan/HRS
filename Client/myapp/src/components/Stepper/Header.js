import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from "@material-ui/core/Grid";

function GlobalHeader({ handleChange1, handleBack, handleClose, step}) {
    const check =()=>{
        if(step===2){
            handleClose()
        }else{
            handleChange1()
        }
    }
    return (
        <div>
            <Grid container item xs={10} spacing={4}>
                <Grid  item xs={6} spacing={4}><ArrowBackIcon onClick={handleBack} />
                </Grid>
                <Grid item xs={6} spacing={4}> <ArrowForwardIcon onClick={check} />
                </Grid>
            </Grid>

        </div>
    )
}

export default GlobalHeader
