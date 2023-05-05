import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
function fields({name, email, index}) {
  return (
    <div className='data'>
        <div className='data_val'>            
          <h3>{name}</h3>
            <h3>{email}</h3>
            <IconButton aria-label="delete" size="large" color="error" >
  <DeleteIcon fontSize="inherit" />
</IconButton>
        </div>
      </div>
  )
}

export default fields