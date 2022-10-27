import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json';
import { useState } from 'react';

const dish = restaurants[0].dishes[0];

const index = () => {
  const [quantity, setQuantity] = useState(1);

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };
  return (
    <View className="flex-1 w-full py-4 p-2 mt-2">
      <Text className="text-3xl font-semibold ">{dish.name}</Text>
      <Text className="text-sm font-normal mx-1 text-gray-500">{dish.description}</Text>
      <View className="h-[1px] bg-gray-300 my-3" />
      <View className="flex flex-row items-center justify-center mt-12">
        <AntDesign
          onPress={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
          name="minuscircleo"
          size={40}
          color="black"
        />
        <Text className="text-3xl mx-5">{quantity}</Text>
        <AntDesign
          onPress={() => setQuantity(quantity + 1)}
          name="pluscircleo"
          size={40}
          color="black"
        />
      </View>
      <View className="bg-black text-white mt-auto p-5 text-center rounded-lg">
        <Text className="text-white text-center text-base font-semibold">
          Add {quantity} to the basket &#8226; ${getTotal()}
        </Text>
      </View>
    </View>
  );
};

export default index;
