let ran, computer,user, vuser = 0, vcomp = 0, proceed = true, i = 0;
// Note : For the function Victory, returning 1 means user's victory, -1 means computer's wins and 0 means its a draw
const Victory = (computer, user) => {

    if (computer=="snake" && user=="water")
        return -1;

    else if (computer=="snake" && user=="gun")
        return 1;

    else if (computer=="water" && user=="snake")
        return 1;

    else if (computer=="water" && user=="gun")
        return -1;

    else if (computer=="gun" && user=="snake")
        return -1;

    else if (computer=="gun" && user=="water")
        return 1;
    else
        return 0;
} //end of function Victory

while (proceed==true && i < 3) {
    i++;
    ran = (Math.random() * 100) //Generating a random number between 1 and 100

    //Computer's Choice
    if (ran < 33.33)
        computer = "snake"
    else if (ran > 33.33 && ran < 66.66)
        computer = "water"
    else
        computer = "gun"

    // User's Choice
    user = prompt("Enter your choice(snake/water/gun) : ")
    user=user.toLowerCase();

    //Deciding the winner for the round and aloting scores
    if (Victory(computer, user) == 1) {
        vuser++
        alert("User won this round!!!")
    }
    else if (Victory(computer, user) == -1) {
        vcomp++;
        alert("Computer won this round!!!")
    }
    else
        alert("This round was Draw!!!")
    if(i<=2)
    proceed = confirm("Proceed to next round?")
}//end of while

//Displaying Final Scores
if(vuser>vcomp)
{
    alert(`User Won the Game!!!\nUser's Score : ${vuser}\tComputer's Score : ${vcomp}`)
}
else if(vcomp>vuser)
    {
        alert(`Computer Won the Game!!!\nUser's Score : ${vuser}\tComputer's Score : ${vcomp}`)
    }
else{
    alert(`The Game was Drawn!!!\nUser's Score : ${vuser}\tComputer's Score : ${vcomp}`)
}