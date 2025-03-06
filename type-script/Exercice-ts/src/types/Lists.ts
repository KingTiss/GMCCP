export interface ListManagerI <T> {
items : T[];
add(item : T) : void;
remove(index : number) : void;
}