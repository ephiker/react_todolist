import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Item extends Component {

    static defaultProps = {
        thing: {
            id: 0,
            val: "방치우기"
        }
    }

    render() {
        const { id, val } = this.props.thing;

        return (
            <div id="DV_Thing">
                <button>아이템 버튼 {val} </button>
                <button>tempArr {id}</button>
            </div>
        );
    }
}


export default Item;
