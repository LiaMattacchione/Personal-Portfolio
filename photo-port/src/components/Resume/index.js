import React, { Component } from 'react';
    
class Download extends Component {

    render() {

    return (
        <div className="App">
        <a href={require('../../documents/Lia_Mattacchione_Resume_2021.pdf')} target="_blank">Download Pdf</a>
        </div>
    );
    }
}

export default Download;