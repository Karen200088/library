import React from 'react';
import { Modal } from './stories/modal/Modal';
import { Dropdown } from './stories/dropdown/Dropdown';
import { Flag } from './stories/flag/Flag';
import { Input } from './stories/input/Input';
import { Skeleton } from './stories/skeleton/Skeleton';
import { Alert } from './stories/alert/Alert';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div style={{ marginLeft: '20px' }}>
      <div>npm run storybook</div>
      <br />
      <br />
      <div>
        <Modal
          closeButton
          variant="dark"
        />
        {/*  bug */}
      </div>
      <br />
      <br />
      <div>
        <Dropdown variant="dark" closeButton />
        {/*  bug */}
      </div>
      <br />
      <br />
      <div>
        <Flag country="Armenia" />
      </div>
      <br />
      <br />
      <div>
        <Input
          placeholder="My custom input"
          type="standard"
          variant="default"
        />
      </div>
      <br />
      <br />
      <div>
        <Skeleton
          animation
          type="image"
          variant="dark"
        />
        <br />
        <Skeleton
          animation
          type="text"
          variant="dark"
        />
      </div>
      <br />
      <br />
      <div>
        <Alert
          style={{ width: '500px' }}
          alertVisibleDuration={100000}
          closeButton
          icon
          variant="success"
        >
          This is a success alert — check it out!
        </Alert>
      </div>
    </div>
  );
}

export default App;
