import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    FormControl, FormLabel, Grid, InputAdornment, InputLabel,
    MenuItem, OutlinedInput, Select, TextField
} from '@material-ui/core'
import GlobalHeader from './Header';
import Button from '@material-ui/core/Button';
import axios from "axios";
import NumberFormat from 'react-number-format';

function Service({ handleBack, handleNext, step, handleClose }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 200,
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },

    }));
    const classes = useStyles();
    const { useState } = React;
    const [err, setErr] = useState("");
    const [value, setValue] = React.useState('female');
    const [values, setValues] = React.useState({
        amount: ''
    });
    const handleChange = (e) => {
        setValues(e.target.value);
        console.log(e.target.value)
    };
    const [Header, setHeader] = useState({
        TokenNo: "",
        ServiceDate: new Date(),
        Ward: "",
        Amount: "",
        TotalAmount: "",
        PatientContribution: "",
        Remarks: "",
        CreatedUser: "Admin",
        ModifyUser: "Admin"
    })
    const handleSubmit = () => {
        const data = Header;
        console.log(Header);
        axios.post('http://localhost:4000/api/welfare/add', Header)
          .then(res => {
            console.log(Header);
            console.log(res);
            if (res.success === true) {
              
            }
            handleNext();
          })
          .catch(err => console.log(err, 'error'));
        // axios
    
      }
    return (
        <div>
            <Grid onSubmit={handleSubmit}>
                <h1 className="a">Service </h1>
                <GlobalHeader handleChange1={handleSubmit}
                    handleBack={handleBack} step={step} handleClose={handleClose} />
                <button type="submit" className="myButton">Save</button>

            </Grid>

            <fieldset>
                <legend>
                    Contant
                         </legend>
                <Grid container item xs={6} spacing={0}>
                <Grid  item xs={4} spacing={0}>
                <FormControl variant="outlined-label" className={classes.formControl}>
                            <FormLabel id="demo-simple-select-outlined-label" >MRNo:
                            </FormLabel>
                            <NumberFormat format="#####"
                                value={Header.MRNo}
                                id=" MRNo"
                                onChange={(e) => setHeader({ ...Header, MRNo: e.target.value })}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} spacing={1}>
                    <FormControl variant="outlined-label" className={classes.formControl}>
                            <FormLabel id="demo-simple-select-outlined-label" >TokenNo:
                            </FormLabel>
                            <NumberFormat format="###" label='TokenNo'
                                value={Header.TokenNo}
                                id=" TokenNo"
                                onChange={(e) => setHeader({ ...Header, TokenNo: Number(e.target.value) })}
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={4} spacing={0}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Gender"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Transgender</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} spacing={0}>
                        <TextField
                            id="outlined-basic"
                            label="Date"
                            type="datetime-local"
                            variant='outlined'
                            defaultValue="2021-05-20T05:00"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} spacing={0}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Ward</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Gender"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Transgender</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="outlined-adornment-amount">Total Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} spacing={6}>
                        <TextField id='outlined-basic' label='Patient Contribution' variant='outlined' />
                    </Grid>
                    <Grid item xs={6} spacing={6}>
                        <TextField id='outlined-basic' label='Remarks' variant='outlined' />
                    </Grid>
                </Grid>
            </fieldset>
        </div>
    )
}

export default Service
