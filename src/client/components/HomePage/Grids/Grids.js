import React, { Fragment } from 'react'

const gStyle = { background: 'cyan' }

const Grids = () => (
  <Fragment>
    <h1>Grids</h1>
    <p>A low level framework for positioning elements on the page.</p>
    <div>
      <p>pe-col-1</p>
      <div className="pe-container">
        <div className="pe-row">
          <div className="pe-col-1">
            <p style={gStyle}>one</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>two</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>three</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>four</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>five</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>six</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>seven</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>eight</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>nine</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>ten</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>eleven</p>
          </div>
          <div className="pe-col-1">
            <p style={gStyle}>twelve</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>pe-col-span</p>
      <div className="pe-container">
        <div className="pe-row">
          <div className="pe-col-4">
            <p style={gStyle}>one</p>
          </div>
          <div className="pe-col-4">
            <p style={gStyle}>two</p>
          </div>
          <div className="pe-col-4">
            <p style={gStyle}>three</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Grids
