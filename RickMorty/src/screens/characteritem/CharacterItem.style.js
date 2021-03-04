import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 16,
        margin:1,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        backgroundColor:'#000',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    row:{
        flexDirection:'row',
    },
    nameText:{
        color: '#fff',
        fontSize: 14,
        marginRight: 8,
        fontWeight: 'bold',
    },
    text:{
        color: '#fff',
        fontSize: 12,

    },
    priceText:{
        fontSize:14,
        color:'#035'
    },
});