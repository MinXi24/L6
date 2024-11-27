import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const [letter,setLetter] = useState(route.params.key);
    return(
        <View style ={{padding:10}}>
            <Text>Letter:</Text>
            <TextInput value={letter} maxLength={1} style={{borderWidth:1}} onChangeText={(text)=>setLetter(text)}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{margin:10,flex:1}}>
                    <Button title='SAVE'
                            onPress={()=>{
                                let indexNum = 1
                                if (route.params.type=="Vowels"){
                                    indexNum = 0;
                                }
                                datasource[indexNum].data[route.params.index].key = letter;
                                navigation.navigate("Home")
                            }
                            }
                    />
                </View>
                <View style={{margin:10,flex:1}}>
                    <Button title='DELETE'
                            onPress={()=>{
                                let indexNum = 1
                                if (route.params.type=="Vowels"){
                                    indexNum = 0;
                                }
                                Alert.alert("Confirmed?",'',
                                    [{text:'Yes', onPress:()=>{
                                            datasource[indexNum].data.splice(route.params.index,1);
                                            navigation.navigate("Home")
                                        }},
                                        {text:'No'}])

                            }
                            }
                    />
                </View>
            </View>
        </View>
    );
};


export default Edit;
