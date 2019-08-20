let BC = React.createClass({
    componentDidMount(){
        $('.button').click(function(){
            $('#login').modal('show');
        });
    },
});

//let BC = () => {
    //return (
       // `$(document).ready(function(){
         //   //при нажатию на элемент, имеющий класс .open-modal, открыть модальное окно
          //  $('.button').click(function(){
            //    $('#login').modal('show');
           // });
       // });`
   // )
//};

export BC from 'login.js'




