import React from 'react';
import ReactDOM from 'react-dom';
import { TextInput } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import { CommonCSS, headerComponentCSS } from './Style'

const appColor = {
    primaryColor: '#ec4242',
    grayColor: '#a09d9d',
    white: "#fff",
    textColor: '#394150',
    borderColors:'#ddd'
}

class HeaderBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchBar: false,
            text: ''
        }
    }

    isSearchBarEnabled() {
        this.setState({ searchBar: true })
    }
    render() {
        const { headerTitle } = this.props
        const { searchBar,text } = this.state
        return (
            <View style={[CommonCSS.container, { position: 'relative' }]}>
                <View style={CommonCSS.flexDirectionRow}>
                    <Text style={headerComponentCSS.title}>{this.props.headerTitle}</Text>
                    <Text style={headerComponentCSS.searchIcon}
                        onPress={this.isSearchBarEnabled.bind(this)}
                    >
                        <Image
                            source={require('./../../assets/images/search.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    </Text>
                    <View style={
                        searchBar ?
                            [headerComponentCSS.searchBox, headerComponentCSS.activesearchBox] :
                            [headerComponentCSS.searchBox, headerComponentCSS.inActivesearchBox]}>
                        <TextInput
                            label='Email'
                            value={text}
                            theme={{
                                underlineColor:"#ddd",
                                selectionColor :appColor.primaryColor
                            }}
                            style={headerComponentCSS.searchText}
                            onChangeText={text => this.setState({ text })}
                        />

                        <View>
                            <Text style={headerComponentCSS.searchTag}>Recipe</Text>
                            <Text style={headerComponentCSS.searchResultItem}>Chicken Briyani</Text>
                            <Text style={headerComponentCSS.searchResultItem}>Chicken Briyani</Text>
                            <Text style={headerComponentCSS.searchResultItem}>Chicken Briyani</Text>
                            <Text style={headerComponentCSS.searchResultItem}>Chicken Briyani</Text>
                            <Text style={headerComponentCSS.searchResultItem}>Chicken Briyani</Text>
                            <Text style={headerComponentCSS.searchResultItem}>Chicken Briyani</Text>
                            <Text style={headerComponentCSS.searchResultItem}>Chicken Briyani</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

export default HeaderBar;

