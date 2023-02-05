import {Box, Text} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({state, countTotalFeedback, countPositiveFeedbackPercentage}) => {
    const {good, bad, neutral} = state;
    return (
        <Box>
            <Text>Good: {good}</Text>
            <Text>Neutral: {neutral}</Text>
            <Text>Bad: {bad}</Text>
            <Text>Total: {countTotalFeedback()}</Text>
            <Text>Positive feedback: {countPositiveFeedbackPercentage()}%</Text>
        </Box>
    )
}

Statistics.propTypes = {
    state: PropTypes.objectOf(PropTypes.number).isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired
}