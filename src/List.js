import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Item extends Component {

    Del = (e) => {
        console.log("delete::" + this.props.index);
        //배열에서 해당 인덱스의 요소를 지워주면 된다 이제 된다...


    }

    render() {
        //물려받은 요소
        var curItem = this.props.item;
        var idx = this.props.index;

        return (
            <div id="DV_Thing">
                <button key={idx} onClick={this.Del} > {curItem.text}</button>
            </div >
        )
    }
}

class List extends Component {

    // static defaultProps = {
    //     itemArr: []
    // }

    render() {
        //물려받은 부모의 배열
        let data = this.props.entries;
        var listItems = data.map((text, id) => { //item 은 배열 속 요소 하나
            return <Item key={id} item={text} index={id} ></Item >
        });

        //ToDoList라는 최상위 div 아래에 리턴
        return (
            <div id="ToDoList" >
                {listItems}
            </div>
        )
    }
}

export default List;
