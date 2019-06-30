<!DOCTYPE html>
<html>
<body>

<h2>AJAX using JQuery</h2>

<script>
    function ajax1() {
        $.get("pagename.php", function (data) {
            alert(data);
        });
    }
    
    function ajax2(){
        $.ajax({
            url: "example.com" + '/register.php',
            type: 'POST',
            data: "user_name=" + user_name + "&email=" + email ,
            success: function (data) {

                data = jQuery.parseJSON(data);
                if (data['response'] === 1) {
                    //....
                } else {
                    alert("Wrong captcha code.");
                    //...
                }
            }
        });
    }
</script>

</body>
</html>
