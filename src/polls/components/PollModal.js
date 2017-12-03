import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import _ from 'lodash';

import { createVote } from '../actions';
import Button from '../../core/components/Button';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #0371b2;
  padding: 20px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const Close = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const Cross = styled.Image`
  height: 30px;
  width: 30px;
`;

const Option = styled.TouchableOpacity`
  background-color: #fff;
  padding: 25px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

const OptionLabel = styled.Text`
  color: #000;
  font-size: 18px;
`;

class PollModal extends React.Component {
  state = {
    voteSelected: null,
  };

  _submitVote = () => {
    const { navigation, createVote } = this.props;
    const { voteSelected } = this.state;
    const { poll } = navigation.state.params;

    const vote = {
      pollId: poll.id,
      type: voteSelected,
    };

    createVote(vote);
  };

  _renderPotentialVote = item => {
    const isSelected = this.state.voteSelected === item.type;

    return (
      <Option onPress={() => this.setState({ voteSelected: item.type })} key={item.type}>
        {isSelected && <Feather name="check" size={20} color="black" style={{ marginRight: 10 }} />}
        <OptionLabel>{item.label}</OptionLabel>
      </Option>
    );
  };

  render() {
    const { navigation, createVote, createVoteForm } = this.props;
    const { voteSelected } = this.state;
    const { poll } = navigation.state.params;

    return (
      <Container>
        <StatusBar hidden />
        <Close onPress={() => navigation.goBack(null)}>
          <Cross source={require('../../../assets/img/cross.png')} />
        </Close>
        <Title>{poll.question}</Title>
        {_.map(poll.potentialVotes, item => this._renderPotentialVote(item))}
        <Button
          onPress={() => this._submitVote()}
          label="Submit"
          loading={createVoteForm.loading}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  createVoteForm: state.polls.createVoteForm,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createVote: vote => {
    dispatch(createVote(vote));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PollModal);
