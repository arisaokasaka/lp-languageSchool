import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Course extends React.Component{
    constructor(props){
        super(props);
        this.state={isCourseModalOpen:false}
    }

    handleClickCourse(){
        this.setState({isCourseModalOpen:true});
    }

    handleClickClose(){
        this.setState({isCourseModalOpen:false});
    }

    render(){
        let ModalCourse;
        if(this.state.isCourseModalOpen){
            ModalCourse=(
                <div className='modal'>
                    <div className='modal-inner'>
                        <div className='modal-header'></div>
                        <div className='modal-content'>
                            <FontAwesomeIcon className='course-icon' icon={this.props.icon} />
                            <h3>{this.props.name}</h3>
                            <p>{this.props.explanation}</p>
                        </div>
                        <button
                            className='modal-close-btn'
                            onClick={()=>{this.handleClickClose()}}
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
                    className='course-item'
                    onClick={()=>{this.handleClickCourse()}}
                >
                    <FontAwesomeIcon className='course-icon' icon={this.props.icon} />
                    <p>{this.props.name}</p>
                </div>
                {ModalCourse}
            </div>
        );
    }
}

export default Course;