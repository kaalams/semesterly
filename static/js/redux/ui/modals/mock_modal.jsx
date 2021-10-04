/*
Copyright (C) 2017 Semester.ly Technologies, LLC

Semester.ly is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Semester.ly is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/

import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'boron/FadeModal';

class MockModal extends React.Component {
  componentDidUpdate() {
    if (this.props.isVisible) {
      this.modal.show();
    }
  }

  render() {
    const modalHeader =
            (<div className="modal-content">
              <div className="modal-header">
                  <h1>Mock Modal!</h1>
              </div>
            </div>);
    const modalStyle = {
      width: '100%',
    };
    {console.log(this.props)}
    return (
      <Modal
        ref={(c) => { this.modal = c; }}
        className="pref-modal max-modal"
        modalStyle={modalStyle}
        onHide={this.props.toggleMockModal}
      >
        <div id= "perf-modal-wrapper">
          {modalHeader}
          
          <h3>First Name: {this.props.userInfo.mockUser.mockUserFirstName}</h3>
          <h3>Last Name: {this.props.userInfo.mockUser.mockUserLastName}</h3>
          <h3>Graduating Class: {this.props.userInfo.mockUser.mockUserGraduatingClass}</h3>
          
        </div>
      </Modal>
    );
  }
}

MockModal.propTypes = {
    toggleMockModal: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired,
    isVisible: PropTypes.bool.isRequired,
    mockUser: PropTypes.object.isRequired,
};

export default MockModal;

