import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
        inputValue:''
    }

      this.handleInputChang = this.handleInputChang.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      this.onClickDelete = this.onClickDelete.bind(this);

  }

  handleBtnClick(){
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''

    })
    //this.state.list.push("hello world")
  }
  handleInputChang(e){
   this.setState({
        inputValue:e.target.value
    })
   //console.log(e.target.value)
  }
    onClickDelete(index){
        // 4、获得index的父组件就可以对数据进行操作了
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    getTodoItems(){
      return(
          this.state.list.map((item,index) => {
          // 3、然后delete方法绑定了onClickDelete方法，onClickDelete就获得的子组件item的index（下标）值
          return <TodoItem delete={this.onClickDelete} content={item} key={index} index={index}/>
      })
      )
    }
  // 父组件通过属性的形式向子组件传递参数
    //  子组件通过props接受父组件传递过来的参数
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChang}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
            {
                this.getTodoItems()
            }
        </ul>
      </div>
    );
  }
}

export default TodoList;
