module.exports ={
	root:true,
	env:{
		browser:true,
		amd:true,
		node:true,
		es6:true,
	},
	extends:[	//para usar plugins
		'eslint:recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'next',
		'next/core-web-vitals',	  
	],
	rules:{		//definiemos las reglas a medida que las necesitemos y vamos definiento nuestro estandar
		'semis': ['off'],	//nos dio error y solo se podia solucionar con esa config
		'prettier/prettier':0,	//para ignorar los errores y warnings de prettier le damos 0, warning:1, error:2
		"react/no-unescaped-entities": "off",
	    "@next/next/no-page-custom-font": "off"
	}
};