import React, { Component } from 'react';

export default class Alert extends Component {

    render() {
        return (
            <div class="col-sm-8 mx-auto alert alert-success alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Your Form Has Been Successfully Submitted</strong>
          </div>    
        )
    }



}