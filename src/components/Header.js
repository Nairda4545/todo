import React from "react";
import { connect } from "react-redux";

import { setDisplay } from "../actions";

const Header = (props) => {
    return <div className="ui">
        <button className={`ui button ${props.currentListOption === 'notdone' ? 'active' : ''}`} onClick={() => {props.setDisplay('notdone')}}>Show unfinished</button>
        <button className={`ui button ${props.currentListOption === 'done' ? 'active' : ''}`} onClick={() => {props.setDisplay('done')}}>Show finished</button>
        <button className={`ui button ${props.currentListOption === 'both' ? 'active' : ''}`} onClick={() => {props.setDisplay('both')}}>Show both</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        currentListOption: state.renderListOption
    }
}

export default connect( mapStateToProps, { setDisplay } )(Header)