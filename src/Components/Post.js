import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
    constructor(props){
        super(props);
        this.state ={
            PostComment: this.props.data[0].postComment,
            PostLike: this.props.data[0].likes,
            isClicked: false,
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleLike(e){
        e.preventDefault();
        if(this.state.isClicked){
            this.setState({
                PostLike: Number(this.state.PostLike)-1,
                isClicked:false
            })
        }
        else{
            this.setState({
                PostLike: Number(this.state.PostLike)+1,
                isClicked: true
            })
        }

    }
    handleShare(e){
        e.preventDefault();
        console.log("clicked");
    }
    handleEdit(e){
        e.preventDefault();
        console.log("Handle Click");
    }
    handleRemove(e){
        e.preventDefault();
        alert("This Component Can't Be Removed");
    }

    render(){
        return (
            <div className="container contained">
                <div className="col-sm-12">
                    <div className="panel panel-white post">
                        <div className="post-header">
                            <div className="post-heading">
                                <div className="pull-left image">
                                    <img src="http://bootdey.com/img/Content/user_1.jpg" className="img-circle avatar" alt="user profile"></img>
                                </div>
                                <div className="pull-left meta">
                                    <div className="title h5">
                                        <a href="#"><b>{this.props.data[0].posterName}</b></a>
                                    </div>
                                    <h6 className="text-muted time">10 minutes ago</h6>
                                </div>
                            </div>
                        </div>
                        <div className="post-description">
                            <p>{this.state.PostComment}</p>
                            <div className="stats">
                                <a href="#" className="btn btn-default stat-item" onClick={this.handleLike}>
                                    <i className="fa fa-thumbs-up icon"></i>{this.state.PostLike}
                                </a>
                                <a href="#" className="btn btn-default stat-item" onClick={this.handleShare}>
                                    <i className="fa fa-share icon"></i>{this.props.data[0].shares}
                                </a>
                                <a href="#" className="btn btn-default stat-item" onClick={this.handleEdit}>
                                    <i className="fa fa-pencil-square-o"></i>
                                </a>
                                <a href="#" className="btn btn-danger stat-item" onClick={this.handleRemove}>
                                    <i className="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                       <Comment data={this.props.data}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
