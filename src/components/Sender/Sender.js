
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import MyFormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { } from './Sender.css'
import { Save } from '@mui/icons-material';
export default function Sender() {
  return (
    <>  
      <div className="home_Sender">
        <form > 
<h1>שולח החבילה</h1>
        <div id="img_logo"></div>
   
        <FormLabel > <b>:הכנס נתונים אודות לוקח החבילה</b></FormLabel>
        <br></br>
          <TextField name="SenderName" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }} id="filled-basic" label=" שם" variant="filled" />
          <br></br>       <br></br>
          <TextField  name="SenderPhone"InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalPhoneIcon />
            </InputAdornment>
          ),
        }}id="filled-basic" label=" טלפון" variant="filled" />
          <br></br>       <br></br>
          <FormControl>
          <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TextSnippetIcon />
            </InputAdornment>
          ),
        }}id="filled-basic" label=" הכנס תיאור חבילה" variant="filled" />
            <br></br>
            <FormLabel id="demo-radio-buttons-group-label"> <b>:בחר סוג סחיבת חבילה </b></FormLabel>
            <RadioGroup >
              <FormControlLabel id="form-control-package" value="1" control={<Radio />} label="חבילה בתא מטען" />
              <FormControlLabel  id="form-control-package" value="2" control={<Radio />} label="חבילה ביד" />
            </RadioGroup>
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"> <b>:בחר גודל חבילה </b></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel id="form-control-size" value="1" control={<Radio />} label="גדול" />
        <FormControlLabel id="form-control-size" value="2" control={<Radio />} label="בינוני" />
        <FormControlLabel id="form-control-size" value="3" control={<Radio />} label="קטן" />
        </RadioGroup>
       </FormControl>
          
          </FormControl>
      
        </form>
        </div>
    </>
  )
}