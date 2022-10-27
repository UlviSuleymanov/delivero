import { Text, View } from 'react-native';

export default function DishBasketList({ basketDish }) {
  return (
    <View className="p-1 flex flex-row items-center my-[15px]">
      <View className="bg-gray-300 mr-3 px-[5px] py-[2px] rounded-[3px]">
        <Text>1</Text>
      </View>
      <Text className="font-semibold text-normal tracking-wide">{basketDish.name}</Text>
      <Text className="ml-auto">${basketDish.price}</Text>
    </View>
  );
}
