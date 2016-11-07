$(function(){

	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "home",
			"home": "home",
			"about": "about",
			"contact": "contact"
		},

		deselectPills: function(){
			$('ul.pills li').removeClass('active');
		},

		selectPill: function(pill){
			this.deselectPills();
			//select passed navigation pill by selector
			$(pill).addClass('active');
		},

		hidePages: function(){
			$('div.pages').hide();
		},

		showPage: function(page){
			this.hidePages();
			//show passed page by selector
			$(page).show();
		},

		home: function() {
			this.showPage('div#home-page');
			this.selectPill('li.home-pill');
		},

		about: function() {
			this.showPage('div#about-page');
			this.selectPill('li.about-pill');
		},

		contact: function() {
			this.showPage('div#contact-page');
			this.selectPill('li.contact-pill');
		}
	});

	var ApplicationView = Backbone.View.extend({
		//bind view to body element (all views should be bound to DOM elements)
		el: $('body'),

		//observe navigation click events and map to contained methods
		events: {
			'click ul.pills li.home-pill a': 'displayHome',
			'click ul.pills li.about-pill a': 'displayAbout',
			'click ul.pills li.contact-pill a': 'displayContact'
		},

		//called on instantiation
		initialize: function(){
			//set dependency on ApplicationRouter
			this.router = new ApplicationRouter();
			Backbone.history.start();
		},

		displayHome: function(){
			//update url and pass true to execute route method
			this.router.navigate("home", true);
		},

		displayAbout: function(){
			//update url and pass true to execute route method
			this.router.navigate("about", true);
		},

		displayContact: function(){
			//update url and pass true to execute route method
			this.router.navigate("contact", true);
		}
	});

	//load application
	new ApplicationView();
});

