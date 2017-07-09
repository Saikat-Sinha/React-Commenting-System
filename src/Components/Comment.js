import React, { Component } from 'react';

import AddComment from './AddComment';
import PostPanel from './PostPanel';

class Comment extends Component{
    constructor(props){
        super();
        this.state = {
          comments:null,
          CommentElements: null
        };
        // this.getLocalItems = this.getLocalItems.bind(this);
        this.makeTags = this.makeTags.bind(this);
         this.createPanel = this.createPanel.bind(this);
         this.ForceUpdateHandler = this.ForceUpdateHandler.bind(this);
    }
    ForceUpdateHandler(){
        this.forceUpdate()
    }
    componentWillMount(){
        var ls = localStorage.getItem("_commentData_");
        var parsed = JSON.parse(ls);
        var comments = parsed[0].comments;
        this.setState({
            comments: comments
        })
    }

    createPanel(){
        return(<PostPanel></PostPanel>)
    }

    makeTags(arr) {
        const panel = arr.map(ele =>{
            var p = <PostPanel elem={ele} key={ele[0]}></PostPanel>;
            return p;
        });
        return panel;
    }
    // getLocalItems() {
    //     var ls = localStorage.getItem("_commentData_");
    //     var parsed = JSON.parse(ls);
    //     var comments = parsed[0].comments;
    //     this.setState({
    //         comments: comments
    //     })
    // }
    render(){
        return(
            <div className="post-comments" onChange={this.ForceUpdateHandler}>
                <AddComment/>
                <div>
                    {this.makeTags(this.state.comments)}

                </div>
            </div>
        );
    }
}

export default Comment;
