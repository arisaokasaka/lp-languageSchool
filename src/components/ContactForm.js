import React from 'react';

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            text:'',
            hasEmailError:false,
            hasTextError:false,
            isSubmitted:false
        };
    }

    handleEmailChange(){
        let isEmailEmpty = this.state.email === '';
        this.setState({
            hasEmailError: isEmailEmpty
        });
    }

    handleTextChange(){
        let isTextEmpty = this.state.text === ''; 
        this.setState({
            hasTextError: isTextEmpty
        });
    }

    render(){       
        let emailErrorMessage;
        if(this.state.hasEmailError){
            emailErrorMessage=(
                <p className='email-error-message error-message'>メールアドレスを入力してください。</p>
            );
        }

        let textErrorMessage;
        if(this.state.hasTextError){
            textErrorMessage=(
                <p className='text-error-message error-message'>お問い合わせ内容を入力してください。</p>
            );
        }

        let formArea;
        if(this.state.isSubmitted){
            formArea=(
                <div className='submitted-message'>送信完了</div>
            );
        }else{
            formArea=(
                <form>
                    <p className='require-icon'>必須</p>
                    <p className='contact-item'>メールアドレス</p>
                    {emailErrorMessage}
                    <input 
                        onChange={(event)=>{this.setState({email:event.target.value})}}
                    />
                    <p className='require-icon'>必須</p>
                    <p className='contact-item'>お問合せ内容</p>
                    {textErrorMessage}
                    <textarea
                        onChange={(event)=>{this.setState({text:event.target.value})}}
                    />
                    <div className='button-submit'>
                        <input
                            type='button'
                            value='送信'
                            onClick={()=>{
                                this.handleEmailChange()
                                this.handleTextChange()
                            }}
                        />
                    </div>
                </form>
            );
        }

        return(
            <div className='contact-form'>
                {formArea}
            </div>
        );
    }
};

export default ContactForm;