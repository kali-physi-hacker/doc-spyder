import React from 'react';

const AddEvent = () => {
    return (
        <div id="add_event" className="modal custom-modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Event</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Event Name <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Event Date <span className="text-danger">*</span></label>
                                <div className="cal-icon">
                                    <input className="form-control datetimepicker" type="text" />
                                </div>
                            </div>
                            <div className="submit-section">
                                <button className="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEvent;