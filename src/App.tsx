import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Button</h2>
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
          {' '}
          Link{' '}
        </Button>
        <Button btnType={ButtonType.LINK} disabled href='http://www.baidu.com'>
          {' '}
          disabled Link{' '}
        </Button>
      </header>
    </div>
  );
}

export default App;
