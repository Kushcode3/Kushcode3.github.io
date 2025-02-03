(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$sidebar = $('#sidebar'),
		$menu = $('#menu'),
		settings = {

			// Sidebar Panel.
				sidebarPanel: {

					breakpoints: 'medium'
				}

		};

	// Breakpoints.
		breakpoints({
			xlarge:   '(min-width: 1681px)',
			large:    '(min-width: 1281px)',
			medium:   '(min-width: 981px)',
			small:    '(min-width: 737px)',
			xsmall:   '(min-width: 481px)',
			xxsmall:  '(min-width: 321px)'
		});


	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});


	// Sidebar.
		var $sidebar = $('#sidebar'),
			$sidebarInner = $('.inner', $sidebar);

		// Height.
			$sidebar.height($sidebarInner.height());


		// Menu.
			var $menu = $('#menu');

			$menu.wrapInner('<div class="inner"></div>');

			$menu.find('li').each(function() {

				var $this = $(this),
					$a = $this.children('a'),
					$ul = $this.children('ul');

				if ($ul.length > 0) {

					$this
						.addClass('opener')
						.on('click', function(event) {

							event.preventDefault();

							if ($this.hasClass('active')) {

								$this.removeClass('active');
								$ul.slideUp('fast');

							}
							else {

								$menu.find('.opener.active').removeClass('active');
								$menu.find('ul').slideUp('fast');

								$this.addClass('active');
								$ul.slideDown('fast');

							}

						});
				}

			});

	})(jQuery);
