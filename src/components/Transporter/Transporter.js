
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import MyFormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import LuggageIcon from '@mui/icons-material/Luggage';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import{} from './Transporter.css'
export default function Transporter(){
    return(
        <>
        <div className="home_Transporter">
          <form>
        <h1>מעביר החבילה</h1>
        <div id="img_logo"></div> 
       <br></br>       <br></br>
       <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FormatListNumberedIcon />
            </InputAdornment>
          ),
        }} id="filled-basic" label=" מספר קו אוטובוס" variant="filled" type="number" />
       <br></br>       <br></br>
       <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LuggageIcon />
            </InputAdornment>
          ),
        }} id="filled-basic" label="  מספר חבילות אפשרי להעברה" variant="filled" type="number" />
       <br></br>       <br></br>
       <FormLabel id="demo-radio-buttons-group-label"> <b>בחר סוג סחיבת חבילה </b></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel className="package" id="FormControlLabel" value="female" control={<Radio />} label="חבילה בתא מטען" />
        <FormControlLabel className="package"  id="FormControlLabel" value="male" control={<Radio />} label="חבילה ביד" />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label"> <b>בחר גודל חבילה </b></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel id="FormControlLabel" value="1" control={<Radio />} label="גדול" />
        <FormControlLabel id="FormControlLabel" value="2" control={<Radio />} label="בינוני" />
        <FormControlLabel id="FormControlLabel" value="3" control={<Radio />} label="קטן" />
      </RadioGroup>
      </form>
    </div>
        </>
    )
}