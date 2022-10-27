import { FlatList, View } from 'react-native';
import Restaurant from '../../components/Restaurant/index';

import restaurantData from '../../../assets/data/restaurants.json';

export default function Home() {
  return (
    <View className="p-2 ">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={restaurantData}
        renderItem={({ item }) => <Restaurant item={item} />}
      />
    </View>
  );
}
