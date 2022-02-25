import React from 'react';
import { Modal } from './stories/modal/Modal';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div>npm run storybook</div>
      <Modal variant="dark" onClickOutside={() => alert(666)} />
    </>
  );
}

export default App;
