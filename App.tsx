import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View
}
    from "react-native";
    // const obj =
function App() {
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <Image source={require('./image/Menu(1).png')} />
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image style={{marginRight:46}}source={require('./image/BasketIcon(1).png')} />
                    <Image source={require('./image/SearchIcon(1).png')} />
                </View>
            </View>
            <View style={styles.menu}>
                <Text style={styles.menuText}>Concept</Text>
                <Text style={styles.menuText}>Popular</Text>
                <Text style={styles.menuText}>New</Text>
            </View>
        </SafeAreaView>
    )
}
export default App;

const styles = StyleSheet.create({
    area: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 29,
        marginTop: 29,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menu:{
        marginTop: 83,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 26,  
    },
    menuText:{
        fontSize:17,
        color:'black',
        fontWeight:'800'
    }
})