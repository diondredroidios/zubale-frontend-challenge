import { StyleSheet } from 'react-native'
import Colors from './Colors';

const TextStyles = StyleSheet.create({
    h1: {
        fontSize: 28,
        color: "black"
    },
    h2: {
        fontSize: 26,
        color: "black"
    },
    h3: {
        fontSize: 24,
        color: "black"
    },
    h4: {
        fontSize: 19,
        color: "black",
        marginTop: 8,
    },
    h5: {
        fontSize: 17,
        color: "black"
    },
    h6: {
        fontSize: 15,
        color: "black"
    },
    body: {
        fontSize: 12,
        color: "black"
    },
    bodyMuted: {
        fontSize: 12,
        color: Colors.muted
    }
})

export default TextStyles