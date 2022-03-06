import React, { Component } from 'react'
import { marked } from "marked";

export class App extends Component {

  constructor() {
    super();

    this.state = {
      markdown: ""
    };
  }

  updateMarkdown = (markdown) => {
    this.setState({markdown});
  };

  getMarkdownText = () => {
    var rawMarkup = marked.parse(this.state.markdown);
    return {__html: rawMarkup};
  }
  render() {

    var inputStyle = {
      width: "500px",
      height: "70vh",
      border: "3px solid #525252",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    var outputStyle = {
      width: "500px",
      height: "70vh",
      backgroundColor: "lightgrey",
      border: "3px solid #525252",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">

        <div className="col text-center">
          <h1><b>MarkDown Editor</b></h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="col text-center my-6">
              <h2>MarkDown Input</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col text-center">
              <h2>Preview</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="col text-center my-6">
              <div className="mb-3 input">
                <textarea style={inputStyle} className="form-control" id="exampleFormControlTextarea1" onChange={(e) => {
                  this.updateMarkdown(e.target.value);
                }} rows="3" value={this.state.markdown}>
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col text-center">
              <div style={outputStyle} className="d-flex" dangerouslySetInnerHTML={
                this.getMarkdownText()
                }>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App
