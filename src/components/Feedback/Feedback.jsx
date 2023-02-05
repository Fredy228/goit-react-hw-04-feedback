import {Button, Box} from './Feedback.styled';
import PropTypes from 'prop-types';

export const Feedback = ({addFeedback}) => {
    return (
        <Box>
            <Button type='button' value={'Good'} onClick={addFeedback}>Good</Button>
            <Button type='button' value={'Neutral'} onClick={addFeedback}>Neutral</Button>
            <Button type='button' value={'Bad'} onClick={addFeedback}>Bad</Button>
        </Box>
    )
};

Feedback.propTypes = {
    addFeedback: PropTypes.func.isRequired
}