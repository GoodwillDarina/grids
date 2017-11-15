$(document).ready(function(){
  var classList = ['floats', 'inline-block', 'flexbox', 'grids'];
  var actionBtn = $('.btn');

  actionBtn.each(function() {
    $(this).on('click', function() {
      var classLayout = $(this).attr('name');

      $(this).parent('.actions').find('.btn').removeClass('btn-current');
      $(this).addClass('btn-current');

      $('.code').removeClass('show');
      $('.code[name="'+ classLayout +'"]').addClass('show');

      for(var i = 0; i < classList.length; i++) {
        if($('.layout-box').hasClass(classList[i])) {
          $('.layout-box').removeClass(classList[i]);
          $('.layout-box').addClass(classLayout);
          break;
        }
      }
    })
  });
});