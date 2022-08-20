import React from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";

const Modal = (props) => {
    const renderError = ({touched, error}) => {
        if(touched && error){
            return <div className="ui red basic label">{error}</div>
        }
    }

    const renderInput = ({meta, label, input, placeholder}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete='off' placeholder={placeholder} />
            {renderError(meta)}
        </div>
    }

    const month = props.dueDate.getMonth() < 9 ? `0${props.dueDate.getMonth()+1}` : props.dueDate.getMonth() + 1
    const formattedDate = `${props.dueDate.getFullYear()}-${month}-${props.dueDate.getDate()}`

    return ReactDOM.createPortal(
        <div onClick={() => {props.onDismiss()}} className="ui dimmer modals visible active">
            <div onClick={(e) => {e.stopPropagation()}} className="ui standard modal visible active">
                <Form 
                    initialValues={{
                        title: props.title,
                        note: props.note,
                        dueDate: formattedDate
                    }}
                    onSubmit={(formProps) => {
                        props.onSubmitCallback(formProps)
                        props.onDismiss()
                    }}
                    validate={(formProps) => {
                        const errors = {}
                        if(!formProps.title){
                            errors.title = 'Please enter a title'
                        }
                        return errors
                    }}
                >
                    {(formProps) => {
                        return <form onSubmit={formProps.handleSubmit} className='ui form content error'>
                            <h1>{props.header}</h1>
                            <Field name="title" render={renderInput} label="Enter title" placeholder='Title'/>
                            <Field name="note" render={renderInput} label="Enter note" placeholder='Note' />
                            <Field name="dueDate" render={renderInput} type='date' label='Due Date'/>
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