import React, { Component } from 'react';

class AddComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            DescValue: "",
            Likes: '0'
        };

        this.SubmitHandler = this.SubmitHandler.bind(this);
    }
    SubmitHandler(e){
        e.preventDefault();
        this.setState({DescValue: this.input.value});
        console.log(this.input.value);
    }


    componentWillUpdate(nextProps, nextState){
        var x = localStorage.getItem("_commentData_");
        var a= JSON.parse(x);
        a[0].comments[a[0].comments.length-1] = [this.props.posterName,this.props.profileImg, nextState.DescValue, nextState.Likes,[]]
        localStorage.setItem("_commentData_", JSON.stringify(a))

    }


    render(){
        return(
                <form onSubmit={this.SubmitHandler}>
                    <div className="input-group">
                        <input className="form-control comment-input" placeholder="Add a comment..." type="text" ref={(input) => this.input = input}/>
                        <span className="input-group-addon">
                            <button type="submit">Comment</button>
                        </span>
                    </div>
                </form>
        );
    }
}

AddComment.defaultProps = {
    profileImg: 'http://bootdey.com/img/Content/user_3.jpg',
    posterName: 'Saikat Sinha'
};

export default AddComment;
