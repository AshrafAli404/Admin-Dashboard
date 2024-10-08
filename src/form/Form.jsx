import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import Header from '../Components/Header';

const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp = /^\+?(\d{1,4})?[\s.-]?(\d{1,4})[\s.-]?(\d{1,4})[\s.-]?(\d{1,9})$/;

const data = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'User', label: 'User' },
];

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = (data) => {
    console.log("Form submitted successfully with data:", data);
    handleClick(); // Open the Snackbar on successful form submission
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3
      }}
      noValidate
      autoComplete="off"
    >
       <Header title={'CREATE User'} subTitle={"Create a New User profile"}/>
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) ? "This field is required & min 3 characters" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }} label="First Name" variant="filled" />

        <TextField
          error={Boolean(errors.LastName)}
          helperText={Boolean(errors.LastName) ? "This field is required & min 3 characters" : null}
          {...register("LastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }} label="Last Name" variant="filled" />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "Please provide a valid email address" : null}
        {...register("email", { required: true, pattern: regEmail })}
        label="Email" variant="filled" />

      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={Boolean(errors.ContactNumber) ? "Please provide a valid phone number" : null}
        {...register("ContactNumber", { required: true, pattern: phoneRegExp })}
        label="Contact Number" variant="filled" />

      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: 'right' }}>
        <Button
          type="submit"
          sx={{ textTransform: 'capitalize' }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar anchorOrigin={{vertical:"top", horizontal:"right"}} open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='info' sx={{ width: '100%' }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default Form;



