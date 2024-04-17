function frogContest(n) {
    var chris = (n / 2 ) * (1 + n);//calculate the sum of the flies chris ate 
    var tom = (Math.floor(chris / 2 ) / 2) * (1 + Math.floor(chris / 2));//half of chris's meal
    var Cat = ((tom + chris) / 2) * (1 + (tom + chris));// add both tom's and chris and find the sum of for that value

    return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${Cat} flies`
}
console.log(frogContest(8));
