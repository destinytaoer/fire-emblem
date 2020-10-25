import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';
const defaultProps = {
  onClick: jest.fn(),
};
const testProps: ButtonProps = {
  btnType: ButtonType.PRIMARY,
  size: ButtonSize.LARGE,
  className: 'klass',
};
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('测试 Button 组件', () => {
  it('正确渲染默认按钮', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    // 正确渲染
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeFalsy();
    expect(element).toHaveClass('btn btn-default');

    // 点击测试
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('正确渲染不同 props 的组件', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    // 正确渲染
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  });
  it('正确渲染一个链接按钮', () => {
    const wrapper = render(
      <Button btnType={ButtonType.LINK} href='http://test.com'>
        Link
      </Button>
    );
    const element = wrapper.getByText('Link');
    // 正确渲染
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('正确渲染 disabled 按钮', () => {
    const wrapper = render(<Button {...disabledProps}>disabled</Button>);
    const element = wrapper.getByText('disabled') as HTMLButtonElement;
    // 正确渲染
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();

    // 点击测试
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
