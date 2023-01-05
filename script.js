var img=[];

        img[0] = "https://blog.geekster.in/wp-content/uploads/2021/09/Most-popular-full-stack-featured-image.png";
        img[1] = "https://blog.geekster.in/wp-content/uploads/2022/06/React-projects-featured-image-1024x512.png";
        img[2] = "https://blog.geekster.in/wp-content/uploads/2021/11/top-6-awesome-t-Jobs-in-Demand-2022-featured-Image.png";
        let i = 0;
        let image=document.getElementById("image-slide");
        console.log(img);
        
        function nextImg(){
           if(i<img.length-1){
            i++;
           }
            
           else{
            i=0;
           }
            image.src=img[i];
            console.log(image.src);
           
        }
        function prevImg(){
            i--;
            if (i < 0){
               i=2; 
            }
            
            image.src=img[i];
        }  
