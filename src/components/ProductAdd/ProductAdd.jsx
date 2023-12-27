import React from "react";

export default function ProductAdd() {
  return (
    <div className="container">
      <div className="col-4">
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02" />
          <label class="input-group-text" for="inputGroupFile02">
            Upload
          </label>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Brand:
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Description:
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Price:
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" type="button">
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
