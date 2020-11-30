import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import moment from "moment";
import Modal from "react-modal";

class listComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      finishDate: "",
      listCall: [],
      showModal: false,
      clickedData: {},
    };
  }

  componentDidMount() {
    this.loadData();
    this.loadPopup = this.loadPopup.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement("body");
  }

  //Popup açılma ve ilgili verinin bilgilerini state gönderme işlemi...
  handleShow = (data) => {
    this.setState({ clickedData: data, showModal: true });
  };
  //Popup kapatma işlemi...
  handleClose = () => {
    this.setState({ showModal: false });
  };
  //Popup ın içine veri yükleme işlemi
  loadPopup = () => {
    return (
      <table className="table">
        <tbody>
          {Object.entries(this.state.clickedData).length > 0 //ilgili verinin kontrolü
            ? Object.keys(this.state.clickedData).map((key, index) => {
                return (
                  <tr key={index}>
                    <th>{key}</th>
                    <td>{this.state.clickedData[key]}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    );
  };
  //get sorgusundan dönen verinin yerleştirilmesi...
  loadFillData() {
    return this.state.listCall.map((data, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td onClick={() => this.handleShow(data)}>{data.calldate}</td>
          <td>{data.called_num}</td>
          <td>{data.callerid}</td>
          <td>{data.answered}</td>
          <td>{data.duration}</td>
        </tr>
      );
    });
  }
  //verilen tarihlerin işlenip get sorgusunun çalıştırılması işlemi...
  loadData() {
    var start = moment(this.props.match.params.startdate).format(
      "YYYY-MM-DD hh:mm:ss"
    );
    var finish = moment(this.props.match.params.finishdate).format(
      "YYYY-MM-DD hh:mm:ss"
    );

    axios
      .get("http://127.0.0.1:8000/polls/get/" + start + "/" + finish)
      .then((res) => {
        console.log(res.data.CallList);
        this.setState({ listCall: res.data.CallList });
      })
      .catch((error) => {
        alert("Error server " + error);
      });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th scope="col">Calldate</th>
              <th scope="col">Called_num</th>
              <th scope="col">Callerid</th>
              <th scope="col">Answered</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>{this.loadFillData()}</tbody>
        </table>
        <div className="container">
          <Modal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            {this.loadPopup()}
            <div className="text-center">
              <button className="btn-danger" onClick={this.handleClose}>
                Kapat
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default listComponent;
