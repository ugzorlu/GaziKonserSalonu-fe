import NavBar from './components/Navbar.js';
import Homepage from './pages/Homepage.js';
import ProjectCrew from './pages/ProjectCrew.js';
import PanoramicView from './pages/PanoramicView.js';
import Programs from './pages/Programs.js';
import Posters from './pages/Posters.js';
import Photos from './pages/Photos.js';
import Videos from './pages/Videos.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/projectcrew' element={<ProjectCrew />} />
					<Route path='/projectcrew' element={<ProjectCrew />} />
					<Route path='/panoramicview' element={<PanoramicView />} />
					<Route path='/programs' element={<Programs />} />
					<Route path='/posters' element={<Posters />} />
					<Route path='/photos' element={<Photos />} />
					<Route path='/videos' element={<Videos />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
