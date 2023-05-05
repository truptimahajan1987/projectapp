import './App.css';
import Header from './components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }
const removeItem = (index) =>{
  let arr = data;
  arr.splice(index, 1);
  setData([...arr]);

}
  return (
    <div className="App">
      <div className='form'>
        <Header />
        <Stack spacing={2} direction="row">

          <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="E-Mail" variant="outlined" />
          <Button onClick={addData} variant="contained">Add</Button>
        </Stack>
      </div>
      {/* form end */}
      <div className='data'>
        <div className='data_val'>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>

        </div>
        {data.map((elements, index) => {
          return (
            <div className='data_val'>
              <h3>{elements.name}</h3>
              <h3>{elements.email}</h3>
              <IconButton  onClick={() => removeItem(index)} aria-label="delete" size="large" color="error" >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          );
        })}
      </div>

</div>

      );
}

      export default App;
