package com.ecommerce.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.ManyToOne;

@Entity
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEndereco;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    private String pais;
    private String estado;
    private String cidade;
    private String rua;
    private String numero;
    private String complemento;
    private String bairro;
    private String cep;
    
    public String getBairro() {
        return bairro;
    }

    public String getCep() {
        return cep;
    }

    public String getCidade() {
        return cidade;
    }

    public String getComplemento() {
        return complemento;
    }

    public String getEstado() {
        return estado;
    }

    public Long getIdEndereco() {
        return idEndereco;
    }

    public String getNumero() {
        return numero;
    }

    public String getPais() {
        return pais;
    }

    public String getRua() {
        return rua;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }
    public void setCep(String cep) {
        this.cep = cep;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public void setIdEndereco(Long idEndereco) {
        this.idEndereco = idEndereco;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }
    public void setPais(String pais) {
        this.pais = pais;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
