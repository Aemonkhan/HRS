import React from 'react'
import MaterialTable from 'material-table';
import { tableIcons } from '../components/Editable/TableIcons'
import { useState } from 'react'
import { Dialog } from '@material-ui/core';
import MainStepper from './Stepper/MainStepper';


function Registor() {
  const { useState } = React;
  const [stepper, setStepper] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { '': ' ', '': ' ' },
    },
  ]);

  const [data, setData] = useState([
    { name: 'zariyaab', surname: 'muheeb ', birthYear: '2015', birthCity: 'karachi' },
    { name: ' ', surname: ' ', birthYear: '', birthCity: '' },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {
        open === true ? <MainStepper handleClose={handleClose}/> :
          (<MaterialTable
            title="Editable Preview"
            // columns={columns}
            // data={data}
            icons={tableIcons}
            actions={[
              {
                icon: tableIcons.PersonAdd,
                isFreeAction: true,
                tooltip: 'Save User',
                onClick: handleClickOpen

              },
              rowData => ({
                icon: tableIcons.Edit,
                tooltip: 'Edit patient',
                onClick: handleClose
              })
            ]}
          editable={{
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
          />)
      }
    </>
  )
}
export default Registor