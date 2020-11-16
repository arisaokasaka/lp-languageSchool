import React from 'react';

class Language extends React.Component{

    

    render(){
        return(
            <div className='language-card'>
                <div className='language-item'>
                    <img src={this.props.image}/>
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}

export default Language;