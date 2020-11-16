import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <div className='header-title'>MPS</div>
                <div className='header-menu-container'>
                    <a className='header-menu' href='#link-lang'>言語とコース</a>
                    <a className='header-menu' href='#link-voice'>お客様の声</a>
                    <a className='header-menu' href='#link-message'>メッセージ</a>
                    <a className='header-menu' href='#link-form'>お問合せ</a>
                </div>
            </div>
        );
    }
}

export default Header;