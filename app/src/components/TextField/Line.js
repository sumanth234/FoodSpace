import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
    line: {
      
    },
  });

export default class Line extends PureComponent {
  // static propTypes = {
  //   type: PropTypes.oneOf(['solid', 'dotted', 'dashed', 'none']).isRequired,    
  //   color: PropTypes.string.isRequired,
  // };

  render() {
    let { color: borderColor, type: borderStyle } = this.props;

    if ('none' === borderStyle) {
      return null;
    }

    let lineStyle = {
      borderColor,
      borderStyle,
    };

    return (
      <View  pointerEvents='none' />
    );
  }
}