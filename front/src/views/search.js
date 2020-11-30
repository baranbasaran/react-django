import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import moment from "moment";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      callStartDate: "2017-08-01T12:00:00",
      callFinishDate: "2017-08-04T13:00:00",
      warning: "",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="form-row justify-content-center">
          <div className="form-group col-md-10">
            <label htmlFor="inputStartDate" style={{ fontWeight: "bold" }}>
              Başlangıç Tarihi
            </label>
            <input
              type="datetime-local"
              className="form-control"
              value={this.state.callStartDate}
              onChange={(value) =>
                this.setState({ callStartDate: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="inputFinishDate" style={{ fontWeight: "bold" }}>
              Bitiş Tarihi
            </label>
            <input
              type="datetime-local"
              className="form-control"
              value={this.state.callFinishDate}
              onChange={(value) =>
                this.setState({ callFinishDate: value.target.value })
              }
            />
          </div>

          <Link
            className="form-group col-md-4 btn btn-primary"
            to=""
            onClick={(e) => {
              e.preventDefault();
              moment(this.state.callStartDate).diff(
                moment(this.state.callFinishDate)
              ) < 0
                ? (window.location.href =
                    "/list/" +
                    this.state.callStartDate +
                    "/" +
                    this.state.callFinishDate)
                : Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text:
                      "Başlangıç ​​tarihi, bitiş tarihinden sonraki bir tarih olamaz!",
                  });
            }}
          >
            Listele
          </Link>
        </div>
      </div>
    );
  }
}

export default EditComponent;
