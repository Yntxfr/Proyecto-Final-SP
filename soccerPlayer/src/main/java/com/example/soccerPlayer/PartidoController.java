/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.soccerPlayer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author: Alex Fernandez
 */

@RestController
@RequestMapping("/Partido")

public class PartidoController {
    @Autowired
    private PartidoRepository partidoRepository;

    // Obtener todos los partidos
    @GetMapping
    public List<Partido> getAllPartidos() {
        return partidoRepository.findAll();
    }

    // Obtener un partido por ID
    @GetMapping("/{id}")
    public ResponseEntity<Partido> getPartidoById(@PathVariable Long id) {
        Optional<Partido> partido = partidoRepository.findById(id);
        if (partido.isPresent()) {
            return ResponseEntity.ok(partido.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Crear un nuevo partido
    @PostMapping
    public Partido createPartido(@RequestBody Partido partido) {
        return partidoRepository.save(partido);
    }

    // Actualizar un partido existente
    @PutMapping("/{id}")
    public ResponseEntity<Partido> updatePartido(@PathVariable Long id, @RequestBody Partido partidoDetails) {
        Optional<Partido> optionalPartido = partidoRepository.findById(id);
        if (optionalPartido.isPresent()) {
            Partido Partido = optionalPartido.get();
            Partido.setCompeticion(partidoDetails.getCompeticion());
            Partido.setFecha(partidoDetails.getFecha());
            Partido.setMarcador(partidoDetails.getMarcador());
            // Partido.setLocalCrest(partidoDetails.getLocalCrest());
            Partido.setLocalTeam(partidoDetails.getLocalTeam());
            // Partido.setVisitCrest(partidoDetails.getVisitCrest());
            Partido.setVisitTeam(partidoDetails.getVisitTeam());
            Partido.setTiempoJuego(partidoDetails.getTiempoJuego());
            Partido.setMinutos(partidoDetails.getMinutos());
            Partido.setGoals(partidoDetails.getGoals());
            Partido.setAssists(partidoDetails.getAssists());
            Partido.setRating(partidoDetails.getRating());

            // Partido updatedPartido = partidoRepository.save(existingPartido);
            return ResponseEntity.ok(partidoRepository.save(Partido));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un partido
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePartido(@PathVariable Long id) {
        Optional<Partido> optionalPartido = partidoRepository.findById(id);
        if (optionalPartido.isPresent()) {
            partidoRepository.delete(optionalPartido.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
