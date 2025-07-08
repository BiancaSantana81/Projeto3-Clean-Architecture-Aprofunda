import mongoose from 'mongoose';
import { Book } from '../../core/entities/Book';
import { BookRepository } from '../../core/repositories/BookRepository';
import { bookModel } from './mongooseUserModel';

export class MongoBookRepository implements BookRepository {
    private toEntity(doc: any):Book ({
        return new Book(doc.id, doc.title, doc.author, doc.publishedYear, doc.isBorrowed);

    });
}