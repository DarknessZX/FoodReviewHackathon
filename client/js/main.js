$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
        menu: '#menu'
    });

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


});

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '144438419375480',
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));


    function loginFb(){
      FB.login(function(response) {
        if (response.authResponse) {
           console.log('Welcome!  Fetching your information.... ');
           FB.api('/me', function(response) {
             var accessToken = FB.getAuthResponse().accessToken;
             console.log(response);
             console.log(accessToken);
           });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
      });

    }
