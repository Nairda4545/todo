import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

const List = (props) => {
    
    const renderList = props.todoList.map(item => {
        if((props.currentListOption === 'notdone' && item.isDone) || (props.currentListOption === 'done' && !item.isDone)){
            return null
        }
        return <div key={item.id} className='item'>
                <button className="right floated content">_</button>
                <div className="right floated content description">{item.dueDate.toDateString()}</div>
                <div className="header">{item.title}</div>
                <div className="description">{item.note}</div>
            </div>
    })

    if(!props.todoList){return <div>Loading</div>}

    return <div className="ui celled list">{renderList}</div>
}

const mapStateToProps = (state) => {
    return {
        todoList: _.values(state.list),
        currentListOption: state.renderListOption
    }
}

export default connect( mapStateToProps )(List)