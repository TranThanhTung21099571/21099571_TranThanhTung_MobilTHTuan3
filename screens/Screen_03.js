import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-web';

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
    const[initItemCount, setInitItemCount] = useState(1);
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <View style={{
               width: '100%',
               justifyContent: 'space-between',
               flexDirection: 'row',
               alignItems: 'center',
               paddingHorizontal: 20,
               paddingVertical: 10,
               backgroundColor: 'white',
            }}>
                <TouchableOpacity onPress={() => {navigation.navigate('Screen_02')}}>
                    <Image source={require('../assets/Data/Image_183.png')}
                        style={{
                          width: 25,
                          height: 25,
                        }}>
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={{
                width: '100%',
                justifyContent: 'center',
                height: 50,
                paddingHorizontal: 20,
            }}>
                <Text style={{fontSize: 25, color:'green', fontWeight:'bold'}}>
                    My Basket
                </Text>
            </View>
            <View>
                <FlatList
                    data={
                        data.filter((item) => item.type == type)
                    }
                    renderItem={({item}) => (
                        <View style={{
                            width: '100%',
                            marginHorizontal: '2.5%',
                            padding: 15,
                            borderWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Image source={item.image} style={{width: 70, height: 70, marginRight: 10}} resizeMode='contain'/>
                            <View>
                                <Text style={{fontSize:15, fontWeight:'bold', color:'green', marginRight: 10}}>{item.price}</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:15, fontWeight: 'bold', color:'green', marginRight: 10}}>{item.name}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={require('../assets/Data/Image_180.png')}
                                    style={{width: 15, height: 15, marginTop:10}}
                                ></Image>
                                 <Image source={require('../assets/Data/Image_180.png')}
                                    style={{width: 15, height: 15, marginTop:10}}
                                ></Image>
                                 <Image source={require('../assets/Data/Image_180.png')}
                                    style={{width: 15, height: 15, marginTop:10}}
                                ></Image>
                                 <Image source={require('../assets/Data/Image_180.png')}
                                    style={{width: 15, height: 15, marginTop:10}}
                                ></Image>
                                 <Image source={require('../assets/Data/Image_180.png')}
                                    style={{width: 15, height: 15, marginTop:10}}
                                ></Image>
                            </View>
                            <View style={{flexDirection:'row', paddingHorizontal: 10,}}>
                                <Image source={require('../assets/Data/Image_175.png')} style={{
                                    marginRight: 10, height: 20, width: 20,
                                }}></Image>
                                <Text style={{fontSize: 20}}>1</Text>
                                <Image source={require('../assets/Data/Image_176.png')} style={{
                                    marginLeft: 10, height: 20, width: 20}}></Image>
                            </View>
                        </View>
                    )}
                >
                </FlatList>
            </View>
            <View style={{justifyContent: 'center', alignItems:'center', flex:1}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 10,}}>
                    <Text style={{fontSize: 30}}>Total</Text>
                    <Text style={{fontSize: 30}}>$ 320.00</Text>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: 'green',
                    borderRadius: 40,
                    width: 240,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                }}
                    onPress={() => {navigation.navigate("Screen_01")}} 
                >
                    <Text style={{fontSize:25, color:'white'}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}