import React, {Component} from 'react';
import UserItem from './UserItem';

class User extends Component{

    render(){
        console.log(this.props.added_items);

        return this.props.added_items.filter(item => item.purchased === true).map((item) => (
            <UserItem key={item.id} item={item}/>
        ));
    }

}

export default User;