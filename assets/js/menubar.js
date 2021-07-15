function openNav() {
  document.getElementById("mySidenavLarge").style.width = "280px";
  //document.getElementById("dark-bg").style.display = 'block';
}

function closeNav() {
  document.getElementById("mySidenavLarge").style.width = "0";
  //document.getElementById("dark-bg").style.display = 'none';
}
function openNav2() {
  document.getElementById("mySidenavMobile").style.width = "280px";
  //document.getElementById("dark-bg").style.display = 'block';
}

function closeNav2() {
  document.getElementById("mySidenavMobile").style.width = "0";
  //document.getElementById("dark-bg").style.display = 'none';
}

$(document).ready(function (){
  //more nav list large
  $(".open-more-large").click(function() {
    $(".main-nav-list-large, .more-nav-list-large").addClass("more-active");
  })
  $(".more-nav-list-btn-back-large").click(function() {
    $(".main-nav-list-large, .more-nav-list-large").removeClass("more-active");
  })

  //more nav list mobile
  $(".open-more-mobile").click(function() {
    $(".main-nav-list-mobile, .more-nav-list-mobile").addClass("more-active");
  })
  $(".more-nav-list-btn-back-mobile").click(function() {
    $(".main-nav-list-mobile, .more-nav-list-mobile").removeClass("more-active");
  })

  // mobile menu sub category toggle
  $(".mobile-categories").click(function() {
    $(this).toggleClass("sub-ctg-active");
  })
})


  
  $(document).ready(function () {
    //header search click to expand 
    // $(".cs-btn-submit").click(function() {
    //   $(".cs-txt-livesearch").addClass("sopen");
    //   $(".cs-btn-close").addClass("cs-show");
    //   $(".cs-btn-submit").addClass("cs-hide");
    // })

    // $(".cs-btn-close").click(function() {
    //   $(".cs-txt-livesearch").removeClass("sopen");
    //   $(".cs-btn-close").removeClass("cs-show");
    //   $(".cs-btn-submit").removeClass("cs-hide");
    // })

    //mobile footer search activation
    $('.footer-search-open').click(function(e){
      e.preventDefault();
      $('#mobile-header-search').toggleClass('mobile-open');
    })


    //mobile footer cart activation
    $(document).on('click', function (e) {
      if(!$(e.target).closest('.meta-dreaming, .footer-btn-toggle-cart').length) {
        $('.toggle-cart').removeClass('cart-open');
      }
    });

    $('.footer-btn-toggle-cart').on('click', function(e){
      e.preventDefault();
      $('.toggle-cart').toggleClass('cart-open'); 
    })

    $('.header-btn-toggle-cart').on('click', function(e){
      e.preventDefault();
      $('.toggle-cart').addClass('cart-open'); 
    })
    

    //select multiple quantity options
    $(".qt-select-open.qt-multiple-open").click(function() {
      $(".qt-drop-wrapper.qt-multiple").css("transform","translateY(0)");
    })
    $(".qt-btn-close.qt-multiple-close").click(function() {
      $(".qt-drop-wrapper.qt-multiple").css("transform","translateY(100%)");
    })


    //open cart quantity
    $(".qt-btn-ad-to-cart.cart-multiple").click(function() {
      $(".quantity-wrapper.multiple-quantity").css("top","0");
    })
    $(".qt-btn-ad-to-cart.cart-single").click(function() {
      $(".quantity-wrapper.single-quantity").css("top","0");
    })



    $(".details-view-link").click(function(e) {
      e.preventDefault();
      $(this).parents("tr").siblings().closest('tr').children('td').children('div').toggleClass("details-show");
    })


  })

  

  



