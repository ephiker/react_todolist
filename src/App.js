import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {

  // state와 하위 변수 생성
  constructor(props) {
    super(props);
    this.state = {
      itemArr: [
        { id: 0, text: "할 일1" }
      ]
    }
  }

  Post = (e) => {
    console.log("post");
    var idx = 0;
    let temp_string = this._inputElement.value;
    if (temp_string != "") {
      let tempArr = this.state.itemArr;
      idx++;

      tempArr.push(
        {
          id: idx,
          text: temp_string
        }
      );

      //비워주기
      this._inputElement.value = "";
      this.setState({ itemArr: tempArr });

      e.preventDefault();
      // console.log("Arr::" + this.state.itemArr);
    }
  }

  render() { //렌더 써주기 
    return (
      <div className="main" >
        <p>To Do List</p>
        <input ref={(a) => this._inputElement = a} placeholder="할 일을 입력하세요" />
        <button onClick={this.Post}> 추가요~ </button>

        <List entries={this.state.itemArr} />
      </div>
    )
  }
}


export default App;





  // Rearrange = function () {
  //   let literal = "";

  //   {
  //     this.state.itemArr.map((item, idx) => {
  //       literal += this.setLiteral(item, idx);
  //     })
  //   }

  //   document.getElementById("DV_List").innerHTML = literal;
  // }

  // Rearrange = function () {
  //   render:
  //   {
  //     return (
  //       <div>
  //         Rearrange
  //       </div>
  //     )
  //   }
  // }




  // setLiteral = function (param, idx) {
  //   return `
  //   <div id="DV_Thing" data-idx="${idx}">
  //   <button id="BT_Thing" data-idx="${idx}" class="textField" onclick="Edit(${idx})">${param}</button>
  //   <button id="BT_Delete" data-idx="${idx}" onClick={this.Delete(${idx})}>DELETE</button>
  //   <button onClick=${this.Delete()}> 삭제요~ </button>
  //   </div>
  //   `
  // }

  // Delete = function (targetIdx) {
  //   console.log("Delete");
  //   this.state.itemArr.splice(targetIdx, 1);
  //   this.Rearrange();
  // }

  // inputUpdate = temp => {
  // this.setState({ content: temp.target.value })
  // }

  // render() { //렌더 써주기 
  //   let literal = "";
  // this.state.itemArr.map((item, idx) => { literal += this.setLiteral(item, idx); });
  // var bt = this.state.itemArr.map((item) => (
  // <button value={item} />

  // <div id="DV_Thing" />
  // <div id="DV_Thing" data-idx={item} />
  // {/* <button id="BT_Thing" data-idx="${idx}" class="textField" onclick="Edit(${idx})">${param}</button>
  // <button id="BT_Delete" data-idx="${idx}" onClick={this.Delete(${ idx })}>DELETE</button>
  // <button onClick=${this.Delete()}> 삭제요~ </button> */}




  // ));
  // const { data } = this.props;
  // const list = data.map(
  //   info => (<PhoneInfo key={info.id} info={info} />)
  // );





  //   return (
  //     <div className="main" >
  //       <p>To Do List</p>
  //       <input ref={(a) => this._inputElement = a} placeholder="할 일을 입력하세요" />
  //       <button onClick={this.Post}> 추가요~ </button>
  //       {/* {JSON.stringify(this.state.itemArr)} */}
  //     </div>
  //   )
  // }
