import React from "react";

export default function PaymentModal({ show, onClose, price }) {
  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">Payments</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <div className="mb-3 fw-semibold text-primary">
                Total Amount: ₹{price}
              </div>

              <label className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="XXXX XXXX XXXX XXXX"
              />

              <div className="row">
                <div className="col">
                  <label className="form-label">Valid Thru</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM / YY"
                  />
                </div>

                <div className="col">
                  <label className="form-label">CVV</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-warning fw-bold">
                Pay ₹{price}
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
