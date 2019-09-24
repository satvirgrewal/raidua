function skipSong() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             Swal.fire({text: 'Skipping Song',position:'top-end',timer: 1200, width:200,  showConfirmButton:false})
         }
    };
    xhttp.open("POST", "http://ec2-52-206-21-200.compute-1.amazonaws.com/api/station/1/backend/skip", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Authorization","Bearer 31386b96afe44237:8fd1da059625a280715c4875447d8ee2");
    xhttp.send();
}