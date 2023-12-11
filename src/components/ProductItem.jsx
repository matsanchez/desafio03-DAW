import { StyleSheet, Text, View, Image } from 'react-native'
import {colors} from '../global/colors'

const ProductItem = ({ product }) => {
    return (

      <View style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image
          style={styles.productImage}
          resizeMode='cover'
          source={{ uri: product.thumbnail }}
        />
      </View>
    );
  };
  
  export default ProductItem;
  
  const styles = StyleSheet.create({
    containerProductItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      margin: 10,
      borderRadius: 8,
      backgroundColor: colors.product_item,
      elevation: 2, 
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    productTitle: {
      fontSize: 18,
      fontFamily:'WorkSans-Bold',
      color: '#333333',
    },
    productImage: {
      width: 60,
      height: 60,
      borderRadius: 4,
    },
  });