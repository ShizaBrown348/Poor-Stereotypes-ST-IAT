define(['pipAPI', 'https://cdn.jsdelivr.net/gh/ShizaBrown348/Final@main/qstia1.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Upper Economic Class People', //Will appear in the data.
		    title : {
		      media : {word : 'Upper Economic Class People'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'1.5em'}, //Style of the category title.
		      height : 5 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word: 'Affluent'}, 
    			{word: 'Well-Off'}, 
    			{word: 'Wealthy'}, 
    			{word: 'Rich'}
			/*, 
    			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}*/
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Socially Incompetent', //Attribute label
			title : {
				media : {word : 'Socially Incompetent'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'1.5em'}, //Style of the category title.
				height : 5 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
		  		{word: 'Unproductive'},
				{word: 'Cowardly'},
				{word: 'Deceitful'},
				{word: 'Dull'}
				/*
				{word: 'Poison'},
				{word: 'Grief'}*/
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Socially Competent', //Attribute label
			title : {
				media : {word : 'Socially Competent'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'1.5em'}, //Style of the category title.
				height : 5 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Responsible'},
				{word: 'Confident'},
				{word: 'Honest'},
				{word: 'Decisive'}
				/*,
				{word: 'Splendid'},
				{word: 'Love'}*/
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });