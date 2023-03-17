package com.example.oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Oblig2Controller {

    private final List<Billetter> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Billetter innBillett) {
        System.out.println("Dataen er lagret");
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billetter> hentAlle(){
        return alleBilletter;
    }

    @GetMapping("/slettBillettene")
    public void slettBillettene() {
        System.out.println("Dataen er slettet");
        alleBilletter.clear(); }



}
