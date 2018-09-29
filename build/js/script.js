$(document).ready(function(){
  var classList = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6', 'step-7', 'step-8'];
  var actionBtn = $('.btn');

  actionBtn.each(function() {
    $(this).on('click', function() {
      var classLayout = $(this).attr('name');

      $(this).parent('.actions').find('.btn').removeClass('btn-current');
      $(this).addClass('btn-current');

      $('.code').removeClass('show');
      $('.code[name="'+ classLayout +'"]').addClass('show');

      for(var i = 0; i < classList.length; i++) {
        if($('.js-layout').hasClass(classList[i])) {
          $('.js-layout').removeClass(classList[i]);
          $('.js-layout').addClass(classLayout);
          break;
        }
      }
    })
  });
});