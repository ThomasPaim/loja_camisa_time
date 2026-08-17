package com.ecommerce.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToMany(mappedBy = "produto", fetch = FetchType.LAZY)
    private List<ItemCarrinho> itemsCarrinho = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "image_id")
    private Imagem imagem = new Imagem();

    private String nomeProduto;

    @Column(precision = 10, scale =  2)
    private BigDecimal preco;

    public Long getId() {
        return id;
    }

    public List<ItemCarrinho> getItemsCarrinho() {
        return itemsCarrinho;
    }

    public Imagem getImagem() {
        return imagem;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setItemsCarrinho(List<ItemCarrinho> itemsCarrinho) {
        this.itemsCarrinho = itemsCarrinho;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public void setImagem(Imagem imagem) {
        this.imagem = imagem;
    }
}
