package com.ecommerce.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;



import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Carrinho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCarrinho;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dataCriacao;

    @OneToMany(mappedBy = "carrinho", fetch = FetchType.LAZY)
    private List<ItemCarrinho> itemsCarrinho = new ArrayList<>();

    public Long getIdCarrinho() {
        return idCarrinho;
    }

    public LocalDateTime getLocalDateTime() {
        return dataCriacao;
    }

    public Usuario getUsuario() {
        return usuario;
    }
    public void setIdCarrinho(Long idCarrinho) {
        this.idCarrinho = idCarrinho;
    }
    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.dataCriacao = localDateTime;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
