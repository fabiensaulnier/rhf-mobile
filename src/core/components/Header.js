import React from 'react';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? '#acacac' : Constants.manifest.extra.color)};
  padding: 13px 15px;
  align-items: center;
  justify-content: center;
  ${props => (props.fullWidth ? 'flex: 1;' : null)};
  shadow-color: #777;
  shadow-offset: 1px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 1px;
`;

const Spinner = styled.ActivityIndicator``;

const ButtonLabel = styled.Text`
  color: #fff;
  text-align: center;
`;

const Header = ({
  disabled, label, onPress, fullWidth, loading,
}) => (
  <HeaderContainer disabled={disabled} onPress={onPress} fullWidth={fullWidth}>
    {loading ? <Spinner color="#fff" /> : <HeaderLabel>{label}</HeaderLabel>}
  </ButtonContainer>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
