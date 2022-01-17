import {IWrite} from "../interfaces /IWrite";
import {IRead} from "../interfaces /IRead";
import { MongoClient, Collection, Db, InsertOneResult } from "mongodb";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    public readonly _collection: Collection;

    protected constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
    }

    async create(item: T): Promise<InsertOneResult<Document>> {
        const result = await this._collection.insertOne(item);
        return result;
    }

    delete(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    find(item: T): Promise<T[]> {
        return Promise.resolve([]);
    }

    findOne(id: string): Promise<T> {
        throw new Error("Method isn't implemented");
    }

    update(id: string, item: T): Promise<boolean> {
        return Promise.resolve(false);
    }
}
