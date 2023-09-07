import React, { Component } from 'react';
import historicalPrograms from '../historicalprograms.json';
import YearWrapper from '../components/YearWrapper.js';

class Programs extends Component {
	constructor(props) {
		super(props);
		this.state = { historicalPrograms };
	}

	render() {
		const historicalPrograms = this.state.historicalPrograms;

		function renderYears() {
			const years = historicalPrograms.map((year, index) => (
				<YearWrapper year={year} />
			));

			return years;
		}

		return (
			<div className='Content-container'>
				<div className='Content-title'>PROGRAMLAR</div>
				<div className='Years-container'>{renderYears()}</div>
			</div>
		);
	}
}
export default Programs;
