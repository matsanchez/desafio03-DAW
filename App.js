import { ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import { useFonts } from 'expo-font'
import { useState } from 'react';

export default function App() {
  const [screenSelected, setScreenSelected] = useState('')

  const [fontLoaded] = useFonts({
    'WorkSans-Regular': require('./assets/fonts/WorkSans-Regular.ttf'),
    'WorkSans-Bold': require('./assets/fonts/WorkSans-Bold.ttf'),
    'WorkSans-Italic': require('./assets/fonts/WorkSans-Italic.ttf')
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectScreen = (category) => {
    setScreenSelected(category)
  }

  return (
    <>{
      screenSelected
        ?
        <ProductsByCategoryScreen category={screenSelected} onSelectScreenEvent={onSelectScreen}/>
        :
        <CategoriesScreen onSelectScreenEvent={onSelectScreen} />
    }
    </>

  );
}


