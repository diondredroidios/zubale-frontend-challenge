import React, { Component } from 'react';
import QuotesScreen from './QuotesScreen';
import { Image } from 'react-native'

class NewestQuotesScreen extends Component {
    static navigationOptions = {
        title: 'Newest quotes',
        tabBarIcon: () => <Image source={require('../../Assets/Images/icon_flare.png')} style={{ height: 24, resizeMode: "contain" }} />
    }

    // sort by timestamp
    sort = (a, b) =>
        (a.addedAt > b.addedAt) ? -1
            : (a.addedAt < b.addedAt) ? 1
                : 0

    render = () => <QuotesScreen sort={this.sort} />
}

export default NewestQuotesScreen;