import {StyleSheet, FlatList} from 'react-native'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const CategoriesScreen = ({onSelectScreenEvent}) => {

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} onSelectScreenEvent={onSelectScreenEvent} />
    )

    return(
        <>
        <Header title="Categorías" />
        <FlatList
            data={categories_data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
})