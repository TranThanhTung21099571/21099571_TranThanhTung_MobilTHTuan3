import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Image, ScrollView, View, StyleSheet, TextInput} from "react-native";

export default function App({navigation}) {
    const[data, setData] = useState([
        {key: '1', type: 'Vegetable', name:'Apple', price:'28.00', image:require('../assets/Data/Image_101.png')},
        {key: '2', type: 'Vegetable', name:'Pear', price:'28.00', image:require('../assets/Data/Image_102.png')},
        {key: '3', type: 'Vegetable', name:'Coconut', price:'28.00', image:require('../assets/Data/Image_103.png')},
        {key: '4', type: 'Vegetable', name:'Pear', price:'28.00', image:require('../assets/Data/Image_105.png')},
        {key: '5', type: 'Vegetable', name:'Coconut', price:'28.00', image:require('../assets/Data/Image_105.png')},
        {key: '6', type: 'Vegetable', name:'Coconut', price:'28.00', image:require('../assets/Data/Image_106.png')},
        {key: '7', type: 'Vegetable', name:'Pear', price:'28.00', image:require('../assets/Data/Image_107.png')},
        {key: '8', type: 'Seafood', name:'Seafood 1', price:'28.00', image:require('../assets/Data/Image_95.png')},
        {key: '9', type: 'Seafood', name:'Seafood 1', price:'28.00', image:require('../assets/Data/Image_95.png')},
        {key: '10', type: 'Seafood', name:'Seafood 1', price:'28.00', image:require('../assets/Data/Image_95.png')},
        {key: '11', type: 'Seafood', name:'Seafood 1', price:'28.00', image:require('../assets/Data/Image_95.png')},
        {key: '12', type: 'Seafood', name:'Seafood 1', price:'28.00', image:require('../assets/Data/Image_95.png')},
        {key: '13', type: 'Seafood', name:'Seafood 1', price:'28.00', image:require('../assets/Data/Image_95.png')},
        {key: '14', type: 'Seafood', name:'Seafood 1', price:'28.00', image:require('../assets/Data/Image_95.png')},
        {key: '15', type: 'Seafood', name:'Seafood 1', price:'28.00', image:require('../assets/Data/Image_95.png')},
        {key: '16', type: 'Drink', name:'Drink 1', price:'28.00', image:require('../assets/Data/Image_96.png')},
        {key: '17', type: 'Drink', name:'Drink 1', price:'28.00', image:require('../assets/Data/Image_96.png')},
        {key: '18', type: 'Drink', name:'Drink 1', price:'28.00', image:require('../assets/Data/Image_96.png')},
        {key: '19', type: 'Drink', name:'Drink 1', price:'28.00', image:require('../assets/Data/Image_96.png')},
        {key: '20', type: 'Vegetable', name:'Apple', price:'28.00', image:require('../assets/Data/Image_101.png')},
        {key: '21', type: 'Vegetable', name:'Pear', price:'28.00', image:require('../assets/Data/Image_102.png')},
        {key: '22', type: 'Vegetable', name:'Coconut', price:'28.00', image:require('../assets/Data/Image_103.png')},
        {key: '23', type: 'Vegetable', name:'Pear', price:'28.00', image:require('../assets/Data/Image_105.png')},
        {key: '24', type: 'Vegetable', name:'Coconut', price:'28.00', image:require('../assets/Data/Image_105.png')},
        {key: '25', type: 'Vegetable', name:'Coconut', price:'28.00', image:require('../assets/Data/Image_106.png')},
        {key: '26', type: 'Vegetable', name:'Pear', price:'28.00', image:require('../assets/Data/Image_107.png')},
    ])

    const[type, setType] = useState('Vegetable');
    const[selectedBtn, setSelectedBtn] = useState('Vegetable');
    const[initItemCount, setInitItemCount] = useState(6);
    return(
        <ScrollView stickyHeaderIndices={[0]}>
            <View style={{
                width: '100%',
                backgroundColor:'white',
                flexDirection: "row",
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 20,
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={() => {navigation.navigate("Screen_01")}}>
                    <Image source={require('../assets/Data/Image_183.png')} style={style.icon}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Screen_03")}}>
                    <Image source={require('../assets/Data/Image_182.png')} style={style.icon}></Image>
                </TouchableOpacity>
            </View>
            <View style={{
                width: '100%',
            }}>
                <TextInput style={{
                   width: '90%',
                   alignSelf: 'center',
                   borderRadius: 10,
                   borderWidth: 1,
                   borderColor: 'gray',
                   marginTop: 20,
                   paddingLeft: 20,
                   fontSize: 20,
                }} placeholder="Search">
                </TextInput>
            </View>
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                paddingHorizontal: 20,
                marginTop: 20,
            }}>
                <TouchableOpacity style={[style.touchForType, {backgroundColor: type == 'Vegetable' ? 'green' : 'white'}]}
                    onPress={() => {setType('Vegetable'); setInitItemCount(6)}}>
                    <Text style={style.text}>
                        Vegetable
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[style.touchForType, {backgroundColor: type == 'Seafood' ? 'green' : 'white'}]}
                      onPress={() => {setType('Seafood'); setInitItemCount(6)}}>
                    <Text style={style.text}>
                        Seafood
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[style.touchForType, {backgroundColor: type == 'Drink' ? 'green' : 'white'}]}
                    onPress={() =>{setType('Drink'); setInitItemCount(6)}}>
                    <Text style={style.text}>
                        Drink
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                marginTop: 20,
            }}>
                <Text style={{fontSize: 25, color:'green'}}>Order your favorite</Text>
                <TouchableOpacity onPress={() => {setInitItemCount(data.length)}}>
                    <Text style={{fontSize: 25, color:'pink'}}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={data
                        .filter((item) => item.type == type)
                        .slice(0, initItemCount)
                }
                renderItem={({item}) =>(
                    <View style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        width: '45%',
                        marginHorizontal: '2.5%',
                        marginVertical: 10,
                        padding: 15,
                    }}>
                        <TouchableOpacity>
                            <Image source={item.image}></Image>
                        </TouchableOpacity>
                        <Text style={{fontSize: 20}}>{item.name}</Text>
                    </View>
                )}
                numColumns={2}
            >
            </FlatList>
        </ScrollView>
    );
   
}
const style = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'blue',
    },

    touchForType: {
        flex: 1,     
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
});