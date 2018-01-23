import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
// import './pagia.styl';

class Pagination extends Component {

    render() {
        return (
          <div className="pagination-component">
            <nav>
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        );
    }
}

export default connect(null, actions)(Pagination);
