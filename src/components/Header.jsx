import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../global/colors'

const Header = ({ title, onSelectScreenEvent }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
            {title == "Productos" ? <TouchableOpacity onPress={() => onSelectScreenEvent('')}>
                <Icon name="home" size={30} color="#fff"/>
            </TouchableOpacity>: null}
        </View> 
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        justifyContent: 'center',
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerTitle: {
        marginLeft:10,
        fontSize:25,
        color: '#e0e0e0',
        fontFamily: 'WorkSans-Italic'
    }
})