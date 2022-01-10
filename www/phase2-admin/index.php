<?php 
	require_once('../session_start.php');
	if(strtolower($role) != 'admin') {
		die("You don't have permission to access!!!");
	} 
?>

<!DOCTYPE html>
<html id="admin-html" lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Manage Employee</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
			rel="stylesheet"
		/>
		<!-- CSS only -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">	
		<script
			type="module"
			src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
		></script>
		<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
		/>
		<link rel="stylesheet" href="../style.css"/>
	</head>
	<body>
		<div class="main" id="admin-page">
			<div class="container">
				<header class="header">
					<div class="header__manager">
						<div class="header__manager__info">
							<span class="header__manager__position">Admin</span>
						</div>
					</div>
					<div class="header__nav">
						<div class="header__nav__item">
							<a href="http://localhost:8080/login_page.html" class="header__nav__link">
								<ion-icon name="log-out-outline" class="header__nav__icon"></ion-icon>
								<span>Log out</span>
							</a>
						</div>
					</div>
				</header>
				<section class="section">
					<ul class="category">
						<div class="line"></div>
						<li id="employee-management" class="category__item">
							<a href="#" class="category__link">
								<ion-icon name="people-outline" class="category__icon"></ion-icon>
								<span class="category__text">Employees</span>
							</a>
						</li>
						<li id="faculty-management" class="category__item">
							<a href="#" class="category__link">
								<ion-icon name="people-outline" class="category__icon"></ion-icon>
								<span class="category__text">Faculties</span>
							</a>
						</li>
						<li id="attendance-management" class="category__item">
							<a href="#" class="category__link">
								<ion-icon name="people-outline" class="category__icon"></ion-icon>
								<span class="category__text">Attendance</span>
							</a>
						</li>
					</ul>
					<div class="about">
						<div class="about__top">
							<h3 class="about__top__title"><span></span></h3>
							<div class="about__top__info">
								<ul class="about__top__list">
									<li class="about__top__item">
										<span class="about__top__text">Discipline</span>
									</li>
									<li class="about__top__item">
										<span class="about__top__text">Determination</span>
									</li>
									<li class="about__top__item">
										<span class="about__top__text">Healthy</span>
									</li>
									<li class="about__top__item">
										<span class="about__top__text">Treatment</span>
									</li>
								</ul>
								<div class="about__top__btn">
									<button class="button btn-department">
										<span>Add a new department</span>
									</button>
									<button class="button btn-add btn-employee">Add a new employee</button>
								</div>
							</div>
						</div>
						<div class="about__center">
						</div>
						<!-- show information -->
						<div class="about__bottom">
							<div id="employee-list" class="about__list"></div>
						</div>
					</div>
				</section>
			</div>
		</div>
		<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
			integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
			crossorigin="anonymous"
		></script>
		<script
			src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
			integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
			crossorigin="anonymous"
		></script>
		<script src="../main.js"></script>
	</body>
</html>

<!-- <img src="https://source.unsplash.com/random" alt="" /> -->
