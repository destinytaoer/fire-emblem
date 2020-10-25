import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h3>Button</h3>
      <Button btnType={ButtonType.PRIMARY} size={ButtonSize.LARGE}>
        primary lg
      </Button>
      <Button size={ButtonSize.SMALL}>default sm</Button>
      <Button btnType={ButtonType.PRIMARY} disabled>
        disabled
      </Button>
      <Button btnType={ButtonType.DEFAULT}>default</Button>
      <Button btnType={ButtonType.DANGER}>danger</Button>
      <Button btnType={ButtonType.LINK} href='http://www.baidu.com'>
        Link
      </Button>
      <Button btnType={ButtonType.LINK} disabled href='http://www.baidu.com'>
        disabled Link
      </Button>
      <h3>Alert</h3>
      <div style={{ width: 500 }}>
        <Alert title='我是 alert' />
        <Alert title='我是 alert' type={AlertType.SUCCESS} />
        <Alert title='我是 alert' type={AlertType.DANGER} />
        <Alert title='我是 alert' type={AlertType.WARNING}>
          hello
        </Alert>
      </div>
    </div>
  );
}

export default App;
