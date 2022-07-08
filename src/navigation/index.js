import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme
} from '@react-navigation/native';
import { AppStackNavigator } from './AppNavigator';

export const Navigation = () => {
    return (
        <NavigationContainer>
            <AppStackNavigator />
        </NavigationContainer>
    )
}