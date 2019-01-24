import React from 'react'
//import './style.css'
import './style.scss'
class MyDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display:'none',
            visible:false
        }
    }
    handleClick = (e) =>{
        this.setState({ visible: !this.state.visible });
        // 实现相同组件互斥点击 显示与隐藏
        if(this.state.visible === false){
            this.timer = setTimeout(() => this.setState({ visible: true }), 0);
        }else {
            this.setState({
                visible:false
            })
        }
    }
    componentDidMount () {
        // 调用
        document.addEventListener('click', this.handleClickOutside)
    }
    componentWillUpdate() {
    }

    /**
     * 点击其他地方隐藏下拉框
     * @param e
     */
    handleClickOutside = (e) =>{
        if (this.state.visible){
            this.setState({
                visible:false
            })
        }
    }
    render() {
          const { content } = this.props;
         // console.log(content)
        let style = {
            'display':this.state.display
        }
        return (
            <div className='my-dropdown' ref="trigger" onClick={this.handleClick.bind(this)}>
                <input placeholder={content} className='search-input' />
                {this.state.visible ?  <ul className='item' style={{}}>
                    <li>路明非</li>
                    <li>楚子航</li>
                    <li>路明泽</li>
                </ul> : ''}
            </div>
        )
    }
}

export default MyDropdown;