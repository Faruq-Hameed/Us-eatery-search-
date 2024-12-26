import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ItemScreen from './src/screens/ItemScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Search: {
      screen: SearchScreen,
      options: {
        title: "Business Search",
      },
    },
    Item: {
      screen: ItemScreen,
      options: { title: "Fish City" },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}