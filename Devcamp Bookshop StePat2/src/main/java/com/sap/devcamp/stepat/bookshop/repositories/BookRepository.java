package com.sap.devcamp.stepat.bookshop.repositories;

import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.sap.devcamp.stepat.bookshop.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

	

	@Transactional
	public void deleteBookByUuid(@Param("UUID")UUID uuid);
	
	public Book findBookByTitle(@Param("TITLE")String title);
	@Query ("SELECT b FROM BOOK b ORDER BY b.title ASC")
	List<Book> getAll();
	
	@Query ("SELECT b FROM BOOK b WHERE b.author LIKE:AUTHOR")
	List<Book> getAllBooksFromAuthor(@Param("AUTHOR")String author);
	
	@Query("SELECT b FROM BOOK b WHERE b.isbn LIKE:ISBN")
	public List<Book> findBookByIsbn(@Param("ISBN") int isbn);
	
	
	
}
