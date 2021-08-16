import React, { Component }  from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    padding: 15px 0;
    background: red;
    color: #fff;
`;

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    render(){
        return (
            <HeaderWrapper>
                <container>
                    test
                </container>
            </HeaderWrapper>
        );
    }   
}