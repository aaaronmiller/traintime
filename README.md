# traintime
<!-- 
Currently works as long as the time until next train is after the current time.
returns an error if the first train was before "now".

psedo-code for the logic on how to solve that issue is commented...a loop needs to be created, but unsure which variable to iterate in the loop. -->
Code seems to work. Quite ugly currently, not sure if i'll spend the time to clean it up. Function > form?
I was quite surprised when it finally worked actually. Even used moment at the very end to convert total min from midnight to actual time for trains where the first departure is before the current time. Yay!

code for the time is still very ugly and could be cleaned up.

had trouble with moment.js, just parsed the default time data instead.

input could be checked to ensure that time data is in correct HH:mm format at 24hr military , incl. zeros for first digit if single digit number. Will return errors if this is not the case.

not sure if time function (actually using date function)returns zeros as mentioned above, may create errors when current time is before 10am



