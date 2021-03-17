import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import {
  FormControl, InputLabel, MenuItem, TextField, Select,
  FormControlLabel, Radio, FormLabel, RadioGroup, Checkbox,
  InputAdornment, Input, OutlinedInput
} from '@material-ui/core';
import GlobalHeader from './Header';
import MaterialTable from 'material-table';
import { tableIcons } from '../Editable/TableIcons'
import axios from "axios";

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

export default function NestedGrid({ handleNext, handleBack }) {
  const classes = useStyles();
  const { useState } = React;
  const [stepper, setStepper] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [values, setValues] = React.useState({
    amount: ''
  });
  const [columns, setColumns] = useState([
    { title: 'MemberName', field: 'MemberName' },
    { title: 'Relation with Patient', field: 'Relation with Patient', initialEditValue: 'initial edit value' },
    { title: 'Monthly Income', field: 'Monthly Income', type: 'numeric' },
  ]);

  const [data, setData] = useState([]);
  const [value, setValue] = React.useState('female');
  const handleChange = (e) => {
    setValues(e.target.value);
    console.log(e.target.value)
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };
  const handleAmount = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [Header, setHeader] = useState({
    MRNo: "",
    TokenNo: "",
    WelfareDate: new Date(),
    Profession: "",
    Fiqa: "",
    Education: '',
    Cast: "",
    MonthlyIncome: 0,
    Guardian: "",
    OtherInfo: "",
    MaleKids: "",
    FemaleKids: "",
    OtherKids: "",
    Brothers: "",
    Sisters: "",
    NoOFFamilyMembers: "",
    IsMarried: false,
    IsAbleToPay: false,
    IsEarning: false,
    HaveGold: false,
    ReqName: '',
    ReqPhone: "",
    ReqRelationWithPatient: '',
    CreateUser: "Admin",
    ModifyUser: "Admin",
  })
  // axios
  const handleSubmit = () => {
    const data = Header;
    console.log(Header);
    axios.post('http://localhost:4000/api/welfare/add', Header)
      .then(res => {
        console.log(Header);
        console.log(res);
        if (res.success === true) {

          handleNext();
        }
      })
      .catch(err => console.log(err, 'error'));
    // axios

  }

  return (
    <div className={classes.root}>
      <h1 className="a">Welfare </h1>
      <GlobalHeader handleChange1={handleSubmit} handleBack={handleBack} />
      <button type="submit" className="myButton">Save</button>
      <form>
        <Grid container spacing={3}>
          <Grid container item xs={3} spacing={0}>
            <FormControl variant="outlined-label" className={classes.formControl}>
              <FormLabel id="demo-simple-select-outlined-label"
                value={Header.MRNo}
                id=" MRNo"
                onChange={(e) => setHeader({ ...Header, MRNo: e.target.value })}
              >MRNo:
           <NumberFormat format="#####" />
              </FormLabel>
            </FormControl>
          </Grid>
          <Grid container item xs={3} spacing={3}>
            <TextField id='outlined-basic' label='TokenNo' variant='outlined' />

          </Grid>
          <Grid container item xs={3} spacing={3}>
            <TextField
              id="outlined-basic"
              label="Welfare Date"
              type="datetime-local"
              variant='outlined'
              defaultValue="2021-05-20T05:00"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <fieldset>
          <legend>
            Contant
                         </legend>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={3} spacing={0}>
              <TextField id='outlined-basic' label='Profession' variant='outlined' />
            </Grid>
            <Grid item xs={3} spacing={0}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Education</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Education"
                >
                  <MenuItem value="">
                  </MenuItem>
                  <MenuItem value={10}>Matirc</MenuItem>
                  <MenuItem value={20}>Master</MenuItem>
                  <MenuItem value={30}>Bachelor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} spacing={1}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Friqa</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Friqa"
                >
                  <MenuItem value="">
                  </MenuItem>
                  <MenuItem value={10}></MenuItem>
                  <MenuItem value={20}>Sunni</MenuItem>
                  <MenuItem value={30}>Sheia</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} spacing={1}>
              <TextField id='outlined-basic' label='Cast' variant='outlined' />
            </Grid>
          </Grid>
        </fieldset>
        <fieldset>
          <legend>
            Requester Info
                         </legend>
          <Grid container item xs={12} spacing={0}>
            <Grid item xs={6} spacing={0}>
              <TextField id='outlined-basic' label='RequestorName' variant='outlined' />
            </Grid>
            <Grid item xs={4} spacing={4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">RelationshipwithPatient</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Relation"
                >
                  <MenuItem value="">
                  </MenuItem>
                  <MenuItem value={"Father"}>Father</MenuItem>
                  <MenuItem value={"Mother"}>Mother</MenuItem>
                  <MenuItem value={"Siblings"}>Siblings</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} spacing={0}>
              <TextField id='outlined-basic' label='No. of Kids(Male)' variant='outlined' />
            </Grid>
            <Grid item xs={6} spacing={0}>
              <TextField id='outlined-basic' label='No. of Kids(Female)' variant='outlined' />
            </Grid>
            <Grid container item xs={2} spacing={0}>
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
            <Grid container item xs={4} spacing={0} >
              <InputLabel item xs={6} spacing={0}>IsMarried</InputLabel>
              <Checkbox
                color="primary"
                value={Header.IsMarried}
                id="HaveGold"
                onChange={(e) => setHeader({ ...Header, IsMarried: e.target.value })}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid container item xs={4} spacing={0} >
              <InputLabel item xs={6} spacing={0}>HaveGold</InputLabel>
              <Checkbox
                color="primary"
                value={Header.HaveGold}
                id="HaveGold"
                onChange={(e) => setHeader({ ...Header, HaveGold: e.target.value })}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid container item xs={3} spacing={0} >
              <InputLabel item xs={6} spacing={0}>IsEarning</InputLabel>
              <Checkbox
                color="primary"
                value={Header.IsEarning}
                id=" IsEarning"
                onChange={(e) => setHeader({ ...Header, IsEarning: e.target.value })}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid container item xs={3} spacing={0} >
              <InputLabel item xs={6} spacing={0}>Is Able To Pay</InputLabel>
              <Checkbox
                color="primary"
                value={Header.IsAbleToPay}
                id="  IsAbleToPay"
                onChange={(e) => setHeader({ ...Header, IsAbleToPay: e.target.value })}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
          </Grid>
        </fieldset>
      </form>
      <MaterialTable
        title="Editable Preview"
        icons={tableIcons}
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve()
              }, 1000)
            }),
        }}
      />

    </div>
  );
}

