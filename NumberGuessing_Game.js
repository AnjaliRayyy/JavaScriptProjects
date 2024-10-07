let correct = Math.trunc(Math.random() * 100)
let count = 0;
let num;
do {
    num = prompt("Enter a number : ");
    if (num < correct) {
        alert("Please enter a larger number!!!")
    }

    if (num > correct) {
        alert("Please enter a smaller number!!!")
    }

    count++;
} while (num != correct);
alert("Congratulations!!! You have guessed the correct number!")
alert(`Your score is : ${100 - count} \nTotal number of guesses : ${count}`)
