import React, {Component} from 'react';

class List extends Component{
    render(){
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
          ]
        return(
            <div className="List">
                <Map itemArray={posts}/>
            </div>
        );
    }
}

class Map extends Component{
    render(){
        let listItem = this.props.itemArray.map( (item) =>
            <li key={item.id}>{ item.content }</li>
        );
        return(
            <ul>{listItem}</ul>
        );
    }
}

export default List;