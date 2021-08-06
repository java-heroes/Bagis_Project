import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import UserService from '../services/UserService'

export default function UserListDetails() {
    let {id}=useParams()//parametreleri obje olarak verir.

    const [user, setuser] = useState({})

    useEffect(()=>{
        let userService =new UserService()
        userService.getUserById(id).then(result=>setuser(result.data.data))
    },[])

    return (
        <div>
<Card.Group>
    <Card fluid>
      <Card.Content>
        <Card.Header> {user.id}</Card.Header>
        <Card.Meta>{user.grantortype}</Card.Meta>
        <Card.Description>
        {user.declaration}  </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Düzenle
          </Button>
          <Button basic color='red'>
            Sil
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>     
     </div>
    )
}
