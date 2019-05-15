import React, { Component } from 'react';
import QuotesScreen from './QuotesScreen';
import { Image } from 'react-native'

class TopQuotesScreen extends Component {
    static navigationOptions = {
        title: 'Top Quotes',
        tabBarIcon: () => <Image source={require('../../Assets/Images/icon_stars.png')} style={{ height: 24, resizeMode: "contain" }} />
    }

    // sort by raing
    sort = (a, b) =>
        (a.rating > b.rating) ? -1
            : (a.rating < b.rating) ? 1
                : (a.addedAt > b.addedAt) ? -1
                    : (a.addedAt < b.addedAt) ? 1
                        : 0

    render = () => <QuotesScreen sort={this.sort} />
}

export default TopQuotesScreen;