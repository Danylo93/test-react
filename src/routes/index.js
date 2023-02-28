import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from '../screens/LoadingScreen'
import HomeScreen from '../screens/Home'
import NewQuoteScreen from '../screens/NewQuote'

const AppStack = createStackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Home`,
        }),
    },
    NewQuote:{
        screen: NewQuoteScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Nova Tarefa`,
        }),
    }
});

const RoutesStack = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: AppStack
    },
    {initialRouteName: 'Loading'}
);

const Router = createAppContainer(RoutesStack);

export default Router;
