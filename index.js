$( document ).ready(_ => {
    var firebaseConfig = {
        apiKey: "AIzaSyBQq5XqIic6IBI94xOg0nmKxlfXzqZ_dGI",
        authDomain: "api-project-7429617504.firebaseapp.com",
        databaseURL: "https://api-project-7429617504.firebaseio.com",
        projectId: "api-project-7429617504",
        storageBucket: "api-project-7429617504.appspot.com",
        messagingSenderId: "7429617504",
        appId: "1:7429617504:web:2624dd81de4ffeb5af1005"
    };
    firebase.initializeApp(firebaseConfig);
    var dbRef = firebase.database().ref().child('corona_bel');

    get(dbRef);
});

function get(dbRef){
    dbRef.on('value', gotData);
    function gotData(data) {
        var belGeinfecteerd = data.child('belgeinfecteerd').val();
        var belOverleden = data.child('beloverleden').val();
        var belGenezen = data.child('belgenezen').val();

        var belgieOverleden = belOverleden;
        var belgieGenezen = belGenezen;
        var belgieGeinfecteerd = belGeinfecteerd;

        $("#inf").html("<br><br><br><br><br><br>Geïnfecteerd:<br><br>" + belgieGeinfecteerd.toString());
        $("#heal").html("<br><br><br><br><br><br>Genezen:<br><br>" + belgieGenezen.toString());
        $("#dead").html("<br><br><br><br><br><br>Doden:<br><br>" + belgieOverleden.toString());
    }
    console.log("git got da data!")
    setTimeout(() => {
        get(dbRef)
    }, 3000);
}
