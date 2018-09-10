$(document).ready(function () {
    console.log("jquery");
    $('[data-toggle="tooltip"]').tooltip();
    console.log($('[data-toggle="tooltip"]').tooltip())

    $("h2").click(function () {
        let prev = $(this).text()
        $("h2").text("My Grandbabies!");
        $("h2").click(function () {
            $(this).text(prev)
        })
    })






});
