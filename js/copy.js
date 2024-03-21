

    $(document).on('click','.btn-alte:first-child',function name(params) {
        $('.btn-alte:first-child').css('visibility','hidden');
        $('.btn-alte:first-child').css('opacity','0');
        $('.btn-alte:last-child').css('visibility','visible');
        $('.btn-alte:last-child').css('opacity','1');
        $('.lista-evento-menu').css('top','14%');
    });
    
    $(document).on('click','.btn-alte:last-child',function name(params) {
        $('.btn-alte:first-child').css('visibility','visible');
        $('.btn-alte:first-child').css('opacity','1');
        $('.btn-alte:last-child').css('visibility','hidden');
        $('.btn-alte:last-child').css('opacity','0');
        $('.lista-evento-menu').css('top','7%');
    });

    $(document).on('scroll', function name(params) {
           if ($(this).scrollTop() >= 0) {
            $('.lista-evento-menu').css('top','7%');
            $('.btn-alte:first-child').css('visibility','visible');
            $('.btn-alte:first-child').css('opacity','1');
            $('.btn-alte:last-child').css('visibility','hidden');
            $('.btn-alte:last-child').css('opacity','0');
           }
    });