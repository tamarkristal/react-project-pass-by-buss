import React from'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import Transporter from '../Transporter/Transporter';
import Sender from '../Sender/Sender';
import NumericInput from 'react-numeric-input';
import {} from './Home.css'
import { useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { Save } from '@mui/icons-material';

export default function Home(){
  const navigate = useNavigate();
    return(
   <>
        <div className="home_register">
          <form>
        <h1>דף רישום למשתמש</h1>
        <div id="img_logo"></div>
      <Box/>
    <br></br>
        <box   sx= {{ p: 2, border: '1px dashed grey' }}>
       <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }} id="filled-basic" label=" שם" variant="filled" />  
       <br></br>       <br></br>
       <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalPhoneIcon />
            </InputAdornment>
          ),
        }} id="filled-basic" type="tel" label=" טלפון" variant="filled" />
       <br></br>       <br></br>
       <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DirectionsBusIcon />
            </InputAdornment>
          ),
        }} id="filled-basic" label="תחנת מוצא" variant="filled" />
       <br></br>       <br></br>
       <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DirectionsBusIcon />
            </InputAdornment>
          ),
        }} id="filled-basic" label="תחנת יעד" variant="filled" />       
       <br></br>       <br></br>
       <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DepartureBoardIcon />
            </InputAdornment>
          ),
        }}  id="filled" type="number" label=" בחר מספר דקות לאיתות" variant="filled" />
      <br></br><br></br>
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"><b>:בחר סוג משתמש</b></FormLabel>
        <RadioGroup>
          <FormControlLabel value="female" control={<Radio /> } label="שולח חבילה" onChange={() => navigate('/Sender')} />

          <FormControlLabel value="male" control={<Radio />} label="מעביר חבילה" onChange={() => navigate('/Transporter')}/>     
          </RadioGroup>
      </FormControl>
      <br></br>

      <Button  variant="outlined"><b>חיפוש התאמה</b></Button> 
      </box>
      
      </form>
      </div>
 </> 

)
}
