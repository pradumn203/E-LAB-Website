import React, { Component } from 'react';

export default class Alert extends Component {

    render() {
        return (
            <div class="col-sm-8 mx-auto alert alert-warning alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>{JSON.stringify(this.props.message , null , 2)}</strong>
          </div>    
        )
    }



}