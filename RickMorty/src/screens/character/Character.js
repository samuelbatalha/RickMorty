import React from 'react';
import {View, ActivityIndicator, Pressable, Text, StyleSheet, FlatList} from 'react-native';
import {styles} from './Character.style';
import Http from '../../libs/http';
import CharacterItem from '../characteritem/CharacterItem';
import { GET_CHARACTER, NEXT_OR_PREVIUS, GET_CHARACTER_LIST } from '../../service/CharacterService';

class Character extends React.Component{
    state ={
        characters:[],
        loading: false,
        next: null,
        prev: null,
    }

    componentDidMount = async ()=>{
        this.setState({loading:true});

        GET_CHARACTER_LIST()
        .then((response) => response.data)
        .then((response) => {
            this.setState({characters: response.results, loading:false});
            if(response.info.next){
                this.setState({next:response.info.next });
            }
            if(res.info.prev){
                this.setState({prev:response.info.prev });    
            }
        })
      .catch((err) => {
        this.setState({ loading:false});
        console.error("ops! ocorreu um erro" + err);
     });
    }
    
    
    handleNextPress = async () =>{
        const {next} = this.state;        
        this.setState({loading:true});
        
        NEXT_OR_PREVIUS(next)
        .then((response) => response.data)
        .then((response) => {
            console.log('Go to Next Page ');
            this.setState({characters: response.results, loading:false});
            if(response.info.next){
                this.setState({next:response.info.next });
            }
            else{
                this.setState({next:null})
            }
            if(response.info.prev){
                this.setState({prev:response.info.prev });    
            }else{
                this.setState({prev:null})
            }
        })
      .catch((err) => {
        this.setState({ loading:false});
        console.error("ops! ocorreu um erro" + err);
     });
    }
    handlePrevPress = async () =>{
        const {prev} = this.state;
        this.setState({loading:true});
        const res = await Http.instance.get(prev);
        console.log('Go to Next Page ');
        this.setState({characters: res.results, loading:false});

        if(res.info.next){
            this.setState({next:res.info.next });
        }
        else{
            this.setState({next:null})
        }
        if(res.info.prev){
            this.setState({prev:res.info.prev });    
        }else{
            this.setState({prev:null})
        }

    }
    
    handleCharacterPress = (character_url) =>{
        console.log(character_url)
        this.props.navigation.navigate('CharacterDetail',{character_url});
    }

    render(){
        
        const {characters, loading, next, prev} = this.state;

        return(
            <View style={styles.container}>
                {loading?
                <ActivityIndicator 
                    color='#000' 
                    size='large'
                    style={styles.loader}
                    >
                </ActivityIndicator>
                :null
                }
                <FlatList 
                    data={characters} 
                    renderItem={
                        ({item}) => {
                            return(
                                <View>
                                    <Pressable onPress={()=>this.handleCharacterPress('https://rickandmortyapi.com/api/character/'+item.id)}>
                                    <CharacterItem item={item}></CharacterItem>
                                    </Pressable>
                                </View>
                            );
                        }
                    }>
                </FlatList>
                {prev?
                <Pressable style={styles.btn}
                onPress={this.handlePrevPress}>
        
                    <Text style={styles.btnText}>Previous</Text>
                </Pressable>
                :null
                }
                {next?
                <Pressable style={styles.btn}
                onPress={this.handleNextPress}>
                    <Text style={styles.btnText}>Next</Text>
                </Pressable>
                :null
                }
            </View>
        );
    }
} 

export default Character;
