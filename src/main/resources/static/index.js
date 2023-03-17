function registrer(){

    const billett = {
        film: $('#film').val(),
        antall: $('#antall').val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    };
    let feil = 0;

    if($('#film option:selected').val() === ""){
        document.getElementById("film.feil").style.display = "inline";
        feil++;
    } else {
        document.getElementById("film.feil").style.display = "none";
    }
    if($('#antall').val() === "" || $('#antall').val() === 0){
        document.getElementById("antall.feil").style.display = "inline";
        feil++;
    } else {
        document.getElementById("antall.feil").style.display = "none";
    }

    if($('#fornavn').val() === "" || $('#fornavn').val() === 0){
        document.getElementById("fornavn.feil").style.display = "inline";
        feil++;
    } else {
        document.getElementById("fornavn.feil").style.display = "none";
    }

    if($('#etternavn').val() === "" || $('#etternavn').val() === 0){
        document.getElementById("etternavn.feil").style.display = "inline";
        feil++;
    } else {
        document.getElementById("etternavn.feil").style.display = "none";
    }

    if($('#telefonnr').val() === "" || $('#telefonnr').val() === 0){
        document.getElementById("telefonnr.feil").style.display = "inline";
        feil++;
    } else {
        document.getElementById("telefonnr.feil").style.display = "none";
    }

    if($('#epost').val() === "" || $('#epost').val() === 0){
        document.getElementById("epost.feil").style.display = "inline";
        feil++;
    } else {
        document.getElementById("epost.feil").style.display = "none";
    }

    // dersom en eller flere felter er tomme, returerer den false
    if(feil > 0){
        return false;
    } else {

    $.post("/lagre", billett, function (){
        hentAlle();
    });


    $("#film").val(""),
        $("#antall").val(""),
        $("#fornavn").val(""),
        $("#etternavn").val(""),
        $("#telefonnr").val(""),
        $("#epost").val("");
}
}

function hentAlle() {
    $.get("/hentAlle", function (data){
        formaterData(data);
    });
}

function formaterData(billetter){
    let ut = "<table class='table table-striped table-bordered'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (const billett of billetter){
        ut += "<tr><td>"+billett.film+"</td><td>"+billett.antall+"</td><td>"+billett.fornavn+"</td><td>"+billett.etternavn+"</td><td>"+billett.telefonnr+"</td><td>"+billett.epost+"</td></tr>"
    }
    ut += "</table>";
    $("#billettRegister").html(ut);
}

function slettBillettene(){
    $.get("/slettBillettene", function (){
        hentAlle();
    })

}