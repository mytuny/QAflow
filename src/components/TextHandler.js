import React from 'react';
import CodeHighlighter from 'react-syntax-highlighter';

export default class TextHandler extends React.Component {
  constructor(props, children) {
    super(props);
    this.highlightCode = this.highlightCode.bind(this);
  }

  highlightCode() {
    let text = this.props.text;
    if( !this.codeExists(text) ) return text;
    const code_start = (text.indexOf('<code>')) + 6;
    const code_end = (text.indexOf('</code>')) - 1;
    const code = text.substring(code_start, code_end);
    const pre_code = text.substring(0, code_start - 6);
    const post_code = text.substring(code_end + 8, text.length);
    // TODO: repeat the previous steps until making sure all code block have been highlighted!!
    return (
      <div>
        {pre_code}
        <CodeHighlighter>{code}</CodeHighlighter>
        {post_code}
      </div>
    );
  }

  codeExists(text) {
    if (text.indexOf('<code>') !== -1 && text.indexOf('</code>') !== -1) return true;
    return false;
  }

  render() {
    return (
      <div>{this.highlightCode()}</div>
    );
  }
}