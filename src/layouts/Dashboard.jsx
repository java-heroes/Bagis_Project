import React from 'react'
import { Route } from 'react-router'
import GrantorTypeList from '../pages/GrantorTypeList'
import UserList from '../pages/UserList'
import BagisKayit from "../pages/BagisKayit"
import UserListDetails from "../pages/UserListDetails"
import Categories from "./Catagories"
import { Grid } from "semantic-ui-react"
import Footer from './Footer'
import CardGrantors from '../pages/CardGrantors'
import GrantorTypes from '../pages/GrantorTypes'
import UyelerHakkında from '../pages/UyelerHakkında'
import AnaSayfa from '../pages/AnaSayfa'
import SayfaHakkında from '../pages/SayfaHakkında'
import BagısSepeti from '../pages/BagısSepeti'
import GrantorTypesAdd from '../pages/GrantorTypesAdd'
import kurumKayit from '../pages/kurumKayit'
import kisiKayit from '../pages/kisiKayit'
export default function Dashboard() {
    return (
        <div>
           <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Categories/>
          </Grid.Column>
          <Grid.Column width={13}>
          <Route exact path="/" component={AnaSayfa}/>
    <Route  path="/GrantorTypeList" component={GrantorTypeList}/>
    <Route exact path="/UserListDetails" component={UserListDetails}/>
    <Route exact path="/GrantorTypes" component={GrantorTypes}/>
    <Route exact path="/UserListDetails/:id" component={UserListDetails}/>
    <Route path="/UserList" component={UserList}/>
    <Route path="/BagisKayit" component={BagisKayit}/>
    <Route path="/cart" component={CardGrantors}/>
    <Route path="/UyelerHakkında" component={UyelerHakkında}/>
    <Route path="/SayfaHakkında" component={SayfaHakkında}/>
    <Route path="/BagısSepeti" component={BagısSepeti}/>
    <Route path="/GrantorTypesAdd" component={GrantorTypesAdd}/>
    <Route path="/kurumKayit" component={kurumKayit}/>
    <Route path="/kisiKayit" component={kisiKayit}/>


    
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    <Footer/>
        </div>
    )
}
