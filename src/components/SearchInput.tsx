

import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text, StyleProp,ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hooks/useDebounceValue';



interface Props{
    stilo?: StyleProp<ViewStyle>,
    onDebounce: (value: string) => void,
}

export const SearchInput = ({stilo, onDebounce}: Props) => {

    const [textValue, setTextValue] = useState('');

    const debonceValue = useDebounceValue(textValue, 1500 );

    useEffect(() => {
        
       onDebounce(debonceValue);

        
    }, [debonceValue])
    
    
    return (
        <View style={{
            ...styles.container,
            ...stilo as any,
            }}
        >
            <View style={styles.textBackground}>
                <TextInput 
                    placeholder='Buscar Pokemon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={ textValue }
                    onChangeText={ setTextValue }
                />
                <Icon 
                    name='search-outline'
                    size={25}
                    color='#a7a7a7'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    },
    textBackground:{
        backgroundColor: '#dad9d9',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.7,
        shadowRadius: 9.51,

        elevation: 15,
    },
    textInput:{
        flex: 1,
        fontSize: 18,
        top: 1,

    },
});