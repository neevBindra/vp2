class Food{

    constructor(){
        this.image = loadImage("Images/Milk.js");
        this.foodStock = 0
        
    }
    update(foodStock){
    this.foodStock = foodStock
    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock -1;
        }
    }
    getFoodStock(){
  return this.foodStock;
    }
    display(){
       var x = 80 , y  = 100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0; i<this.foodStock;i++){
                if(i%10){
                    x= 80;
                    y = y+80;
                }
                image(this.image,x,y,50,50);
                x = x+30;

            }
        }
    }
}