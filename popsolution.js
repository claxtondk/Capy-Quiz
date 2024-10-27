//change 5 to the total number of questions
var total=5
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Capytastic!"
compliments[1]="Capybar-illiant!"
compliments[2]="You're as clever as a capybara!"
compliments[3]="You're making the capybaras proud!"
compliments[4]="Correct!"
compliments[5]="You're a capy expert!"
compliments[6]="Capy king! Queen? Monarch?"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Capybaras are skilled swimmers.  How long can they stay underwater?"
choice1[1]="90 seconds"
choice1[2]="2 minutes"
choice1[3]="5 minutes"
choice1[4]="8 minutes"

question[2]="What is the average weight of a capybara?"
choice2[1]="50 kg"
choice2[2]="40 kg"
choice2[3]="30 kg"
choice2[4]="20 kg"

question[3]="Which of the following are NOT capybara\'s diet?"
choice3[1]="Grass"
choice3[2]="Bark"
choice3[3]="Sugar cane"
choice3[4]="Beetles"

question[4]="What's one way capybaras are similar to cats?"
choice4[1]="They purr."
choice4[2]="They love climbing."
choice4[3]="Seafood can be a healthy part of their diet."
choice4[4]="They have very large ears."

question[5]="True or false: The teeth of a capybara stop growing in adolescence."
choice5[1]="TRUE"
choice5[2]="FALSE"


solution[1]="c"
solution[2]="a"
solution[3]="d"
solution[4]="a"
solution[5]="b"

