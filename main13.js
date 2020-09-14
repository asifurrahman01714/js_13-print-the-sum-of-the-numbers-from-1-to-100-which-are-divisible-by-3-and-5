var x=1;
var sum=0;
while(x<=100 ){
    if(  x%3==0 && x%5==0)
    {
        sum=sum+x;
        document.write(" " +x);
    }
   
   
    x++;
}
document.write(" <br/>"+"total sum : "+sum);
document.write("<br/>"+"End");