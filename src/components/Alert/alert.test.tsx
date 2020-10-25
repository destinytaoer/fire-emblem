import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Alert, { AlertType } from './alert';

const deafultProps = {
  title: '我是 alert',
  onClose: jest.fn(),
};

const testProps = {
  type: AlertType.SUCCESS,
  title: '我是 alert',
};

describe('测试 Alert 组件', () => {
  it('正常渲染默认 Alert 组件', () => {
    const wrapper = render(<Alert {...deafultProps} />);
    const element = wrapper.getByText('我是 alert');

    // 正常渲染
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('alert-title');
    expect(element.parentNode).toHaveClass('alert alert-default');
    expect(element.tagName).toEqual('SPAN');

    // 关闭按钮
    expect(element.nextSibling).not.toBeNull();
    expect(element.nextSibling).toHaveClass('alert-close');
    fireEvent.click(element.nextSibling!);
    expect(element).not.toBeInTheDocument();
    expect(deafultProps.onClose).toBeCalled();
  });
  it('正常渲染不同类型的 Alert 组件', () => {
    const wrapper = render(<Alert {...testProps} />);
    const element = wrapper.getByText('我是 alert');

    // 正常渲染
    expect(element).toBeInTheDocument();
    expect(element.parentNode).toHaveClass('alert alert-success');
  });
  it('正常渲染具有描述的 Alert 组件', () => {
    const wrapper = render(<Alert {...deafultProps}>Nice</Alert>);
    const element = wrapper.getByText('Nice');

    // 正常渲染
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('alert-desc');
  });
  it('正常渲染没有关闭按钮的 Alert 组件', () => {
    const wrapper = render(<Alert title='我是 alert' closable={false} />);
    const element = wrapper.getByText('我是 alert');

    // 不渲染关闭按钮
    expect(element).toBeInTheDocument();
    expect(element.nextSibling).toBeNull();
  });
});
