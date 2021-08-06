import React, {useEffect, useState }from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Icon, Label, Menu, Table ,Button} from 'semantic-ui-react'
import UserService from '../services/UserService'

export default function UserList() {
    const [users, setusers] = useState([])

    useEffect(()=>{
        let userService =new UserService()
        userService.getUser().then(result=>setusers(result.data.data))
    },[])
    return (
        <div>
 <Table celled>
 <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Seç</Table.HeaderCell>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Declaration</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Bağış Türü</Table.HeaderCell>
        <Table.HeaderCell>Tarih</Table.HeaderCell>
        <Table.HeaderCell>Şifre</Table.HeaderCell>
        <Table.HeaderCell>Ödeme Tutarı</Table.HeaderCell>
        <Table.HeaderCell>Telefon</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        { users.map((user)=>(
                <Table.Row key={user.id}>
               <Table.Cell><div><Link to={`/UserListDetails/${user.id}`}> <Button primary>SEÇ</Button></Link></div></Table.Cell>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.declaration}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.grantortype}</Table.Cell>
                <Table.Cell>{user.declaration}</Table.Cell>
                <Table.Cell>{user.password}</Table.Cell>
                <Table.Cell>{user.paymentTotal}</Table.Cell>
                <Table.Cell>{user.phone}</Table.Cell>
              </Table.Row>
            )) }

    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)        </div>
    )
}
