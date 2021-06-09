import React, { Component } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Main from "./Main";

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIdx: 0,
      isActive: false,
      pageSlug: "",
      pageHeader: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      itemIdx: this.props.itemIdx,
      isActive: !this.props.isActive,
      pageSlug: this.state.pageSlug,
      pageHeader: this.props.pageHeader,
    });
  }
  render() {
    return (
      <div>
        <Navigation
          pageSlug={this.state.pageSlug}
          handleClick={this.handleClick}
        />
        <Header />
        <Main />
      </div>
    );
  }
}

export default Page;
