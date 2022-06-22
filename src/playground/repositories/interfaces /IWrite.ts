import {InsertOneResult} from "mongodb";

export interface IWrite<T> {
    create(item: T): Promise<InsertOneResult<Document>>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
