import React from "react";
import{Link} from 'react-router-dom';
import Home from "../reportImages/Home.jpeg"
import logoheader from "../reportImages/logoheader.png"

function HeaderNew() {
    return (
        <header>
	<nav class="navbar navbar-expand-lg">
		<div class="container">
            
			<a class="navbar-brand text-white" href="#"><img src={logoheader} alt="img" style={{width:"60px"}}/><i class="fa fa-graduation-cap fa-lg mr-2"></i>MEDIXO E-HEALTH</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="nvbCollapse">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item pl-1">
						<a class="nav-link" href="/home"><i class="fa fa-home fa-fw mr-1"></i>Home</a>
					</li>
					<li class="nav-item active pl-1">
						<a class="nav-link" href="/get"><i class="fa fa-th-list fa-fw mr-1"></i>Search Reports</a>
					</li>
					<li class="nav-item pl-1">
                    <div class="dropdown">
  <button class="btn nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:"#000000", opacity:"0.6"}}>
  <i class="fa fa-th-list fa-fw mr-1"></i>Services
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/Main">Lab Reports</a>
    <a class="dropdown-item" href="#">Channeling</a>
    <a class="dropdown-item" href="#">Pharmacy</a>
    <a class="dropdown-item" href="#">Payment</a>
  </div>
</div>
					</li>
					<li class="nav-item pl-1">
						<a class="nav-link" href="#"><i class="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Contact Us</a>
					</li>
					
				</ul>
			</div>
		</div>
	</nav>
	</header>




    
    )
}

export default HeaderNew;