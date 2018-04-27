// Array for questions
var triviaQuest = [

	{
		question: "What do the Misfits want?",
		answers: {
			a: "Your heart",
			b: "To bring back the dead",
			c: "Your skull",
			d: "Teenagers from Mars",
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


//global variables
var triviaContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submit = document.getElementById('submit');
var start = document.getElementById('start');
var reset = document.getElementById('reset').style.display = "none";
var logo = document.getElementById('logo');
var hide = submit.style.display === "none";
var clock;
var timeLeft = 30;


generateQuiz(triviaQuest, triviaContainer, resultsContainer, submit, start, reset);

function generateQuiz(questions, triviaContainer, resultsContainer, submit, start, reset) {

	function showQuestions(questions, triviaContainer) {
		var output = [];
		var answers;

		for (var i = 0; i < questions.length; i++) {

			// reset answer
			answers = [];

			// add buttons for each answer
			for (letter in questions[i].answers) {
				answers.push(
					'<label>' +
					'<input type="radio" name="question' + i + '" value="' + letter + '">' +
					letter + ': ' +
					questions[i].answers[letter] +
					'</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>' +
				'<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// Use output to show questions
		triviaContainer.innerHTML = output.join('');

	}


	function showResults(questions, triviaContainer, resultsContainer) {

		// coolects answers from our quiz
		var answerContainers = triviaContainer.querySelectorAll('.answers');

		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;

	
		for (var i = 0; i < questions.length; i++) {

			// finds selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

			// if answer is correct
			if (userAnswer === questions[i].rightAnswer) {
				// add to the number of correct answers
				numCorrect++;

				// change to green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else {
				// change to red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions on start
	start.onclick = function () {
		showQuestions(questions, triviaContainer, submit, reset);
		$("#start").hide();
		$("#reset").show();

		//set up for timer
		$("#start").on("click", run);

		function run() {
			clearInterval(intervalId);
			intervalId = setInterval(decrement, 1000 * 50);
		}

		function decrement() {
			number--;
			$("#timer").html("<h2>" + number + "</h2>");
			if (number === 0) {
				stop();
				alert("Time Up!");
			}
		}
		clearInterval(intervalId);

		run();

	}

	// set time limit from start
	setTimeout(fiftySeconds, 1000 * 50);

	function fiftySeconds() {
		$("#quiz").hide();
		document.getElementById("#quiz").style.display = "none";
	}




	// show results on click
	submit.onclick = function () {
		showResults(questions, triviaContainer, resultsContainer);
	}


	//resets page
	start.reset()


}