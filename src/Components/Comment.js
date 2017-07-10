import React, { Component } from 'react';

import AddComment from './AddComment';
import CommentSector from './CommentSector';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            initialData: this.props.data[0].comments
        };
        this.sendData = this.sendData.bind(this);
    }


    sendData(data){
        const sector = data.map(ele => {
            var p = <CommentSector elem={ele} key={"sector "+ele}></CommentSector>;
            return p;
        });
        return sector;
    }
    render(){
        return(
            <div className="post-comments">
                <AddComment/>
                <div>
                    {this.sendData(this.state.initialData)}
                </div>
            </div>
        )
    }
}

export default Comment;
