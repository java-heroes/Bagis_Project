import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
                 as={NavLink} to="/UyelerHakkında"
          name="UYELER  HAKKINDA "
        />
        <Menu.Item
                 as={NavLink} to="/SayfaHakkında"
          name="SAYFA  HAKKINDA "
        />
        
      </Menu>
    </div>
  );
}
