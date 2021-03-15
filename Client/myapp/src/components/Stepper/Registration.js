import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NumberFormat from "react-number-format";
import { FormControl, InputLabel, MenuItem, TextField, Select, FormControlLabel, Radio, FormLabel, RadioGroup } from '@material-ui/core';
import GlobalHeader from "./Header";
import Checkbox from '@material-ui/core/Checkbox';

const Registration = ({ handleNext, handleBack }) => {
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

    }));
    const [checked, setChecked] = React.useState(true);

    // const handleChange = (event) => {
    //   setChecked(event.target.checked);

    const classes = useStyles();


    const { useState } = React;
    const [err, setErr] = useState("");
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const FormName = "Registration"
    const [Header, setHeader] = useState({
        MRNo: "",
        TokenNo: "",
        RegistrationDate: new Date(),
        Name: "",
        FatherOrHusband: "",
        DOB: new Date(),
        Age: "",
        Gender: "",
        Religion: "",
        HousNo: "",
        Address: "",
        CNIC: "",
        RefBy: "",
        IsZakat: false,
        IsStaff: false,
        IsPAFEmp: false,
        IsRejected: false,
    });
    console.log(handleBack, handleNext);
    const handleSubmit = () => {
        // check empty field
        //api 
        handleNext();
        console.log(Header)
    }
    return (
        <div className={classes.root}>
            <h1>Registration<GlobalHeader handleNext={handleSubmit} /></h1>
            <form>
                <Grid container spacing={3}>
                    <Grid container item xs={3} spacing={3}>
                        <TextField id='outlined-basic' label='Mr #' variant='outlined'
                            value={Header.MRNo} id="MRNo"
                            onChange={(e) => setHeader({ ...Header, MRNo: e.target.value })} />

                    </Grid>
                    <Grid container item xs={3} spacing={3}>
                        <TextField id='outlined-basic' label='TokenNo' variant='outlined'
                            value={Header.TokenNo}
                            id="TokenNo"
                            onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}
                        />

                    </Grid>
                    <Grid container item xs={3} spacing={3}>
                        <TextField
                            id="outlined-basic"
                            label="Next appointment"
                            type="datetime-local"
                            variant='outlined'
                            value={Header.RegistrationDate}
                            id="Next appointment"
                            onChange={(e) => setHeader({ ...Header, RegistrationDate: e.target.value })}
                            defaultValue="2021-05-20T05:00"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Grid>
                    <Grid container item xs={3} spacing={3}>
                        <TextField id='outlined-basic' label='Name' variant='outlined'
                            value={Header.Name}
                            id="Name"
                            onChange={(e) => setHeader({ ...Header, Name: e.target.value })}
                        />

                    </Grid>
                    <Grid container item xs={3} spacing={0}>
                        <TextField id='outlined-basic' label='FatherName' variant='outlined'
                            value={Header.FatherOrHusband}
                            id="FatherOrHusband"
                            onChange={(e) => setHeader({ ...Header, FatherOrHusband: e.target.value })}
                        />

                    </Grid>
                    <Grid container item xs={3} spacing={0}>
                        <TextField
                            id="outlined-basic"
                            label="Date Of Birth"
                            type="datetime-local"
                            variant='outlined'
                            value={Header.DOB} id="DOB"
                            onChange={(e) => setHeader({ ...Header, DOB: e.target.value })}
                            defaultValue="2021-05-20T05:00"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Grid>
                    <Grid container item xs={3} spacing={0}>
                        <TextField id='outlined-basic' label='Age' variant='outlined'
                            value={Header.Age} id="Age"
                            onChange={(e) => setHeader({ ...Header, Age: e.target.value })}
                        />

                    </Grid>
                    <Grid container item xs={3} spacing={0}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="Gender"
                                label="Gender"
                                value={Header.Gender}
                                id="Gender"
                                onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Transgender">Transgender</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container item xs={3} spacing={0}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Religion</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Religion"
                                value={Header.Religion}
                                id="Religion"
                                onChange={(e) => setHeader({ ...Header, Religion: e.target.value })}
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={10}></MenuItem>
                                <MenuItem value={20}>Muslim</MenuItem>
                                <MenuItem value={30}>Non Muslim</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container item xs={3} spacing={0}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Help Type</FormLabel>
                            <RadioGroup row aria-label="gender" name="gender1"
                                //  value={value} onChange={handleChange}
                                value={Header.Zakat}
                                id="TokenNo"
                                onChange={(e) => setHeader({ ...Header, Zakat: e.target.value })}
                            >
                                <FormControlLabel value="Zakat" control={<Radio />} label="Zakat" />
                                <FormControlLabel value="Welfare" control={<Radio />} label="Welfare" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid container item xs={3} spacing={0}>
                        <FormControl variant="outlined-label" className={classes.formControl}>
                            <FormLabel id="demo-simple-select-outlined-label"
                                value={Header.CNIC}
                                id=" CNIC"
                                onChange={(e) => setHeader({ ...Header, CNIC: e.target.value })}
                            >CNIC :
           <NumberFormat format="##### ####### #" mask="_" />
                            </FormLabel>
                        </FormControl>
                    </Grid>
                </Grid>
                <fieldset>
                    <legend>
                        Contant
                         </legend>
                    <Grid container item xs={3} spacing={3}>
                        <Grid item xs={6} spacing={6}>
                            <TextField id='outlined-basic' label='House #' variant='outlined'
                                value={Header.HousNo}
                                id="HousNo"
                                onChange={(e) => setHeader({ ...Header, HousNo: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6} spacing={5}>
                            <TextField id='outlined-basic' label='Address' variant='outlined'
                                value={Header.Address}
                                id=" Address"
                                onChange={(e) => setHeader({ ...Header, Address: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </fieldset>
                <fieldset>
                    <legend>
                        Reffer Info
                         </legend>
                    <Grid container item xs={3} spacing={0}>
                        <Grid>
                            <TextField id='outlined-basic' label='Refered By' variant='outlined'
                                value={Header.RefBy}
                                id="RefBy"
                                onChange={(e) => setHeader({ ...Header, RefBy: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </fieldset>
                <fieldset>
                    <legend>
                        Staff
                         </legend>
                    <Grid container item xs={3} spacing={0}>
                        <Grid container item xs={3} spacing={0} >
                            <Checkbox
                                defaultChecked
                                color="primary"
                                value={Header.IsStaff}
                                id=" IsStaff"
                                onChange={(e) => setHeader({ ...Header, IsStaff: e.target.value })}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </Grid>
                        <Grid container item xs={3} spacing={0} >
                            <Checkbox
                                defaultChecked
                                color="primary"
                                value={Header.IsPAFEmp}
                                id="IsPAFEmp"
                                onChange={(e) => setHeader({ ...Header, IsPAFEmp: e.target.value })}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </Grid>
                        <Grid container item xs={3} spacing={0} >
                            <Checkbox
                                defaultChecked
                                color="primary"
                                value={Header.IsRejected}
                                id=" IsRejected"
                                onChange={(e) => setHeader({ ...Header, IsRejected: e.target.value })}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </Grid>
                    </Grid>

                </fieldset>
            </form>
        </div>
    );
}

export default Registration
