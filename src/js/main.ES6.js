/**
 * Created by Павел on 06.04.2017.
 */
$(document).ready(()=> {
    let $viewer = $(".viewer").hide(), $button = $(".work-controls").children("button"),
        $bannerButton = $(".banner").children("button");
    $(".link-scroll").click(function (event) {
        let id = $(this).attr("href"), top = parseInt($(id).offset().top);
        event.preventDefault();
        $("body, html").animate({scrollTop: top}, 500);
    });
    $viewer.children(".fa").click(()=> {
        $viewer.hide();
    });
    $button.click(function (event) {
        event.preventDefault();
        $viewer.css({
            display: "block",
            left: $(this).offset().left,
            width: $(this).width(),
            height: $(this).height(),
            top: $(this).offset().top - $(window).scrollTop()
        }).animate({
            width: $(window).width(),
            height: $(window).height(),
            left: 0,
            top: 0
        }, 500)
            .children("img").attr("src", $(this).parent().siblings("img").attr("src"))
            .width(0).animate({width: $(window).width() - 20}, 500);
    });
    $bannerButton.click(()=> {
        let $form = $("#feedback-form").clone().addClass("text-center"),
            $newViewer = $("<div>").addClass("viewer").append($form, "<i class='fa fa-close'>").appendTo("body")
                .css({
                    width: $(window).width(),
                    height: $(window).height()
                });
        $form.css({
            background: "#373f51",
            position: "absolute",
            padding: 10,
            borderRadius: 10,
            width: 600,
            left: $(window).width() / 2 - 300
        });
        $newViewer.children(".fa").click(()=>{
            $newViewer.remove();
        });
        $form.submit(()=>{
            $newViewer.remove();
        });
    });
});