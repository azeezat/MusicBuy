//Import Libraries for making a component
import React from 'react'
import { Text, View, Image,Linking } from 'react-native'
import Card from './Card'
import CardSection from './cardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image,url } = album
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>

            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={()=>{Linking.openURL(url)}}>Buy Now</Button>
            </CardSection>
        </Card>
    )
}

styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    headerTextStyle: {
        fontSize: 18

    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10

    },
    imageStyle: {
        flex: 1,
        height: 300,
        width: null
    }
}
export default AlbumDetail