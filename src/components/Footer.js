import { render } from '@testing-library/react';
import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='footer-container'>
                    <h3>More Possibility School</h3>
                    <p>福岡県福岡市天神xx-xx</p>
                </div>
            </div>
        );
    }
}

export default Footer;