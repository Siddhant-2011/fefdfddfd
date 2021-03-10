var canvas=new fabric.Canvas("me");
var player_x=10;
var player_y=10;
var body_width=30;
var body_height=30;
var player_object="" 
var body_object=""
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

top:player_y,left:player_x        
        });
     canvas.add(player_object) ;  
    });
}
function body_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        body_object=Img;
        body_object.scaleToWidth(body_width);
        body_object.scaleToHeight(body_height);
        body_object.set({

top:player_y,left:player_x        
        });
     canvas.add(block_object) ;  
    });
}
window.addEventListener("keydown",key);
function key(e){
    var hg=e.keyCode;
    if (e.shiftKey==true&& hg=='80'){
        body_width=block_width+10;
        body_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if (e.shiftKey==true&& hg=='77'){
        body_width=block_width-10;
        body_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        
    
    }
    if (hg=='84'){
        block_update('ironman_body.png');
    }
    if (hg=='67'){
        block_update('captain_america_left_hand.png');
    }
    if (hg=='68'){
        block_update('hulk_face.png');
    }
    if (hg=='71'){
        block_update('hulk_left_hand.png');
    }
    if (hg=='76'){
        block_update('hulk_legs.png');
    }
    if (hg=='82'){
        block_update('hulk_right_hand.png');
    }
    if (hg=='85'){
        block_update('hulkd_body.png');
    }
    if (hg=='87'){
        block_update('ironman_face.png');
    }
    if (hg=='89'){
        block_update('ironman_left_hand.png');
    
    }
    if (hg=='65'){
        block_update('ironman_legs.png');
    
    }
    if (hg=='66'){
        block_update('ironman_right_hand.png');
    
    }
    if (hg=='90'){
        block_update('spiderman_body.png');
    
    }
    if (hg=='82'){
        block_update('spiderman_face.png');
    
    }
    if (hg=='79'){
        block_update('spiderman_left_hand.png');
    
    }
    if (hg=='75'){
        block_update('spiderman_face.png');
    
    }
    if (hg=='78'){
        block_update('spiderman_legs.png');
    
    }
    if (hg=='72'){
        block_update('spiderman_face.png');
    
    }
    if (hg=='69'){
        block_update('spiderman_right_hand.png');
    
    }
    if (hg=='83'){
        block_update('thor_face.png');
    
    }
    
    
    
    if (hg=='38'){
        up();
    }
    if (hg=='40'){
        down();
    }
    if (hg=='37'){
        left();
    }
    if (hg=='39'){
        right();
    }
}
function up(){
    if (player_y>0){
        player_y=player_y-10;
        canvas.remove(player_object);
        player_update();
    }
    }
    function down(){
        if (player_y<500){
            player_y=player_y+10;
            canvas.remove(player_object);
            player_update();
        }
        }
        function left(){
            if (player_x>0){
                player_x=player_x-10;
                canvas.remove(player_object);
                player_update();
            }
            }
            function right(){
                if (player_x<900){
                    player_x=player_x+10;
                    canvas.remove(player_object);
                    player_update();
                }
                }