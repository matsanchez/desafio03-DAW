import {View, Text, StyleSheet, TouchableOpacity } from "react-native"
import {colors} from '../global/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Card from './Card'

const CategoryItem = ({ category, onSelectScreenEvent }) => {
    return (
      <TouchableOpacity onPress={() => onSelectScreenEvent(category)}>
        <Card style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Text style={styles.text}>{category}</Text>
            <Icon name="chevron-right" size={30} color="#023047"/>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
  
  export default CategoryItem;
  
  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: colors.list_card,
      padding: 5,
      margin: 10,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    text: {
      textTransform: 'capitalize',
      fontSize: 15,
    },
  });
  