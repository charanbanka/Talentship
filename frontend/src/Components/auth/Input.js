import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';

const Input = ({name,label,value,half,size,handleChange,autoFocus,type,handleShowPassword,onKeyPress}) => {
  return (
      <Grid item xs={12} sm={half?6:12} height="20px" className='m-3' >
          <TextField 
            name={name}
            label={label}
            value = {value}
            variant ="outlined"
            required
            fullWidth
            size={size? size : "small"}
            onChange={handleChange}
            autoFocus={autoFocus}
            type={type}
            onKeyPress={onKeyPress}
            InputProps={name==="password" ?{
                endAdornment:(
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type==="password"?<Visibility/> :<VisibilityOff/> }
                        </IconButton>
                    </InputAdornment>
                )
            }:null}
          />

      </Grid>

  )
};

export default Input;
