import React from 'react';
import {View, ActivityIndicator, Text, FlatList, StyleSheet, Image} from 'react-native';
import Http from '../../libs/http';
import {styles} from './CharacterDetail.style';

class CharacterDetail extends React.Component{

    state={
        loading: false,
        character: null,
        episodes: [],
    }

    componentDidMount = async ()=>{
        this.setState({loading:true});
        const res = await Http.instance.get(this.props.route.params.character_url);
        this.setState({character: res});
        const {character} = this.state 
        if(character){
            let episodes_info = []
            //console.log(character.episode)
            for (let i in character.episode){
                //console.log(character.episode[i]);
                episodes_info.push(await Http.instance.get(character.episode[i]));
            }
            
            this.setState({episodes:episodes_info})
        }
        this.setState({loading:false});
    }

    render(){
        const {character, loading, episodes} = this.state;
        return(
            <View>
                {character?
                    <View style={styles.container}>
                        <Image source={{uri:character.image}}
                        style={styles.image}></Image>
                        <View style={styles.description}>
                            <Text style={styles.text}>Nome: {character.name}</Text>
                            <Text style={styles.text}>Espécie: {character.species}</Text>
                            <Text style={styles.text}>Status de vida: {character.status}</Text>
                            <Text style={styles.text}>Gênero: {character.gender}</Text>
                            <Text style={styles.text}>Origem: {character.origin.name}</Text>
                        </View>
                    </View>
                :null
                }
                {loading?
                <ActivityIndicator 
                    color='#005' 
                    size='large'
                    style={styles.loader}
                    >
                </ActivityIndicator>
                :
                    <FlatList
                    style={styles.episode_list}
                    data={episodes}
                    renderItem={
                    ({item}) => <Text style={styles.text}></Text>
                    }>
                    </FlatList>
                }                
            </View>
        );
    }
}

export default CharacterDetail;
