//1431

var kidsWithCandies = function(candies, extraCandies) {
    const result = []

    let max = 0
    for(let i=0; i < candies.length; i++){
        if (candies[i] > max){
            max = candies[i]
        }
    }

    for(let i = 0; i < candies.length; i++){
        const totalCandies = candies[i] + extraCandies
        //result[i] = max > totalCandies ? false : true
        result[i] = totalCandies >= max
    }

    return result
};