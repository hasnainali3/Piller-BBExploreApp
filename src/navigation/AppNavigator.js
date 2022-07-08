import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterDetail, CharacterListing } from '../screens'

const AppStack = createNativeStackNavigator();

export function AppStackNavigator() {
    return (
        <AppStack.Navigator initialRouteName='Listing'>
            <AppStack.Screen
                name='Listing'
                component={CharacterListing}
            />
            <AppStack.Screen
                name='Detail'
                component={CharacterDetail}
            />
        </AppStack.Navigator>
    )
}