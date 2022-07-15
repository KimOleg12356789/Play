$(document).ready(function(){

    $('.lend-slider').slick({
        infinite: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });


     function setEqualHeight(columns)
        {
        var tallestcolumn = 0;
        columns.each(
        function()
        {
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn)
        {
        tallestcolumn = currentHeight;
        }
        }
        );
        columns.height(tallestcolumn);
        }
        $(document).ready(function() {
        setEqualHeight($(".play-block"));
        });


});