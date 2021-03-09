import React from 'react';

class Language extends React.Component{
    render(){
        return(
            <div className='language'>
                {this.props.list.map((item)=>{
                    return(
                        <div className='language-card' key={'language_' + item.id}>
                            <div className='language-item'>
                            <img src={item.image} alt="言語ごとの画像"/>
                            <p>{item.name}</p>
                        </div>
                     </div>
                    );
                })}
            </div>
        );
    }
}

export default Language;