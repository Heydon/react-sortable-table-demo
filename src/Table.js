import React from 'react';
import ReactDOM from 'react-dom';

const Arrow = props => {
  let ascending = props.sortDir === 'ascending';
  return (
    <svg viewBox="0 0 100 200" width="100" height="200">
      {!(!ascending && props.isCurrent) &&
        <polyline points="20 50, 50 20, 80 50"></polyline>
      }
      <line x1="50" y1="20" x2="50" y2="180"></line>
      {!(ascending && props.isCurrent) &&
        <polyline points="20 150, 50 180, 80 150"></polyline>
      }
    </svg>
  );
}

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabindex: null,
      rows: props.rows,
      sortedBy: null,
      sortDir: 'none'
    }
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(i) {
    let sortDir;
    let ascending = this.state.sortDir === 'ascending';
    if (i === this.state.sortedBy) {
      sortDir = !ascending ? 'ascending' : 'descending';
    } else {
      sortDir = 'ascending';
    }
    this.setState(prevState => ({
      rows: prevState.rows.slice(0).sort((a, b) =>
            sortDir === 'ascending' ? a[i] > b[i] : a[i] < b[i]),
      sortedBy: i,
      sortDir: sortDir
    }));
  }

  componentDidMount() {
    let container = ReactDOM.findDOMNode(this.refs.container);
    let scrollable = container.scrollWidth > container.clientWidth;
    this.setState({
      tabindex: scrollable ? '0' : null
    });
  }
  render() {
    const captionID = 'caption-' + Math.random().toString(36).substr(2, 9);
    return (
      <div>
        <div
          className="table-container"
          ref="container"
          tabIndex={this.state.tabindex}
          aria-labelledby={captionID}
        >
          <table>
            <caption id={captionID}>
              {this.props.caption}
              {this.state.tabindex === '0' &&
                <div>
                  <small>(scroll to see more)</small>
                </div>
              }
            </caption>
            <tbody>
              <tr>
                {this.props.headers.map((header, i) =>
                  <th
                    role="columnheader"
                    scope="col"
                    key={i}
                    aria-sort={this.state.sortedBy === i ? this.state.sortDir : 'none'}>
                    {header}
                    {this.props.sortable &&
                      <button
                        aria-label={`sort by ${header}`}
                        onClick={() => this.sortBy(i)}>
                        <Arrow
                          sortDir={this.state.sortDir}
                          isCurrent={this.state.sortedBy === i}
                        />
                      </button>
                    }
                  </th>
                )}
              </tr>
              {this.state.rows.map((row, i) =>
                <tr key={i}>
                  {row.map((cell, i) =>
                    (this.props.rowHeaders && i < 1) ? (
                      <th scope="row" key={i}>{cell}</th>
                    ) : (
                      <td key={i}>{cell}</td>
                    )
                  )}
                </tr>
               )}
             </tbody>
          </table>
        </div>
        <div className="lists-container">
          <h2>{this.props.caption}</h2>
          {this.props.rows.map((row, i) =>
            <div key={i}>
              <h3>{row[0]}</h3>
              <dl>
                {this.props.headers.map((header, i) =>
                  i > 0 &&
                  <React.Fragment key={i}>
                    <dt>{header}</dt>
                    <dd>{row[i]}</dd>
                  </React.Fragment>
                )}
              </dl>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Table;
