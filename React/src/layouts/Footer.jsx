import React from 'react'
import { Grid, Image, Label, Segment } from 'semantic-ui-react'

const LabelExampleRibbon = () => (
  <Grid columns={2}>
    <Grid.Column >
      
      <Segment raised>
        <Label as='a' color='red' ribbon>
          INSTAGRAM
        </Label>
<h4>INSTAGRAM : @ENKİ</h4>
        <Image  src='https://media.tenor.com/images/207bb54fba7919e93c32bc2d94976e4c/tenor.gif' />
        <Label as='a' color='blue' ribbon>
          TWİTTER
        </Label>
        <h4>TWİTTER : @ENKİ</h4>

        <Image src='https://i.pinimg.com/originals/2c/81/b7/2c81b7558f6576b48ae18317859be873.gif' />
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='orange' ribbon='left'>
          YOUTUBE
        </Label>
        <h4>YOUTUBE : www.youtube.com/channel/enki</h4>
        <br/> <br/>
        <Image src='https://media2.giphy.com/media/13Nc3xlO1kGg3S/200w.webp?cid=ecf05e47l6tao6tu6ngzb4ql07d0o8ozck015x4feoy6qddv&rid=200w.webp&ct=g' />
        <br/>
        <Label as='a' color='teal' ribbon='left'>
         <h4>ADRES</h4> 
        </Label>
        <h4>ADRES : ENKİ VAKFI  Yeşilyurt/MALATYA</h4>

        <Image src='https://c.tenor.com/V994Pis5f7cAAAAj/location-maps.gif' />
        <br/> <br/>

      </Segment>
    </Grid.Column>
  </Grid>
)

export default LabelExampleRibbon
