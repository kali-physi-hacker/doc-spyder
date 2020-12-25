import React from 'react';

const AddCategory = () => {

    return (
        <div className="modal custom-modal fade" id="add_new_event">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Category</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Category Name</label>
                                <input className="form-control form-white" placeholder="Enter name" type="text"
                                       name="category-name"/>
                            </div>
                            <div className="form-group">
                                <label>Choose Category Color</label>
                                <select className="form-control form-white" data-placeholder="Choose a color..."
                                        name="category-color">
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="primary">Primary</option>
                                    <option value="warning">Warning</option>
                                    <option value="inverse">Inverse</option>
                                </select>
                            </div>
                            <div className="submit-section text-center">
                                <button type="button" className="btn btn-primary save-category submit-btn"
                                        data-dismiss="modal">Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCategory;