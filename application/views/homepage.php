<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Majstorce</title>
	<link rel="shortcut icon" type="image/png" href="<?php echo base_url('images/favicon.png'); ?>"/>
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="<?php echo base_url('css/main.css'); ?>">
</head>
<body>

<div class="wrapper">
	<section class="banner">
		<nav class="nav-wrapper container">
			<div>
				<a class="navbar-logo">
					<img src="<?php echo base_url('images/main-logo.png'); ?>" alt="Majstorce Logo"/>
				</a>
			</div>

			<div class="nav-items">
				<ul>
					<li><a href="javascript:;" data-navitem="account/register">РЕГИСТРИРАЈ ДЕЈНОСТ</a></li>
					<li><a href="javascript:;" data-navitem="account/login">НАЈАВА</a></li>
				</ul>
			</div>
		</nav>

		<div class="banner-content">
			<div class="container">
				<h1>Ви треба Хаусмајстор, Молер, Електричар ?</h1>
				<h2>Место <span>бр.1</span> каде можете да најдете локални професионалци во својата област</h2>

				<div class="search-services">
					<input type="text" placeholder="Каква услуга барате ?"/>
					<img src="<?php echo base_url('images/icons/dropdown-arrow.svg'); ?>" alt="Majstorce Input Icon"/>
				</div>
			</div>

			<div class="banner-information-wrapper">
				<div class="container">
					<div class="banner-information">
						<div class="banner-information__item">
							<h4>1<span>.</span></h4>
							<h5>Кажете ни повеќе за услугата која ви е потребна</h5>
							<div class="divider"></div>
						</div>
						<div class="banner-information__item">
							<h4>2<span>.</span></h4>
							<h5>Вашето барање ќе биде испратено до сите локални понудувачи кои ќе ви дадат
								понуди</h5>
						</div>
						<div class="banner-information__item">
							<h4>3<span>.</span></h4>
							<h5>Одберете ја понудата која најмногу ви одговара.</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section how-it-works">
		<div class="container">
			<h2>Како функционира мајсторче ?</h2>
			<div class="users-tabs">
				<ul>
					<li><a class="active-tab">За корисници</a></li>
					<li><a>За бизниси</a></li>
				</ul>
			</div>

			<div class="how-it-works-info">
				<div class="how-it-works-info__item">
					<img src="<?php echo base_url('images/homepage/how-it-work-user-1.svg'); ?>" alt="Majstorce Icon"/>
					<h3>Кажете ни повеќе за услугата која ви е потребна</h3>
					<h4>Пополнете го краткиот формулар со
						детали од работата за да можеме вашето
						барање да го испратиме до сите локални
						сервиси.
					</h4>
				</div>
				<div class="how-it-works-info__item">
					<img src="<?php echo base_url('images/homepage/how-it-work-user-2.svg'); ?>" alt="Majstorce Icon"/>
					<h3>Видете ги понудите и споредете ги по ваша желба</h3>
					<h4>Споредете ги понудите и прегледајте ја
						историјата на завршени работи , опис на
						фирмата како и мислењата на
						претходните корисници.
					</h4>
				</div>
				<div class="how-it-works-info__item">
					<img src="<?php echo base_url('images/homepage/how-it-work-user-3.svg'); ?>" alt="Majstorce Icon"/>
					<h3>Одберете ја најдобрата понуда од понудените</h3>
					<h4>Одберете давател на услуги кој што
						најмногу одговара на вашите потреби.
						Ако не најдете тоа што барате не сте
						обврзани да најмите.
					</h4>
				</div>
			</div>
		</div>
	</section>

	<section class="section find-a-service">
		<h2>Пребарај сервис</h2>
		<div class="container">
			<div class="find-a-service__input">
				<form>
					<input placeholder="Пр: Водоинсталатер, Електричар итн."/>
					<button type="submit" class="button button-small">НАЈДИ</button>
				</form>
			</div>
		</div>
	</section>

	<section class="section newest-members">
		<div class="container">
			<h2>Најнови членови</h2>
			<div class="newest-members-wrap">
				<div class="newest-members-wrap__item">
					<h4>
						<img src="<?php echo base_url('images/main-logo-yellow.svg'); ?>" alt="Majstorce Logo"/>
						ХаусМајстор Боре
					</h4>
					<h5>Лок. <span>Охрид</span> &nbsp;|&nbsp; Категорија: <span>Хаусмајстори, Водо-инсталатери</span>
					</h5>
					<p>
						Мал фамилијарен бизнис којшто нуди секакви
						професионални и мали поправки низ вашиот дом,
						водоинсталација по поволна цена.
					</p>
				</div>

				<div class="newest-members-wrap__item">
					<h4>
						<img src="<?php echo base_url('images/main-logo-yellow.svg'); ?>" alt="Majstorce Logo"/>
						Јас и Тате
					</h4>
					<h5>Лок. <span>Охрид</span> &nbsp;|&nbsp; Категорија: <span>Електричари</span></h5>
					<p>
						Мал фамилијарен бизнис којшто нуди секакви
						професионални и мали поправки низ вашиот дом,
						водоинсталација по поволна цена.
					</p>
				</div>

				<div class="newest-members-wrap__item">
					<h4>
						<img src="<?php echo base_url('images/main-logo-yellow.svg'); ?>" alt="Majstorce Logo"/>
						Томе Трејд
					</h4>
					<h5>Лок. <span>Охрид</span> &nbsp;|&nbsp; Категорија: <span>Хаусмајстори, Води-инсталатери</span>
					</h5>
					<p>
						Мал фамилијарен бизнис којшто нуди секакви
						професионални и мали поправки низ вашиот дом,
						водоинсталација по поволна цена.
					</p>
				</div>

				<div class="newest-members-wrap__item">
					<h4>
						<img src="<?php echo base_url('images/main-logo-yellow.svg'); ?>" alt="Majstorce Logo"/>
						Лесна - Осветлување
					</h4>
					<h5>Лок. <span>Охрид</span> &nbsp;|&nbsp; Категорија: <span>Електричари</span></h5>
					<p>
						Мал фамилијарен бизнис којшто нуди секакви
						професионални и мали поправки низ вашиот дом,
						водоинсталација по поволна цена.
					</p>
				</div>
			</div>
			<div class="text-center">
				<button class="button button-medium">ВИДИ ГИ СИТЕ</button>
			</div>
		</div>
	</section>

	<section class="section popular-categories">
		<h2>Популарни категории</h2>
		<div class="container">
			<div class="popular-categories-wrap">
				<div class="popular-categories-wrap__item">
					<div class="popular-categories-wrap-innerwrap">
						<div class="category-header">
							<div>
								<img src="<?php echo base_url('images/categories/hausmajstori.svg'); ?>" alt="Majstorce Cateogry Icon"/>
							</div>
							<div>
								<h3>Хаусмајстори <span>(146)</span></h3>
							</div>
						</div>
						<div class="category-information">
							<p>
								Одржувањето на домот е од витално значење, не само за
								да се задржи домот во топ состојба туку и да се
								санираат помали [...]
							</p>
						</div>
					</div>
				</div>

				<div class="popular-categories-wrap__item">
					<div class="popular-categories-wrap-innerwrap">
						<div class="category-header">
							<div>
								<img src="<?php echo base_url('images/categories/vodoinstalateri.svg'); ?>"
									 alt="Majstorce Cateogry Icon"/>
							</div>
							<div>
								<h3>Водоинсталатери <span>(146)</span></h3>
							</div>
						</div>
						<div class="category-information">
							<p>
								Одржувањето на домот е од витално значење, не само за
								да се задржи домот во топ состојба туку и да се
								санираат помали [...]
							</p>
						</div>
					</div>
				</div>

				<div class="popular-categories-wrap__item">
					<div class="popular-categories-wrap-innerwrap">
						<div class="category-header">
							<div>
								<img src="<?php echo base_url('images/categories/elektricari.svg'); ?>" alt="Majstorce Cateogry Icon"/>
							</div>
							<div>
								<h3>Електричари <span>(146)</span></h3>
							</div>
						</div>
						<div class="category-information">
							<p>
								Одржувањето на домот е од витално значење, не само за
								да се задржи домот во топ состојба туку и да се
								санираат помали [...]
							</p>
						</div>
					</div>
				</div>

				<div class="popular-categories-wrap__item">
					<div class="popular-categories-wrap-innerwrap">
						<div class="category-header">
							<div>
								<img src="<?php echo base_url('images/categories/higienicari.svg'); ?>" alt="Majstorce Cateogry Icon"/>
							</div>
							<div>
								<h3>Хигиеничари <span>(146)</span></h3>
							</div>
						</div>
						<div class="category-information">
							<p>
								Одржувањето на домот е од витално значење, не само за
								да се задржи домот во топ состојба туку и да се
								санираат помали [...]
							</p>
						</div>
					</div>
				</div>

				<div class="popular-categories-wrap__item">
					<div class="popular-categories-wrap-innerwrap">
						<div class="category-header">
							<div>
								<img src="<?php echo base_url('images/categories/klimatizacija.svg'); ?>" alt="Majstorce Cateogry Icon"/>
							</div>
							<div>
								<h3>Климатизација <span>(146)</span></h3>
							</div>
						</div>
						<div class="category-information">
							<p>
								Одржувањето на домот е од витално значење, не само за
								да се задржи домот во топ состојба туку и да се
								санираат помали [...]
							</p>
						</div>
					</div>
				</div>

				<div class="popular-categories-wrap__item">
					<div class="popular-categories-wrap-innerwrap">
						<div class="category-header">
							<div>
								<img src="<?php echo base_url('images/categories/zidari.svg'); ?>" alt="Majstorce Cateogry Icon"/>
							</div>
							<div>
								<h3>Зидари <span>(146)</span></h3>
							</div>
						</div>
						<div class="category-information">
							<p>
								Одржувањето на домот е од витално значење, не само за
								да се задржи домот во топ состојба туку и да се
								санираат помали [...]
							</p>
						</div>
					</div>
				</div>

			</div>
			<div class="text-center">
				<button class="button button-medium">СИТЕ КАТЕГОРИИ</button>
			</div>
		</div>
	</section>

	<footer>
		<div class="container">
			<div class="footer-upper">
				<div class="footer-upper__item">
					<a class="navbar-logo">
						<img src="<?php echo base_url('images/main-logo.png'); ?>" alt="Majstorce Logo"/>
					</a>

					<p>
						Ние ке ви помогнеме да најдете искусни
						и професионални предприемачи во вашата област кои ке ви помогнат да ги остварите сите потреби за
						преуредување и реновирање. <br/>
						Најдете претприемач денес.
					</p>

					<a class="button button-medium" href="javascript:;">ОБЈАВИ ПРОЕКТ</a>
				</div>

				<div class="footer-upper__item">
					<h3>Започни со мајсторче</h3>
					<ul>
						<li><a href="javascript:;">Регистрирај дејност</a></li>
						<li><a href="javascript:;">Објави проект</a></li>
						<li><a href="javascript:;">Најди претприемач</a></li>
						<li><a href="javascript:;">Најава</a></li>
						<li><a href="javascript:;">ЧПП</a></li>
					</ul>
				</div>

				<div class="footer-upper__item">
					<h3>За нас</h3>
					<ul>
						<li><a href="javascript:;">За мајсторче</a></li>
						<li><a href="javascript:;">Политика за приватност</a></li>
						<li><a href="javascript:;">Услови за користење</a></li>
						<li><a href="javascript:;">Контакт</a></li>
					</ul>
					<a href="mailto:support@majstorce.mk" class="mailto">support@majstorce.mk</a>
					<div class="social-icons">
						<ul>
							<li>
								<a href="javascript:;">
									<img src="<?php echo base_url('images/social-icons/facebook-icon.svg'); ?>" alt="Majstorce Facebook"/>
								</a>
							</li>

							<li>
								<a href="javascript:;">
									<img src="<?php echo base_url('images/social-icons/linkedin-icon.svg'); ?>" alt="Majstorce Linkedin"/>
								</a>
							</li>

							<li>
								<a href="javascript:;">
									<img src="<?php echo base_url('images/social-icons/instagram-icon.svg'); ?>" alt="Majstorce Instagram"/>
								</a>
							</li>

							<li>
								<a href="javascript:;">
									<img src="<?php echo base_url('images/social-icons/twitter-icon.svg'); ?>" alt="Majstorce Twitter"/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-lower">
			<p>Ⓒ 2020 majstorce.mk | Сите права се задржани.</p>
		</div>
	</footer>

</div>

</body>
</html>
