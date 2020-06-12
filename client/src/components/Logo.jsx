
import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../seer.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <a class="navbar-brand" href="#"><img src={logo} width="100" height="100" alt="cise-s1-2020-team16.heroku.com" /></a>
        )
    }
}

export default Logo