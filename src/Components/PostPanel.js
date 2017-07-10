import React, { Component } from 'react';

class PostPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Likes: this.props.elem[3],
            isEdit: false,
            isEditClicked: false,
            edit: null,
            isClicked: false,
            showComponent: true,
            isReply: false,
            isReplyClicked: false
        };

        this.LikeHandler = this.LikeHandler.bind(this);
        this.ReplyHandler = this.ReplyHandler.bind(this);
        this.EditHandler = this.EditHandler.bind(this);
        this.RemoveHandler = this.RemoveHandler.bind(this);
        this.ReplySubmitter = this.ReplySubmitter.bind(this);
        this.EditSubmitter = this.EditSubmitter.bind(this);
     }
    LikeHandler(){
        if(this.state.isClicked){
            this.setState({
                Likes: Number(this.state.Likes -1),
                isClicked:false
            })
        }
        else{
            this.setState({
                Likes: Number(this.state.Likes)+1,
                isClicked: true
            })
        }
    }
    ReplyHandler(){
        if(this.state.isReplyClicked){
            this.setState({
                isReply: false,
                isReplyClicked: false
            })
        }
        else{
            this.setState({
                isReply: true,
                isReplyClicked: true
            })
        }
    }
    EditHandler(){
        if(this.state.isEditClicked){
            this.setState({
                isEdit:false,
                isEditClicked:false
            })
        }
        else{
            this.setState({
                isEdit:true,
                isEditClicked: true
            })
        }

    }
    RemoveHandler(){
        this.setState({
            showComponent:false
        });
    }
    ReplySubmitter(e){
        e.preventDefault();

    }

    EditSubmitter(e){
        e.preventDefault();
    }

    render() {
        var noEdit = <p>{this.props.elem[2]}</p>;
        var yesEdit = <form onSubmit={this.EditSubmitter} >
                    <div className="input-group">
                        <input type="text" className="form-control comment-input" value={this.props.elem[2]} ref={(input) => this.input = input}/>
                        <span className="input-group-addon">
                        <button>Ok</button>
                        <button>Cancel</button>
                    </span>
                    </div>

                    </form>;
        var Edit = this.state.isEdit?yesEdit:noEdit;

        var reply = <form onSubmit={this.ReplySubmitter}>
                    <div className="input-group">
                        <input className="form-control comment-input" type="text" />
                        <span className="input-group-addon">
                        <button>Submit</button>
                        </span>
                    </div>
                    </form>;
        return (this.state.showComponent?
            <ul className="comments-list">
                <li className="comment">
                    <a className="pull-left" href="#">
                        <img className="avatar" src={this.props.elem[1]} alt="avatar" />
                    </a>
                    <div className="comment-body">
                        <div className="comment-heading">
                            <h4 className="user">{this.props.elem[0]}</h4>
                        </div>
                        {Edit}
                        <div className="task-panel">

                            <a className="btn btn-default btn-xs" onClick={this.LikeHandler}>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <span>{'('+this.state.Likes+')'}</span>
                            </a>
                            <a className="btn btn-default btn-xs" onClick={this.ReplyHandler}>
                                <i className="fa fa-reply" aria-hidden="true"></i>
                            </a>
                            <a className="btn btn-default btn-xs" onClick={this.EditHandler}>
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </a>
                            <a className="btn btn-danger btn-xs" onClick={this.RemoveHandler}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </a>
                        </div>
                        {this.state.isReply?reply:null}
                    </div>
                    <hr/>
                    {this.props.children}
                </li>
            </ul>: null
        );
    }
}

export default PostPanel;