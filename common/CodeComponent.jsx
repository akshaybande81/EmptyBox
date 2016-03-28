var React = require('react');
var hljs = require('highlight.js');

require('highlight.js/lib/languages/elm')(hljs);

var CodeComponent = React.createClass({
  componentDidMount: function () {
    this.refs.code.getDOMNode().innerHTML = hljs.highlight(this.props.language, this.props.code).value;
  },
  componentDidUpdate: function () {
    this.refs.code.getDOMNode().innerHTML = hljs.highlight(this.props.language, this.props.code).value;
  },
  render: function () {
    return React.createElement('pre', {key: this.props.key},
      React.createElement('code', {
          ref: 'code'
        }, this.props.code)
    );
  }
});

module.exports = CodeComponent;
