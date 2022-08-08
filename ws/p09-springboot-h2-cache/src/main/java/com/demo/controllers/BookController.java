package com.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entities.Book;
import com.demo.services.BookService;

@RestController
//@CrossOrigin(origins = {"http://localhost:4200", "https://hoppscotch.io/"})
@CrossOrigin
public class BookController {

	@Autowired
	private BookService service;
	
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return service.fetchAllBooks();
	}
	
	@GetMapping("/books/{id}")
	public Book getBook(@PathVariable int id) {
		return service.getBookById(id);
	}
	
	@PostMapping("/books")
	public Book saveBook(@RequestBody Book book) {
		return service.createBook(book);
	}

	@PutMapping("/books/{id}")
	public Book updateBook(@PathVariable int id, @RequestBody Book book) {
		return service.updateBook(id, book);
	}

	@DeleteMapping("/books/{id}")
	public Book deleteBook(@PathVariable int id) {
		return service.deleteBook(id);
	}

}
