import React from 'react';
import Character from '../screens/character/Character'
import CharacterDetail from '../screens/characterdteail/CharacterDetail'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
const Stack = createStackNavigator();

class Routes extends React.Component{
    render(){
        return(
            <NavigationContainer>
            <Stack.Navigator
            screenOptions = {{
                headerStyle:{
                    backgroundColor: '#000',
                },
                headerTintColor: '#53eae3',                
            }}
            >
            <Stack.Screen name='Character' 
            component={Character}/>
            <Stack.Screen name='CharacterDetail' 
            component={CharacterDetail}/>

            </Stack.Navigator>

            </NavigationContainer>
        );
    }
}

export default Routes;
