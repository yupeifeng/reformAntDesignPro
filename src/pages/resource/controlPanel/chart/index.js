import React, { Component } from 'react';
import { connect } from 'dva';
import { Input } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import style from './style.less';
import PropTypes from 'prop-types';

/*
* React16新增getDerivedStateFromProps、getSnapshotBeforeUpdate
* 来代替弃用的三个钩子函数（componentWillMount、componentWillReceivePorps，componentWillUpdate）
* React17将会删除
* */
@connect(({ chart, controlPanel, loading }) => ({
  chart,
  controlPanel,
}))
export default class chart extends Component {
  /*
  * 规定父类页面传递的props的字段类型
  * */
  static propTypes = {
    className: PropTypes.string,
  };

  /*
  * 给定父类页面传递的props默认值
  * */
  static defaultProps = {
    className: '',
  };

  /*
  * 构造函数初始化state,es6标准写法
  * */
  constructor(props) {
    super(props);
    this.state = {
      active: {},
    };
  }

  /*
  * 组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；
  * 每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
  * */
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  /*
  * 页面第一次render后调用，一般请求接口初始化值放在这个生命周期
  * */
  componentDidMount() {
    let { dispatch } = this.props;
    dispatch({
      type: 'chart/getDataList',
      payload: { pageNum: 1, pageSize: 20 },
      callback: (params) => {
        //todo 回调改变react组件 严禁将请求数据回调回来存入state用于渲染的行为
      },
    });
  }

  /*
  * 组件Props或者state改变时触发，true：更新，false：不更新
  * */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  /*
  * 组件更新前触发
  * */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'snapshot';
  }

  /*
  * 组件更新后触发
  * */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  /*
  * 组件卸载时触发
  * */
  componentWillUnmount() {

  }

  render() {
    let { chart, controlPanel } = this.props;
    console.log(controlPanel);
    return (
      <GridContent>
        <div className={style.add}>{chart.text}</div>
        <Input placeholder="Basic usage" onChange={(e) => this._inPutChange(e, '1')}/>
      </GridContent>
    );
  }

  _inPutChange(e, type) {
    console.log(type);
    let { dispatch } = this.props;
    dispatch({
      type: 'chart/save',
      payload: { text: e.target.value },
    });
  }
};
