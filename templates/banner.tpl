{if $banner}
<div class="device">
    <div class="swiper-container index-banner">
        <div class="swiper-wrapper">
            {foreach $banner as $b }
            <div class="swiper-slide" style="background: url({$b['img']});">
            </div>
            {/foreach}
        </div>

        {*<div class="swiper-button-next"></div>*}
        {*<div class="swiper-button-prev"></div>*}
    </div>
</div>


<link rel="stylesheet" href="public/css/swiper.min.css">
<script src="public/js/swiper.min"></script>

<script>
    var swiper = new Swiper('.swiper-container', {
//        lazy: true,
//        autoHeight: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
//        pagination: {
//            el: '.swiper-pagination',
//            clickable: true,
//        },
//        navigation: {
//            nextEl: '.swiper-button-next',
//            prevEl: '.swiper-button-prev',
//        },
    });

</script>
{/if}