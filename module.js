var app = angular.module('myapp', []);
app.controller('ctrl', function ($scope) {
    $scope.curr = 0;
    $scope.showresult = false;
    $scope.showscore = false;
    $scope.myfinalresult = 0;
    $scope.result = "";
    $scope.questions = [
        {
            question: 'What is the capital of France?',
            choices: ['London', 'Paris', 'Rome', 'Berlin'],
            correctanswer: 'Paris'
        },
        {
            question: 'What is the largest mammal?',
            choices: ['Elephant', 'Whale', 'Giraffe', 'Bear'],
            correctanswer: 'Whale'
        },
        {
            question: 'What is the capital of India?',
            choices: ['Mumbai', 'Pune', 'Delhi', 'Kanpur'],
            correctanswer: 'Delhi'
        },
        {
            question: 'Which planet is known as the Red Planet?',
            choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctanswer: 'Mars'
        },
        {
            question: 'Who is the author of "To Kill a Mockingbird"?',
            choices: ['Harper Lee', 'J.D. Salinger', 'F. Scott Fitzgerald', 'Ernest Hemingway'],
            correctanswer: 'Harper Lee'
        },
        {
            question: 'What is the chemical symbol for gold?',
            choices: ['Ag', 'Au', 'Hg', 'Fe'],
            correctanswer: 'Au'
        },
        {
            question: 'Which element is said to keep bones strong?',
            choices: ['Calcium', 'Iron', 'Sodium', 'Potassium'],
            correctanswer: 'Calcium'
        },
        {
            question: 'What is the smallest country in the world?',
            choices: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
            correctanswer: 'Vatican City'
        },
        {
            question: 'Which famous scientist developed the theory of relativity?',
            choices: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Stephen Hawking'],
            correctanswer: 'Albert Einstein'
        },
        {
            question: 'What is the main ingredient in guacamole?',
            choices: ['Avocado', 'Tomato', 'Onion', 'Garlic'],
            correctanswer: 'Avocado'
        },
        {
            question: 'What is the largest ocean on Earth?',
            choices: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            correctanswer: 'Pacific Ocean'
        },
        {
            question: 'Who painted the Mona Lisa?',
            choices: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
            correctanswer: 'Leonardo da Vinci'
        },
        {
            question: 'What is the capital of Japan?',
            choices: ['Kyoto', 'Osaka', 'Tokyo', 'Hiroshima'],
            correctanswer: 'Tokyo'
        }

    ];
    $scope.checkanswer = function () {
        console.log($scope.useranswer);
        if ($scope.useranswer === $scope.questions[$scope.curr].correctanswer) {
            $scope.result = "Correct Answer!";
            $scope.myfinalresult++;
        }
        else {
            $scope.result = "Incorrect! Correct answer is " + $scope.questions[$scope.curr].correctanswer + ".";
        }
        $scope.showresult = true;

    };
    $scope.nextquestion = function () {
        $scope.curr++;
        $scope.showresult = false;
        $scope.useranswer = null;
    }
    $scope.showres = function () {
        $scope.showscore = true;
        alert("Total Correct Answers: " + $scope.myfinalresult);
        $scope.showresult = false;
    }
    $scope.restart = function () {
        $scope.curr = 0;
        $scope.showresult = false;
        $scope.myfinalresult = 0;
        $scope.result = "";
        $scope.showscore = false;

    }
});