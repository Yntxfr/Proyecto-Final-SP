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
    private String marcador;
    // private byte[] localCrest;
    private String localTeam;
    // private byte[] visitCrest;
    private String visitTeam;
    private String tiempoJuego;
    private int minutos;
    private int goals;
    private int assists;
    private double rating;

    // Constructor sin argumentos
    public Partido() {
    }

    // Constructor con argumentos
    public Partido(String competicion, LocalDate fecha, String marcador, byte[] localCrest, String localTeam, byte[] visitCrest, String visitTeam, String tiempoJuego, int minutos, int goals, int assists, double rating) {
        this.competicion = competicion;
        this.fecha = fecha;
        this.marcador = marcador;
        // this.localCrest = localCrest;
        this.localTeam = localTeam;
        // this.visitCrest = visitCrest;
        this.visitTeam = visitTeam;
        this.tiempoJuego = tiempoJuego;
        this.minutos = minutos;
        this.goals = goals;
        this.assists = assists;
        this.rating = rating;
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
    public String getMarcador() {
        return marcador;
    }
    public void setMarcador(String marcador) {
        this.marcador = marcador;
    }

    //
    /*
    public byte[] getLocalCrest() {
        return localCrest;
    }
    public void setLocalCrest(byte[] localCrest) {
        this.localCrest = localCrest;
    }
    */

    //
    public String getLocalTeam() {
        return localTeam;
    }
    public void setLocalTeam(String localTeam) {
        this.localTeam = localTeam;
    }

    //
    /*
    public byte[] getVisitCrest() {
        return visitCrest;
    }
    public void setVisitCrest(byte[] visitCrest) {
        this.visitCrest = visitCrest;
    }
    */

    //
    public String getVisitTeam() {
        return visitTeam;
    }
    public void setVisitTeam(String visitTeam) {
        this.visitTeam = visitTeam;
    }

    //
    public String getTiempoJuego() {
        return tiempoJuego;
    }
    public void setTiempoJuego(String tiempoJuego) {
        this.tiempoJuego = tiempoJuego;
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

}
