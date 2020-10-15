import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { loadData } from '../utils/loadData';
import UserCardList from './UserCardList';
import UserProfile from './UserProfile';


class SearchForm extends Component {
    state = {
        users: [],
        userName: "",
    }

    _handleChange = newText => {
        this.setState({
            userName: newText,
        })
    }
    _handleSubmit = async () =>{
        const { userName } = this.state
        const newUserData = await loadData(
            `https://api.github.com/users/${userName}`
        );
        this.setState({
            users: [...this.state.users, newUserData],
        });
    }

    render(){
        return(
            <>
            <h1>
                GitHub User List
            </h1>
            <Route exact path='/'>
                <form>
                    <label>
                        User Name: 
                        <input type="text" onChange={event => this._handleChange(event.target.value)}
                        
                        />
                    </label>
                    <button type="button" onClick={this._handleSubmit}>Go Get it!</button>
                </form>
                <UserCardList users={this.state.users}/>
            </Route>
            <Route path={`/user/:userName`}>
            <Link to="/" style={{ display: "block", margin: "1rem auto"}}>Return to List</Link>
                <UserProfile users={this.state.users}/>
          </Route>
            </>
        )
    }

}


export default SearchForm;
