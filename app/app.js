$(document).ready(function(){var a=["floats","inline-block","flexbox","grids"],s=$(".btn");s.each(function(){$(this).on("click",function(){var s=$(this).attr("name");$(this).parent(".actions").find(".btn").removeClass("btn-current"),$(this).addClass("btn-current"),$(".code").removeClass("show"),$('.code[name="'+s+'"]').addClass("show");for(var o=0;o<a.length;o++)if($(".layout-box").hasClass(a[o])){$(".layout-box").removeClass(a[o]),$(".layout-box").addClass(s);break}})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsYXNzTGlzdCIsImFjdGlvbkJ0biIsImVhY2giLCJ0aGlzIiwib24iLCJjbGFzc0xheW91dCIsImF0dHIiLCJwYXJlbnQiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImkiLCJsZW5ndGgiLCJoYXNDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUFDLFVBQUFDLE1BQUEsV0FDQSxHQUFBQyxJQUFBLFNBQUEsZUFBQSxVQUFBLFNBQ0FDLEVBQUFKLEVBQUEsT0FFQUksR0FBQUMsS0FBQSxXQUNBTCxFQUFBTSxNQUFBQyxHQUFBLFFBQUEsV0FDQSxHQUFBQyxHQUFBUixFQUFBTSxNQUFBRyxLQUFBLE9BRUFULEdBQUFNLE1BQUFJLE9BQUEsWUFBQUMsS0FBQSxRQUFBQyxZQUFBLGVBQ0FaLEVBQUFNLE1BQUFPLFNBQUEsZUFFQWIsRUFBQSxTQUFBWSxZQUFBLFFBQ0FaLEVBQUEsZUFBQVEsRUFBQSxNQUFBSyxTQUFBLE9BRUEsS0FBQSxHQUFBQyxHQUFBLEVBQUFBLEVBQUFYLEVBQUFZLE9BQUFELElBQ0EsR0FBQWQsRUFBQSxlQUFBZ0IsU0FBQWIsRUFBQVcsSUFBQSxDQUNBZCxFQUFBLGVBQUFZLFlBQUFULEVBQUFXLElBQ0FkLEVBQUEsZUFBQWEsU0FBQUwsRUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICB2YXIgY2xhc3NMaXN0ID0gWydmbG9hdHMnLCAnaW5saW5lLWJsb2NrJywgJ2ZsZXhib3gnLCAnZ3JpZHMnXTtcbiAgdmFyIGFjdGlvbkJ0biA9ICQoJy5idG4nKTtcblxuICBhY3Rpb25CdG4uZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNsYXNzTGF5b3V0ID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XG5cbiAgICAgICQodGhpcykucGFyZW50KCcuYWN0aW9ucycpLmZpbmQoJy5idG4nKS5yZW1vdmVDbGFzcygnYnRuLWN1cnJlbnQnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2J0bi1jdXJyZW50Jyk7XG5cbiAgICAgICQoJy5jb2RlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICQoJy5jb2RlW25hbWU9XCInKyBjbGFzc0xheW91dCArJ1wiXScpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoJCgnLmxheW91dC1ib3gnKS5oYXNDbGFzcyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICAgICAgJCgnLmxheW91dC1ib3gnKS5yZW1vdmVDbGFzcyhjbGFzc0xpc3RbaV0pO1xuICAgICAgICAgICQoJy5sYXlvdXQtYm94JykuYWRkQ2xhc3MoY2xhc3NMYXlvdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG59KTsiXX0=