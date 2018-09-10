let theHours = new Date().getHours();
let theMessage;
let morning = ('Good Morning and Thanks for Visiting');
let afternoon = ('Good Afternoon and Thanks for Visiting');
let evening = ('Good Evening and Thanks for Visiting');

if (theHours >= 0 && theHours < 12) {
    theMessage = morning;

} else if (theHours >= 12 && theHours < 17) {
    theMessage = afternoon;

} else if (theHours >= 17 && theHours < 24) {
    theMessage = evening;
}

$(".welGreet").append(theMessage);

$(".navbar, .welgreet").click(function () {
    $(".welGreet").empty();
})
