// Array for questions
var triviaQuest = [{
		question: "What do the Misfits want?",
		answers: {
			a: "Your heart",
			b: "To bring back the dead",
			c: "Your skull",
			d: "For you to shut up",
		},
		rightAnswer: 'c'
	},

	{
		question: "Black Flag has what?",
		answers: {
			a: "The right and a will to fight",
			b: "A six pack and nothing to do",
			c: "A fist full of steel",
			d: "A pocket full of rainbows",
		},
		rightAnswer: 'b'
	},

	{
		question: "What is the lead singer of Bad Religion's second job?",
		answers: {
			a: "Web Developer",
			b: "Political Activist",
			c: "Anthropology Professor",
			d: "Biologist"
		},
		rightAnswer: 'c'
	},

	{
		question: "What do the Ramones want?",
		answers: {
			a: "To be your boyfriend",
			b: "Your dog",
			c: "To fight the power",
			d: "To eat lunch in peace",
		},
		rightAnswer: 'a'
	},

	{
		question: "What band pays tribute to Elvis with similar album art?",
		answers: {
			a: "The New York Dolls",
			b: "The Damned",
			c: "The Clash",
			d: "The Beastie Boys",
		},
		rightAnswer: 'c'
	},

	{
		question: "What Marvel film did Suicidal Tendencies song Institutionalized appear in?",
		answers: {
			a: "The Amazing Spiderman",
			b: "Dr Strange",
			c: "The Incredible Hulk",
			d: "Ironman",
		},
		rightAnswer: 'd'
	},

	{
		question: "Who is not a punk vocalist?",
		answers: {
			a: "Snake Plisken",
			b: "Glenn Danzig",
			c: "Jello Biafra",
			d: "Sid Vicious",
		},
		rightAnswer: 'a'
	},

	{
		question: "Who wrote the the album Zen Arcade?",
		answers: {
			a: "Hüsker Dü",
			b: "Social Distortion",
			c: "The Sex Pistols",
			d: "The Offspring",
		},
		rightAnswer: 'a'
	},

	{
		question: "According to NOFX who is taking over?",
		answers: {
			a: "The government",
			b: "The idiots",
			c: "We are",
			d: "The subhumans",
		},
		rightAnswer: 'b'
	},

	{
		question: "What Pixies song was featured in Fight Club?",
		answers: {
			a: "Is She Weird?",
			b: "Indie Cindy",
			c: "Were is my Mind?",
			d: "The Happening",
		},
		rightAnswer: 'c'
	},
];

function print(message) {
  var outputDiv = document.getElementById('output'); // node
  outputDiv.innerHTML = message; // similar to document.write
  $( '#output' ).removeClass( "hidden" );
  // $( '#output' ).toggleClass( "hidden", addOrRemove );
}

// function to build ordered lists of questions
function buildList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i +=1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

$(document).on("click", ".launch-quiz", function(e) {

  // Loop 
  for ( var i = 0; i < quizQuestions.length; i += 1) { // loop thru each question
    response = prompt(quizQuestions[i][0]); // prompt asks question
    response = response.toLowerCase();
    if (response === quizQuestions[i][1]){ // compare response to answer in array
      numberOfCorrectAnswers += 1;
      correctAnswers.push(quizQuestions[i][0]);
    } else {
      numberOfIncorrectAnswers +=1;
      incorrectAnswers.push(quizQuestions[i][0]);
    }
  }
    
 
  
  
  html = "You got " + numberOfCorrectAnswers + " question(s) right." + "<br>";
  html += "You got " + numberOfIncorrectAnswers + " question(s) wrong." + "<br>";
  html += '<h2>You got these questions right:</h2>';
  html += buildList(correctAnswers);
  html += '<h2>You got these questions wrong:</h2>';
  html += buildList(incorrectAnswers);
  print(html);

});

// $(document).on("click", ".play-again", function(e) {
//   $( '#output' ).addClass( "hidden" );
// })