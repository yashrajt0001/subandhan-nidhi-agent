import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ToggleButton extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
    disabled: PropTypes.bool,
    backgroundActive: PropTypes.string,
    backgroundInactive: PropTypes.string,
    value: PropTypes.bool,
    circleActiveColor: PropTypes.string,
    circleInActiveColor: PropTypes.string,
    containerStyle: PropTypes.object,
    barHeight: PropTypes.number,
    innerCircleStyle: PropTypes.object,
    renderInsideCircle: PropTypes.func,
    changeValueImmediately: PropTypes.bool,
    outerCircleStyle: PropTypes.object,
    switchWidth: PropTypes.number,
    switchHeight: PropTypes.number,
    switchLeftPx: PropTypes.number,
    switchRightPx: PropTypes.number,
    switchWidthMultiplier: PropTypes.number,
    switchBorderRadius: PropTypes.number,
  };

  static defaultProps = {
    value: false,
    onValueChange: () => null,
    renderInsideCircle: () => null,
    disabled: false,
    backgroundActive: 'green',
    backgroundInactive: 'gray',
    circleActiveColor: 'white',
    circleInActiveColor: 'white',
    switchWidth: 30,
    switchHeight: 30,
    switchBorderRadius: 100,
    barHeight: null,
    changeValueImmediately: true,
    innerCircleStyle: { alignItems: 'center', justifyContent: 'center' },
    outerCircleStyle: {},
    renderActiveText: true,
    renderInActiveText: true,
    switchLeftPx: 4,
    switchRightPx: 4,
    switchWidthMultiplier: 2,
    testID: null,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value,
      transformSwitch: new Animated.Value(
        props.value
          ? props.switchWidth / props.switchLeftPx
          : -props.switchWidth / props.switchRightPx
      ),
      backgroundColor: new Animated.Value(props.value ? 75 : -75),
      circleColor: new Animated.Value(props.value ? 75 : -75),
    };
  }

  componentDidUpdate(prevProps) {
    const { value, disabled } = this.props;
    if (prevProps.value === value) {
      return;
    }
    if (prevProps.disabled && disabled === prevProps.disabled) {
      return;
    }

    this.animateSwitch(value, () => this.setState({ value }));
  }

  handleSwitch = () => {
    const { value } = this.state;
    const {
      onValueChange,
      disabled,
      changeValueImmediately,
      value: propValue,
    } = this.props;
    if (disabled) {
      return;
    }
    if (this.props.value === this.state.value) {
      onValueChange();
      return;
    }

    if (changeValueImmediately) {
      this.animateSwitch(!propValue);
      onValueChange();
    } else {
      this.animateSwitch(!value, () =>
        this.setState({ value: !value }, () => onValueChange())
      );
    }
  };

  animateSwitch = (value, cb = () => {}) => {
    Animated.parallel([
      Animated.spring(this.state.transformSwitch, {
        toValue: value
          ? this.props.switchWidth / this.props.switchLeftPx
          : -this.props.switchWidth / this.props.switchRightPx,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.backgroundColor, {
        toValue: value ? 75 : -75,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.circleColor, {
        toValue: value ? 75 : -75,
        duration: 200,
        useNativeDriver: false,
      })
    ]).start(cb);
  };

  render() {
    const { transformSwitch, backgroundColor, circleColor } =
      this.state;

    const {
      backgroundActive,
      backgroundInactive,
      circleActiveColor,
      circleInActiveColor,
      switchWidth,
      switchHeight,
      containerStyle,
      barHeight,
      circleBorderWidth,
      innerCircleStyle,
      outerCircleStyle,
      renderInsideCircle,
      switchWidthMultiplier,
      switchBorderRadius,
      value,
      ...restProps
    } = this.props;

    const interpolatedColorAnimation = backgroundColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [backgroundInactive, backgroundActive],
    });

    const interpolatedCircleColor = circleColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [circleInActiveColor, circleActiveColor],
    });

    return (
      <TouchableWithoutFeedback onPress={this.handleSwitch} {...restProps}>
        <Animated.View
          style={[
            styles.container,
            containerStyle,
            {
              backgroundColor: interpolatedColorAnimation,
              width: switchWidth * switchWidthMultiplier,
              height: barHeight || switchHeight,
              borderRadius: switchBorderRadius,
            },
          ]}>
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                left: transformSwitch,
                width: switchWidth * switchWidthMultiplier,
              },
              outerCircleStyle,
            ]}>
            <Animated.View
              style={[
                styles.circle,
                {
                  backgroundColor: interpolatedCircleColor,
                  width: switchWidth,
                  height: switchHeight,
                  borderRadius: switchBorderRadius / 2,
                },
                innerCircleStyle,
              ]}>
              {renderInsideCircle()}
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 71,
    height: 30,
    borderRadius: 30,
  },
  animatedContainer: {
    flex: 1,
    width: 78,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  paddingRight: {
    paddingRight: 5,
  },
  paddingLeft: {
    paddingLeft: 5,
  },
});
