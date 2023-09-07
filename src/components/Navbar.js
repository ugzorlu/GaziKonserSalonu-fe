import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../gazi-logo-min.png';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='Navbar-container'>
				<Link className='Navbar-logo-container' to='/'>
					<img className='Navbar-logo' src={logo} alt='Gazi Üniversitesi' />
					<div className='Navbar-texts-container'>
						<span className='Navbar-venuetext'>GAZİ KONSER SALONU</span>
						<span className='Navbar-unitext'>GAZİ ÜNİVERSİTESİ</span>
					</div>
				</Link>
				<ul className='Navbar-items-container'>
					<li>
						<Link to='/'>Anasayfa</Link>
					</li>
					<li>
						<Link to='/projectcrew'>Proje Ekibi</Link>
					</li>
					<li>
						<Link to='/panoramicview'>Panoramik Görüntü</Link>
					</li>
					<li>
						<Link to='/programs'>Programlar</Link>
					</li>
					<li>
						<Link to='/posters'>Afişler</Link>
					</li>
					<li>
						<Link to='/photos'>Fotoğraflar</Link>
					</li>
					<li>
						<Link to='/videos'>Videolar</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
