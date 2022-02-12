class Chaoo{
constructor(x,y,xx,xxx,yyy){
var opcoes2={
    isStatic:true
}
    this.chaao=Bodies.rectangle(xxx,yyy,800,10,opcoes2)
    World.add(mundo,this.chaao)
    this.chaum=Bodies.rectangle(x,y,20,60,opcoes2)
    World.add(mundo,this.chaum)
    this.chaum2=Bodies.rectangle(xx,y,20,60,opcoes2)
    World.add(mundo,this.chaum2)
}

desenha(){
    rect(this.chaum.position.x,this.chaum.position.y,20,60)
    rect(this.chaum2.position.x,this.chaum2.position.y,20,60)
    rect(this.chaao.position.x,this.chaao.position.y,800,10)
}

atira(){
    Body.applyForce(bola,50,1)
}
}
