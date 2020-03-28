import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item.js';


class List extends Component {

    static defaultProps = {
        content: "",
        itemArr: []
    }


    Del = (_key) => {
        console.log("delete!!");

        this.props.entries.map((item) => {
            if (item.key == _key) {
                console.log(item);

                // this.props.entries.remove(item);
            }
        })
    }

    render() {
        var tempArr = this.props.entries;

        //부모 컴퍼넌트로부터 받은 배열을 map
        var listItems = tempArr.map((item) => {
            return <div key={item.key} id="DV_Thing">
                <button key={item.key}> {item.text}</button>
                <button onClick={this.Del(item.key)} key={item.key + 1} >"삭제"</button>
            </div >
        });

        //ToDoList라는 최상위 div 아래에 리턴
        return (
            <div id="ToDoList">
                {listItems}
            </div>
        )
    }
}




// function Delete(_key) {
//     console.log("delete!!");

//     tempArr.map((item) => {
//         if (item.key == _key) {
//             console.log("item");
//             // tempArr.remove(item);
//         }
//     })
// }
export default List;
