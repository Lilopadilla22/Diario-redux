import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailandPassword } from '../../Store/auth/thunks';

const FormData = {
  email: "",
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value)=> value.includes('@'), 'debe ser un correo valido'],
  password: [(value) => value.length >=6, 'debe tener más de 6 digitos' ],
  displayName:  [(value) => value.length >1, 'debe ser un nombre valido' ],
}


export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {status, errorMessage} = useSelector(state => state.auth)
  const isChekingAuthentication = useMemo(() => status === 'cheking', [status])


  const {email, password, onInputChange, displayName, isFormValid, emailValid, passwordValid, displayNameValid, formState} = useForm(FormData, formValidations)


  const onSubmit= (event) =>{ 
    event.preventDefault()
    setFormSubmitted(true)
    if(!isFormValid) return
    dispatch(startCreatingUserWithEmailandPassword(formState))
  }


  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid: {isFormValid ? 'Valido': 'incorrecto'}</h1>
      <form onSubmit={onSubmit}>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                name= 'displayName'
                value= {displayName}
                onChange={onInputChange}
                error= {!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name= 'email'
                value= {email}
                error= {!!emailValid && formSubmitted}
                helperText={emailValid}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name= 'password'
                value= {password}
                error= {!!passwordValid && formSubmitted}
                helperText={passwordValid}
                onChange={onInputChange}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              
              <Grid item xs={ 12 } display={!!errorMessage? '' : 'none'}>
                <Alert severity='error'>
                  {errorMessage}
                </Alert>   
              </Grid>

              <Grid item xs={ 12 }>
                <Button
                  disabled={isChekingAuthentication}
                  type= 'submit'
                  variant='contained' 
                  fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
