import { TextField, Stack } from "@mui/icons-material";
import { useState } from 'react'

function Login() {
     const [value, setValue] = useState('')
     return(
          <div>
                    <Stack direction='row' spacing={2}>
                    <TextField
                         label='Form Input'
                         required
                         value={value}
                         onChange={e => setValue(e.target.value)}
                         error={!value}
                         helperText={!value ? 'Required' : 'Do not share password with anyone'}
                    />
                    {/* required gives a * at the end of the label & error shows an error message */}

                    <TextField label='password' type='password' helperText='Do not share password with anyone' disabled />
                    {/* Disabled: disable the textField */}

                    <TextField label='read only' inputProps={{ readOnly: true }} />
               </Stack>
          </div>
     )
}

export default Login;