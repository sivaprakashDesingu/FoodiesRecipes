import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, Image } from 'react-native';
import { Video as Videos } from 'expo-av';
import { CommonCSS } from './../../../assets/styles/common_style'
export default class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {

            videoControls: {
                fullScreen: true,
                replay: false,
                showReplayButton: false
            }
        }
    }

    componentDidMount = async () => {
        await this.playbackObject.loadAsync(
            { uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }, initialStatus = { shouldPlay: true }, downloadFirst = true)
    }

    onPlaybackStatusUpdate = playbackStatus => {
        const { videoControls } = this.state
        if (!playbackStatus.isLoaded) {
            console.log("video not loaded yet")
            if (playbackStatus.error) {
                console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
                // Send Expo team the error on Slack or the forums so we can help you debug!
            }
        } else {
            // Update your UI for the loaded state

            if (playbackStatus.isPlaying) {
                videoControls.showReplayButton = false
                this.setState({ videoControls })
                //this.props.afterFirstPlay ? this.props.afterFirstPlay() : console.log("afterFirstPlay is not defined")
                console.log("playing")
            }

            if (playbackStatus.isBuffering) {
            }

            if (playbackStatus.didJustFinish) {
                videoControls.replay = true
                this.setState({ videoControls })

                // The player has just finished playing and will stop. Maybe you want to play something else?
            }
        }
    };

    handleVideoRef = async (component) => {
        this.playbackObject = component;
    }

    onVideoPress = async () => {
        await this.playbackObject.pauseAsync()
        const { videoControls } = this.state
        videoControls.showReplayButton = true
        this.setState({ videoControls })
    }
    
    onPressFullScreen = async () => {
        await this.playbackObject.presentFullscreenPlayer()
    }

    onPressMinimizeScreen = async () => {
        await this.playbackObject.dismissFullscreenPlayer()
        const { videoControls } = this.state
        videoControls.fullScreen = true;
        this.setState({ videoControls })
    }

    onPressPlayButton = async () => {
        const { videoControls } = this.state
        if (videoControls.replay) {
            videoControls.replay = false
            this.playbackObject.setStatusAsync({
                isLooping: true,
                shouldPlay: true,
                positionMillis: 0,
            });
        } else {
            await this.playbackObject.playAsync()
        }

        
        videoControls.showReplayButton = false;
        this.setState({ videoControls })
    }
    renderPlayIcon() {
        return (
            <TouchableOpacity onPress={this.onPressPlayButton} style={CommonCSS.videoControlPlaySection}>
                <Image
                    style={CommonCSS.controlIcon}
                    source={require('./../../../assets/images/icons/play-icon.png')} />
            </TouchableOpacity>
        )
    }
    renderFullScreenIcon() {
        return (
            <TouchableOpacity onPress={this.onPressFullScreen} style={CommonCSS.videoControlScreeningSection}>
                <Icon name="ios-expand" color="#fff" size={40} />
            </TouchableOpacity>
        )

    }
    renderSmallScreenIcon() {
        return (
            <TouchableOpacity onPress={this.onPressMinimizeScreen} style={CommonCSS.videoControlScreeningSection}>
                <Icon name="ios-contract" color="#fff" size={40} />

            </TouchableOpacity>
        )
    }

    render() {
        const { videoControls } = this.state
        return (
            <View style={CommonCSS.videoSectionWrapper}>
                <TouchableOpacity style={CommonCSS.videoSection} onPress={() => this.onVideoPress()}>
                    <Videos
                        ref={this.handleVideoRef}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        isLooping={false}
                        style={CommonCSS.videoSection}
                        onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
                        posterSource={{ uri: "https://upfluency-learnwithlocal.s3.ap-south-1.amazonaws.com/slow+internet.gif" }}
                        usePoster={true}
                    />
                    <View style={[CommonCSS.overlay, { opacity: .2 }]}></View>
                </TouchableOpacity>

                {videoControls.showReplayButton || videoControls.replay ? this.renderPlayIcon() : null}
                {videoControls.fullScreen ? this.renderFullScreenIcon() : null}

            </View>

        )
    }
}
