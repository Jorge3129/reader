import {Word} from "../../models/word";
import {ICollections} from "./types";
import {MongoRepo} from "./mongorepo";
import {IRepo} from "../db.types";

export class MongoWordRepo extends MongoRepo<Word> {

    constructor(private collections: ICollections) {
        super(collections.words);
    }

}