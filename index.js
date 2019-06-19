function createCircle(radius){
    return {
       radius,
       draw: function(){
           console.log('draw');
       }
   };   
   }
   const circle = createCircle(1);
   circle.draw();
   
   // Constructor Function
   
   function Circle(radius){
       console.log('this', this);
       this.radius = radius;
       this.draw = function(){
           console.log("draw");
       }
   }
   
   const another = new Circle(1);

const Circle1 = new Function('radius',`
this.radius = radius;
this.draw = function(){
    console.log("draw");
}
`);

const circle = new Circle(1);
//got to lynda.com 10. 5- Constructor Property 
// 6-functions are objects