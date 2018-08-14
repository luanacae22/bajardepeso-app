export class Objective{
    constructor(
         public _id:Number
        ,public description:string
        ,public limitDate:Date
        ,public finishDate?:Date
        ,public finished?:boolean
        ) {}
}