let famousPerson = "madonna";

queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + famousPerson + "&api-key=4M300Bmv4RcVSfAuVT3W3nJ38wQb3KJc"


()
$.ajax({url: queryURL,
    method: "GET",

}).then(function(res) {
    console.log(res)
    
})

