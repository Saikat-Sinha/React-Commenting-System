import React, { Component } from 'react';


class LoadReply extends Component {
    constructor(props) {
        super();
        this.state = {
            isLoaded: false,
        }
        this.loadHandler = this.loadHandler.bind(this);
    }
    loadHandler(e){
        e.preventDefault();
         if(this.state.isLoaded){

         }
         else{
            this.setState({
               isLoaded:true
            });
         }
    }


    render(){
        var LoadReply = <a className="btn btn-default col-sm-offset-1" onClick={this.loadHandler}>Load Reply</a>;
        var elem = this.props.elem;
        var Reply = "";
        return(
            <div>
                {LoadReply}
            </div>
        );
    }
}

export default LoadReply;