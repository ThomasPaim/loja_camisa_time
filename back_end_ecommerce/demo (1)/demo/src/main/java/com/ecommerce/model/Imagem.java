package com.ecommerce.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Imagem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idImagem;

    private String urlImagem;

    @OneToMany(mappedBy = "image", fetch = FetchType.LAZY)
    private List<Produto> produtos = new ArrayList<>();

    public Long getIdImagem() {
        return idImagem;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }


    public void setIdImagem(Long idImagem) {
        this.idImagem = idImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}
