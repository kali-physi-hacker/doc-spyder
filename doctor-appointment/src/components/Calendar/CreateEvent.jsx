import React from 'react';

const CreateEvent = () => {
    return (
        <div className="modal custom-modal fade none-border" id="my_event">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Event</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body"></div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-success save-event submit-btn">Create event</button>
                        <button type="button" className="btn btn-danger delete-event submit-btn"
                                data-dismiss="modal">Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEvent;