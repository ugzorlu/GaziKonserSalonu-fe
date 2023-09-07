import React, { Component } from 'react';
import EmbeddedPanoramicView from '../utils/EmbeddedPanoramicView.js';

class PanoramicView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='Content-container Panoramicview-container'>
				<div className='Content-title'>PANORAMİK GÖRÜNTÜ</div>
				<EmbeddedPanoramicView />
			</div>
		);
	}
}
export default PanoramicView;
