import React from 'react'
import Reaact,{useState,useEffect} from "react";
import { NavLink ,Link} from 'react-router-dom';
import { Icon, Label, Menu, Table ,Button} from 'semantic-ui-react'
import GrantorTypeService from '../services/GrantorTypeService'
export default function GrantorTypeList() {
    
    const [GrantorTypes, setGrantorTypes] = useState([])

    useEffect(()=>{
        let grantorTypeService =new GrantorTypeService()
        grantorTypeService.getGrantorType().then(result=>setGrantorTypes(result.data.data))
        },[])
    return (
        <div>
              <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>BAGIS  TURLERI</Table.HeaderCell>
        <Table.HeaderCell>Sepete Ekle</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
        {GrantorTypes.map(GrantorTypes=>(
         <Table.Row key={GrantorTypes.id}>
         <Table.Cell>{GrantorTypes.grantorTypesId}</Table.Cell>
        <Table.Cell>{GrantorTypes.grantorTypesName}</Table.Cell>
        <Table.Cell><div><Link to={`/BagısSepeti/${GrantorTypes.grantorTypesName}`}> <Button color="green">Sepete Ekle</Button></Link></div></Table.Cell>

      </Table.Row>
            ))
        }
      
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
        <br/> <div ><Button  as={NavLink} to="/GrantorTypesAdd"  color="blue" >Ekle</Button></div>

      </Table.Row>
    </Table.Footer>
  </Table>
<br/>
        </div>
    )
}
