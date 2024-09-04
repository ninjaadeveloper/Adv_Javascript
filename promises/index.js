console.log('start');

var condition = true;
const mypromise = new Promise(function(myResolve, myReject) {

    if (condition) {
        myResolve();
    } else {
        myReject();
    }

});

mypromise.then(function() {
    console.log('chal gaya');
}).catch(function() {
    console.log('kuch error aa gaya');
})

console.log('End');