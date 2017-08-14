import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillMount() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const {library, expanded} = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            { library.description }
          </Text>
        </CardSection>
        );
    }
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={ () => this.props.selectLibrary(id) }>
        <View>
          <CardSection>
            <Text style={ titleStyle }>
              { title }
            </Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
      );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return {
    expanded
  };
};

connect(mapStateToProps, actions)(ListItem);

export default ListItem;
