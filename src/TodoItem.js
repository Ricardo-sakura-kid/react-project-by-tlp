import React from 'react';
class TodoItem extends React.Component{

    // 子组件如果想要和父组件通信，子组件要调用父组件传递过来的方法
    constructor(props){
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }
    handleClickDelete(){
        // 1、点击item触发handleClickDelete方法，该方法通过props去调用父组件的delete方法
        // 2、调用delete方法的同时，将当前被点击的item的index当做参数传递给delete方法
        //
        this.props.delete(this.props.index)
    }
    render(){
        const { content } = this.props;
        return(
            <div onClick={this.handleClickDelete}>{content}</div>  // 这里可以直接写成 {this.props.content},已经改成es6的写法
        )
    }
}
export default TodoItem;