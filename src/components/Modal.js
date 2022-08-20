import React from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";

const Modal = (props) => {
    console.log(props)

    const renderInput = ({meta, label, input}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete='off' />
        </div>
    }

    return ReactDOM.createPortal(
        <div onClick={() => {props.onDismiss()}} className="ui dimmer modals visible active">
            <div onClick={(e) => {e.stopPropagation()}} className="ui standard modal visible active">
                <Form 
                    initialValues={{
                        title: props.title,
                        note: props.note
                    }}
                    onSubmit={(formProps) => {
                        props.onSubmitCallback(formProps)
                        props.onDismiss()
                    }}
                >
                    {(formProps) => {
                        return <form onSubmit={formProps.handleSubmit} className='ui form error'>
                            <Field name="title" render={renderInput} label="Enter title"/>
                            <Field name="note" render={renderInput} label="Enter note"/>
                            <button className="ui button primary">{props.action}</button>
                        </form>
                    }}
                </Form>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal