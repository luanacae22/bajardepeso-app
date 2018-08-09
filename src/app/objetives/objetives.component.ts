import { Component, OnInit } from '@angular/core';
import { Objective } from './objetctive.model';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'objetives',
  templateUrl: './objetives.component.html',
  styleUrls: ['./objetives.component.css']
})
export class ObjetivesComponent implements OnInit {

  public ObjetivosCumplidos:Objective[] = new Array
  public ObjetivosPorCumplir:Objective[] = new Array
  constructor() { }

  ngOnInit() {
    // this.ObjetivosPorCumplir.push(new Objective(Number.parseInt(Math.random()*1000)
    //                                             ,"Prueba"
    //                                             ,new Date))
  }


  handleObjetiveDescriptionChange(description:string){
    console.log(description)
  }
  handleObjetiveDateChange(description:string){
    console.log(description)
  }

  handleAddObjective(description:string,limitDate:Date){
    console.log(`${description} ${limitDate}`)
  }

  handleObjectiveFinished(objetivo:Objective){
    const objetivoTerminado = new Objective(objetivo._id
                                            ,objetivo.description
                                            ,objetivo.limitDate
                                            ,new Date()
                                            ,true)  
    // console.log(objetivoTerminado)
    this.ObjetivosCumplidos.push(objetivoTerminado)   
    this.ObjetivosPorCumplir=this.ObjetivosPorCumplir.filter(item => {
      // console.log(item)
      return item._id != objetivoTerminado._id
    })
    // console.log(this.ObjetivosCumplidos)
    // console.log(this.ObjetivosCumplidos)
  }
  onSubmit(form:NgForm){
    // console.log(form.value)
    const objetivo= new Objective(Number.parseInt(Math.random()*1000)
                                  ,form.value.description
                                  ,form.value.limitDate
                                  ,null
                                  ,false)
    this.ObjetivosPorCumplir.push(objetivo)
    // console.log(this.ObjetivosPorCumplir)
  }
  
}
