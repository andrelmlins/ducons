import React from "react";
import PropTypes from "prop-types";

import { dados } from "./data";

const Icons = ({ name, size, color }) => {
  const IconComponent = dados[name];

  return (
    <IconComponent
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill={color}
    />
  );
};

Icons.PropTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icons.defaultProps = {
  size: 24,
  color: "#000000",
};

export default Icons;
