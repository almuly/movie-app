import React from 'react';

const withDisplay = (WrapperComponents) => (props) => {
  if (props.display) {
    return <WrapperComponents {...props} />;
  }

  return null;
};

export default withDisplay;
