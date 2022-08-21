import React from "react";
import { connect } from "react-redux";

import { setDisplay, openModal, closeModal, addItem } from "../actions";
import Modal from "./Modal";

const Header = (props) => {
    const renderModal = () => {
        if(props.showModal.type === 'create'){
            return <Modal 
                onDismiss={props.closeModal}
                onSubmitCallback={props.addItem}
                action='Add'
                header='Add new item'
                dueDate={new Date()}
                isDone={false}
                renderDelete={() => null}
            />
        }
    }

    return <div className="ui horizontal list">
        <div className="item">
            <button className={`ui button ${props.currentListOption === 'notdone' ? 'active' : ''}`} onClick={() => {props.setDisplay('notdone')}}>Show unfinished</button>
        </div>
        <div className="item">
            <button className={`ui button ${props.currentListOption === 'done' ? 'active' : ''}`} onClick={() => {props.setDisplay('done')}}>Show finished</button>
        </div>
        <div className="item">
            <button className={`ui button ${props.currentListOption === 'both' ? 'active' : ''}`} onClick={() => {props.setDisplay('both')}}>Show both</button>
        </div>
        <div className="item">
            <button className="ui button primary" onClick={() => props.openModal('create')}>Create</button>
        </div>
        {renderModal()}
    </div>
}

const mapStateToProps = (state) => {
    return {
        currentListOption: state.renderListOption,
        showModal: state.showModal
    }
}

export default connect( mapStateToProps, { setDisplay, openModal, closeModal, addItem } )(Header)