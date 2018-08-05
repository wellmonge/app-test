import React, { Component } from "react";
import { TouchableOpacity,View , Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import _data from '../models/anuncios';
import CustomListView from "../components/CustomListView";

import { SearchBar } from 'react-native-elements'

const styles = {
    iconAlign: { alignSelf: "center"},
    drawerToggle: { padding: 20 },
    headerStyle: { backgroundColor: "#fff"},
    headerTitleStyle: {fontWeight: "bold"},
}

class Anuncios extends Component {
    static navigationOptions = ({ navigation }) => {
       const auth = navigation.getParam('auth');
        
        return {
                headerStyle: styles.headerStyle, 
                headerTintColor: "#000", 
                headerTitleStyle: styles.headerTitleStyle, 
                headerTitle: <SearchBar lightTheme onChangeText={function name(params) { }} onClearText={function (params) {}}
                placeholder='Type Here...' />,
                headerRight: (
                            <TouchableOpacity
                                style={styles.drawerToggle}
                                onPress={() => {
                                navigation.navigate("DrawerToggle");
                            }}>
                                <FontAwesome 
                                    style={styles.iconAlign} 
                                    name="bars" 
                                    size={28} 
                                    color="#333333"/>
                            </TouchableOpacity>
            )};
    };
    

    constructor(props) {
        super(props);
        this.state = {};
    }

    navigateTo = () => {
        this.props
            .navigation
            .navigate("RoutesScreen", {teste: "Fromhome"});
    }

    render() {
        return (<CustomListView data={_data} navigateTo={this.navigateTo} />);
    }
}

export default Home;
