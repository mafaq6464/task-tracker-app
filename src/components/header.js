import React, { Component }  from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    padding: 15px 0;
    background: red;
    color: #fff;
`;

const Container = styled.div`
    padding: 0 15px;
    max-width: 1160px;
    margin: 0 auto;
`;

const SearchList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                'John',
                'chris',
                'david',
                'Mortal',
                'Johny'
            ],
            searchTerm: ''
        }
    }

    editSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    searchResults = () => {
        return this.state.names.filter( name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map(filteredName => 
        <li key={filteredName}> {filteredName}</li>
        )
    }

    render(){
        
        return (
            <HeaderWrapper>
                <Container>
                    <input value={this.state.searchTerm} onChange={this.editSearch} placeholder="enter name to search" />
                    <h4>Search Results:</h4>
                    <SearchList>{this.searchResults()}</SearchList>
                </Container>
            </HeaderWrapper>
        );
    }   
}