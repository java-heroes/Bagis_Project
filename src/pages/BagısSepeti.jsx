import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import GrantorTypeService from '../services/GrantorTypeService'

export default function BagısSepeti() {
    let {id}=useParams()//parametreleri obje olarak verir.

    const [grantorType, setGrantorType] = useState([])

    useEffect(()=>{
        let grantorTypeService =new GrantorTypeService()
        grantorTypeService.getUserById(id).then(result=>setGrantorType(result.data.data))
        },[])
    return (
        <div>
<Card.Group>
    <Card fluid>
      <Card.Content>
      <Card.Header> SEPETİNİZ</Card.Header>
        <Card.Header> {grantorType.grantorTypesId}</Card.Header>
        <Card.Meta>{grantorType.grantorTypesName}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Onayla
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