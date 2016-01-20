# frontend-nanodegree-mobile-portfolio

This is a project for the Front-End Web Develper Nanodegree.
The finished project is in the dist/ folder.
PLEASE USE GOOGLE CROME TO VIEW
  All images are compressed with webp.


Optimazations for scr Folder
----------------------------
This is the non-Gulp-optimized code folder.

*.html
	1.Commented the google fonts out because it takes to long to download and I feel didt add to the page. Even asycronusly
	2.Moved all scripts to bottom of page to prevent javascript from slowing the page from loading
	3.compressed all local files to webp. (only supported in Chrome and Opera)
	4.Added async to all non-local images
	5.Added 'media="print"' to the print css as it is only needed when printing the page

Style.css
	1.Added 'will-change: transform;' to .mover and .randomPizzaContainer to force pizzas into there own level so the entire page does not have to repaint everytime a pizza moves or changes size.
	2.Added 'transform: translateZ(0);' and 'backface-visibility: hidden;' to .mover and .randomPizzaContainer to force hardware acceleration.

Main.js
	1.Moved all varible declations out of loops to prevent it from being created every time the loop is executed.
	2.Created variables for DOM calls in loops so DOM calls only happen once.
	3.Changed all 'querySelector' to 'getElementBy..' because its faster
	4.Refactored function changePizzaSizes by:
		A.consolidating unnesisary functions, determineDx and resizePizzas, into the changePizzasSizes function as one switch.
		B.elimiating all DOM calls inside math calcuations by creating varibles instead.

Gulp is used to automate certain processes and to provide further optimizations. You need to install Gulp globally on your system as well as in the main project file. To download gulp go to gulpjs.com, click the "Get Started" button, and follow the instructions.

Gulp is required to compile this code along with ALL the moduals. To install the moduals, open your comand promt and type in the comands inside each set of parenthisis:
  -gulp-jshint(npm install gulp-jshint)
  	JSHint is used to help detect errors and potential problems in your javascript code
  -gulp-concat(npm install gulp-concat)
  	Concat takes several JS files and combines them into one file to limit the number of page requests sent to the server.
  -gulp-uglify(npm install gulp-uglify)
  	Uglify will minify your JS files to decrease the file size and therefore decrease dowload time.
  -gulp-rename(npm install gulp-rename)
  	Rename is simply a way to rename files and, while required to compile, is only used as a placeholder for templateing in future projects.
  -gulp-inline-css(npm install gulp-inline-css)
  	Inline-CSS is used to inline CSS into an html file, which, lowers the amount of page requests when loading the page.
  -gulp-minify-html(npm i gulp-minify-html)
  	Minify-HTML will minify your html files to decrease the file size and therefore decrease dowload time.
  -gulp-webp(npm install gulp-webp)
  	WebP will compress PNG, JPEG and TIFF files into a WebP file. I used this type of image compression just to kind of "test the waters."I do not recomend using this type of comression without first testing wether or not the user is using Chrome or Opera as it is not compatible with any other browers.
  -gulp-inline-source(npm i gulp-inline-source)
  	Inline_Source is used to inline JS files into an html file, which, lowers the amount of page requests when loading the page.

dist folder
-----------
This is the final distrobution folder.

