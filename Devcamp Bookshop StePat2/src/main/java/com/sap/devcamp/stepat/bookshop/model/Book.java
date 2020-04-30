package com.sap.devcamp.stepat.bookshop.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



import lombok.Data;

@Data
@Entity(name = "BOOK")
public class Book {

	
	@Id
	@Column(name = "UUID", length = 16, unique = true, nullable = false)
	private UUID uuid = UUID.randomUUID();
	
	
	@Column(name = "ISBN", unique = true)
	private int isbn;
	
	@Column(name = "TITLE")
	private String title;
	
	@Column(name = "AUTHOR")
	private String author;
	
	@Column(name = "PUBYEAR")
	private String pubyear;
	
	@Column(name = "EDITOR")
	private String editor;
	
	@Column(name = "STOCK")
	private int stock;
	
	@Column(name = "PRICE")
	private double price;
	
	public Book() {
		
	}

	public Book(int isbn, String title, String author, String pubyear, String editor, int stock,
			double price) {
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.pubyear = pubyear;
		this.editor = editor;
		this.stock = stock;
		this.price = price;
	}
	
	

}
