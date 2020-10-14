import React, { Component } from 'react';
import { loadData } from '../utils/loadData';
import UserCardList from './UserCardList';

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
        console.log(this.state.users);
    }

    render(){
        return(
            <>
            <div>
                <form>
                    <label>
                        User Name: 
                        <input type="text" onChange={event => this._handleChange(event.target.value)}
                        
                        />
                    </label>
                    <button type="button" onClick={this._handleSubmit}>Go Get it!</button>
                </form>
            </div>
            <UserCardList users={this.state.users}/>
            </>
        )
    }

}


export default SearchForm;
