import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return (
            <View />
        );
    }
}

const mapStateToProps = state => {
    libraries: state.libraries
};

export default connect(mapStateToProps)(LibraryList);
