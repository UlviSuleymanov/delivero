import { Image, Text, View } from 'react-native';

const Menu = ({ dish }) => {
  return (
    <View className="m-2 border-b flex flex-row border-gray-300 pb-1">
      <View className="flex-1">
        <Text className="font-semibold text-base tracking-wide">{dish?.name}</Text>
        <Text className="text-gray-400 my-1 tracking-wide" numberOfLines={2}>
          {dish?.description}
        </Text>
        <Text className="text-base">$ {dish?.price}</Text>
      </View>
      {dish?.image ? <Image source={{ uri: dish?.image }} className="h-[75px] aspect-[1]" /> : ''}
    </View>
  );
};

export default Menu;
