package com.sap.devcamp.stepat.bookshop.service;

import java.util.List;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sap.devcamp.stepat.bookshop.model.Book;
import com.sap.devcamp.stepat.bookshop.repositories.BookRepository;

@Service
public class BookService {

	private BookRepository bookRepository;
	
	
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
	public void saveBook(Book entity) {
		bookRepository.save(entity);
	}
	
	public List<Book> getAll() {
		return bookRepository.getAll();
	}
	
	public List<Book> getAllBooksFromAuthor(String author) {
		return bookRepository.getAllBooksFromAuthor(author);
	}
	
	public void deleteBook(UUID uuid) {
		bookRepository.deleteBookByUuid(uuid);
	}
	
	public Book findBookByTitle(String title) {
		return bookRepository.findBookByTitle(title);
	}

	public Object findBookByIsbn(int isbn) {
		return bookRepository.findBookByIsbn(isbn);
	}
	
	
	
	
	
	
	
}
