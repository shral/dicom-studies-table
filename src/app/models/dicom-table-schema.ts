export type TableSchemaElementType = "index"|"actions"|"value"

export interface DicomTableSchema{
    patient:TableSchemaElement[];
    studie:TableSchemaElement[];
    series:TableSchemaElement[];
    instance:TableSchemaElement[];
}

export interface TableSchemaElement {
    type:TableSchemaElementType;
    header:string|"#";
    headerDescription?:string;
    pathToValue:string;/*Path or key of the value how you can find it on the data model*/
    widthWeight:number;/*width weight of this table element in compare to the others*/
    cssClass:string;
    hook:Function; /*Use this to modify the data*/
}

export interface TableSchemaConfig {
    cssTableClass?:string;
    cssTdClass?:string;
    cssThClass?:string;
    cssTrClass?:string;
}