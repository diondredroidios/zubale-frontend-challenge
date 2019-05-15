import { StyleSheet } from 'react-native'
import TextStyles from './TextStyles';

const ListItemStyles = StyleSheet.create({
    // views
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
        marginBottom: 18,
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "#fff",
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        borderRadius: 4,
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },

    // text items
    quote: Object.assign({
        width: "100%",
        marginTop: 8,
    }, TextStyles.h2),
    author: Object.assign({
        marginTop: 8,
    }, TextStyles.h6),
    date: TextStyles.bodyMuted,
})

export default ListItemStyles;