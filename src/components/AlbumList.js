//Import Libraries for making a component
import React, { Component } from 'react'
import {ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
	state = { albums: [] }

	componentDidMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => {
				this.setState({ albums: response.data })
			})
			.catch(() => {
				console.error("Caught an Error");
			})
	}

	renderAlbums() {
		 return this.state.albums.map((album) => {
		return	<AlbumDetail key={album.title} album={album} />
		})
	}

	render() {
		console.log(this.state.albums)
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		)
	}
};

export default AlbumList