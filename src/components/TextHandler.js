import React from 'react';
import CodeHighlighter from 'react-syntax-highlighter';

export default class TextHandler extends React.Component {
  constructor(props, children) {
    super(props);
    this.highlightCode = this.highlightCode.bind(this);
  }

  highlightCode() {
    let text = this.props.text;
    const code_start = (text.indexOf('<code>')) + 6;
    const code_end = (text.indexOf('</code>')) - 1;
    const code = text.substring(code_start, code_end);
    const pre_code = text.substring(0, code_start - 6);
    const post_code = text.substring(code_end + 8, text.length);
    // TODO: repeat the previous steps until making sure all code block have been highlighted!!
    return (
      <div>
        <p>{pre_code}</p>
        <CodeHighlighter>{code}</CodeHighlighter>
        <p>{post_code}</p>
      </div>
    );
  }

  codeExists(text) {
    if (text.indexOf('<code>') && text.indexOf('</code>')) return true;
    return false;
  }

  render() {
    return (
      <div>{this.highlightCode()}</div>
    );
  }
}