import React, { Component } from 'react';
import PostPanel from './PostPanel';

class CommentSector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initData: this.props.elem
        }
        this.makeTags = this.makeTags.bind(this);
    }

    makeTags(arr) {
        for(var i=0; i<arr.length; i++){
            if(typeof arr[i] === "string"){
                var p = <PostPanel elem={arr} key={"panel "+arr} />;
            }
        }
        return (
            <div>
                {p}
            </div>
        );

    }
    componentWillMount(){

    }

    render(){
            return (
                <div>
                    {this.makeTags(this.state.initData)}
                </div>
            );
        }
}

export default CommentSector;