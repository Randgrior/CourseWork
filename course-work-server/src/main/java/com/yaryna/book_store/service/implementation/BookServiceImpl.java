package com.yaryna.book_store.service.implementation;

import com.yaryna.book_store.converter.BookConverter;
import com.yaryna.book_store.dao.BookDAO;
import com.yaryna.book_store.dao.UserDAO;
import com.yaryna.book_store.dto.BookDTO;
import com.yaryna.book_store.entity.Book;
import com.yaryna.book_store.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService {

    private final BookDAO bookDAO;

    private final UserDAO userDAO;

    private BookConverter bookConverter = new BookConverter();

    @Autowired
    public BookServiceImpl(BookDAO bookDAO, UserDAO userDAO) {
        this.bookDAO = bookDAO;
        this.userDAO = userDAO;
    }

    @Override
    public List<BookDTO> getAllBooks() {
        Optional<List<Book>> optionalBooks = bookDAO.findAllAndStockGreaterThan(0);
        return convertBooks(optionalBooks);
    }

    @Override
    public List<BookDTO> getBooksByTitle(String title) {
        Optional<List<Book>> optionalBooks = bookDAO.findBooksByTitleContainingAndStockIsGreaterThan(title, 0);
        return convertBooks(optionalBooks);
    }

    @Override
    public List<BookDTO> getBooksByAuthor(String author) {
        Optional<List<Book>> optionalBooks = bookDAO.findBooksByAuthorContainingAndStockIsGreaterThan(author, 0);
        return convertBooks(optionalBooks);
    }

    @Override
    public List<BookDTO> getBooksByISBN(String ISBN) {
        Optional<List<Book>> optionalBooks = bookDAO.findBooksByIsbnContainingAndStockIsGreaterThan(ISBN, 0);
        return convertBooks(optionalBooks);
    }

    @Override
    public List<BookDTO> getBooksByUser(String username) {
        Optional<List<Book>> optionalBooks = bookDAO.findBooksInCart(username);
        return convertBooks(optionalBooks);
    }

    @Override
    public Double getMinPrice() {
        return bookDAO.getMinPrice();
    }

    @Override
    public BookDTO updateBook(BookDTO bookDTO) {
        Optional<Book> optionalBook = bookDAO.findById(bookDTO.getId());

        if (optionalBook.isPresent()) {
            Book updateBook = bookConverter.to(bookDTO);
            bookDAO.save(updateBook);
            return bookConverter.from(updateBook);
        }
        return null;
    }

    private List<BookDTO> convertBooks(Optional<List<Book>> optionalBooks) {
        if (optionalBooks.isPresent()) {
            List<Book> books = optionalBooks.get();
            return books.stream()
                    .map((book) -> bookConverter.from(book))
                    .collect(Collectors.toList());

        } else {
            return null;
        }
    }
}
