import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown, DropdownDivider, Menu } from 'semantic-ui-react'

export default function CardGrantor() {
  
    return (
        <div>
         
    <Dropdown item text='Bağış Sepetiniz'>
            <Dropdown.Menu>
 <Dropdown.Divider/>
 <Dropdown.Item >Sepete Git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>      
          </div>
    )
}
