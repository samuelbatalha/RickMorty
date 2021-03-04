import React from 'react';
import {View, Text, Image,StyleSheet,FlatList} from 'react-native';
import {styles} from './CharacterItem.style';

const CharacterItem = ({item})=>{
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>{}</Text>
                <Image source={{uri:item.image}} 
                    style={styles.tinyLogo}></Image>
            </View>
        </View>


    );
}

export default CharacterItem;

