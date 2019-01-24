import React from 'react';
import {Dropdown,TimeSelect} from 'element-react';
import MyDropdown from './MyDropdown'
//import {Dropdown} from './../dropdowntest'


class ElementTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        //    this.handleClickDelete = this.handleClickDelete.bind(this);
    }
    handleStartUpdate(startDate) {
       // console.debug('time-select startDate update: ', startDate)
       // this.setState({startDate})
    }
    render() {
        //  const { content } = this.props;
        return (
            <div>
                <TimeSelect
                    start="08:30"
                    step="00:15"
                    end="18:30"
                    onChange={this.handleStartUpdate.bind(this)}
                    value={this.state.startDate}
                    placeholder="选择时间"
                />
                <TimeSelect
                    start="08:30"
                    step="00:15"
                    end="18:30"
                    onChange={this.handleStartUpdate.bind(this)}
                    value={this.state.startDate}
                    placeholder="选择时间"
                />
                <MyDropdown content={'one'} />
                <MyDropdown content={'two'}/>
                <Dropdown trigger="click" menu={(

                    <Dropdown.Menu>
                        <Dropdown.Item>黄金糕</Dropdown.Item>
                        <Dropdown.Item>狮子头</Dropdown.Item>
                        <Dropdown.Item>螺蛳粉</Dropdown.Item>
                        <Dropdown.Item>双皮奶</Dropdown.Item>
                        <Dropdown.Item>蚵仔煎</Dropdown.Item>
                    </Dropdown.Menu>
                )}>
              <span className="el-dropdown-link">
                下拉菜单1<i className="el-icon-caret-bottom el-icon--right"></i>
              </span>
                </Dropdown>
                <Dropdown trigger="click" menu={(
                    <Dropdown.Menu>
                        <Dropdown.Item>黄金糕</Dropdown.Item>
                        <Dropdown.Item>狮子头</Dropdown.Item>
                        <Dropdown.Item>螺蛳粉</Dropdown.Item>
                        <Dropdown.Item>双皮奶</Dropdown.Item>
                        <Dropdown.Item>蚵仔煎</Dropdown.Item>
                    </Dropdown.Menu>
                )}>
                <span className="el-dropdown-link">
                        下拉菜单2<i className="el-icon-caret-bottom el-icon--right"></i>
                </span>
                </Dropdown>
            </div>
        )
    }
}

export default ElementTest;