/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.soccerPlayer;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.*;

/**
 *
 * @author: Alex Fernandez
 */

@Entity
@Table(name = "partido")
public class Partido {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String competicion;
    private LocalDate fecha;

    private String localTeam;
    private String visitTeam;

    private int minutos;
    private int goals;
    private int assists;
    private double rating;

    private int marcadorLocal; // Nueva propiedad
    private int marcadorVisitante; // Nueva propiedad
    private String faseCompeticion; // Nueva propiedad
    private String localCrest; // Nueva propiedad
    private String visitCrest; // Nueva propiedad
    private String competitionLogo; // Nueva propiedad
    private String playerKit; // Nueva propiedad
    private String kitManufacturer; // Nueva propiedad
    private String kitNumber; // Nueva propiedad
    private String kitSleeve; // Nueva propiedad
    private String backgroundColor; // Nueva propiedad
    private int tarjetaAmarilla; // Nueva propiedad
    private int tarjetaRoja; // Nueva propiedad

    // Constructor sin argumentos
    public Partido() {
    }

    // Constructor con argumentos
    public Partido(String competicion, LocalDate fecha, String localTeam, String visitTeam, int minutos, int goals, int assists, double rating, int marcadorLocal, int marcadorVisitante, String faseCompeticion, String localCrest, String visitCrest, String competitionLogo, String playerKit, String kitManufacturer, String kitNumber, String kitSleeve, String backgroundColor, int tarjetaAmarilla, int tarjetaRoja) {
        this.competicion = competicion;
        this.fecha = fecha;

        this.localTeam = localTeam;
        this.visitTeam = visitTeam;

        this.minutos = minutos;
        this.goals = goals;
        this.assists = assists;
        this.rating = rating;

        this.marcadorLocal = marcadorLocal;
        this.marcadorVisitante = marcadorVisitante;
        this.faseCompeticion = faseCompeticion;
        this.localCrest = localCrest;
        this.visitCrest = visitCrest;
        this.competitionLogo = competitionLogo;
        this.playerKit = playerKit;
        this.kitManufacturer = kitManufacturer;
        this.kitNumber = kitNumber;
        this.kitSleeve = kitSleeve;
        this.backgroundColor = backgroundColor;
        this.tarjetaAmarilla = tarjetaAmarilla;
        this.tarjetaRoja = tarjetaRoja;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    //
    public String getCompeticion() {
        return competicion;
    }
    public void setCompeticion(String competicion) {
        this.competicion = competicion;
    }

    //
    public LocalDate getFecha() {
        return fecha;
    }
    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }


    //
    public String getLocalTeam() {
        return localTeam;
    }
    public void setLocalTeam(String localTeam) {
        this.localTeam = localTeam;
    }

    //
    public String getVisitTeam() {
        return visitTeam;
    }
    public void setVisitTeam(String visitTeam) {
        this.visitTeam = visitTeam;
    }


    //
    public int getMinutos() {
        return minutos;
    }
    public void setMinutos(int minutos) {
        this.minutos = minutos;
    }

    //
    public int getGoals() {
        return goals;
    }
    public void setGoals(int goals) {
        this.goals = goals;
    }

    //
    public int getAssists() {
        return assists;
    }
    public void setAssists(int assists) {
        this.assists = assists;
    }

    //
    public double getRating() {
        return rating;
    }
    public void setRating(double rating) {
        this.rating = rating;
    }


    //
    public int getMarcadorLocal() {
        return marcadorLocal;
    }
    public void setMarcadorLocal(int marcadorLocal) {
        this.marcadorLocal = marcadorLocal;
    }

    //
    public int getMarcadorVisitante() {
        return marcadorVisitante;
    }
    public void setMarcadorVisitante(int marcadorVisitante) {
        this.marcadorVisitante = marcadorVisitante;
    }

    //
    public String getFaseCompeticion() { return faseCompeticion; }
    public void setFaseCompeticion(String faseCompeticion) {this.faseCompeticion = faseCompeticion;}

    //
    public String getLocalCrest() { return localCrest; }
    public void setLocalCrest(String localCrest) {this.localCrest = localCrest;}

    //
    public String getVisitCrest() { return visitCrest; }
    public void setVisitCrest(String visitCrest) { this.visitCrest = visitCrest; }

    //
    public String getCompetitionLogo() { return competitionLogo; }
    public void setCompetitionLogo(String competitionLogo) { this.competitionLogo = competitionLogo; }

    //
    public String getPlayerKit() { return playerKit; }
    public void setPlayerKit(String playerKit) { this.playerKit = playerKit; }

    //
    public String getKitManufacturer() { return kitManufacturer; }
    public void setKitManufacturer(String kitManufacturer) { this.kitManufacturer = kitManufacturer; }

    //
    public String getKitNumber() { return kitNumber; }
    public void setKitNumber(String kitNumber) { this.kitNumber = kitNumber; }

    //
    public String getKitSleeve() { return kitSleeve; }
    public void setKitSleeve(String kitSleeve) { this.kitSleeve = kitSleeve; }

    //
    public String getBackgroundColor() { return backgroundColor; }
    public void setBackgroundColor(String backgroundColor) { this.backgroundColor = backgroundColor; }

    //
    public int getTarjetaAmarilla() {
        return tarjetaAmarilla;
    }
    public void setTarjetaAmarilla(int tarjetaAmarilla) {
        this.tarjetaAmarilla = tarjetaAmarilla;
    }

    //
    public int getTarjetaRoja() {
        return tarjetaRoja;
    }
    public void setTarjetaRoja(int tarjetaRoja) {
        this.tarjetaRoja = tarjetaRoja;
    }
}
