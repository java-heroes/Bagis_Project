import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <MenuItem>
            <Button onClick={props.signIn}  color="yellow"  type="submit">GIRIS YAP</Button>
            <Button color="red" style={{marginleft:'0.5em'}} type="submit">KAYIT OL</Button>
            </MenuItem>
       

        </div>
    )
}

