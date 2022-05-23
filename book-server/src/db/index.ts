import {MongoDBFactory} from "./mongo/mongo.db.service";
import {IDBServiceFactory} from "./db.types";

export const DBFactory: IDBServiceFactory = new MongoDBFactory();
