import React,{useState} from 'react'
import CardGrantor from './CardGrantor'
import { Button, Dropdown, Menu,Image } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import CardGrantors from '../pages/CardGrantors'
import { NavLink, useHistory } from 'react-router-dom'


export default function Navi() {
const [isAuthenticated, setIsAuthenticated] = useState(true)
const history = useHistory()
function handleSignOut() {
  setIsAuthenticated(false)
  history.push("/")
}
function handleSignIn() {
  setIsAuthenticated(true)
}
    return (
        <div>
 <Menu inverted fixed>
      <Container>
      <Image circular width="75"  src='https://cdn.discordapp.com/attachments/857328982138421248/872044052672032789/son_logoo.jpg' />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Menu.Item
      as={NavLink} to="/"
          name='ANA SAYFA'
        />
        <Menu.Item
        as={NavLink} to="/BagisKayit"
          name='BAGIS YAP'
        />
         <Menu.Item
         as={NavLink} to="/GrantorTypeList"
          name='BAGIS CESİTLERİ'
        />     
      <Menu.Item
         as={NavLink} to="/UserList"
          name='BAĞIŞÇILAR'
        />
          <Menu.Menu position="right">
            <CardGrantor/>
          <Button as={NavLink} to="/https://www.kodluyoruz.org/" color="orange" type="submit">KODLUYORUZ</Button>
           
          {isAuthenticated?   <SignedIn signOut={handleSignOut} /> : 
          <SignedOut signIn={handleSignIn} />}
          
          </Menu.Menu>
       
      </Container>
      </Menu>        
      
      </div>
    )
}
