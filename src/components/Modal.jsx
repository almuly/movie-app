import React from 'react';
import { compose } from 'redux';

// HOCs
import withDisplay from 'HOCs/withDisplay';

import { withRouter } from 'react-router';

import '../styles/components/Modal.css';

const Modal = ({ children, onClose }) => (
  <>
    <div onClick={onClose} className="Modal-background" />
    <div className="Modal-root">{children}</div>
  </>
);

export default compose(withRouter, withDisplay)(Modal);
