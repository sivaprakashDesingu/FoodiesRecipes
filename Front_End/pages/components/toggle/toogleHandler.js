
import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native';
import {slideToggleComponentCSS} from '../Style'
class TooggleHandler extends Component{
    constructor(props){
        super(props);

        // this.icons = {
        //     'up'    : require('./images/Arrowhead-01-128.png'),
        //     'down'  : require('./images/Arrowhead-Down-01-128.png')
        // };

        this.state = {
            title       : props.title,
            expanded    : false,
            animation   : new Animated.Value(50)
        };
    }

    toggle(){
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    render(){
        // let icon = this.icons['down'];

        // if(this.state.expanded){
        //     icon = this.icons['up'];
        // }

        return (
            <Animated.View 
                style={[slideToggleComponentCSS.container,{height: this.state.animation}]}>
                <View style={slideToggleComponentCSS.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={slideToggleComponentCSS.title}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={slideToggleComponentCSS.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                       <Text>Click on me</Text>
                    </TouchableHighlight>
                </View>
                
                <View style={slideToggleComponentCSS.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
        );
    }
}

export default TooggleHandler;