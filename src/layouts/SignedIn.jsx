import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
            <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C5603AQHVeBwKPUZQ0A/profile-displayphoto-shrink_400_400/0/1623500809685?e=1632960000&v=beta&t=JnM_rZVDydbl4EAUH1nB6BayltBGS4aYzPJcFjVLa-I" ></Image>
            <Dropdown pointing="top left" text="HNK">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={props.signOut} text="ÇIKIS YAP" icon="sign-out"/>
            </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>

        </div>
    )
}

