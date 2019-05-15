import React, { Component } from 'react';
import Styles from '../../Styles/Styles';
import { View, Text, Button } from 'react-native'
import fecha from 'fecha';
import Colors from '../../Styles/Colors';
import QuotesService from '../../Services/QuotesService';

// import { fetcha } from 'fetcha'

class QuoteListItem extends Component {
    state = {
        pending: false
    }

    onPressHeart() {
        this.setState({ pending: true }, () => {
            try {
                QuotesService.instance.toggleLike(this.props.quote.id)
                this.setState({ pending: false })
            } catch (error) {
                // alert...
            }
        })
    }

    render() {
        return (
            <View style={Styles.listItem.container}>
                {/* added */}
                <Text style={Styles.listItem.date}>
                    {fecha.format(this.props.quote.addedAt, 'h:mma on M/D')}
                </Text>

                {/* quote */}
                <Text style={Styles.listItem.quote}>
                    {this.props.quote.text}
                </Text>

                <View style={Styles.listItem.row}>
                    {/* author */}
                    <Text style={Styles.listItem.author}>
                        ~ {this.props.quote.author}
                    </Text>

                    {/* like button */}
                    <Button
                        title={`${this.props.quote.rating} ♥`}
                        onPress={this.onPressHeart.bind(this)}
                        disabled={this.state.pending}
                        color={this.props.quote.didLike ? Colors.likedHeart : Colors.unlikedHeart}
                    />
                </View>
            </View>
        );
    }
}

export default QuoteListItem;