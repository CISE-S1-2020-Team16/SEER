
import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../seer.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/articles/list">
                <img src={logo} width="100" height="100" alt="google.com" />
            </Wrapper>
        )
    }
}

export default Logo