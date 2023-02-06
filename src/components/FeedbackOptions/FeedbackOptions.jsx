import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ControlsList,
  ControlButton,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Container>
      <ControlsList>
        {options.map(option => {
          return (
            <li key={option}>
              <ControlButton onClick={() => onLeaveFeedback(option)}>
                {capitalizeFirstLetter(option)}
              </ControlButton>
            </li>
          );
        })}
      </ControlsList>
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
