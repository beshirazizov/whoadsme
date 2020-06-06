$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $("#mob-nav").toggleClass("mob-nav-hide");
        $("body").toggleClass("nav-visible");
    });

    $("select.selectric").selectric();

    $(".change-filters").click(function () {
        $(this).parent().css('padding', "40px")
        $(this).parent().css('max-height', "1000px")
    });

    $(".wam-nav-btn").click(function () {
        var tabid = $(this).data("tabid");
        $('a[href="' + tabid + '"]').trigger("click");
    });

    $(".agency-item").click(function () {
        if (!$(this).hasClass("untoggled")) {
            return;
        }
        $(this).removeClass("untoggled");

        var elem = this;

        var text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        var companyimages = ["company1.png", "company2.png", "company3.png"];
        var portfolioimages = ["Image 38.png", "Image 39.png", "Image 42.png", "Image 43.png", "Image 44.png", "Image 45.png", "Image 46.png"];
        var tags = ["Fashion", "Food", "Finance", "Cosmetics", "Fashion", "Food", "Finance", "Cosmetics", "Design"];
        var mail = "bashir@code.edu.az";
        var site = "www.edu.az";

        $(elem).find('.more-info .description').text(text);
        $(elem).find('.more-info .website').text(site);
        $(elem).find('.more-info .mail').text(mail);

        companyimages.forEach(e => {
            $(elem).find('.more-info .brand-logos').append('<img class="brand-logo" src="content/img/' + e + '" alt="">');
        });
        tags.forEach(e => {
            $(elem).find('.more-info .tags').append('<span class="tag">' + e + '</span>');
        });
        portfolioimages.forEach(e => {
            $(elem).find('.portfolio-wrapper').append('<div class="portfolio-item"> <img class="width-to-height" src="Content/img/' + e + '" alt=""> </div>');
        });

        $(elem).find('.more-info').css("max-height", "3000px");
        $(elem).find('.more-info').css("padding", "15px");

        $('.width-to-height').each(function () {
            var width = $(this).width();
            $(this).css("height", width);
        });

        var offset = $(elem).offset();
        $('html, body').animate({
            scrollTop: offset.top - 10
        });

        setTimeout(
            function () {
                $(elem).find('.more-info .description').css("opacity", "1");
            }, 400);
        setTimeout(
            function () {
                $(elem).find('.more-info .brand-text').css("opacity", "1");
                $(elem).find('.more-info .brand-logo').css("opacity", "1");
            }, 600);
        setTimeout(
            function () {
                $(elem).find('.more-info .ind-text').css("opacity", "1");
                $(elem).find('.more-info .tag').css("opacity", "1");
            }, 800);
        setTimeout(
            function () {
                $(elem).find('.more-info .portfolio-text').css("opacity", "1");
                $(elem).find('.more-info .portfolio-wrapper').css("opacity", "1");
            }, 1000);
        setTimeout(
            function () {
                $(elem).find('.more-info .contact-text').css("opacity", "1");
                $(elem).find('.more-info .contact-info').css("opacity", "1");
            }, 1200);
    });

    var selectedAgCount=0;
    $(".select-agc-btn").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).hasClass("clicked")) {
            selectedAgCount++;
            $(this).addClass("clicked");
            $(this).find("span").text("Selected");
        }
        else {
            selectedAgCount--;
            $(this).removeClass("clicked");
            $(this).find("span").text("Select");
        }

        if (selectedAgCount>=2) {
            $(".starttender.info").css("opacity","0");
            $(".starttender.active").css("opacity","1");
        }
        else{
            $(".starttender.active").css("opacity","0");
            $(".starttender.info").css("opacity","1");
        }
    });


    $('.website-input').focusout(function() {
        var web = $(this).val();
        if (web) {
            $(".mail-web").text("@"+web);
        }
        else{
            $(".mail-web").text("@website.com");
        }
    });

});
$(window).on('load', function () {
    $('#ads-inner').isotope({
        itemSelector: '.ad-wrapper',
        layoutMode: 'masonry'
    });
});