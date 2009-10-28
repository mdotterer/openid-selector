all : js/openid-jquery.js js/openid-prototype.js

js/openid-jquery.js : src/providers.js src/openid-main.js src/jquery-impl.js
	cat src/providers.js src/openid-main.js src/jquery-impl.js > js/openid-jquery.js

js/openid-prototype.js : src/providers.js src/openid-main.js src/prototype-impl.js
	cat src/providers.js src/openid-main.js src/prototype-impl.js > js/openid-prototype.js
