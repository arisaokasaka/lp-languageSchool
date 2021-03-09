import React from 'react';

class Voice extends React.Component{

    constructor(props){
        super(props);
        this.state={isModalOpen:false}
    }

    handleClickVoice(){
        this.setState({isModalOpen:true});
    }

    handleClickModal(){
        this.setState({isModalOpen:false});
    }

    render(){
        let modal;
            if(this.state.isModalOpen){
                modal=(
                    <div className='modal'>
                    <div className='modal-inner'>
                        <div className='modal-header'></div>
                        <div className='modal-content'>
                            <img src={this.props.image} alt="お客様の写真"/>
                            <h3>{this.props.name}</h3>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.detail}</p>
                        </div>
                        <button
                            className='modal-close-btn'
                            onClick={()=>{this.handleClickModal()}}
                        >
                            とじる
                        </button>
                        <div className='modal-footer'></div>
                    </div>
                </div>
                )
            }

        return(
            <div>
                <div
                    className='voice-item'
                    onClick={()=>{this.handleClickVoice()}}
                >
                    <img src={this.props.image} alt="お客様の写真"/>
                    <p>{this.props.name}</p>
                    <p>{this.props.title}</p>
                </div>
                {modal}
            </div>
        );
    }
}

export default Voice;