# traintime
<!-- 
Currently works as long as the time until next train is after the current time.
returns an error if the first train was before "now".

psedo-code for the logic on how to solve that issue is commented...a loop needs to be created, but unsure which variable to iterate in the loop. -->
Code seems to work. Quite ugly currently, not sure if i'll spend the time to clean it up. Function > form?
I was quite surprised when it finally worked actually. Even used moment at the very end to convert total min from midnight to actual time for trains where the first departure is before the current time. Yay!

currently code will only work when the frequency of train trips is such that the total number of trains per day is less than 100 (ie frequency less than 7 or 8 will fail if current time approaches midnight). This can be fixed by changing the max value of i in the loop to more than 100, but will affect the page load times so 100 was chosen as a fair compromise. if i were to be the total minutes in a day + 1 this can be avoided, and then trains could depart every minute.

code for the time is still very ugly and could be cleaned up.

had trouble with moment.js, just parsed the default time data instead.

input could be checked to ensure that time data is in correct HH:mm format at 24hr military , incl. zeros for first digit if single digit number. Will return errors if this is not the case.

not sure if time function (actually using date function)returns zeros as mentioned above, may create errors when current time is before 10am



