import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './modal.css';
import { MdClose } from 'react-icons/md';

/**
 * The modal component provides a solid foundation for creating dialogs and whatever else.
 */
// eslint-disable-next-line import/prefer-default-export
export function Modal({
  // eslint-disable-next-line no-unused-vars,no-shadow,react/prop-types
  variant, closeButton, ...props
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <button type="button" className="click-button" onClick={() => setModalOpen(true)}>Click me</button>

      {modalOpen && (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div className="modal" {...props}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">Modal header</div>
            {closeButton && (
            <div className="modal-close-button">
              <MdClose onClick={() => setModalOpen(false)} />
            </div>
            )}
          </div>
          <div className="modal-body">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis error
              excepturi expedita iste nam nulla saepe vel? Consectetur corporis molestias odit porro
              recusandae. Accusantium aperiam asperiores, cupiditate excepturi exercitationem illum
              incidunt itaque minima natus nemo neque nobis omnis quod reiciendis repellendus saepe
              soluta unde velit. Asperiores fugit iure ratione. Aut delectus esse itaque qui
              voluptates? Ad et nulla quasi quisquam similique, sit ut voluptatem? Assumenda
              consectetur error est illum voluptatem. Assumenda doloribus facere id modi
              repellendus. Aspernatur at consequatur consequuntur est explicabo itaque nulla placeat
              quibusdam quis voluptas. Eaque maiores quis tempora, tempore ut voluptas? At eum
              repellendus veritatis?
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

Modal.propTypes = {
  /**
   * Variant of Modal
   */
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.oneOf(['dark', 'light']).isRequired,
  /**
   * Close button
   */
  // eslint-disable-next-line react/require-default-props
  closeButton: PropTypes.bool,
};
