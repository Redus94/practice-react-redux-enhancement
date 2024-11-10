import React from "react";

const withPopup = (styles) => (WrappedComponent) => {
  return class extends React.Component {
    state = {
      open: true,
    };

    closePopup = () => {
      this.setState({
        open: false,
      });
    };

    render() {
      const defaultStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.8",
      };

      if (this.state.open === true) {
        return (
          <section style={{ ...defaultStyles, ...styles }}>
            <WrappedComponent />
            <button onClick={() => this.closePopup()}>X</button>
          </section>
        );
      }
      return <WrappedComponent />;
    }
  };
};

export default withPopup;
